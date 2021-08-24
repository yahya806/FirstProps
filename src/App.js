import './App.css';
import Child from './components/Child';
import Profile from './components/Profile';


const Component =() =>{
  const handleName=(fullname)=>{
    alert(`$fullName`)
  }
  return (
    
    <div className="App" >
      <div className="mypic">
      <Child />
      </div>
      <div className="main">
     <Profile
    fullName='Yahya Elhammi'
    bio='Welcome in my page'
    profession='student in gomycode'
    handleName={handleName}>
   
</Profile>
</div>
<div className="last">
<h1>This is my props checkpoint </h1>
</div>
<div className="foot">
  <p>All Right reserved </p>
</div>
</div>
  );
}

export default Component;
