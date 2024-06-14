// src/components/Formulario/Campo

import React from 'react';

interface CampoProps {
  type: string;
  placeholder: string;
}

const Campo: React.FC<CampoProps> = ({ type, placeholder }) => {
  return <input type={type} placeholder={placeholder} />;
};

export default Campo;
