import './global.css'
import React from 'react';
import { BoardProvider } from './src/context/BoardContext';

export const wrapRootElement = ({ element }) => {
  return <BoardProvider>{element}</BoardProvider>;
};
