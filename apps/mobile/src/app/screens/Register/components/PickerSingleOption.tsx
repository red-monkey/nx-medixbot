import React, { useCallback, useRef } from "react"
import { TouchableOpacity, Text } from "react-native"
import { LocationModalStyles } from "../../../styles/RegisterStyle"

type PickerOptionProps = {
    selectedButtonref: React.RefObject<TouchableOpacity>,
    highlightRef: React.RefObject<TouchableOpacity>,
    currentPartner: string,
    element: string,
    refs: React.MutableRefObject<any[]>
    highlightedRefs: React.MutableRefObject<any[]>
    setPartner : React.Dispatch<React.SetStateAction<string>>}

export const PickerSingleOption = ({setPartner,selectedButtonref,element,refs,currentPartner,highlightRef,highlightedRefs}:PickerOptionProps) => {
    const unselectAllElements = useCallback(() => {
        refs.current.forEach((item) => {
            item.current?.setNativeProps({
                style: {
                    display: 'flex'
                }
            })
        })

        highlightedRefs.current.forEach((item) => {
            item.current?.setNativeProps({
                style: {
                    display: 'none'
                }
            })
        })
    },[]);

    const selectElement = useCallback(() => {
        highlightRef.current?.setNativeProps({
            style: {
                display: 'flex'
            }
        });
        selectedButtonref.current.setNativeProps({
            style: {
                display: 'none'
            }
        })
    },[]);
    return (
      <>
      <TouchableOpacity onPress={() => {
          unselectAllElements();
          selectElement();
          setPartner(element)
      }} ref={selectedButtonref}  style={ currentPartner !== element ? {display: 'flex'} :  {display: 'none'}}>
        <Text  style={{color: '#fff'}}>{element}</Text>
      </TouchableOpacity>
      <TouchableOpacity ref={highlightRef} style={ currentPartner === element ? {display: 'flex'} : {display: 'none'}}>
        <Text style={LocationModalStyles.highlightedText}>{element}</Text>
      </TouchableOpacity>
      </>
    )
}