import {Dimensions, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    HeaderGradientBox:{
        height: 170,
        width: '100%',
        paddingTop:25,
        borderBottomRightRadius: 15,
        borderBottomLeftRadius:15,
    },
    HeaderRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        paddingTop: 5,
        alignItems: 'center'
    },
    GreetingBoxContainer: {
        height: 200,
        marginHorizontal: '5%',
        backgroundColor: '#fff',
        position: 'relative',
        top: -88,
        borderRadius: 15,
        shadowColor: 'rgba(0.5, 0, 0, 0.08)',
        shadowOffset: {width: 0,height: 4},
        shadowRadius: 15,
        elevation: 15,
        flexDirection :'column',
        paddingHorizontal: 25,
        paddingVertical: 25
    },
    bot: {
        position: 'absolute',
        left: 206,
        top: -50
    },
    profile: {
        width: 60,
        height: 60,
        borderRadius: 50,
        borderColor: '#41416E',
        borderWidth:1
    }
});

export default styles;