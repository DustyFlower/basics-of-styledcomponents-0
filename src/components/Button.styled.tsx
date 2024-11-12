import styled, {css} from 'styled-components';

type StyledBtnPropsType = {
    color?: string
    fontSize?: string
    btnType: 'primary' | 'outlined'
    active?: boolean
}

export const StyledBtn = styled.button<StyledBtnPropsType>`//так передаются типы в стилизованную компоненту
    border: none;
    border-radius: 10px;
    //    background-color: #fb3f78;
        /*    background-color: ${props => props.color || '#fb3f78'}; */
    //так передаются пропсы + дефолтное значение

    padding: 10px 20px;
    /*    color: snow;*/
    //    font-size: 2rem;
    font-size: ${props => props.fontSize || '2rem'};
    font-weight: bold;


    //outlined
    ${props => props.btnType === "outlined" && css<StyledBtnPropsType>`
        border: 2px solid ${props => props.color || '#fb3f78'};
        color: ${props => props.color || '#fb3f78'};
        background-color: transparent; //прозрачный

        &:hover {
            border-color: #4053cc;
            color: #4053cc;
            background-color: transparent;
        }
    `} //primary
    ${props => props.btnType === "primary" && css<StyledBtnPropsType>`
        background-color: ${props => props.color || '#fb3f78'};
        color: snow;

        &:hover {
            background-color: #4053cc;
        }
    `}

    ${props => props.active && css<StyledBtnPropsType>`
        box-shadow: 5px 5px 5px 5px rgba(37, 37, 44, 0.6);
    `}
    //конструкция для применения динамических значений пропсов
`