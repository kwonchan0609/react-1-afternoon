import React, { Component } from 'react';

class EvenAndOdd extends Component {

    constructor(){
        super()
        this.state = {
            evenArray:[],
            oddArray:[],
            userInput:'',
        }
    }

     updateUserInput(hi){
        this.setState({
            userInput:hi
        })
     }

     updateArray(){
         let even =[]
         let odd=[]

         this.state.userInput.split(',').map(val=>{
            val%2===0? even.push(val):odd.push(val)
         })
         
         this.setState({
             evenArray:even.join(', '),
             oddArray:odd.join(', ')
               })
        
     }

        
   
    render() {
       return (
           <div className="puzzleBox evenAndOddPB">
               <h4> Evens and Odds </h4>

               <input className="inputLine" onChange={(e)=> this.updateUserInput(e.target.value)}></input>

               <button className="confirmationButton" onClick={()=>this.updateArray()}>
               Split</button>
                 
 
               <span className="resultsBox">Evens: [{this.state.evenArray}]</span>
              

                <span className="resultsBox">Odds: [{this.state.oddArray}]</span>
               
             
           </div>

       )

      
    }
  }
export default EvenAndOdd