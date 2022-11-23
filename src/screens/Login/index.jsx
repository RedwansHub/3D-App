import { Dimensions, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import InputBox from '../../Components/InputBox'
import Button from '../../Components/Button'
import TextField from '../../Components/TextField'
import Icon from '../../../assets/icon.png'
const Login = ({ navigation }) => {
  return (
    <View style={{backgroundColor: '#133A74', height: Dimensions.get('screen').height}}>
      <View style={{backgroundColor: 'white', height: 350, justifyContent:'center', borderBottomEndRadius:20,  borderBottomLeftRadius: 20, paddingHorizontal: 20}}>
          <Image source={Icon} style={{width: 350, height:250, marginLeft: 20}}/>
      </View>
      <View style={{marginTop: 80}}>
        <TextField title={'Mobile Number'} marginBottom={20}/>
        <TextField title={'OTP'}/>
        <Button title='LOG IN'onPress={()=>navigation.replace("app")} />

      </View>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({})