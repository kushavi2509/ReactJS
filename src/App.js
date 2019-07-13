import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {connect} from "react-redux"

class  App extends Component{
  constructor(props){
    super(props)
    this.state={}
  }
  render(){
    return(
      <div onClick={this.props.doSomething} >{this.props.data}</div>

    )
  }
}

const mapStateToProps=(state)=>{
  return {
    data:state.data
  }
}

const mapDispatchToProps=(dispatch)=>{
  return{
    doSomething:()=> dispatch({type:"doSomething"})
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
