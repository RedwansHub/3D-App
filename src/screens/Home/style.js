import {StyleSheet} from 'react-native'
import colors from '../../themes/colors';

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    heroView: {
        width:"100%",
        height:"20%",
        backgroundColor: colors.backgroundColor,
        elevation:20,
        paddingTop:70,
        paddingLeft: 20,
    },
    heroBigText: {
        fontSize: 20, 
        fontWeight: '700', 
        color: 'white'
    },
    heroSmallText: {
        fontSize: 17, 
        fontWeight: '300', 
        color: 'white', 
        paddingTop: 5
    },
    bodyView: {
        height: '87%', 
        backgroundColor: colors.background, 
        marginTop: -25, 
        borderTopEndRadius: 20, 
        borderTopLeftRadius: 20
    },
    bodyText: { 
        marginTop: 50, 
        marginLeft: 20, 
        fontSize: 20, 
        fontWeight: '600'
    },
    productView: {
        borderWidth: 1, 
        paddingTop: 15, 
        height: 240, 
        width: 200, 
        borderRadius: 5, 
        shadowOpacity: 0.3, 
        marginHorizontal: 5,
        backgroundColor: colors.light_primary
    },
    productImage: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    productName: {
        textAlign: 'center', 
        fontSize: 16, 
        fontWeight: '500', 
        paddingTop: 10
    },
    productID: {
        fontSize: 15,
        paddingTop: 5,
        fontWeight: '300',
        alignSelf: 'center'
    },


})
export default styles