import { View, Text, StyleSheet } from 'react-native'
import React, { PropsWithChildren } from 'react'
import { COLORS } from '../../theme/foundations/Colors'

interface TitleProps extends PropsWithChildren {
  margin?: number
}

const Title = ({ children, margin }: TitleProps) => {
  return (
    <Text style={[styles.titleText, { marginBottom: margin ? margin : 25 }]}>{children}</Text>
  )
}

const styles = StyleSheet.create({
  titleText: {
    fontSize: 25,
    fontWeight: '700',
    color: COLORS.black
  }
})

export { Title }