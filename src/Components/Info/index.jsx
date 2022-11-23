import { TextInput, View, Text } from 'react-native'
import React from 'react'
import {PropTypes} from "prop-types"
import { FontAwesome5 } from '@expo/vector-icons'
import styles from "./style"
const Info = (props) => {
   
  return (
    <View  style={styles.container}>
      <View style={styles.iconContainer}>
      <FontAwesome5 name={props.icon} color={ props.iconColor } size={20} />
      </View>
      <View style={styles.labelTextContainer}>
      <Text style={[styles.label,{fontSize:10 }]}>{props.title.toUpperCase()}</Text>
      <TextInput
        style={[styles.textInput,{display:"flex"}]} 
        secureTextEntry={props.isPassword}
        editable={false}
        value={props.value}
      />
      </View> 
    </View> 
  )
}
Info.propTypes = {
  title : PropTypes.string,
  icon : PropTypes.string,
  iconColor : PropTypes.string,
  isPassword : PropTypes.bool,
  value : PropTypes.string
}
Info.defaultProps = {
  title : "label",
  icon : "user",
  iconColor: styles.primary,
  isPassword : false,
  value : "value here"
}
export default Info

