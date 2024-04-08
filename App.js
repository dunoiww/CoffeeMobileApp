import { View, Text } from 'react-native'
import React from 'react'
import { PaperProvider } from 'react-native-paper'
import Navigation from './navigation/Navigation'
import { Provider } from 'react-redux'
import { store } from './redux/store'

const App = () => {
  return (
    <PaperProvider>
      {/* <Provider store={store}> */}
        <Navigation />
      {/* </Provider> */}
    </PaperProvider>
  )
}

export default App