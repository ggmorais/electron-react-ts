import React from 'react'
import ReactDOM from 'react-dom'

import App from './App';

const mainElement = document.createElement('app')
document.body.appendChild(mainElement)

ReactDOM.render(<App />, mainElement)
