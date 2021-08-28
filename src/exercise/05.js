// Styling
// http://localhost:3000/isolated/exercise/05.js

import { italic } from 'chalk'
import * as React from 'react'
import '../box-styles.css'

const Box = (props) => {
  
  const {size, backgroundColor, text} = props;
  const style = {fontStyle: 'italic', backgroundColor};
  
  const element = (<div className={`box box--${size}`} style={style}>{text}</div>);
  return element
}
// 💰 Use the className for the size and style (backgroundColor) for the color
// 💰 each of the elements should also have the "box" className applied

// 🐨 add a className prop to each of these and apply the correct class names
// 💰 Here are the available class names: box, box--large, box--medium, box--small

// 🐨 add a style prop to each of them as well so their background color
// matches what the text says it should be as well as `fontStyle: 'italic'`
const smallBox = <div className="box box--small" style={{fontStyle: italic, backgroundColor: 'lightblue'}}>small lightblue box</div>
const mediumBox = <div className="box box--medium" style={{fontStyle:italic, backgroundColor: 'pink'}}>medium pink box</div>
const largeBox = <div className="box box--large" style={{fontStyle: italic, backgroundColor: 'orange'}}>large orange box</div>

function App() {
  return (
    <div>
      <Box size="small" backgroundColor='lightblue' text='small lightblue box'/>
       <Box size="medium" backgroundColor='pink' text='medium pink box'/>
        <Box size="large" backgroundColor='orange' text='large orange box'/>
    </div>
  )
}

export default App
