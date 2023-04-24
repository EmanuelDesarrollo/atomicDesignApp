import { StyleSheet } from 'react-native'
import { ScrollView } from 'react-native'
import { AccountType } from '../../interfaces/AccountType'
import { Account } from '../molecules/Account'

type listAccount = {
  accounts: AccountType[]
}

const ListAccount = ({ accounts }: listAccount) => {
  return (
    <ScrollView style={styles.horizontalScroll} contentContainerStyle={styles.containerScroll} horizontal={true}>
      {
        accounts.map(
          (account, index) => <Account {...account} key={index} />
        )
      }
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  horizontalScroll: {
    flexGrow: 0,
    marginTop: -40,
    marginBottom: 30
  },
  containerScroll: {
    alignItems: 'center',
    gap: 20
  }
})

export { ListAccount }