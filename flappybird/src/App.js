import "./App.css";
import React from "react";
import styled from "styled-components";
const WALL_HEIGHT = 600;
const WALL_WIDTH = 400;
function App() {
  return (
    <Home>
      <Background height={WALL_HEIGHT} width={WALL_WIDTH}>
        <Bird />
      </Background>
    </Home>
  );
}

export default App;
const Home = styled.div`
  height: 100vh;
  display: flex;
  justify-center: center;
  align-items: center;
`;
const Background = styled.div`
  background-image: url("./images/background-day.png");
  background-repeat: no-repeat;
  background-size: ${(props) => props.width}px ${(props) => props.height}px;
  width: ${(props) => props.width}px;
`;
const Bird = styled.div``;
