import React, { Component } from 'react'
import BoxClass from './BoxClass'
import "./App.css"

const choice = {
    rock:{
      name : "Rock",
      img : "https://previews.123rf.com/images/8dda/8dda1605/8dda160500010/56822337-%ED%9D%B0-%EB%B0%B0%EA%B2%BD%EC%97%90-%EA%B3%A0%EB%A6%BD-%EB%90%9C-%EB%B0%94%EC%9C%84-%EB%8F%8C.jpg"
    },
    scissors:{
      name : "Scissors",
      img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSa5Ch3-1SK0QKazmVVNFrJQ8d5C7qL18zoMQ&s"
    },
    paper:{
      name : "Paper",
      img : "https://i.pinimg.com/736x/0b/41/25/0b41253a4041ddb57004d633e4979430.jpg"
    }
  }

export default class AppClass extends Component {

    constructor(){
        super()
            this.state={
                userSelect: null,
                computerSelect:null,
                result: ""
            }
        }

     play=(userChoice)=>{
        let computerChoice = this.randomChoice()
        this.setState({
            userSelect:choice[userChoice],
            computerSelect:computerChoice,
            result:this.judgement(choice[userChoice], computerChoice)
        })
      }
    
      judgement = (user, computer)=>{
        if(user.name===computer.name) return "tie"
        else if(user.name==="Rock") return computer.name==="Scissors"? "Win" : "Lose"
        else if(user.name==="Scissors") return computer.name==="Paper" ? "Win" : "Lose"
        else if(user.name==="Paper") return computer.name==="Rock"? "Win": "Lose"
      }
    
      randomChoice=()=>{
        let itemArray = Object.keys(choice)
        let randomItem = Math.floor(Math.random()*itemArray.length)
        let final = itemArray[randomItem]
        return choice[final]
      }

  render() {
    return (
        <div>
        <div className="main">
          <BoxClass title="You" item={this.state.userSelect} result={this.state.result}
          />
          <BoxClass title="Computer" item={this.state.computerSelect} result={this.state.result}
          />
        </div>
        <div className="main">
          <button onClick={() => this.play("scissors")}>가위</button>
          <button onClick={() => this.play("rock")}>바위</button>
          <button onClick={() => this.play("paper")}>보</button>
        </div>
      </div>
    )
  }

}