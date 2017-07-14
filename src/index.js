import React from 'react'  //imports react library and assigns it to React variable.. listed in package.json
import {render} from 'react-dom'
import StorePicker from './components/StorePicker.js'  //needs ./ or will be searching in the node modules


render(<StorePicker />, document.querySelector('#main'))  //mounts javascript to div in html body

