import { StyleSheet, TextInput, TextInputProps } from 'react-native'
import { COLORS } from '../../theme/foundations/Colors'

interface InputProps extends TextInputProps {
  addStyles?: {}
}

const Input = ({ addStyles = {}, ...props }: InputProps) => {
  return (
    <TextInput
      style={[styles.input, addStyles]}
      {...props}
    />
  )
}

const styles = StyleSheet.create({
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: COLORS.default,
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 8,
  },
})

export { Input }
