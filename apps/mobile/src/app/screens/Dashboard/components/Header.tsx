import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { DashboardHeaderGradient, NavGradient } from '../../../commun/Gradients';
import HamburgerbtnClosed from '../../../icons/HamburgerButtonClosed.svg';
import HamburgerbtnOpen from '../../../icons/HamburgerBtnOpen.svg';
import NotificationIcon from '../../../icons/Notification.svg';
import Modal from 'react-native-modal';
import styles, { navMenuStyles } from '../../../styles/DashboardStyles';
import { modalStyle } from '../../../styles/LoginPageStyles';
import LinearGradient from 'react-native-linear-gradient';
import dashboard from '../../../styles/DashboardStyles';
import User from '../../../icons/user.svg'
import Wallet from '../../../icons/wallet.svg'
import Dollar from '../../../icons/dollar.svg'
import Ring from '../../../icons/ring.svg'
import Link from '../../../icons/link.svg'
import Question from '../../../icons/question.svg'
import sharedStyles from '../../../styles/SharedStyles';


const NavMenu = (props : {isopen: boolean, setOpen: (value: boolean) => void}) => {
  return (
        <Modal
        hasBackdrop
        onBackdropPress={()=>props.setOpen(false)}
        animationIn={'slideInUp'}
        animationOut={'slideOutDown'}
        animationOutTiming={10}
        backdropOpacity={0}
        isVisible={props.isopen}>
        <View style={navMenuStyles.centeredView}>
        <View style={navMenuStyles.modalView}>
          <LinearGradient
            colors={['rgba(0,194,239,0.9)', 'rgba(204,64,182,0.9)']}
            locations={[0.1476, 1.2108]}
            useAngle={true}
            angle={303.24}   
            style= {navMenuStyles.gradient}
          >         
              <TouchableOpacity style={navMenuStyles.button}>
                <User />
                <Text style={navMenuStyles.navMenuText}>Primary Care</Text>
              </TouchableOpacity>
              <TouchableOpacity style={navMenuStyles.button}> 
                <Wallet />
                <Text style={navMenuStyles.navMenuText}>Urgent Care</Text>              
              </TouchableOpacity>
              <TouchableOpacity style={navMenuStyles.button}>
                <Dollar />
                <Text style={navMenuStyles.navMenuText}>Mental Health</Text>
              </TouchableOpacity>
              <TouchableOpacity style={navMenuStyles.button}>
                <Ring />
                <Text style={navMenuStyles.navMenuText}>Dental and Mouth Health</Text>
              </TouchableOpacity>
              <TouchableOpacity style={navMenuStyles.button}>
                <Link />
                <Text style={navMenuStyles.navMenuText}>Eye Health</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[sharedStyles.row, sharedStyles.alignCenter,{height:35}]}>
                <Question />
                <Text  style={navMenuStyles.navMenuText}>Women’s Health</Text>
              </TouchableOpacity>
              <TouchableOpacity  style={navMenuStyles.btn}>
                <Text style={[navMenuStyles.navMenuText,]}>Diabetes Health</Text>
              </TouchableOpacity>
              <TouchableOpacity  style={navMenuStyles.btn}>
                <Text style={navMenuStyles.navMenuText}>Social Healthcare</Text>
              </TouchableOpacity>
              <TouchableOpacity style={navMenuStyles.btn}>
                <Text style={navMenuStyles.navMenuText}>Medics Personal Market</Text>
              </TouchableOpacity>
              <TouchableOpacity style={navMenuStyles.btn}>
                <Text style={navMenuStyles.navMenuText}>Health Insurances</Text>
              </TouchableOpacity>
            </LinearGradient>
          </View>
        </View>
      </Modal>
  )
}

export const Header = () => {
  const [navMenuIsOpen, setNavMenuIsOpen ] = useState<boolean>(false);
  return (
    <View>
      <View style={styles.HeaderGradiantBoxContainer}>
        <DashboardHeaderGradient />
      </View>
      <NavMenu isopen={navMenuIsOpen} setOpen={setNavMenuIsOpen} />
      <View style={styles.HeaderActionBar}>
        <View style={styles.HeaderRow}>
          <TouchableOpacity onPress={()=>setNavMenuIsOpen(true)}>
          { navMenuIsOpen === false ?  <HamburgerbtnClosed /> :  <HamburgerbtnOpen />}
          </TouchableOpacity>
          <Image
            style={{
              position: 'relative',
              top: 2,
            }}
            source={require('../../../../../../../assets/logos/medixbot.png')}
          />
          <NotificationIcon />
        </View>
      </View>
    </View>
  );
};
