import React from 'react';
import FadeLoader from 'react-spinners/FadeLoader';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%,-50%)',
  'margin-left': '20px',
  'margin-top': '20px',
};

export default function Spinner({ isLoading }) {
  return (
    <>
      <FadeLoader
        color="#50E3A4"
        loading={isLoading}
        cssOverride={style}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </>
  );
}
