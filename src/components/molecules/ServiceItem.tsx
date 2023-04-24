import { StyleSheet, Text } from 'react-native'
import { ServiceItemPress } from '../atoms/ServiceItemPress'
import Icon from 'react-native-vector-icons/FontAwesome';
import { ServiceItemType } from '../../interfaces/ServiceItemType';
import { COLORS } from '../../theme/foundations/Colors';

const ServiceItem = ({ icon, description, textColor, color, action }: ServiceItemType) => {

  return (
    <ServiceItemPress color={color} onPress={action}>
      <Icon name={icon} size={30} color={textColor ? textColor : COLORS.black} />
      <Text style={[styles.serviceDescription, { color: textColor ? textColor : COLORS.black }]}>{description}</Text>
    </ServiceItemPress>
  )
}

const styles = StyleSheet.create({
  serviceDescription: {
    fontSize: 11,
    marginTop: 10,
    letterSpacing: 1,
    textAlign: 'center'
  }
})

export { ServiceItem }