import {useSelector,useDispatch} from 'react-redux'
import {decrement,increment,incrementByAmount} from  './counterSlice'
function Counter(){
    const count=useSelector(state=>state.counter.count)
    const themeTextColor=useSelector(state=>state.theme.color)
    const dispatch=useDispatch()
    return (
        <div>
        <button className="button" aria-label='Increment value'
        onClick={()=>{dispatch(increment())}}>+</button>
        <span className="value" style={{color:themeTextColor}}>{count}</span>
        <button className="button" aria-label='Decrement value'
        onClick={()=>{dispatch(decrement())}}>-</button>
      
        <button className="button" onClick={()=>{dispatch(incrementByAmount(10))}}>increment bY 10</button>
      
        </div>
    )
}

export default Counter
