import React from 'react'
import { Input } from '../atoms/Input';
import { Label } from '../atoms/Label';
import { StyleSheet, TextInputProps, View } from 'react-native';
import { COLORS } from '../../theme/foundations/Colors';

interface InputLabelProps extends TextInputProps {
  title: string,
  status?: 'error' | 'success' | 'default',
  messageStatus?: string
}

const InputLabel = ({ title, status, messageStatus, ...inputProps }: InputLabelProps) => {

  const inputStyle = (status !== 'default')
    ? (status === 'error') ? styles.borderInputError : styles.borderInputSuccess
    : {};

  return (
    <View style={styles.containerInput}>
      <Label>{title}</Label>
      <Input
        addStyles={inputStyle}
        {...inputProps}
      />
      {/* Mensaje error. */}
      {
        (status !== 'default' && messageStatus !== '') ?
          <Label addStyles={(status === 'error') ? styles.errorLabel : styles.successLabel} >{messageStatus}</Label> : ''
      }
    </View>
  )
}

const styles = StyleSheet.create({
  containerInput: {
    width: '100%',
    marginBottom: 25,
  },
  errorLabel: {
    color: COLORS.error,
    fontSize: 12
  },
  successLabel: {
    color: COLORS.success,
    fontSize: 12
  },
  borderInputError: {
    borderColor: COLORS.error
  },
  borderInputSuccess: {
    borderColor: COLORS.success
  }
})

export { InputLabel }