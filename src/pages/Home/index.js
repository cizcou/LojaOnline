import React from 'react'
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native'

export default function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require('./assets/banner.jpeg')} style={styles.image} />
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    widht: '100%',
    backgroundColor: '#fff'
  },
  header: {
    marginBottom: 8
  },
  image: {
    widht: '100%'
  }
})
