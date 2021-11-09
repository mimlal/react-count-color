import React,{useEffect} from 'react'
import {GetApiAction,DeleteApiAction} from '../action/action'
import { useDispatch ,useSelector} from 'react-redux'
import {Link} from 'react-router-dom'

const Home = () => {
    const responseData=useSelector(state=>state.reducer.details)
    const isDeleteResponse=useSelector(state=>state.reducer.isDeleteResponse)
    console.log(responseData)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(GetApiAction())
    }, [dispatch])
    if(isDeleteResponse){
      alert("your data is delete")
      window.location.reload(false)
    }
    const result= responseData ? responseData.map((data,index)=>{
        return <tr key={index}>
        <th scope="row">{data.id}</th>
        <td>{data.name}</td>
        <td>{data.email}</td>
        <td>{data.phone}</td>
        <td>{data.country}</td>
        <td>
         <Link to={`/edit/${data.id}`}>
         <span className="material-icons">Edit</span>
         </Link>
        </td>
        <td>
       
         <span className="material-icons"onClick={()=>dispatch(DeleteApiAction(data.id))}>delete</span>
        
        </td>
      </tr>
    }):null
    return (
        <div>
            <h1>react redux </h1>
 <table className="table table-dark">
  <thead>
    <tr>
      <th scope="col">id</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Phone</th>
      <th scope="col">Country</th>
      <th scope="col">Edit</th>
      <th scope="col">Delete</th>
    </tr>
  </thead>
  <tbody>
     {result}
  </tbody>
</table>
        </div>
    )
}

export default Home
