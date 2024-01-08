import './App.css';
import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { darkTheme } from './utils/Theme';

const Body = styled.div`
background-color:   ${({theme}) => theme.bg};
width: 100%;
height: 100%;
overflow-x: hidden;
`;

function App() {
    return(
        <ThemeProvider theme= {darkTheme}>
            <Body>Portfolio</Body>
        </ThemeProvider>
    );
};

export default App;