import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'
import './styles.css'
import Button from './Button'

function soma(a,b){ 
    alert(a + b)
}
function App() {
    return (
        <div className='App'>
            Hello World
            <Button onClick={() => soma(10,20)} name='Lucas Barros'></Button>
        </div>
    )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)