import { StyleSheet, Text } from 'react-native'
import { AccountType } from '../../interfaces/AccountType'
import { COLORS } from '../../theme/foundations/Colors'
import { ContainerAccount } from '../atoms/ContainerAccount'


const Account = ({ number, type, money, borderColorContainer }: AccountType) => {
  return (
    <ContainerAccount color={borderColorContainer}>
      <Text style={styles.accountNumber}>{number}</Text>
      <Text style={styles.accountType}>{type}</Text>
      <Text style={styles.accountMoney}>{money}</Text>
    </ContainerAccount>
  )
}

const styles = StyleSheet.create({
  accountNumber: {
    fontSize: 17,
    color: COLORS.black
  },
  accountType: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    fontSize: 17,
    color: COLORS.black
  },
  accountMoney: {
    position: 'absolute',
    top: 40,
    right: 10,
    fontSize: 25,
    color: COLORS.black
  },
})

export { Account }