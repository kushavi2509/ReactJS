import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {connect} from "react-redux";
import * as actionCreator  from "./store/actions/actions"
import Form from "./container/Form"

class  App extends Component{
  constructor(props){
    super(props)
    this.state={}
  }
  render(){
    return(
      <div>
        <Form/>
      </div>
    )
  }
}

const mapStateToProps=(state)=>{
  return {
    // data:state.data
  }
}

const mapDispatchToProps=(dispatch)=>{
  return{
    // doSomething:()=> dispatch(actionCreator.doSomething(1))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
