import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { NativeRouter, Route, Link } from 'react-router-native'
import Home from './Components/Home'


export default class App extends React.Component {
  render() {
    return (
      <NativeRouter>
        <View style={styles.container}>
          <View style={styles.header}>
            <Link to='/'><Text>Home</Text></Link>
          </View>
          <View style={styles.routes}>
            <Route exact path='/' component={Home} />
          </View>
        </View>
      </NativeRouter>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    height: 50
  },
  routes: {
    flex: 1
  }
})
