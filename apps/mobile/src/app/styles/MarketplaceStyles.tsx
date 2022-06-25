import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    root: {
        flex:1,
        backgroundColor: '#E6F2FC',
        paddingBottom: 40,
    },
    rootTwo: {
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
        // bottom: 10,
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
    },
    screenContentCart: {
        height: '100%',
        backgroundColor: '#fff',
        borderRadius: 30,
        top: 117,
        position: "absolute",
        left: 0,
        width: '100%',
        // bottom: 10,
        // alignItems: 'center'
    },
    boxOne:{
        marginLeft: 12,
        marginRight:12,
        borderRadius:8,
        height:147,
        // backgroundColor:'#E6E6FF',
        top: 50,
        flexDirection:'row',
        padding:2,
        shadowColor:'#D7EAFF',
        elevation:3,
        shadowOpacity:0.1,
    },
    cartProduct:{
        width:'33%',
        backgroundColor: '#D7EAFF',
        alignItems:'center',
        margin:12,
        borderRadius:18,
    },
    deleteButton:{
        width:23, 
        height:21, 
        backgroundColor:'#E6F2FC',
        alignItems:'center',
    },
    cartIcon:{
        marginTop: 60,
        marginBottom:-70,
        alignItems:'flex-end',
        marginRight:45,
        
    },
    cartTotals:{
        height: 20,
        justifyContent: 'space-between',
        width: '90%',
        flexDirection: 'row',
        top:16,
        marginLeft:23,
        marginRight:23,
    },
    boxTwo:{
        marginLeft: 12,
        marginRight:12,
        borderRadius:8,
        height:141,
        // backgroundColor:'#E6E6FF',
        top: 90,
        // flexDirection:'row',
        padding:2,
        // marginBottom: -100,
        alignItems: 'center',
        // borderColor:'#D7EAFF',
        // paddingBottom:20,
        // paddingTop:20,
        shadowColor:'#D7EAFF',
        elevation:3,
        shadowOpacity:0.1,
        paddingHorizontal:20,
        // paddingVertical:20,
        // shadowOffset: {
        //     height:1,
        //     width:1
        // }
    },
    proceedCheckout:{
        backgroundColor: '#3095E2',
        alignItems:'center',
        height:50,
        width:300,
        top:100,
        marginLeft:30,
        borderRadius:15
    },
    proceedCheckoutText:{
        top:12,
        color:'#fff',
        fontWeight:'700',
        fontSize:15,
    },
    arrowLeft:{
        width:29,
        height:29,
        opacity:0.1,
        borderRadius:6,
        backgroundColor:'#3095E2',
        alignItems:'center',
    },
    deliveryOptions:{

    },
    payCheckoutButton:{
        width:330,
        height:60,
        borderRadius:16,
        backgroundColor:'#3095E2',
        alignItems:'center',
        justifyContent:'center'
    }

});

export default styles;