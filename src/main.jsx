import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import reducer from './store/reducers'
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'

const store = configureStore({reducer});

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
)
