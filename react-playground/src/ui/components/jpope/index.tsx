import React from 'react';

import './styles';

interface Props {
  name?: string;
}

export default function Jpope({name}: Props) {
  return <h1 className="red">A new component named: {name}</h1>;
}
