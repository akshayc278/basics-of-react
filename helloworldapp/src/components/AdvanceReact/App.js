import React, { PureComponent } from 'react'
import ParentComponent from './ParentComponent'

class App extends PureComponent {
  render() {
    return (
      <div className="App">
          <ParentComponent/>
      </div>
    )
  }
}

export default App
