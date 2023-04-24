import { StyleSheet, View } from 'react-native'
import { PropsWithChildren } from 'react';
import { COLORS } from '../../theme/foundations/Colors';

interface ContainerAccountProps extends PropsWithChildren {
  color?: string
}

const ContainerAccount = ({ children, color }: ContainerAccountProps) => {
  return (
    <View style={[styles.account, { borderColor: color ? color : COLORS.default }]}>
      {children}
    </View>
  )
}

const styles = StyleSheet.create({
  account: {
    width: 220,
    height: 120,
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
    position: 'relative',
    backgroundColor: COLORS.light,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.00,

    elevation: 1,
  },
})

export { ContainerAccount }