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
  wrapper: {},
});

export const ProductCardStyles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: '600',
    color: '#41416E',
    fontStyle: 'normal',
    lineHeight: 24,
  },
  price: {
    fontSize: 18,
    fontWeight: '700',
    lineHeight: 27,
    color: '#41416E',
  },
  CardActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    height: 80,
  },
  card: {
    justifyContent:'center',
    alignItems:'center',
    width: 170,
    marginTop: 20,
    backgroundColor:'#fffff',
    borderRadius: 8,
    padding:3,
    borderWidth:1,
    borderColor:'rgba(65, 64, 66, 0.15)',
  },
  contentContainer: {},
  image: {
    width: 100,
    height: 118,
    margin: 5,
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
    fontWeight: '400',
    lineHeight: 17,
    color: '#41416E',
    paddingLeft: 4,
  },
});

const styles = StyleSheet.create({
  Container: {
    backgroundColor: colors.backgroundColor,
    paddingTop: 20,
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
    paddingLeft: 18,
    paddingRight: 18,
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
    fontWeight: '700',
    fontSize: 24,
    width: '80%',
  },
  pageWrapper: {},
  userText: {
    justifyContent: 'center',
    padding: 8,
  },
  greetingText: {
    fontWeight: '900',
    fontSize: 12,
    color: '#41416E',
  },
  userName: {
    fontWeight: '900',
    fontSize: 20,
    color: '#41416E',
  },
  container: {
    backgroundColor: '#fff',
    justifyContent: 'space-between',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});
export default styles;
