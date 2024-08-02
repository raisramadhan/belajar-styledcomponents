import styled from "styled-components";

export const Container = styled.div`
height: 100vh;
width: 100%;
display: flex;
justify-content: center;
align-items: center;
background-color: ${(prompt) => prompt.ChangeBg === false ? "black" : "yellow"};
`

export const Button = styled.button`
height: 30;
width: 20;
border-radius: 40%;
`

//box
export const Box = styled.div`
height: 80px;
width: 80px;
border-radius: 10%;
background-color: ${(prompt) => prompt.ChangeColor === false ? "grey" : "red"};
`