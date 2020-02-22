import React from 'react';

const ViewSetup = ({ViewPrimitive}) => {
  ({children}) => {
    <ViewPrimitive>
      {children}
    </ViewPrimitive>
  }
};

export default ViewSetup;
