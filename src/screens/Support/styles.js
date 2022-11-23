import { StyleSheet, Dimensions} from 'react-native'
import colors from '../../themes/colors'

const styles = StyleSheet.create({
    container: {
        height:Dimensions.get('screen').height, 
        backgroundColor: colors.backgroundColor
    },
    header: {
        marginTop:150, 
        height:190, 
        alignItems: 'center'
    },
    headerText: {
        paddingTop: 20, 
        fontSize: 25, 
        fontWeight: '600',
        color: colors.light_primary
    },
    body: {
        marginVertical: 50,
        paddingTop: 10
    },
    questionContainer: {
        marginHorizontal: 20, 
        flexDirection: 'row', 
        marginBottom:10, 
        justifyContent: 'space-between', 
        backgroundColor: colors.light_primary, 
        borderRadius: 10, 
        height: 60, 
        alignItems:'center', 
        paddingLeft: 15, 
        paddingRight: 15,  
        shadowOpacity: 0.5,
    },
    question: {
        fontSize: 17, 
        fontWeight: '500'
    },
    contact: {
        alignItems: 'center'
    },
    cirlce: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 60,
        width: 60,
        borderRadius: 50,
        backgroundColor: colors.light_primary
    }

})

export default styles