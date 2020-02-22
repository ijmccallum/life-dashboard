import React from 'react';

const TextSetup = ({TextPrimitive}) => {
  ({children}) => {
    <TextPrimitive>
      {children}
    </TextPrimitive>
  }
};

export default TextSetup;
