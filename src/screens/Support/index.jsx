import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import colors from '../../themes/colors'
import { FontAwesome5,Entypo } from '@expo/vector-icons'
import styles from './styles'

const Support = () => {
  const questions = (q) => {
    return (
        <View style={styles.questionContainer}>
          <Text style={styles.question}>{q}</Text>
          <FontAwesome5 name="chevron-right" size={20} color={colors.backgroundColor} />
        </View>
    )
  }
  
  return (
    <View style={styles.container}>
       <View style={styles.header}>
        <FontAwesome5 name="headset" size={120} color={colors.secondary} />
        <Text style={styles.headerText}>How can we help you?</Text>
       </View>
       <View style={styles.body}>
          {questions('Having an Issue with a Product ')}
          {questions('Having an Issue with a App ')}
          {questions('Having an Issue with a Something else')}
       </View>
       {/* <View style={styles.contact}>
        <View style={styles.cirlce}>
          <Entypo name="mail" size={35} color={colors.primary} />
        </View>
       </View> */}
    </View>
  )
}

export default Support
