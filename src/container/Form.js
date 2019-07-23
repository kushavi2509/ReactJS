import React,{Component} from "react";
import Input from "./Input";
import {connect} from "react-redux";

class  OrderDetail extends Component{
    constructor(props){
        super(props)
        this.state={
            orderForm:{
                    name:{
                        elementType:"input",
                        elementConfig:{
                            type:"text",
                            placeholder:"Your Name"
                        }, 
                        value:""
                    },
                    street:{
                        elementType:"input",
                        elementConfig:{
                            type:"text",
                            placeholder:"street"
                        }, 
                        value:""
                    },
                    zipCode:{
                        elementType:"input",
                        elementConfig:{
                            type:"text",
                            placeholder:"ZipCode"
                        }, 
                        value:""
                    },
                    country:{
                        elementType:"input",
                        elementConfig:{
                            type:"text",
                            placeholder:"Your Name"
                        }, 
                        value:""
                    },
                    SalesMan:{
                        elementType:"select",
                        elementConfig:{
                            option:[{value:"SALE1", name:"ABHISHEK"},{value:"SALE2", name:"SHUBHAM"}]
                        }, 
                        value:""
                    }
                
            }

        }
    }

    inputChangeHandler=(event,inputIdentifier)=>{
        const updateOrderForm={
            ...this.state.orderForm
        }
        const updatedFormElement ={
            ...updateOrderForm[inputIdentifier]
        }

        updatedFormElement.value= event.target.value;
        updateOrderForm[inputIdentifier]= updatedFormElement
        this.setState({orderForm:updateOrderForm})
    }
    orderHandler=(event)=>{
        const formData={};
        for (let formElementIdentifire in this.state.orderForm){
            formData[formElementIdentifire]=this.state.orderForm[formElementIdentifire].value;
        }
        const order={
            order:formData
        }
        console.log("order>>>>>>"+order)
    }
    render(){
        const formElementArray=[];
        for (let key in this.state.orderForm){
            formElementArray.push({
                id:key,
                config:this.state.orderForm[key]
            })
            
        }

        return (

            <div>
                <form onSubmit={this.orderHandler}>
                    {
                        formElementArray.map((formElement)=>(
                            <div>
                            {console.log(formElement)
                            }
                            <Input key={formElement.id}  elementType={formElement.config.elementType} elementConfig={formElement.config.elementConfig} value={formElement.config.value}
                            change={(event)=>this.inputChangeHandler(event,formElement.id)}/>
                            </div>
                        ))
                    }
                    <button btnType="success">Add</button>
                </form>
               
            </div>
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
    }
  }
  
  export default connect(mapStateToProps,mapDispatchToProps)(OrderDetail);
  