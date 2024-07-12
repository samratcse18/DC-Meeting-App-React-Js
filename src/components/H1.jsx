import React from 'react';

function H1({
    children,
    text,
    color,
    fontSize,
    opacity,
    lineHeight,
    fontWeight,
    fontFamily,
    margin,
  }) {
    return (
      <>
        <h1 style={{color:`${color}`,fontSize:`${fontSize}`,opacity:`${opacity}`,lineHeight:`${lineHeight}`,fontWeight:`${fontWeight}`,fontFamily:`${fontFamily}`,margin:`${margin}`}}>
          {children}
        </h1>
      </>
    );
  }

export default H1;