import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { GoogleLoginButton } from "react-social-login-buttons";
import { LoginSocialGoogle } from "reactjs-social-login";
import google from '../components/GoogleIcon'

const SocialHome = ({access_token}) => {

  const [accessToken, setAccessToken] = useState('');

  const exchangeCodeForTokens = async (code) => {
    const client_id = "558135012588-2vd3rau8mocs5ss6l6unsc301rchqa0v.apps.googleusercontent.com";
    const client_secret = "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";  
    // const redirect_uri = "http://localhost:5173"; 
    const redirect_uri = "https://dcmeeting.bestinbd.com"; 

    const params = new URLSearchParams();
    params.append('client_id', client_id);
    params.append('client_secret', client_secret);
    params.append('code', code);
    params.append('grant_type', 'authorization_code');
    params.append('redirect_uri', redirect_uri);

    try {
      const response = await axios.post('https://oauth2.googleapis.com/token', params);
      setAccessToken(response.data.access_token);
    } catch (error) {
      
    }
  };
  access_token(accessToken);
  return (
    <div>
      <LoginSocialGoogle
        client_id={"558135012588-2vd3rau8mocs5ss6l6unsc301rchqa0v.apps.googleusercontent.com"}
        scope="openid https://www.googleapis.com/auth/calendar https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile"
        discoveryDocs="claims_supported"
        access_type="offline"
        onResolve={({ data }) => {
          exchangeCodeForTokens(data.code);
        }}
        onReject={(err) => {
          
        }}
      >
        <GoogleLoginButton icon={google} className='d-flex justify-content-center align-items-center' text={"Login with Google"} style={{border:'none',borderRadius:'5px',boxShadow:'none',height:'40px',fontFamily:'Graphik',fontSize:'14px',fontWeight:'500',color:'#009975'}} align={"center"}/>
      </LoginSocialGoogle>
    </div>
  );
};

export default SocialHome;
