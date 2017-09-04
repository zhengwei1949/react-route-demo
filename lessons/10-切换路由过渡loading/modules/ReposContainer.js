import React from 'react'
import {browserHistory} from 'react-router'
export default class ReposContainer extends React.Component{
  constructor(props){
    super(props)
    this.state = {

    }
  }
  componentDidMount() {
    setTimeout(function(){
      browserHistory.push('/about')
    },2000);
  }
  render(){
    return (
      <div>Repos</div>
    )
  }
}