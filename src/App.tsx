import React from 'react';
import './App.css';
import styled from 'styled-components';
import {StyledBtn, SuperButton} from './components/Button.styled';
import {Link} from './components/Link.styled';
import {Menu} from './components/Menu.styled';

function App() {
    return (
        <div className="App">
            <Menu>
                <ul>
                    <li><a href="#">menu item 1</a></li>
                    <li><a href="#">menu item 2</a></li>
                    <li><a href="#">menu item 3</a></li>
                </ul>
            </Menu>
            <Box>
                <StyledBtn as={Link} href="#">LinkComponent</StyledBtn>
                <StyledBtn as="a" href="#">Link</StyledBtn>
                <StyledBtn>Hello</StyledBtn>
                <SuperButton>Super Button</SuperButton>
            </Box>
        </div>
    );
}

/*<nav>
    ul>li*3>a
</nav>
стандартная разметка для навигации*/

export default App;

const Box = styled.div`
    height: 100vh; //высота экрана
    display: flex;
    justify-content: center;
    align-items: center;
    //самый просто способ выровнять по центру
    gap: 20px; //гаттерсы

    //обращаемся ко всем вложенным компонентам с соответствующим тегом

    button {
        cursor: pointer;
    }

    ${Link} {
        cursor: zoom-in;
    }

    //адаптив
    @media screen and (max-width: 800px) {
        flex-direction: column;
    }
`

//классика на старте глобально для всех проектов
//margin: 0
//padding: 00
//box-sizing: border-box