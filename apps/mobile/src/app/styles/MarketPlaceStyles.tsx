import { Dimensions, StyleSheet } from 'react-native';
import { colors } from '../variables/colors';
export const PADDING_HORIZONTAL = 20;
export const MARGIN_DOT = 5;
export const DOT_SIZE = 8;

export const categoryStyle = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
    marginBottom: 15,
  },
});

export const CardStyle = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  wrapper: {
    marginVertical: 10, 
    justifyContent: 'center',
    backgroundColor: 'transparent',
    borderRadius: 8,
  },
});

export const ProductCardStyles = StyleSheet.create({
  title: {
    fontSize: 16,
    fontFamily: 'Montserrat-SemiBold',
    color: '#41416E',
    fontStyle: 'normal',
    lineHeight: 24,
  },
  price: {
    fontSize: 18,
    fontFamily: 'Montserrat-Bold',
    lineHeight: 27,
    color: '#41416E',
  },
  CardActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  card: {
    justifyContent:'center',
    alignItems:'center',
    marginTop: 20,
    backgroundColor:'#fffff',
    borderRadius: 8,
    padding:3,
    borderWidth:1,
    borderColor:'rgba(65, 64, 66, 0.15)',
  },
  contentContainer: {},
  image: {
    width: 120,
    minHeight: 140,
    margin: 5,
    resizeMode: 'stretch'
  },
  imageContainer: { alignItems: 'center', justifyContent: 'center' },
  addToCart: {
    height: 40,
  },
  titleWrapper: {
    paddingBottom: 2,
    marginTop:3,
  },
  cardContent: {
    paddingVertical: 16,
    paddingHorizontal: 8,
  },
  rating: {
    fontSize: 14,
    fontFamily: 'Montserrat-Regular',
    lineHeight: 15,
    color: '#41416E',
    paddingLeft: 4,
  },
});

const styles = StyleSheet.create({
  Container: {
    backgroundColor: colors.backgroundColor,
    paddingVertical: 30,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  categoriesWrapper: {
    marginTop: 15,
  },

  MarketPlacePlace: {
    backgroundColor: '#fff',
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
    marginTop: 15,
    width: '100%',
    paddingHorizontal: 15,
    paddingVertical: 40,
  },
  wrapper: {
    backgroundColor: '#E6F2FC',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 100,
  },
  logo: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    width: '100%',
  },
  content: {
    paddingTop: 15,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    backgroundColor: '#fff',
  },
  cartUserWrapper: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 35,
  },
  categoriesText: {
    color: '#41416E',
    fontFamily: 'Montserrat-Bold',
    fontSize: 24,
    width: '80%',
  },
  pageWrapper: {},
  userText: {
    justifyContent: 'center',
    paddingLeft: 8,
  },
  greetingText: {
    fontSize: 12,
    color: '#41416E',
    fontFamily: 'Montserrat-Black'
  },
  userName: {
    fontFamily: 'Montserrat-Black',
    fontSize: 20,
    color: '#41416E',
  },
  container: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '100%',
  },
});
export default styles;
