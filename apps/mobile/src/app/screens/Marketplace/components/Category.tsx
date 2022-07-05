import {
    Button,
    StyleSheet,
    Text,
    TouchableHighlight,
    TouchableOpacity,
    View,
  } from "react-native";
  import React, { useState, Dispatch, SetStateAction } from "react";
import { categoryStyle } from "../../../styles/MarketPlaceStyles";
  
  type Props = {
    setCategory?: Dispatch<SetStateAction<boolean>>;
    active?: boolean;
    title?: string;
  };
  
  const Category = ({ setCategory, active, title }: Props) => {
    const [activeButton, setActiveButton] = useState(1);
  
    return (
      <View style={categoryStyle.wrapper}>
        <TouchableOpacity style={(activeButton==1)? styles.buttonPress : styles.buttonNormal} onPress={()=>setActiveButton(1)}>
          <Text style={(activeButton==1)? styles.buttonTextPressed : styles.buttonTexNormal}>
            All
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={(activeButton==2)? styles.buttonPress : styles.buttonNormal} onPress={()=>setActiveButton(2)}>
          <Text style={(activeButton==2)? styles.buttonTextPressed : styles.buttonTexNormal}>
          Medical Devices
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={(activeButton==3)? styles.buttonPress : styles.buttonNormal} onPress={()=>setActiveButton(3)}>
          <Text style={(activeButton==3)? styles.buttonTextPressed : styles.buttonTexNormal}>
          Test Kits
          </Text>
        </TouchableOpacity>
      </View>
    );
  };
  
  export default Category;
  
  const styles = StyleSheet.create({
    buttonPress: {
      backgroundColor: "#3095E2",
      borderRadius: 25,
      padding: 12,
    },
    buttonTextPressed: {
      color: "white",
      fontSize: 14,
      fontFamily: 'Montserrat-Bold',
      lineHeight: 20,
    },
    buttonTexNormal: {
      color: "#41416E",
      fontSize: 14,
      fontFamily: 'Montserrat-Bold',
      lineHeight: 20,
    },
    buttonNormal: {
      backgroundColor: "white",
      borderRadius: 32,
      padding: 12,
    },
  });
  