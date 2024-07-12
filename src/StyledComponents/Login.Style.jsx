import styled from 'styled-components';

export const MainDiv = styled.div`
  width: 630px;
  height: 100%;
  background: #FFFFFF;
  margin-top: 48px;
  margin-bottom: 48px;
  padding: 40px;
  border-radius: 24px;

  @media (max-width: 768px) {
    height: 100%;
    padding: 20px;
    background: #FFFFFF;
    margin-top: 12px;
    margin-bottom: 12px;
    border-radius: 16px;
  }
`;

export const InputBorder = {
  border: '1px solid #49454F',
  borderRadius: '5px',
  paddingLeft:'5px',
  paddingRight:'5px'
};

export const EventInputBorder = {
  border: 'none',
  borderRadius: '0px',
  background:'#F0F3F4',
  fontSize:'24px',
  fontFamily: 'Graphik',
  fontWeight: '400',
  lineHeight:'30px',
};

export const EventInputBorder2 = {
  border: 'none',
  borderRadius: '0px',
  fontSize:'14px',
  lineHeight:'18px',
  color:'#49454F',
  background:'#F0F3F4',
  fontFamily: 'Graphik',
  fontWeight: '400',
};
export const datetime = {
  border: 'none',
  borderRadius: '0px',
  fontSize:'14px',
  lineHeight:'18px',
  color:'#49454F',
  background:'#F0F3F4',
  fontFamily: 'Graphik',
  fontWeight: '400',
  width:'229px'
};

export const LoginSignupButton = {
  background:'#009975',
  height:'56px',
  width:'100%',
  color: '#FFFFFF',
  fontFamily: 'Graphik',
  fontSize: '14px',
  lineHeight: '15.4px',
  fontWeight: '500',
  border: '1px solid #009975',
};

