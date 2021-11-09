import React,{useState,useEffect} from 'react';
import {PostApiAction,UpdateApiAction} from '../action/action'
import {useDispatch,useSelector} from 'react-redux';
import {useParams} from 'react-router-dom';
import GetDetailsByHooks from '../../hooks/getDetailsByhook'
const UpdateDetail=()=>{
    const {id}=useParams();
    console.log(id)
    const [name,setName]=useState('');
    const [email,setEmail]=useState('');
    const [phone,setPhone]=useState('');
    const [country,setCountry]=useState('');
    const dispatch=useDispatch();

    const isUpateResponse=useSelector(state=>state.reducer.isUpdateResponse)
    
    const[detailsById]=GetDetailsByHooks(id);
    useEffect(()=>{
        const data = ()=>{
            if(detailsById.data){
                setName(detailsById.data.name)
                setEmail(detailsById.data.email)
                setPhone(detailsById.data.phone)
                setCountry(detailsById.data.country)
            }
        }
        data();
    },[detailsById.data])
    const nameHandlers=(e)=>{
        setName(e.target.value);

    }
    const emailHandlers=(e)=>{
        setEmail(e.target.value);
    }
    const phoneHandlers=(e)=>{
        setPhone(e.target.value);
    }
    const countryHandlers=(e)=>{
        setCountry(e.target.value);
    }
   const clickHandler=(e)=>{
      e.preventDefault();
      const finalData={
            name:name,
            email:email,
            phone:phone,
            country:country
      }
      dispatch(UpdateApiAction(finalData,id));
    }
    if(isUpateResponse){
        alert('your data has been udated')
    }
    return(
       <div>
      <form>
  <div className="form-row">
    <div className="form-group col-md-6">
      <label htmlFor="inputName">Name</label>
      <input type="name" className="form-control" 
      id="inputName"
       placeholder="enter name" 
       defaultValue={name}
       onChange={(e)=>nameHandlers(e)}
       />
    </div>
    <div className="form-group col-md-6">
      <label htmlFor="inputEmail">Email</label>
      <input type="email" 
      className="form-control"
       id="inputEmail" 
       defaultValue={email}
       placeholder="enter email" 
       onChange={(e)=>emailHandlers(e)}
       />
    </div>
  </div>
  <div className="form-row">
    <div className="form-group col-md-6">
      <label htmlFor="inputPhone">Phone</label>
      <input type="text" className="form-control" 
      id="inputPhone"
      defaultValue={phone}
       placeholder="enter phone"
       onChange={(e)=>phoneHandlers(e)}
       />
    </div>
    <div className="form-group col-md-6">
      <label htmlFor="inputCountry">Country</label>
      <input type="text" 
      className="form-control"
      defaultValue={country}
       id="inputCountry" 
       placeholder="enter country"
       onChange={(e)=>countryHandlers(e)}
       />
    </div>
  </div>
  
  <button type="submit" className="btn btn-primary"onClick={(e)=>{ clickHandler(e)}}>
  UpdateDetails
  </button>
</form>

       </div>

    )
}
export default UpdateDetail;