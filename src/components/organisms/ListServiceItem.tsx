import { StyleSheet, View } from 'react-native'
import { PropsWithChildren } from 'react'
import { ServiceItemType } from '../../interfaces/ServiceItemType'
import { ServiceItem } from '../molecules/ServiceItem'

interface ListServiceItemProps extends PropsWithChildren {
  items: ServiceItemType[]
}

const ListServiceItem = ({ items }: ListServiceItemProps) => {
  return (
    <View style={styles.servicesContainer}>
      {items.map((item, index) => <ServiceItem {...item} key={index} />)}
    </View>
  )
}

const styles = StyleSheet.create({
  servicesContainer: {
    gap: 40,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center'
  },
})

export { ListServiceItem }