import { Dimensions, StyleSheet } from 'react-native';
import { colors } from '../variables/colors';

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#fff',
    paddingBottom: 40,
  },
  HeaderGradiantBoxContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    overflow: 'hidden',
    width: '100%',
    height: 200,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },

  HeaderGradientBox: {
    width: '110%',
    height: 500,
    position: 'relative',
    top: -120,
    left: '-8%',
    transform: [{ rotateZ: '20deg' }],
  },
  HeaderActionBar: {
    paddingTop: 45,
    paddingHorizontal: 20,
  },
  HeaderRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  screenContent: {
    marginTop: 10,
    paddingHorizontal: 20,
  },

  GreetingBoxContainer: {
    height: 230,
    backgroundColor: '#fff',
    borderRadius: 15,
    flexDirection: 'column',
    paddingHorizontal: 20,
    paddingVertical: 20,
    shadowColor: 'rgba(0, 0, 0, 0.8)',
    shadowOpacity: 0.1,
    elevation: 3,
  },
  bot: {
    position: 'absolute',
    right: 8,
    top: -40,
  },

  userInfo: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },

  greeting: {
    fontSize: 12,
    fontFamily: 'Montserrat-Black',
    color: '#41416E',
  },

  userName: {
    fontSize: 18,
    fontFamily: 'Montserrat-Black',
    color: '#41416E',
  },
  userAvatar: {
    width: 60,
    height: 60,
    borderRadius: 50,
    borderColor: '#41416E',
    borderWidth: 1,
    marginRight: 10,
  },
});

export default styles;

export const navMenuStyles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%',
    marginTop: 38
  },
  modalView: {
    width: Dimensions.get('screen').width,
    backgroundColor: 'transparent',
    alignItems: 'flex-start',
    borderTopRightRadius: 25,
    borderBottomRightRadius: 25,
  },
  gradient: {
    borderTopRightRadius: 25,
    borderBottomRightRadius: 25,
    width: '67%',
    paddingVertical: 20,
    paddingHorizontal: 15,
    marginTop: 7,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    height: 45,
    paddingHorizontal: 5,
    borderBottomColor: '#fff',
    borderBottomWidth: 1,
    flexDirection: 'row',
    alignItems: 'center'
  },
  btn: {
    height: 35,
    justifyContent: 'center',
    paddingLeft:24
  },
  navMenuText: {
    fontFamily: 'Montserrat-Medium',
    marginLeft: 7,
    color: '#fff'
  }
})