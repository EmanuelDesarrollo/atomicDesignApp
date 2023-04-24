import React, { PropsWithChildren } from 'react'
import { StyleSheet, Text } from 'react-native'
import { COLORS } from '../../theme/foundations/Colors'

interface LabelProps extends PropsWithChildren {
  addStyles?: {}
}

const Label = ({ addStyles = {}, children }: LabelProps) => {
  return (
    <Text style={[styles.inputLabel, addStyles]}>{children}</Text>
  )
}

const styles = StyleSheet.create({
  inputLabel: {
    width: '100%',
    fontSize: 15,
    color: COLORS.black
  }
})

export { Label }