import Marquee from "react-fast-marquee";
import React from 'react';

const AssetsMarquee = ({children, ...props}) => {

  return (
    <Marquee>
        {children ? children : 'I can be a React component, multiple React components, or just some text.'}
    </Marquee>
  );
};

export default AssetsMarquee;
