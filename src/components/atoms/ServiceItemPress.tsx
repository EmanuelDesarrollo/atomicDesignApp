import { Pressable, StyleSheet, PressableProps } from 'react-native';
import { COLORS } from '../../theme/foundations/Colors';

interface ServiceItemPressProps extends PressableProps {
  color?: string
}

const ServiceItemPress = ({ children, color, ...props }: ServiceItemPressProps) => {
  return (
    <Pressable style={({ pressed }) => [
      { opacity: pressed ? 0.8 : 1 },
      styles.servicesItem,
      { backgroundColor: color ? color : COLORS.light }
    ]} {...props}>
      {children}
    </Pressable>
  )
}


const styles = StyleSheet.create({
  servicesItem: {
    width: 90,
    height: 90,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    shadowColor: COLORS.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },
  serviceDescription: {
    fontSize: 10,
    marginTop: 10,
  }
})


export { ServiceItemPress }