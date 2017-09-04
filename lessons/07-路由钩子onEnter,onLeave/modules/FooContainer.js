import React from 'react'

export default class FooContainer extends React.Component{
  constructor(props){
    super(props)
    this.state = {

    }
  }

  render(){
    return (
      <div>
          <div>Foo</div>
          {this.props.children}
      </div>
    )
  }
}
