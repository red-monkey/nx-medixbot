import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    root: {
        flex:1,
        backgroundColor: '#E6F2FC',
        paddingBottom: 40,
    },
    screenContent: {
        height: 728,
        backgroundColor: '#fff',
        borderRadius: 30,
        top: 117,
        position: "absolute",
        left: 0,
        width: '100%',
        // alignItems: 'center'
    },
    productDescription: {
        height: 512,
        width: '100%',
        top: 100,
        borderRadius: 32,
        backgroundColor: '#4C5DF4',
        // marginLeft: 21,

    },
    button: {
        height: 23,
        width: 33,
        borderRadius: 8,
        backgroundColor: '#FEC026',
        alignItems:'center'
    },
    buttonText:{
        fontSize: 20,
        fontWeight: '700',
        color: '#414042',
        alignItems: 'center',
        marginTop: -3,
    },
    buttonLeft: {
        height: 23,
        width: 33,
        borderRadius: 8,
        backgroundColor: '#E6E6E6',
        alignItems:'center'
    },
    addToCart:{
        height: 47,
        width: 220,
        borderRadius:16,
        backgroundColor: '#FEC026',
        alignItems: 'center',
    },
    addToCartText:{
        fontSize:18,
        fontWeight:'700',
        color: '#414042',
        marginTop: 8,
    },
    likeIcon:{
        height: 47,
        width:58,
        backgroundColor: '#E6E6E6',
        borderRadius:20,
        alignItems: 'center',
    }

});

export default styles;