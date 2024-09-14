//what is use-state hook?
//--usestate is a react hook that allows us to add state to the functional component.
//It returns an array with two values:cureent state and a function to update it.
//the hook takes an initial value as an argument and returns an updated state value 
//whenever the setter function is called.

import React, { useRef, useState } from 'react';


const generateCaptcha = () => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let captcha = '';
    for (let i = 0; i < 6; i++) {
        captcha += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return captcha;
};

const LoginForm = () => {
    const inputRef = useRef(null);
    const [name, setName] = useState('');
    const[focus,setFocus] = useState(false)
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [captcha, setCaptcha] = useState(generateCaptcha());
    const [submittedData, setSubmittedData] = useState([]);

    const handleRegenerateCaptcha = () => {
        setCaptcha(generateCaptcha());
    };

    const handleSubmit = (e) => {
        e.preventDefault();
      
        console.log('Name:', name);
        console.log('Email:', email);
        console.log('Password:', password);
        console.log('Captcha:', captcha);
        const newData = {
            name: name,
            email: email,
            password: password,
            captcha: captcha
        };
        setSubmittedData([...submittedData, newData]);
        setName('');
        setEmail('');
        setPassword('');
        setCaptcha(generateCaptcha());
    };

    const handleFocus = () =>{
        setFocus(true)
    }
    const inputStyle = {
        backgroundColor : focus?'blue':"white",
        color:focus?"green":""
    }

    const colorChange = (e) =>{
        setName(e.target.value);
        setFocus(inputRef.current === document.activeElement);
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name</label> <br />
                    <input
                        type='text'
                        ref={inputRef}
                        value={name}
                        onChange={colorChange}
                        style={inputStyle}
                        onFocus={handleFocus}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="email">Email address</label> <br />
                    <input
                        type='email'
                        id='email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor='password'>Password</label> <br />
                    <input
                        type='password'
                        id='password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor='captcha'>Captcha</label> <br />
                    <input
                        type='text'
                        id='captcha'
                        value={captcha}
                        onChange={(e) => setCaptcha(e.target.value)}
                        required
                    />
                    <button type="button" onClick={handleRegenerateCaptcha}>Regenerate</button>
                </div>
                <button type="submit">Submit</button>
            </form>

            {submittedData.length > 0 && (
                <div>
                    <h2>Submitted Details:</h2>
                    {submittedData.map((data, index) => (
                        <div key={index}>
                            <p>Name: {data.name}</p>
                            <p>Email: {data.email}</p>
                         
                            <hr />
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default LoginForm;
