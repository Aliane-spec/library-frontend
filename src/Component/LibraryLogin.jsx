import React, { useState } from 'react'
import LibraryBtn from './LibraryBtn';

function LibraryLogin() {

  const [doYouHaveAnAccount, setDoYouHaveAnAccount] = useState(true);
  const [username, setUsername] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [studentId, setStudentId] = useState('');
  const [email, setEmail] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleLogin = () => {
    alert(`Welcome ${username}. You have successfully logged in!`);
  };

  const handleRegister = () => {
    alert(
      `Registration information:\nStudent ID: ${studentId}\nEmail: ${email}\nPassword: ${registerPassword}\nConfirm Password: ${confirmPassword}`,
    );
  };

  return (
    <>
    { doYouHaveAnAccount ? (
                    <div style={{border:"3px solid blue", marginTop:"190px"}}>
                        <label>UserName:</label>
                        <input type="text" placeholder='Enter Your username' value={username} onChange={(event) => setUsername(event.target.value)}/><br/>
                        <label>Password:</label>
                        <input type="password" value={loginPassword} onChange={(event) => setLoginPassword(event.target.value)}/><br/>
                        <LibraryBtn buttonLabel="LOGIN" onClickButton={handleLogin}/> <br/>
                        <label>New here? </label> <LibraryBtn buttonLabel="Create Account" onClickButton={() => setDoYouHaveAnAccount(false)}/>
                    </div>
    ):(
            <div style={{border:"3px solid indigo", marginTop:"190px"}}>
                <label>Student ID:</label>
                <input type="text" placeholder='Enter Your Student ID' value={studentId} onChange={(event) => setStudentId(event.target.value)}/><br/>
                <label>Email:</label>
                <input type="email" value={email} onChange={(event) => setEmail(event.target.value)}/><br/>
                <label>Password:</label>
                <input type="password" value={registerPassword} onChange={(event) => setRegisterPassword(event.target.value)}/><br/>
                <label>Confirm Password:</label>
                <input type="password" value={confirmPassword} onChange={(event) => setConfirmPassword(event.target.value)}/><br/>
                <LibraryBtn buttonLabel="REGISTER" onClickButton={handleRegister}/> <br/>
                 <label>Already have an account?? </label> <LibraryBtn buttonLabel="Sign In" onClickButton={() => setDoYouHaveAnAccount(true)}/>
            </div>
    )
     }
    </>
  )
}

export default LibraryLogin