import React from 'react'
import {Provider} from 'react-redux'
import configureStore from '../store'
import '../styles/globals.sass'

const store = configureStore()
const SomaniHoliday = ({ Component , pageProps }) => {
  return(
    <Provider store={ store }>
      <Component {...pageProps} />
    </Provider>)
}
export default SomaniHoliday
