import React from 'react'
import {Link} from 'react-router'

export default class AppContainer extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      isLoading:true 
    }
  }
  componentDidMount() {
    setTimeout(()=>{
      this.setState({
        isLoading:false
      })
    },2000)
  }
   // 渲染loading遮罩
   renderLoading(){
    return (
        <div>
            正在加载数据，请等待......
        </div>
    )
  }
  render(){
    if(this.state.isLoading){
      return this.renderLoading();
    }
    return (
      <div>
        <h1>Hello, React Router!</h1>
        <ul role="nav">
          <li><Link to="/about">About</Link></li>
          <li><Link to="/repos">Repos</Link></li>
        </ul>
        {this.props.children}
      </div>
    )
  }
}