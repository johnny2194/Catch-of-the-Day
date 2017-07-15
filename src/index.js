import React from 'react'  //imports react library and assigns it to React variable.. listed in package.json
import {render} from 'react-dom'
import {BrowserRouter, Match, Miss} from 'react-router'

import './css/style.css'
import App from './components/App'  //needs ./ or will be searching in the node modules
import NotFound from './components/NotFound' 

import StorePicker from './components/StorePicker' 

const Root = () => {
  return (
    <BrowserRouter>
      <div>
        <Match exactly pattern="/" component={StorePicker}/>
        <Match pattern="/store/:storeId" component={App}/>
        <Miss component={NotFound}/>
      </div>
    </BrowserRouter>
  )
}

render(<Root/>, document.querySelector('#main'))  //mounts javascript to div in html body

