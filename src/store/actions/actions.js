export const doSomething =(val)=>{
    console.log("inside middleware",val);
    
 return {type:"doSomething",value:val}   
}