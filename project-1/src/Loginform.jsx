import React, { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [captchaToken, setCaptchaToken] = useState(null);
  // const[submit,setSubmit] =useState()

   const handleCaptchaChange=(value)=>{
    // console.log(value)
   
      setCaptchaToken(value)
    
    
    
   
   }

  const handleSubmit = (e) => {
    e.preventDefault();
     if(!email||!password){
      console.log('CAPTCHA Token:', captchaToken); 
     }

       else if (!captchaToken ) {
      alert('Please complete the CAPTCHA');
      return;
    }
    console.log('Email:', email);
    console.log('Password:', password);
    // console.log('CAPTCHA Token:', captchaToken);

    alert('Login Successful ✅');
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: '300px', margin: '2rem auto' }}>
      <h2>Login Form</h2>

      <input
        type="email"
        placeholder="Email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{ width: '100%', padding: '8px', marginBottom: '10px' }}
      />

      <input
        type="password"
        placeholder="Password"
        required
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{ width: '100%', padding: '8px', marginBottom: '10px' }}
      />

      <ReCAPTCHA
          sitekey="6Lcl3hArAAAAAOEs-CZPD_aX97s7qXl398oCY_Fd"
        onChange={handleCaptchaChange}
        style={{ marginBottom: '10px' }}
        required
      />

      <button
        type="submit" 
        style={{ marginTop: '1rem', padding: '10px 20px', width: '100%' }}
      >
        Login
      </button>
    </form>
  );
};

export default LoginForm;
