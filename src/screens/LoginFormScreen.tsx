import React from 'react'
import { StyleSheet, SafeAreaView } from 'react-native';
import { Title } from '../components/atoms/Title';
import { InputLabel } from '../components/molecules/InputLabel';
import { PressableOpacity } from '../components/atoms/PressableOpacity';
import { COLORS } from '../theme/foundations/Colors';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useState } from 'react';

type LoginFormProps = {
  Home: undefined
}

type StatusInputs = {
  status: 'error' | 'success' | 'default',
  msg: string
}

type FormStatus = {
  user: StatusInputs,
  password: StatusInputs
}

type Props = NativeStackScreenProps<LoginFormProps>;

const statusErrorInitialState: FormStatus = {
  user: {
    status: "default",
    msg: ''
  },
  password: {
    status: "default",
    msg: ''
  },
};

const LoginFormScreen = ({ navigation }: Props) => {

  const [user, setUser] = useState('')
  const [password, setPassword] = useState('');
  const [statusError, setStatusError] = useState<FormStatus>(statusErrorInitialState)

  const submitLogin = () => {
    if (user === 'admin' && password === '123456') {
      setUser('');
      setPassword('');
      setStatusError(statusErrorInitialState);
      navigation.navigate("Home")
    }
    else {
      if (password !== '123456') {
        setStatusError({
          ...statusError, password: {
            status: 'error',
            msg: 'Contraseña incorrecta'
          }
        })
      }

    }
  }

  return (
    <SafeAreaView style={styles.containerCenter}>
      <Title>Iniciar sesión</Title>
      <InputLabel
        title='Usuario'
        placeholder='Usuario'
        onChangeText={setUser}
        value={user}
        status={statusError.user.status}
        messageStatus={statusError.user.msg}
      />
      <InputLabel
        title='Contraseña'
        placeholder='Contraseña'
        onChangeText={setPassword}
        value={password}
        secureTextEntry={true}
        status={statusError.password.status}
        messageStatus={statusError.password.msg}
      />
      <PressableOpacity
        title='Iniciar sesión'
        type='primary'
        onPress={submitLogin}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  containerCenter: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: COLORS.light
  },
})

export { LoginFormScreen }