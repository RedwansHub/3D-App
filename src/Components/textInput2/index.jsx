import { TextInput, View, Animated } from 'react-native'
import React, {  useRef, useState } from 'react'
import {PropTypes} from "prop-types"
import { FontAwesome5 } from '@expo/vector-icons'
import styles from './style'

const InputText2 = (props) => {
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
InputText2.propTypes = {
  title : PropTypes.string,
  icon : PropTypes.string,
  iconColor : PropTypes.string,
  isPassword : PropTypes.bool,
  marginBottom : PropTypes.number
}
InputText2.defaultProps = {
  title : "label",
  icon : "user",
  iconColor: styles.primary,
  isPassword : false,
  marginBottom : 20
}
export default InputText2

