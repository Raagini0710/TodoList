import '../Style/Header.css'
import React, {useState } from 'react';
import Modal from 'react-modal';


const customStyles = {
  content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      backgroundColor: 'rgba(0,0,0,0.75)',
      textAlign: 'center',
      width:"450px"
  }
};

export default function Header() {
//   const location = useLocation();
  // const [background, setBackground] = useState("red");
  const [loginmodalOpen, setLoginModalopen] = useState(false);
  const [accmodalOpen, setAccModalOpen] = useState(false);
  const [mail, setMail] = useState("")
  const [pass, setPass] = useState("")
  const [login, setLogin] = useState(false)
  const [username, setUsername] = useState("")
  const [pic, setPic] = useState("");
  // const [logUser, setLogUser] = useState([]);
  // const [signUser, setSignUser] = useState([])
  const [name, setName] = useState("")

  

  const loginOpen = () => {
    setLoginModalopen(true)
}
const accountOpen = () => {
  setAccModalOpen(true)
}

const loginClose = () => {
  setLoginModalopen(false)
}
const accountClose = () => {
  setAccModalOpen(false)
}

const LogOut = ()  =>{
//   googleLogout();
  setLogin(false);
  sessionStorage.clear() ; 
  setUsername("");
  setPic("");
}



const loginApi = (e) =>{
  e.preventDefault();
  const data ={
    email:mail,
    password:pass
  }
  loginClose()
}


const signupApi = (e) =>{
e.preventDefault();
const data = {
  username : name,
  email:mail,
  password:pass
}
accountClose()

}
const targetName = (e) => {
  setName(e.target.value)
}
const targetMail = (e) => {
  setMail(e.target.value)
}
const targetPass = (e) => {
  setPass(e.target.value)
}

  return (
    <div>
      {!login?(<div className='sticky' style={{ backgroundColor: 'lightblue',height:'50px'}}>
        
        <button type="button" className="btn login" data-bs-toggle="button" onClick={loginOpen}>Login</button>
        <button type="button" className="btn btn-outline-dark account" onClick={accountOpen}>Create an account</button>
      </div>):(<div class="container-fluid head" style={{ backgroundColor: 'gray', height:"65px" }}>
          {/* <div class="box">e!</div> */}
          <img
          className='user-info'
            src={pic}
            alt="my img"
            // height={'50px'}
            // width={'60px'}
            style={{ borderRadius: '50%', marginTop: '18px', marginRight: '50px',width:"70px" }}
          />
          <button className="btn btn-outline-danger text-white mx-2" onClick={LogOut} style={{ float: 'right'}}>Logout</button>
          <button className="btn btn-outline-danger text-white" style={{ float: 'right' }}>{username}</button>
        </div>
      )
}
<Modal id="login"
        isOpen={loginmodalOpen}
        style={customStyles}>
          <h1 style={{ margin: 'auto', textAlign: 'center', color: 'orange' }}> <b>Login credentials</b>  </h1>
          <label><h3 style={{ color: 'deeppink' }}>Email:</h3></label>
          <br/>
          <input type="email" value={mail} className='border border-3 rounded-3 shadow-lg  mb-5 bg-body' onChange={targetMail} placeholder='Enter a valid Email' />
          <br/>
          <label><h3 style={{ color: 'deeppink' }}>Password:</h3></label>
          <br />
          <input type="password" value={pass} className='border border-3 rounded-3 shadow-lg  mb-5 bg-body' onChange={targetPass} placeholder='Enter Password'/>
          <br/>
          <button className="logins"  value={username} onClick={loginApi}>login</button>
          <br/>
          <br/>
          <div style={{ textAlign: 'center',margin: '0 auto', maxWidth: '200px'}} className='px-2'>
                    
                </div>

                <br />
                <br />
          <button className="close"  onClick={loginClose}>Close</button>
          <br/>
        </Modal>
        <Modal isOpen={accmodalOpen} style={customStyles}>
                <form onSubmit={signupApi}>
                    <h1 style={{ color: 'orange' }}>Registeration Form</h1>
                    <br />
                    <label><h3 style={{ color: 'deeppink' }}>Username :</h3></label>
                    <br />
                    <input type="text" onChange={targetName} value={name} className='border border-3 rounded-3 shadow-lg  mb-5 bg-body' placeholder='Enter a name' />
                    <br />
                    <label><h3 style={{ color: 'deeppink'}}>Email:</h3></label>
                    <br />
                    <input type="email" onChange={targetMail} value={mail} className='border border-3 rounded-3 shadow-lg  mb-5 bg-body' placeholder='Enter a valid Email' />
                    <br />
                    <label><h3 style={{ color: 'deeppink'}}>Password:</h3></label>
                    <br />
                    <input type="password" onChange={targetPass} value={pass} className='border border-3 rounded-3 shadow-lg  mb-5 bg-body' placeholder='Enter Password' />
                    <br />
                    <a href=" " >Do you have any account.</a>
                    <br /><br />
                    <input type="submit" className='border border-3 rounded-3 submit' onClick={signupApi} value="submit" />
                    
                </form>
            </Modal>

    </div>
  );
}