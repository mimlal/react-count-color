import React,{useState} from 'react';
import {PostApiAction} from '../action/action'
import {useDispatch,useSelector} from 'react-redux';
const Forms=()=>{
    const [name,setName]=useState('');
    const [email,setEmail]=useState('');
    const [phone,setPhone]=useState('');
    const [country,setCountry]=useState('');
    const dispatch=useDispatch();
    const isResponse=useSelector(state=>state.reducer.isResponse)
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
      dispatch(PostApiAction(finalData));
    }
    if(isResponse){
        alert('your response has been submitted')
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
       onChange={(e)=>nameHandlers(e)}
       />
    </div>
    <div className="form-group col-md-6">
      <label htmlFor="inputEmail">Email</label>
      <input type="email" 
      className="form-control"
       id="inputEmail" 
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
       placeholder="enter phone"
       onChange={(e)=>phoneHandlers(e)}
       />
    </div>
    <div className="form-group col-md-6">
      <label htmlFor="inputCountry">Country</label>
      <input type="text" 
      className="form-control"
       id="inputCountry" 
       placeholder="enter country"
       onChange={(e)=>countryHandlers(e)}
       />
    </div>
  </div>
  
  <button type="submit" className="btn btn-primary"onClick={(e)=>{ clickHandler(e)}}>
  Sign in
  </button>
</form>

       </div>

    )
}
export default Forms;