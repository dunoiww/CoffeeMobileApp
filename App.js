import { View, Text } from 'react-native'
import React from 'react'
import { PaperProvider } from 'react-native-paper'

const App = () => {
  return (
    <PaperProvider>
      <Text>App</Text>
    </PaperProvider>
  )
}

export default App