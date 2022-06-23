import { View, Text, StyleSheet, Platform, StatusBar } from 'react-native'
import React from 'react'

export default function AndroidSafeArea({children}) {
  return (
    <View style={styles.container}>
      {children}


    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        paddingTop:Platform.OS === 'android' ? 50 : 0, 
        backgroundColor:"white"
    }
})