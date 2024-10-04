import React, { PureComponent } from 'react' 

class PureComp extends PureComponent {
  render() {
    console.log('Pure Component renders.......');
    
    return (
      <div>
        Pure components lies here ha ha ha {this.props.name}
      </div>
    )
  }
}

export default PureComp
