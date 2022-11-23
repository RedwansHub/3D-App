import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../../screens/Home';
import Profile from '../../screens/Profile';
import Support from '../../screens/Support';
import { Ionicons,MaterialIcons } from '@expo/vector-icons';
import colors from '../../themes/colors';
import { Text, View } from 'react-native';

const Stack = createBottomTabNavigator()

const AppNavigation = () => {
    return (
        <Stack.Navigator 
            initialRouteName='Home'
            screenOptions={({ route }) => ({
            headerShown:false,
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
              let support;
              if (route.name === 'Home') {
                iconName = focused
                  ? 'home'
                  : 'home-outline';
              } 
              else if (route.name === 'Support') { //support-agent
                support = focused 
                ? 'support-agent' 
                : 'support-agent';
              }
              else if (route.name == 'Profile'){
                iconName = focused 
                ? 'person'
                : 'person-outline'
              }
              else{
                return;
              }
              return(
              <View style={{flexDirection:"row",backgroundColor:focused ? colors.light_primary : "#fff",paddingHorizontal:10, marginBottom: -10, width:"auto",justifyContent:"center",alignItems:"center",padding:7,borderRadius:10}}> 
              {(route.name != 'Support') ? 
                <Ionicons name={iconName} size={size} color={color} />
              : <MaterialIcons name={support} size={size} color={color} />
            }
              <Text style={{display:focused?"flex":"none",alignSelf:"center",marginLeft:10,color:colors.primary}}>{route.name}</Text>
              </View>
              )
            },
            tabBarActiveTintColor: colors.primary,
            tabBarInactiveTintColor: 'gray',
            tabBarLabelStyle:{
                display:"none"
            },
            tabBarStyle:{
                width:"90%",
                alignSelf:"center",
                marginBottom:0,
                borderRadius:8,
                elevation:20,
                height:60,
                display:"flex",
                marginBottom:10
            }
          })}
        > 
          <Stack.Screen name='Profile' options={{ title: 'Profile'}} component={ Profile } />
         <Stack.Screen name='Home' options={{ isHome: true }} component={ Home } />
          <Stack.Screen name='Support' options={{ title: 'Support'}} component={ Support } />
  
        </Stack.Navigator>
      
    )
  }

export default AppNavigation