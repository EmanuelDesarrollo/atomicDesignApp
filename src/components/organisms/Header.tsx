import { StyleSheet, Text, View } from 'react-native'
import { COLORS } from '../../theme/foundations/Colors'
import { AvatarIcon } from '../molecules/AvatarIcon'

type HeaderProp = {
  title: string
}

const Header = ({ title }: HeaderProp) => {
  return (
    <View style={styles.header}>
      <Text style={styles.titleHeader}>{title}</Text>
      <AvatarIcon iconName='user-o' />
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    height: 80,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20
  },
  titleHeader: {
    fontSize: 18,
    fontWeight: '700',
    width: '50%',
    color: COLORS.black
  },
})

export { Header }
