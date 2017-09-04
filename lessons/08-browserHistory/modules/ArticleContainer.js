import React from 'react'

export default class ArticleContainer extends React.Component{
  constructor(props){
    super(props)
    this.state = {

    }
  }

  render(){
    return (
      <div>
          <div>文章</div>
          {this.props.params.id}
      </div>
    )
  }
}
