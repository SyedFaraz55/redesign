import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function CustomText({text,fontSize, color}) {
  return (
   <Text style={[styles.text,{fontSize:fontSize || 18, color:color || 'black'}]}>{text}</Text>
  )
}

const styles =  StyleSheet.create({

})