import Blog from '@/components/blog';
import Wrapper from '@/layouts/Wrapper';
import React from 'react';


export const metadata = {
  title: "Blog - Elco Dev",
};


const index = () => {
  return (
    <Wrapper>
      <Blog />
    </Wrapper>
  );
};

export default index;