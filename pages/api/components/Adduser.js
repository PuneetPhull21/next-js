import { useState } from "react";
import {services} from '../../../services/user.service';

function AddUser(){
    const initialvalue = {
        firstName:'',
        lastName:'',
        email:'',
        password:'',
    }

    const [value,setvalue]= useState(initialvalue);

    const firstNamehandler = (event)=>{
        return setvalue({...value,firstName:event.target.value});
    }
    const lastNamehandler = (event)=>{
        return setvalue({...value,lastName:event.target.value});
    }
    const emailhandler = (event)=>{
        return setvalue({...value,email:event.target.value});
    }
    const passwordhandler = (event)=>{
        return setvalue({...value,password:event.target.value});
    }
    const submit = (event)=>{
        event.preventDefault();
        services.register(value);
    }
    

    return (
  <>
  <form>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={emailhandler}   />
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">FirstName</label>
    <input type="text" className="form-control" id="exampleInpu2"  onChange={firstNamehandler} />
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">LastName</label>
    <input type="text" className="form-control" id="exampleInput1" onChange={lastNamehandler} />
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" onChange={passwordhandler} />
  </div>
  <button type="submit" className="btn btn-primary" onClick={submit} >Submit</button>
</form>
  </>
    )
}

export default AddUser;