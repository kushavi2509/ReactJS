const initialState={
    data:"Cool carnation"
}

 const reducer = (state= initialState,action)=>{
     const newState={...state}
    
    switch(action.type){
        case("doSomething"):{
            newState.data="cool Only"   
        }
         default:{

        }
    }
    return newState

 }


 export default reducer; 