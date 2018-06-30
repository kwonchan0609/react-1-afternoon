import React, { Component } from 'react';

class FilterString extends Component {

    constructor(){
        super()
        this.state = {
            unFilteredArray:[ "James", "Jessica", "Melody", "Tyler", "Blake", "Jennifer", "Mark", "Maddy"],
            userInput: '',
            filteredArray:[]

        }
    }
    
    updateUserInput(val){
        this.setState({
        userInput:val
    })
    }

    upDateArray(prop){
        let helo=this.state.unFilteredArray
       let newArr =[]
       for(let i=0;i<helo.length;i++){
          if(helo[i]===prop){
              newArr.push(helo[i])
          }
         }
        this.setState({
           filteredArray:newArr
       })
    }




    render() {
       return( 
        <div className="puzzleBox filterStringPB">
             <h4> Filter Strings </h4>
             <span className="puzzleText">{JSON.stringify(this.state.unFilteredArray,null,10)}</span>

             <input className="inputLine" onChange={(a)=>this.updateUserInput(a.target.value)}></input>

             <button className="confirmationButton" onClick={()=>this.upDateArray(this.state.userInput)}>Filter</button>

             

             <span className="resultsBox filterStringRB">Filtered: {JSON.stringify(this.state.filteredArray,null,10)}</span>
        
      
        </div>
       )
    }
  }
export default FilterString