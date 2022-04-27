import React from 'react'
import { View } from 'react-native';
import Modal from 'react-native-modal';
import { modalStyle } from '../styles/LoginPageStyles';

type Props = {
    onBackdropPress?: () => void
    content: any,
    visible: boolean,
}

function CustomModal({onBackdropPress,content,visible}: Props) {
  return (
    <Modal
        hasBackdrop
        animationIn={'slideInUp'}
        animationOut={'slideOutDown'}
        animationOutTiming={10}
        backdropOpacity={0.5}
        onBackdropPress={onBackdropPress}
        isVisible={visible}>
        <View style={modalStyle.centeredView}>
          <View style={modalStyle.modalView}>
            {content}
          </View>
        </View>
      </Modal>
  )
}

export default CustomModal