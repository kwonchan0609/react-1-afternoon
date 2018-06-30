import React, { Component } from 'react';

class FilterObject extends Component {
    constructor(){
        super()
        this.state={
            unFilteredArray: [{ name: "Jimmy Joe", title: "Hack0r", age: 12 }, { name: "Jeremy Schrader", age: 24, hairColor: "brown" }, { name: "Carly Armstrong", title: "CEO" }],
            userInput:'',
            filteredArray:[]
        }
    }
    updateUserInput(val){
        this.setState({
            userInput:val
        })
    }

    updateArray(prop){
        let variable = this.state.unFilteredArray
        let newFilteredArray=[]
       for(let i=0;i<variable.length;i++){
           if(variable[i].hasOwnProperty(prop)){
             newFilteredArray.push(variable[i])
           }
       }
       this.setState({
           filteredArray:newFilteredArray
       })
    }
    render() {
       return (
        <div className="puzzleBox filterObjectPB">
        <h4> Filter Object </h4>
        <span className="puzzleText">Originals: {JSON.stringify(this.state.unFilteredArray,null,10)} </span>

        <input className="inputLine"onChange={(a)=>this.updateUserInput(a.target.value)}></input>

        <button className="confirmationButton"onClick={()=>this.updateArray(this.state.userInput)}>Filter</button>

        

         <span className="resultsBox filterObjectRB"> Filtered:{JSON.stringify(this.state.filteredArray,null,10)}</span>
        
      
    </div>
       )
      
    }
  }
export default FilterObject