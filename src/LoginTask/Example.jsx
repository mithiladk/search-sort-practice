import React, { useState } from 'react';

const Example = () => {
  const [user, setUser] = useState({
    firstname: "",
    lastname:"",
    email: "",
    password: "",
    address: ""
  });

  const [error, setError] = useState({});

  const validation = () => {
    let error = {};

    const firstNamePat = /^[a-zA-Z]{1,4}$/;
    const lastNamePat = /^[a-zA-Z]{3,8}$/;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

    if (!user.email) {
      error.email = "Email address is required";
    } else if (!emailPattern.test(user.email)) {
      error.email = 'Invalid email address';
    }

    if (!user.password) {
      error.password = "Password is required";
    } else if (!passwordPattern.test(user.password)) {
      error.password = 'Invalid Password';
    }

    if (!user.firstname) {
      error.firstname = "firstname is required";
    } else if (!firstNamePat.test(user.firstname)) {
      error.firstname = 'firstname should be a maximum of 4 characters';
    }
    if (!user.lastname) {
        error.lastname = "lastname is required";
      } else if (!lastNamePat.test(user.lastname)) {
        error.lastname = 'lastname should be a minimum of 3 characters';
      }

      if (!user.address) {
        error.address = "Address is required";
      }
    return error;
  };

  let name, value;

  const postUserData = (e) => {
    name = e.target.name;
    value = e.target.value;

    setUser({ ...user, [name]: value });
    setError((prevError) => ({ ...prevError, [name]: "" }));
  };

  const submit = (e) => {
    e.preventDefault();
    setError(validation());
  };

  return (
    <>
      <div className='container'>
        <div className='row justify-content-center align-items-center'>
          <div className='col-lg-12'>
            <form action='#' method='post'>
              <div className='form-group'>
                <label htmlFor="firstname">FirstName</label> <br />
                <input
                  type='text'
                  name='firstname'
                  value={user?.firstname}
                //   maxLength="8"
                  onChange={(e) => postUserData(e)}
                />
                <br />
                <span style={{ color: "red" }}>{error?.firstname}</span>
                <br />
                <label htmlFor="lastname">LastName</label> <br />
                <input
                  type='text'
                  name='lastname'
                  value={user?.lastnametname}
                //   maxLength="8"
                  onChange={(e) => postUserData(e)}
                />
                <br />
                <span style={{ color: "red" }}>{error?.lastname}</span>
                <br />
                <label htmlFor="email">Email</label> <br />
                <input
                  type='email'
                  name='email'
                  value={user?.email}
                  onChange={(e) => postUserData(e)}
                />
                <br />
                <span style={{ color: "red" }}>{error?.email}</span>
                <br />
                <label htmlFor="password">Password</label> <br />
                <input
                  type='password'
                  name='password'
                  value={user?.password}
                  onChange={(e) => postUserData(e)}
                />
                <br />
                <span style={{ color: "red" }}>{error?.password}</span>
                <br />

<label htmlFor='address'>Address</label> <br />
<textarea
  name='address'
  value={user.address}
  onChange={postUserData}
/>
<span style={{ color: "red" }}>{error.address}</span>
              </div>
              <div>
                <button className='btn btn-warning text-white' onClick={submit}>Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <br />
    </>
  );
}

export default Example;
