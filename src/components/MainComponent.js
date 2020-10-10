import React, { Component } from 'react';
import Sign from './SigninComponent';
import Header from './HeaderComponent';



class Main extends Component{

  constructor(props){
    super(props);
  }

 
  render(){

    return(
     
<div
style={{
    position: 'absolute', 
    left: '50%', 
    top: '70%',
    transform: 'translate(-50%, -50%)' }}>
     <Header/>
     <Sign/>
     </div>
    
    
    );
  }
}


export default Main;