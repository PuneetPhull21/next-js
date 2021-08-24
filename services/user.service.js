function login(value){
    const requestoptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body:JSON.stringify(value)
    }
    fetch('http://localhost:4000/login',requestoptions)
    .then(response=>response.json())
    .then(data=>{
        console.log(data);
       return data;
    })
}

function register(value){
    const requestoptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body:JSON.stringify(value)
    }
  return fetch('http://localhost:4000',requestoptions)
  .then(response=>response.json())
  .then(data=>{
      console.log(data);
      return data;
  })  
}

export const services = {
    login,
    register,
} 