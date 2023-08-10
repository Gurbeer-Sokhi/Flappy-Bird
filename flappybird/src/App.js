import "./App.css";
import React, { useState } from "react";
import styled from "styled-components";
const WALL_HEIGHT = 600;
const WALL_WIDTH = 400;
const BIRD_WIDTH = 30;
const BIRD_HEIGHT = 28;
function App() {
  const [birdpos, setBirdpos] = useState(300);
  return (
    <Home>
      <Background height={WALL_HEIGHT} width={WALL_WIDTH}>
        <Bird
          height={BIRD_HEIGHT}
          width={BIRD_WIDTH}
          top={birdpos}
          left={100}
        />
      </Background>
    </Home>
  );
}

export default App;
const Home = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  justify-center: center;
  align-items: center;
`;
const Background = styled.div`
  background-image: url("./Background-day.jpg");
  background-repeat: no-repeat;
  background-size: ${(props) => props.width}px ${(props) => props.height}px;
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  border: 2px solid black;
  position: relative;
`;
const Bird = styled.div`
  position: absolute;
  background-image: url("./yellowbird-upflap.png");
  background-size: ${(props) => props.width}px ${(props) => props.height}px;
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  top: ${(props) => props.top}px;
  left: ${(props) => props.left}px;
`;
