import React from 'react'
import { Pressable, PressableProps, StyleSheet, Text } from 'react-native'
import { COLORS } from '../../theme/foundations/Colors'

interface ButtonProps extends PressableProps {
  title: string,
  type: 'primary' | 'secondary'
}

const PressableOpacity = ({ title, type, ...props }: ButtonProps) => {
  return (
    <Pressable style={({ pressed }) => [
      { opacity: pressed ? 0.8 : 1 },
      styles.button,
      (type === 'primary') ? styles.primaryButton : styles.secondaryButton
    ]} {...props}>
      <Text style={[
        styles.buttonText,
        (type === 'primary' ? styles.primaryButtonColor : styles.secondaryButtonColor)
      ]}>{title}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  button: {
    width: '100%',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 30
  },
  primaryButton: {
    backgroundColor: COLORS.primary,
  },
  secondaryButton: {
    backgroundColor: COLORS.light,
    borderWidth: 1,
    borderColor: COLORS.primary
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 22,
  },
  primaryButtonColor: {
    color: COLORS.light,
  },
  secondaryButtonColor: {
    color: COLORS.primary,
  }
})

export { PressableOpacity }