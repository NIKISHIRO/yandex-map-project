import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import './App.css';
import { Order } from './components/Order';

function App() {
  return (
    <Order />
  );
}

export {
  App,
};
