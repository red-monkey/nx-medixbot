import { Dimensions, StyleSheet } from "react-native";
import { colors } from "../variables/colors";

const styles = StyleSheet.create({
    root: {
        flex:1,
        paddingTop: 40,
        backgroundColor: colors.backgroundColor,
        paddingBottom: 40,
    },
    upperPart: {
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingTop: 20,
        paddingBottom: 30
    },
    itemsContainer: {
        paddingTop: 20
    },
    rootTwo: {
        flex:1,
        backgroundColor: '#E6F2FC',
        paddingBottom: 30,
    },
    screenContent: {
        backgroundColor: '#fff',
        borderRadius: 30,
        width: '100%',
    },
    productDescription: {
        width: Dimensions.get('screen').width,
        borderTopLeftRadius: 32,
        borderTopRightRadius: 32,
        backgroundColor: '#4C5DF4',
        padding: 25,
        paddingTop: 30,
        paddingBottom: 35,
        marginTop: -25,
        zIndex: 2
    },
    button: {
        height: 23,
        width: 33,
        borderRadius: 8,
        backgroundColor: 'transparent',
        alignItems:'center'
    },
    buttonText:{
        fontSize: 20,
        fontWeight: '700',
        color: colors.newBlack,
        alignItems: 'center',
        marginTop: -3,
    },
    buttonLeft: {
        height: 23,
        width: 33,
        borderRadius: 8,
        backgroundColor: '#D9D9D9CD',
        alignItems:'center'
    },
    addToCart:{
        height: 47,
        width: 220,
        borderRadius:16,
        alignItems: 'center',
        justifyContent: 'center'
    },
    addToCartText:{
        fontSize:16,
        fontFamily: 'Montserrat-Bold',
        color: '#414042',
    },
    likeIcon:{
        height: 47,
        width:58,
        backgroundColor: '#D9D9D9CD',
        borderRadius:20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    screenContentCart: {
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        width: '100%',
        marginTop: 20,
        paddingBottom: 35
    },
    boxOne:{
        marginHorizontal: 12,
        marginBottom: 5,
        borderRadius:8,
        flexDirection:'row',
        padding:5,
        borderColor: colors.newLightBlue,
        borderWidth: 1
    },
    cartProduct:{
        width:'36%',
        backgroundColor: '#D7EAFF5F',
        alignItems:'center',
        margin:12,
        borderRadius:18,
    },
    deleteButton:{
        width:23, 
        height:21, 
        backgroundColor:'#E6F2FC',
        alignItems:'center',
        justifyContent: 'center',
        borderColor: '#D5D5D6',
        borderWidth: 1,
        borderRadius: 5
    },
    cartIcon:{
        marginTop: 60,
        alignItems:'flex-end',
        marginRight:45,  
    },
    cartTotals:{
        height: 20,
        justifyContent: 'space-between',
        width: '90%',
        flexDirection: 'row',
        top:16,
        marginHorizontal: 23,
    },
    boxTwo:{
        marginHorizontal: 12,
        borderRadius:8,
        marginTop: 60,
        padding:2,
        alignItems: 'center',
        borderColor:'#D7EAFF',
        borderWidth: 1,
    },
    proceedCheckout:{
        backgroundColor: '#3095E2',
        alignItems:'center',
        justifyContent: 'center',
        marginTop:20,
        height:50,
        width:300,
        marginLeft:30,
        borderRadius:15
    },
    proceedCheckoutText:{
        color:'#fff',
        fontFamily: 'Montserrat-Bold',
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
    },
    cartImage:{
        justifyContent:'center',
        height:120,
        width: 110,
        resizeMode: 'contain'
    },
    productDescriptionText: {
        color:'#D7EAFF', 
        fontSize: 20, 
        fontFamily: 'Montserrat-Bold',
    },
    ratingsView:{
        flexDirection:'row', 
        justifyContent:'flex-start', 
        alignItems:'center',
        marginTop: 10
    },
    ratingsText:{
        color: '#D7EAFF', 
        fontSize: 18, 
        marginLeft: 7,
        fontFamily: 'Montserrat-Regular'
    },
    productsPriceView:{
        justifyContent:'space-between', 
        flexDirection:'row', 
        alignItems:'center', 
        height:33,
    },
    productsPriceText:{
        color: '#D7EAFF', 
        fontSize:22, 
        fontFamily: 'Montserrat-Bold',
        marginTop:10,
    },
    productsCounterView:{
        flexDirection:'row', 
        width:100, 
        justifyContent:'space-between', 
        alignItems:'center',
    },
    productsDescriptionView:{
        marginTop:30,
    },
    productsDescriptionTitle:{
        color:'#D7EAFF', 
        fontFamily: 'Montserrat-SemiBold', 
        fontSize:18,
    },
    productDescriptionTextView:{
        marginTop:10,
    },
    productDescriptionTextTwo:{
        color:'#D7EAFF', 
        fontSize:16, 
        fontFamily:'Lora-Regular',
    },
    addToCartButtonView:{
        flexDirection:'row', 
        marginTop:25, 
        justifyContent:'space-between', 
    },
    itemsInCartView:{
        height:24, 
        flexDirection:'row', 
        marginLeft: 21, 
        marginRight:28, 
        justifyContent:'space-between', 
        marginTop:40,
    },
    itemsInCartText:{
        fontSize:18, 
        fontFamily: 'Montserrat-Bold',
        color:'#41416E',
    },
    clearCart:{
        fontSize:18, 
        fontFamily: 'Montserrat-Bold', 
        color:'#3095E2',
    },
    boxTwoText:{
        fontSize:16,
        fontFamily: 'Montserrat-Regular',
        color:'#41416E',
    },
    promoCodeView:{
        flexDirection:'row', 
        height:59, 
        marginTop: 50,
        marginHorizontal: 12,
        justifyContent:'space-between', 
        borderRadius:8, 
        alignItems:'center',
        paddingHorizontal: 13,
        borderColor: colors.newLightBlue,
        borderWidth: 1
    },
    promoCodeText:{
        fontFamily: 'Montserrat-Regular',
        fontSize:15, 
        color:'#41416E',
    },
    totalPriceView:{
        flexDirection:'row',
        width:'90%', 
        justifyContent:'space-between', 
        marginTop:35,
    },
    totalPriceText:{
        fontWeight:'700', 
        fontSize:18, 
        color:'#41416E',
    },
    cartItemTitleView:{
        flexDirection:'row', 
        marginTop:12, 
        alignItems: 'center',
        justifyContent:'space-between',
    },
    cartItemText:{
        fontSize:17, 
        fontFamily: 'Montserrat-Bold',
        color:'#41416E',
    },
    cartItemX:{
        color:'#4C5DF4', 
        fontWeight:'700',
    },
    cartItemRatingsView:{
        flexDirection:'row', 
        marginTop: 5,
        alignItems: 'center'
    },
    cartItemRatingsText:{
        color: colors.Text,
        fontSize:14, 
        fontFamily: 'Montserrat-Regular', 
        alignItems:'stretch',
        marginLeft: 5
    },
    cartItemPriceView:{
        flexDirection:'row',
        justifyContent:'space-between', 
        marginTop:15, 
        alignItems:'center',
    },
    cartItemPrice:{
        fontFamily: 'Montserrat-Bold', 
        fontSize:20, 
        color:'#41416E',
    },
    cartItemAdjustQty:{
        flexDirection:'row', 
        width:90, 
        justifyContent:'space-between',
    },
    checkoutCartNumber:{
        height:24, 
        flexDirection:'row', 
        marginLeft: 21, 
        marginRight:28, 
        justifyContent:'space-between', 
        marginTop:40,
    },
    checkoutText:{
        fontSize:20, 
        fontWeight:'700', 
        color:'#41416E',
    },
    checkoutTotalView:{
        flexDirection:'row', 
        justifyContent:'space-between', 
        width:100,
    },
    checkoutTotalText:{
        fontSize:18, 
        fontWeight:'400', 
        color:'#41416E',
    },
    checkoutTotalPrice:{
        fontSize:20, 
        fontWeight:'700', 
        color:'#3095E2',
    },
    checkoutDeliveryOptions:{
        fontSize:20, 
        fontWeight:'700', 
        color:'#41416E',
    },
    checkoutPaymentOptions:{
        fontSize:20, 
        fontWeight:'700', 
        color:'#41416E',
    },

});

export default styles;