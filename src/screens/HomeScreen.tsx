import { View, SafeAreaView, StyleSheet } from 'react-native';
import { COLORS } from '../theme/foundations/Colors';
import { Title } from '../components/atoms/Title';
import { Header } from '../components/organisms/Header';
import { ListAccount } from '../components/organisms/ListAccount';
import { ACCOUNTS } from '../data/Data';
import { ListServiceItem } from '../components/organisms/ListServiceItem';
import { ServiceItemType } from '../interfaces/ServiceItemType';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type HomeProps = {
  Login: undefined
}

type Props = NativeStackScreenProps<HomeProps>;

const HomeScreen = ({ navigation }: Props) => {

  const ITEMS: ServiceItemType[] = [
    {
      icon: 'dollar',
      description: 'Tranferir',
      color: COLORS.service01,
      textColor: COLORS.serviceText,
      action: () => serviceAction()
    },
    {
      icon: 'line-chart',
      description: 'Estado cuenta',
      color: COLORS.service02,
      textColor: COLORS.serviceText,
      action: () => serviceAction()
    },
    {
      icon: 'heart',
      description: 'Favoritos',
      color: COLORS.service03,
      textColor: COLORS.serviceText,
      action: () => serviceAction()
    },
    {
      icon: 'automobile',
      description: 'Vehiculo',
      color: COLORS.service04,
      textColor: COLORS.serviceText,
      action: () => serviceAction()
    },
    {
      icon: 'home',
      description: 'Vivienda',
      color: COLORS.service05,
      textColor: COLORS.serviceText,
      action: () => serviceAction()
    },
    {
      icon: 'cc-mastercard',
      description: 'Tarjeta de crédito',
      color: COLORS.service06,
      textColor: COLORS.serviceText,
      action: () => serviceAction()
    },
  ]

  const serviceAction = () => {
    navigation.navigate('Login')
  }

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <Header title='Juanito Perez' />

      {/* Cuentas */}
      <Title margin={1}>Cuentas</Title>
      {/* Componente cuentas */}
      <View style={styles.separator} />
      {/* Cuentas */}
      <ListAccount accounts={ACCOUNTS} />

      <Title>Servicios</Title>
      {/* Servicios */}
      <ListServiceItem items={ITEMS} />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.light,
    paddingHorizontal: 8
  },
  separator: {
    marginVertical: 30,
  },
})

export { HomeScreen }