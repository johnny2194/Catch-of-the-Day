import React from 'react'  //imports react library and assigns it to React variable.. listed in package.json
import {render} from 'react-dom'
import './css/style.css'
import App from './components/App'  //needs ./ or will be searching in the node modules


render(<App/>, document.querySelector('#main'))  //mounts javascript to div in html body

