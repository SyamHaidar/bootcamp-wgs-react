import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

// redux
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './redux/rootReducer'

// redux store
const store = createStore(rootReducer)

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    {/* wrapping application <Provider> component to make the store available */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
)
