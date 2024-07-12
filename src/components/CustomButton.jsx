import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { ButtonStyle } from '../StyledComponents/Home.style';

function CustomButton({
    children,
    to,
    text,
    type,
    color,
    textDecoration,
    fontSize,
    opacity,
    lineHeight,
    fontWeight,
    fontFamily,
  }) {
    return (
      <>
       <Button style={ButtonStyle} onClick={() => upcomingPastAllEvent(`${type}`)}>{children}</Button>{' '}
      </>
    );
  }

export default CustomButton;