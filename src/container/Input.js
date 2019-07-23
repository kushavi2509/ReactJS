import React from "react"
import classes from "./input.css";

const Input=(props )=>{
    let inputElement= null;
    switch(props.elementType){
        case("input"):
            inputElement=<input className={classes.InputElement} {...props.elementConfig} onChange={props.change} />
            break;
        case("textarea"):
        inputElement=<textarea className={classes.InputElement} {...props.elementConfig} value ={props.value} onChange={props.change}/>
        break;
        case("select"):
            inputElement=(
                <select className={classes.InputElement}  value ={props.value} onChange={props.change}>
                {
                    props.elementConfig.option.map((option)=>
                        <option key={option.value} option={option.value}>{option.name}</option>
                    )
                }
                </select>
            )
            break;
        default:
            inputElement=<input className={classes.InputElement} {...props}/>
            break;
    }
    return(
        <div className={classes.Input}>{
            console.log(props)
            
        }
            <label className={classes.Label}>{props.label}</label>
            {inputElement}
        </div>
    )   
}

export default Input;