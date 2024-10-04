import React, { Component, PureComponent } from 'react'
import RegularComp from './RegularComp'
import PureComp from './PureComp'
import MemoComp from './MemoComp'

class ParentComp extends PureComponent {

    constructor(props) {
      super(props)
    
      this.state = {
         name: 'Coder'
      }
    }

    componentDidMount() {
        setInterval( () => {
            this.setState({
                name: 'Coder'
            })
        }, 2000 )
    }
    
  render() {
    console.log('**************Parent Component*******************');
    
    return (
      <div>
        Parent Component lies here ha ha ha!!
        {/* <RegularComp name={this.state.name} /> */}
        {/* <PureComp name={this.state.name} /> */}
        <MemoComp name = {this.state.name} />
      </div>
    )
  }
}

export default ParentComp
