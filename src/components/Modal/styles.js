import styled from "styled-components";


export const Background = styled.div`
    height: 100vh;
    width: 100vw;
    z-index: 900;
    background-color: rgba(0, 0, 0, 0.7);
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;


`
export const Container = styled.div`

    background: #000;
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    padding: 70px;
    max-width: 1200px;

button{
    position: absolute;
    display: flex;
    margin-top: -570px;
    color: #000;
    font-size: 15px;
    font-weight: 500;
    background: #ffff;
    border: none;
    margin-left: 553px;
}

iframe{
    border: none;

}
 `



