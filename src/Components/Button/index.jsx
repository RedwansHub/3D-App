import { Text, TouchableOpacity } from 'react-native'
import React from 'react'
import {PropTypes} from "prop-types"
import styles from './styles'
const Button = (props) => {
  
  return ( 
     <TouchableOpacity onPress={()=>props.onPress()} style={[styles.container,{height:props.height,marginTop:props.marginTop}]}>
        <Text style={styles.label}>
            {props.title}
        </Text>
     </TouchableOpacity>
  )
}
Button.propTypes = {
  title : PropTypes.string,
  backgroundColor: PropTypes.string,
  onPress : PropTypes.func,
  marginTop : PropTypes.number,
  height : PropTypes.number
}
Button.defaultProps = {
  title : "label",
  backgroundColor: styles.primary,
  onPress : () => console.log("Pressed"),
  marginTop : 20,
  height : 55
}
export default Button

