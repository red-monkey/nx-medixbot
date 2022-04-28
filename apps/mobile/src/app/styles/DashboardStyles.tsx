import { Dimensions, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  root: {
    backgroundColor: '#fff',
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
    height: 300,
    backgroundColor: '#fff',
    borderRadius: 15,
    shadowColor: 'rgba(0.5, 0, 0, 0.08)',
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 15,
    elevation: 15,
    flexDirection: 'column',
    paddingHorizontal: 20,
    paddingVertical: 20,
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
