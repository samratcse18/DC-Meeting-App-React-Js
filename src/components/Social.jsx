import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { GoogleLoginButton } from "react-social-login-buttons";
import { LoginSocialGoogle } from "reactjs-social-login";
import google from '../components/GoogleIcon'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { userInfo } from '../Store/Reducers/userReducer';
import { useDispatch } from 'react-redux';

const Social = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [accessToken, setAccessToken] = useState('');
  const [refreshToken, setRefreshToken] = useState('');
  const [formData, setFormData] = useState({
    access_token: '',
  });

  useEffect(() => {
    setFormData(prevFormData => ({
        ...prevFormData,
        access_token: accessToken
    }));
}, [accessToken]);

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
      setRefreshToken(response.data.refresh_token);
      // newAccessTokens(response.data.refresh_token);
    } catch (error) {
      
    }
  };
  console.log(accessToken);
  useEffect(() => {
    const login = async () => {
      try {
        const response = await fetch('https://meetingapp.bestinbd.com/auth/social-auth', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            // 'x-access-token': accessToken,
          },
          body: JSON.stringify(formData),
        });

        var Data = await response.json();
        var data = Data.data;
        if (response.ok) {
          toast.success(Data.message);
          navigate('/home');
          dispatch(userInfo(data));
          // console.log('User logged in successfully:', data);
          localStorage.setItem('Loggedin', true);
          localStorage.setItem('jwt_token', data.jwt_token);
          localStorage.setItem('refreshToken', refreshToken);
        } else {
          toast.error(Data.message || 'Something Went Wrong');
        }
      } catch (error) {
        
      }
    };

    if (formData.access_token) {
      login();
    }
  }, [formData]);

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
        <GoogleLoginButton icon={google} className='d-flex justify-content-center align-items-center' text={"Login with Google"} style={{border:'1px solid #49454F',borderRadius:'5px',boxShadow:'none',height:'56px',fontFamily:'Graphik',fontSize:'14px',fontWeight:'500',color:'#009975'}} align={"center"}/>
      </LoginSocialGoogle>
    </div>
  );
};

export default Social;
