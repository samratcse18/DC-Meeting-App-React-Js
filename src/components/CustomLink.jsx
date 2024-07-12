import React from 'react';
import { Link } from 'react-router-dom';

function CustomLink({
    children,
    to,
    text,
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
        <Link to={`${to}`} style={{textDecoration:`${textDecoration}`,color:`${color}`,fontSize:`${fontSize}`,opacity:`${opacity}`,lineHeight:`${lineHeight}`,fontWeight:`${fontWeight}`,fontFamily:`${fontFamily}`}}>{children}</Link>
      </>
    );
  }

export default CustomLink;