import React, { Component } from 'react'
import Box from './component/Box'

export default class BoxClass extends Component {

    constructor(){
        super();
        this.result=""
    }

    getResult=()=>{
        if(this.props.title==="Computer" && this.props.result !== "tie" && this.props.result!==""){
            this.result=this.props.result==="Win"? "Lose" : "Win"
          }else this.result=this.props.result
    }
  render() {
    this.getResult()
    return (
      <div>
        <div className={`box ${this.result}`}>
        <h1>{this.props.title}</h1>
        <img className="item-img" src={this.props.item && this.props.item.img}/>
        <h2>{this.result}</h2>
    </div>
      </div>
    )
  }
}
