import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import { Button } from 'antd'

const App: React.FC = () => {
  return (
    <div className='App'>
      <header className='App-header'>
        <Button type='primary'>typescript</Button>
      </header>
    </div>
  )
}

export default App
