import { PropsWithChildren } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { COLORS } from '../../theme/foundations/Colors'

const Avatar = ({ children }: PropsWithChildren) => {
  return (
    <View style={styles.avatar}>
      {children}
    </View>
  )
}

const styles = StyleSheet.create({
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 50,
    backgroundColor: COLORS.default,
    alignItems: 'center',
    justifyContent: 'center'
  },
})

export { Avatar }