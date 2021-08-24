import { useState } from 'react';
import {services} from '../../../services/user.service';
function Login (){

    const initialvalue = {
        email:null,
        password:null
    }
    const [value,setvalue] = useState(initialvalue);
    const onEmail = (event)=>{
        setvalue({...value,email:event.target.value});
    }
    const onPassword = (event)=>{
        setvalue({...value,password:event.target.value})
    }
    const submit = async (event)=>{
      event.preventDefault();
      console.log(value);
      await services.login(value);
    
      
    }

   return (
    <form>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"  onChange={onEmail} />
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" onChange={onPassword} />
  </div>
  <button type="submit" className="btn btn-primary" onClick={submit} >Submit</button>
</form>
   )
}

export default Login;