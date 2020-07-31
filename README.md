# simple-react-flex-knob
dynamically re-sizable touch friendly knob for react
drop the simple-react-flex-knob.js file into /src 

or 

npm i simple-react-flex-knob --save

import Knob from './simple-react-flex-knob'

return <Knob diameter="20%" color="green" pointerColor="gray" action={(midi, val) => console.log(midi + " " + val)} />
