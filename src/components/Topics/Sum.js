import React, { Component } from 'react';

class Sum extends Component {
    constructor(){
        super()
        this.state ={
            number1:0,
            number2:0,
            sum:null
        }  
    }

    newNumber1(val){
        this.setState({
            number1:val
        })
    }

    newNumber2(val){
        this.setState({
            number2:val
        })
    }

    newAddedNumber(){
        let num1 =this.state.number1
        let num2 =this.state.number2
        let total=Number(num1)+Number(num2)

       this.setState({
           sum:total
       })
    }
    render() {
       return(
        <div className="puzzleBox sumPB">
             <h4> Sum </h4>

             <input className="inputLine"onChange= {(a)=>this.newNumber1(a.target.value)}></input>

             <input className="inputLine"onChange= {(a)=>this.newNumber2(a.target.value)}></input>

             <button className="confirmationButton"onClick={()=>this.newAddedNumber()}>Add</button>

             <span className="resultsBox">Sum: {this.state.sum}</span>
        
      
         </div>
       )
    }
  }
export default Sum