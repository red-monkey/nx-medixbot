import React, { useCallback } from "react"
import { TouchableOpacity, Text } from "react-native"
import styles from "../../../styles/HomepageStyles"
import { LocationModalStyles } from "../../../styles/RegisterStyle"
import { removeFromList } from "../../../utils/functions"

type PickerOptionProps = {
    selectedButtonref: React.RefObject<TouchableOpacity>,
    unselectedButtonRef: React.RefObject<TouchableOpacity>,
    IsSelected: boolean,
    element: string,
    selectedLanguagesTemp: string[]
}

export const PickerOption = ({selectedButtonref,unselectedButtonRef,IsSelected,selectedLanguagesTemp,element}:PickerOptionProps) => {

    const selectElement = useCallback((reference: React.RefObject<TouchableOpacity>) => {
        reference.current?.setNativeProps({
          style:{
            display: 'flex'  
            }
        })},[])
    
      const UnselectElement = useCallback((reference: React.RefObject<TouchableOpacity>) => {
          reference.current?.setNativeProps({
            style:{
                display: 'none'    
            }
          })},[])
        
    return (
        <>
                          <TouchableOpacity ref={selectedButtonref} style={IsSelected === true ? {display: 'flex'} : { display: 'none'} } onPress={()=>{
                            removeFromList(element,selectedLanguagesTemp)
                            UnselectElement(selectedButtonref)
                            selectElement(unselectedButtonRef)
                            }}>
                            <Text style={LocationModalStyles.highlightedText} >{element}</Text>
                          </TouchableOpacity>
                          <TouchableOpacity ref={unselectedButtonRef} style={IsSelected === false ? {display: 'flex'} : { display: 'none'} } onPress={()=>{
                            selectedLanguagesTemp.push(element)
                            selectElement(selectedButtonref)
                            UnselectElement(unselectedButtonRef)
                            }}>
                            <Text >{element}</Text>
                          </TouchableOpacity>
        </>
    )
}