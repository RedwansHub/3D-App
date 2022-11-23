import { StyleSheet, Dimensions } from 'react-native'
import colors from '../../themes/colors'

const styles = StyleSheet.create({
    container:{
        backgroundColor: colors.background
      },
      header: {
        width:"100%",
        height:Dimensions.get("screen").height*0.24,
        backgroundColor:colors.primary,
        alignItems:"center"
      },
      screenTitle: {
        marginTop:60,
        color:'white',
        fontSize:20,
        fontWeight:"500"
      },
      profileContainer: {
        width:"85%",
        marginBottom:30,
        height:'72%',
        overflow:"hidden",
        elevation:20,
        backgroundColor:colors.light_primary,
        borderRadius:12,
        alignSelf:"center",
        marginTop:-70
    },
    profileEdit: {
        alignSelf:"flex-end",
        padding:20,
        paddingBottom:4    
    },
    ImageWrapper: {
        borderColor:colors.primary,
        shadowColor:colors.primary,
        alignSelf:"center",
        elevation:10,
        marginTop: -30
    },
    image: {
        width:140,
        height:140,
        borderRadius:80,
        alignSelf:"center"
    },
    userContainer: {
        alignSelf:"center",
        marginTop:15,
        justifyContent:"center"
    },
    userName: {
        textAlign:"center",
        fontWeight:"500",
        color:colors.text,
        fontSize:24
    },
    userID: {
        textAlign:"center",
        marginTop:5,
        fontWeight:"300",
        color:colors.text_light
    }
})
export default styles