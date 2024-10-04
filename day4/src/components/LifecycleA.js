import React, { Component } from 'react'
import LifecycleB from './LifecycleB';

class LifecycleA extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         name: 'Hello Coder'
      }
      console.log("LifecycleA constructor")
    }
    
    static getDerivedStateFromProps(props, state) {
        console.log('LifecycleA getDerivedStateFromProps');
        return null
    }

    componentDidMount() {
        console.log('LifecycleA componentDidMount');
        
    }

  render() {
    console.log('LifecycleA render');
    return (
      <div>
        <div>This is Lifecycle A different methods.</div>
        <LifecycleB />
      </div>
    ); 
  }
}

export default LifecycleA
