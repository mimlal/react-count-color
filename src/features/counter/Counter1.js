import React,{useState} from 'react'

function Counter1(){
    const [count,setCount]=useState(0)
    return (
        <div>
        <button className="button" aria-label='Increment value'
        onClick={()=>{setCount(count +1)}}>+</button>
        <span className="value">{count}</span>
        <button className="button" aria-label='Decrement value'
        onClick={()=>{setCount(count -1)}}>-</button>
      
        </div>
    )
}

export default Counter1
