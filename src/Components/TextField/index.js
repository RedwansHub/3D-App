import { TextInput, View, Animated, StyleSheet } from 'react-native'
import React, {  useRef, useState } from 'react'
import {PropTypes} from "prop-types"
import colors from "../../themes/colors";
import { FontAwesome5 } from '@expo/vector-icons'

const TextField = (props) => {

  const labelSize = useRef(new Animated.Value(14)).current;
  const key = useRef();
  const [canType,setType] = useState(false) 
  
  const startAnimation = () => {
    Animated.timing(labelSize,{
      toValue:10,
      duration:100,
      useNativeDriver:false 
    }).start(()=>{ 
      setType(true)
      key.current.focus()
    });
  }
   
  return (
    <View  style={[styles.container,{marginBottom:props.marginBottom}]}>
      <View style={styles.iconContainer}>
      <FontAwesome5 name={props.icon} color={canType ? props.iconColor : styles.secondry} size={20} />
      </View>
      <View onTouchStart={() => startAnimation()} style={styles.labelTextContainer}>
      <Animated.Text style={[styles.label,{fontSize:labelSize }]}>{props.title.toUpperCase()}</Animated.Text>
      <TextInput
        ref={key} 
        style={[styles.textInput,{display:canType ? "flex":"none"}]} 
        secureTextEntry={props.isPassword}
      />
      </View> 
    </View>
  )
}

TextField.propTypes = {
  title : PropTypes.string,
  icon : PropTypes.string,
  iconColor : PropTypes.string,
  isPassword : PropTypes.bool,
  marginBottom : PropTypes.number
}
TextField.defaultProps = {
  title : "label",
  icon : "user",
  iconColor: colors.light_primary,
  isPassword : false,
  marginBottom : 20
}
export default TextField

const styles = StyleSheet.create({
  container: {
    display: "flex",
    marginBottom: 20,
    flexDirection: "row",
    width: "85%",
    backgroundColor: colors.background,
    alignSelf: "center",
    minHeight: 55,
    borderRadius: 5,
    elevation: 15,
    shadowOpacity: 0.2,
    shadowRadius: 5
  },
  iconContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: "12%",
  },
  labelTextContainer: {
    width: "88%",
    justifyContent: "center",
  },
  label: {
    marginLeft: 12,
    color: colors.text_light,
    fontWeight: "600",
  },
  textInput: {
    marginLeft: 12,
    color: colors.primary,
    fontWeight: "bold",
  },
  primary:colors.primary,
  secondry:colors.text_light
})