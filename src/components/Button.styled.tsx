import styled from 'styled-components';
import {MyAnimation} from '../styles/animations/Animations';

export const StyledBtn = styled.button`
    //основные стили для кнопки
    border: none; //обязательно занулить бордер
    background-color: #fb3f78;
    padding: 10px 20px;
    color: snow;
    font-size: 2rem;
    font-weight: bold;


    //псевдоклассы

    &:hover {
        background-color: #4053cc;
    }

    &:last-child {
        background-color: #9cf878;
    }
`

/*a:hover{

}*/

//расширение существующей компоненты
export const SuperButton = styled(StyledBtn)`//extends
    border-radius: 5px;
    background-color: #ffe869;
    color: #363636;
    
    &:hover {
        animation: ${MyAnimation} 2s ease-in-out infinite;
    }
`