import React from 'react'
import styled from 'styled-components';
import Dashboard from '../Components/Home/Dashboard';
import Sidebar from '../Components/Home/Sidebar';
import HomeCSS from './HomeScreen.module.css';

export default function HomeScreen() {
  return (
    <Div>
      <Sidebar />
      <Dashboard/>
    </Div>
  )
}

const Div = styled.div`
  position: relative;
`;