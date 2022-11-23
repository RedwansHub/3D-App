import { StyleSheet,View, Text, ScrollView, Dimensions, Image, TouchableOpacity} from 'react-native'
import React from 'react'
import colors from '../../themes/colors'
import { FontAwesome } from '@expo/vector-icons'
import Info from '../../Components/Info'
import Button from '../../Components/Button'
import styles from './styles'

const Profile = ({navigation}) => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.screenTitle}>Profile</Text>
      </View>
      <View style={styles.profileContainer}>
        <TouchableOpacity style={styles.profileEdit}>
        <FontAwesome name="edit" size={24} color={colors.primary} />
        </TouchableOpacity>
        <View style={styles.ImageWrapper}>
          <Image source={require("./../../../assets/profile.webp")} style={styles.image}/> 
        </View>
        <View style={styles.userContainer}>
          <Text style={styles.userName}>
            Customer Name
          </Text>
          <Text style={styles.userID}>
            @Customer ID
          </Text>
        </View>
        <View style={{marginTop: 30}}>
          <Info title={"Full Name"} value={"Customer name"} />
          <Info title={"Email Address"} value={"customer@gmail.com"} icon={"envelope"} />
          <Info title={"Phone Number"} value={"+0000000000"} icon={"phone-alt"} />
          <Text style={{paddingHorizontal: 28, marginBottom:15, paddingTop:5, fontSize: 17, fontWeight:'600'}}>Address</Text>
          <Info title={"Area"} value={"Eluru Road"} icon={"road"}/>
          <Info title={"Street Name"} value={"VSN Street"} icon={"map-signs"} />
          <Info title={"Door Number"} value={"12-13"} icon={"door-closed"} />
        </View>
      </View>
      <Button title={"Log Out"} onPress={()=>navigation.navigate("Login")} />
    </ScrollView>
  )
}

export default Profile

