import { StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'

const InputBox = () => {
    const [text, onChangeText] = useState('');
    
    return (
    <View style={styles.container}>
      <TextInput value={{text}} style={styles.textInput} onChangeText={onChangeText}/>
        <Text>{text}</Text>
    </View>
  )
}

export default InputBox

const styles = StyleSheet.create({
    container: {
        borderWidth: 2,
        marginHorizontal: 30,
        height: 50
    },
    textInput: {
        
    }
})