import React from 'react';

import './styles';

interface Props {
  name?: string;
}

export default function Heath({name}: Props) {
  return <h4 className="hey you">A new component named: {name}</h4>;
}
