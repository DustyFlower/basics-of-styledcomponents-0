import React from 'react';
import './App.css';
import styled from 'styled-components';
import {StyledBtn} from './components/Button.styled';
import {Link} from './components/Link.styled';
import {myTheme} from './styles/Theme.styled';

function App() {
    return (
        <div className="App">
            <Box>
                {/*                <StyledBtn color={"green"} fontSize={"20px"}>Hello</StyledBtn>
                <StyledBtn color={"red"}>Hello</StyledBtn>
                <StyledBtn fontSize={"30px"}>Hello</StyledBtn>*/}

                <StyledBtn color={myTheme.colors.primary} btnType={'primary'} active>Hello</StyledBtn>
                <StyledBtn color={myTheme.colors.secondary} btnType={'outlined'}>Hello</StyledBtn>
            </Box>
        </div>
    );
}

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
    @media ${myTheme.media.tablet} {
        flex-direction: column;
    }
`

//классика на старте глобально для всех проектов
//margin: 0
//padding: 00
//box-sizing: border-box