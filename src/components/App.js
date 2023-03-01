import React, {useState, useEffect } from 'react'
import '../styles/App.css';

const App = () => {

  const formobj = {
    username: '',
    email: '',
    password: '',
    contactNo: '',
  }
  const [formInput, setFormInput] = useState(formobj)
  const [status, setStatus] = useState(false);
  const [formerror, setFormerror] = useState({});


  function handleInput(e) {
    setFormInput({
      ...formInput, [e.target.name]: e.target.value
    })
  }

  function handlesubmit(e) {
    e.preventDefault();

    const ret = validation();
    if (ret) {
      setStatus(true);
      setFormInput(formobj);
    }
  }

  function validation() {
    let errorOdj = {}
    if (formInput.username === '') {
      errorOdj.username = 'name is empty'
    }
    if (formInput.email === '') {
      errorOdj.email = 'email is empty'
    }
    if (formInput.password === '') {
      errorOdj.password = 'password is empty'
    }
    if (formInput.contactNo === '') {
      errorOdj.contactNo = 'contact is empty'
    }
    if (formInput.password.length < 4) {
      errorOdj.password = 'password must have more then 4 charecter'
    }
    if (formInput.contactNo.length < 10 || formInput.contactNo.length > 10) {
      errorOdj.contactNo = 'Contact number should have exactly 10 digits'
    }

    setFormerror(errorOdj);

    if (Object.keys(errorOdj).length > 0) {
      return false
    } else {
      return true
    }

  }

  useEffect(() => {
    console.log(formInput.contactNo + ' ' + formInput.email + " " + formInput.password + " " + formInput.username + status)

  })

  return (
    <div id="main">
      {status && <h3 className='success-alert'>Registered Successfullly</h3>}
      <form>
        <h1>Registeration Form</h1>
        <section>
          <label>Username</label>
          <input type="text" name='username' onChange={handleInput} value={formInput.username} />
          {formerror.username && <p className='username-error'>{formerror.username}</p>}
          <label>Email</label>
          <input type="email" name='email' onChange={handleInput} value={formInput.email}/>
          {formerror.email && <p className='email-error'>{formerror.email}</p>}
          <label>Password</label>
          <input type="password" name='password' onChange={handleInput} value={formInput.password}/>
          {formerror.password && <p className='password-error'>{formerror.password}</p>}
          <label>Contact Number</label>
          <input type="number" name='contactNo' onChange={handleInput} value={formInput.contactNo} />
          {formerror.contactNo && <p className='contactNo-error'>{formerror.contactNo}</p>}
          <button onClick={handlesubmit}>Submit</button>
        </section>
      </form>
    </div>
  )
}


export default App;
