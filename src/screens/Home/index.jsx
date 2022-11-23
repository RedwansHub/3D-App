import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Button from '../../Components/Button'
import Aqua from '../../../assets/product/aquaguard.png'
import Shampoo from '../../../assets/product/Shampoo.jpg'
import style from './style'
const Home = () => {

  const Hero = () => {
    return (
      <View style={style.heroView}>
        <Text style={style.heroBigText}>Hello, Customer</Text>
        <Text style={style.heroSmallText}>Location : Current Location</Text>
      </View>
    )
  }

  const Body = () => {
    return (
      <View style={style.bodyView}>
        <Text style={style.bodyText}>Purchased Products</Text>
        <ScrollView horizontal style={{ marginTop: 20, padding: 20}}>
          {products('Aquaguard')}
          {products('Aquaguard 2')}
          {products('Aquaguard 3')}
          {products('Aquaguard 4')}
        </ScrollView>
      </View>
    )
  }

  const products = (item) => {
    return (
      <View style={{marginRight: 10}}>
        <View style={style.productView}>
          <View style={style.productImage}>
            <Image source={Aqua} style={{width: 150, height: 150}}/>
          </View>
          <Text style={style.productName}>{item}</Text>
          <Text style={style.productID}>Product ID</Text>
        </View>
        
      </View>
    )
  }
  return (
    <View>
      {Hero()}
      {Body()}
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})