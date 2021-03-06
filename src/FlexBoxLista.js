import React from 'react';

const FlexBoxLista = (props) => {
  return (
    <>
      <h2>{props.titulo}</h2>
      <div>{props.children}</div>
    </>
  );
};

export default FlexBoxLista;
