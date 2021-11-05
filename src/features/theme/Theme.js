import React,{useState} from 'react'
import { useDispatch } from 'react-redux'
import { changeTextColor } from './ThemeSlice'
const Theme = () => {
    const [color,setColor] = useState('white')
    const dispatch = useDispatch()
    return (
        <div>
           <input type="text" className="textbox" onChange={(e)=>setColor(e.target.value)}/>
           <button className="button" onClick={()=>{dispatch(changeTextColor(color))}}>change text color</button> 
           
           </div>
    )
}

export default Theme
