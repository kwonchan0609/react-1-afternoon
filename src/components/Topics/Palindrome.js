import React, { Component } from 'react';

class Palindrome extends Component {
    constructor(){
        super()
        this.state={
            userInput:'',
            Palindrome:''
        }
    }

    updateUserInput(yolo){
        this.setState({
            userInput:yolo
        })
    }

    newPalindrome(){
        let hola =this.state.userInput
        let isTrue ='false'
        let arr1=hola.split('').slice(0)
        let arr2=hola.split('').slice(0).reverse()
        for(let i=0;i<hola.length;i++){
        if(arr1[i]===arr2[i]){
           isTrue="true"
        }else{
            isTrue="false"
        }
       
    }
       
        this.setState({
            Palindrome:isTrue
        })
        console.log(isTrue)
    

    }


    render() {
       return (
        <div className="puzzleBox sumPB">
             <h4> Palindrome </h4>

             <input className="inputLine" onChange={(e)=> this.updateUserInput(e.target.value)}></input>

             <button className="confirmationButton" onClick={()=>this.newPalindrome(this.state.userInput)} >Check</button>

             <span className="resultsBox">Palindrome: {this.state.Palindrome}</span>
   
         </div>
       )
    }
  }
export default Palindrome