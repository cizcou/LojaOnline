import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from './pages/Home'
import Detail from './pages/Detail'
import Login from './pages/Login'
const Stack = createNativeStackNavigator()

function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigaor>
        <Stack.Screen
          nome="Home"
          component={Home}
          options={{ headerShow: false }}
        />
        <Stack.Screen nome="Detail" component={Detail} />
        <Stack.Screen nome="Login" component={Login} />
      </Stack.Navigaor>
    </NavigationContainer>
  )
}

export default Routes
