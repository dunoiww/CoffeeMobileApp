import { View, Text } from 'react-native'
import React from 'react'
import { PaperProvider } from 'react-native-paper'
import Navigation from './navigation/Navigation'

const App = () => {
  return (
    <PaperProvider>
      <Navigation />
    </PaperProvider>
  )
}

export default App