import React, { Component } from 'react'
import { Button, Icon } from 'antd'
import './App.css'

class App extends Component {
  render () {
    return (
      <div className="App">
        <Button type="primary">按钮</Button>
        <Icon type="link"/>
      </div>
    )
  }
}

export default App
