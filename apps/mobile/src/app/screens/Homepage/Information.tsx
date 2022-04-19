import React from 'react';
import {Text, View} from 'react-native';
import styles from '../../styles/HomepageStyles';
import '../../../../../assets/images/Logo.png';
import {InformationNavProps} from '../../utils/types';
import Header from '../../components/CommunHeader';

const DESCRIPTION =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus massa scelerisque augue phasellus rhoncus morbi facilisis elementum. Diam proin felis ac sodales. Congue placerat erat ultrices purus. Ut porttitor consectetur risus at phasellus metus. Pulvinar mi faucibus blandit feugiat consequat. Nunc elementum tempus nibh integer ultrices dictumst massa tortor tortor. Sed tortor nunc, risus porta. Eget nunc, massa pharetra, enim et. Ut gravida quisque ullamcorper posuere eu sed lectus. Duis integer quisque nibh imperdiet magna tempus. Est facilisi aliquet sapien euismod diam elit massa, amet, pretium. Morbi a, ultrices laoreet hac purus eu. Nibh in viverra neque aliquet nunc vel non aliquet sodales. Sit suscipit gravida sed magna enim. Potenti montes, orci tincidunt molestie ut. In suspendisse morbi vehicula at mattis pellentesque tincidunt risus, vulputate. Eget vitae integer et cras ridiculus. Augue magna eget sapien tortor nisl fermentum lacus molestie.';
function Information({route}: InformationNavProps) {
  const {title} = route.params;
  return (
    <View style={styles.Container}>
      <Header />
      <View style={styles.infoPage}>
        <Text style={styles.infoPageTitle}>{title}</Text>
        <Text style={styles.infoPageDesc}>{DESCRIPTION}</Text>
      </View>
    </View>
  );
}

export default Information;
