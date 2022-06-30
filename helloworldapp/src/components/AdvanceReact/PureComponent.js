import React, { PureComponent } from 'react'
//pure component reloads only if ref(memory address changes )
class PureComponent extends PureComponent {
  render() {
    return (
        <div>
          PureComponent {this.props.name}
        </div>
    )
  }
}

export default PureComponent