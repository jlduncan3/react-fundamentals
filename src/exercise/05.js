// Styling
// http://localhost:3000/isolated/exercise/05.js

import { italic } from 'chalk'
import * as React from 'react'
import '../box-styles.css'

const Box = ({size,backgroundColor,...otherProps}) => {
  
  const style = {fontStyle: 'italic', backgroundColor};

  const element = (<div className={`box box--${size}`} style={style} {...otherProps}/>);
  return element
}

function App() {
  return (
    <div>
      <Box size="small" backgroundColor='lightblue'>small lightblue box</Box>
       <Box size="medium" backgroundColor='pink'>medium pink box</Box>
        <Box size="large" backgroundColor='orange' >large orange box</Box>
        <Box  backgroundColor='gray' >sizeless gray box</Box>
        <Box  size="small" >colorless small box</Box>
    </div>
  )
}

export default App
