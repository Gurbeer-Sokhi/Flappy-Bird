import "./App.css";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
const WALL_HEIGHT = 600;
const WALL_WIDTH = 400;
const BIRD_WIDTH = 30;
const BIRD_HEIGHT = 28;
const GRAVITY = 5;
function App() {
  const [birdpos, setBirdpos] = useState(300);

  useEffect(() => {
    let birdval;
    if (birdpos < WALL_HEIGHT - BIRD_HEIGHT) {
      birdval = setInterval(() => {
        setBirdpos((birdpos) => birdpos + GRAVITY);
      }, 24);
    }
    return () => clearInterval(birdval);
  });

  const handler = () => {
    if (birdpos < BIRD_HEIGHT) {
      setBirdpos(0);
    } else {
      setBirdpos((birdpos) => birdpos - 50);
    }
  };
  return (
    <Home onClick={handler}>
      <Background height={WALL_HEIGHT} width={WALL_WIDTH}>
        <Startgame>Click To Start Game</Startgame>
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

const Startgame = styled.div`
  text-align: center;
  position: relative;
  top: 49%;
  background-color: black;
  padding: 10px;
  width: 100px;
  left: 50%;
  margin-left: -55px;
  font-size: 20px;
  border-radius: 10px;
  color: white;
`;
