import "./App.css";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
const WALL_HEIGHT = 600;
const WALL_WIDTH = 400;
const BIRD_WIDTH = 30;
const BIRD_HEIGHT = 28;
const GRAVITY = 5;
const OBJ_SPEED = 6;

const OBJ_GAP = 200;
const OBJ_WIDTH = 52;
function App() {
  const [birdpos, setBirdpos] = useState(300);
  const [ISstart, setISstart] = useState(false);
  const [objHeight, setobjHeight] = useState(200);
  const [objPos, setobjPos] = useState(WALL_WIDTH);
  const [score, setscore] = useState(0);
  const bottomobj = WALL_HEIGHT - OBJ_GAP - objHeight;

  useEffect(() => {
    let birdval;
    if (ISstart && birdpos < WALL_HEIGHT - BIRD_HEIGHT) {
      birdval = setInterval(() => {
        setBirdpos((birdpos) => birdpos + GRAVITY);
      }, 24);
    }

    return () => clearInterval(birdval);
  }, [ISstart, birdpos]);

  useEffect(() => {
    let leftInterval;
    if (ISstart && objPos >= -OBJ_WIDTH + 100) {
      leftInterval = setInterval(() => {
        setobjPos((objPos) => objPos - OBJ_SPEED);
      }, 24);
    } else {
      setobjPos(WALL_WIDTH);
      setobjHeight(Math.floor(Math.random() * (WALL_HEIGHT - OBJ_GAP)));
      if (ISstart) setscore((score) => score + 1);
    }
    return () => clearInterval(leftInterval);
  }, [ISstart, objPos]);

  useEffect(() => {
    let topObj = birdpos >= 0 && birdpos < objHeight;
    let botObj =
      birdpos <= WALL_HEIGHT &&
      birdpos >= WALL_HEIGHT - bottomobj - BIRD_HEIGHT;
    if (objPos >= OBJ_WIDTH && objPos <= OBJ_WIDTH + 90 && (topObj || botObj)) {
      setISstart(false);
      setBirdpos(300);
      setscore(0);
    }
  }, [ISstart, objPos]);

  const handler = () => {
    if (!ISstart) setISstart(true);
    else if (birdpos < BIRD_HEIGHT) {
      setBirdpos(0);
    } else {
      setBirdpos((birdpos) => birdpos - 50);
    }
  };
  return (
    <Home onClick={handler}>
      <div>Score:{score}</div>
      <Background height={WALL_HEIGHT} width={WALL_WIDTH}>
        {!ISstart ? <Startgame>Click To Start Game</Startgame> : ""}
        {ISstart ? (
          <Obj
            height={objHeight}
            width={OBJ_WIDTH}
            left={objPos - OBJ_WIDTH}
            top={0}
            deg={180}
          />
        ) : (
          ""
        )}
        <Bird
          height={BIRD_HEIGHT}
          width={BIRD_WIDTH}
          top={birdpos}
          left={100}
        />
        {ISstart ? (
          <Obj
            height={bottomobj}
            width={OBJ_WIDTH}
            left={objPos - OBJ_WIDTH}
            top={WALL_HEIGHT - (objHeight + bottomobj)}
            deg={0}
          />
        ) : (
          ""
        )}
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

const Obj = styled.div`
  position: relative;
  background-image: url("./pipe-green.png");
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  left: ${(props) => props.left}px;
  top: ${(props) => props.top}px;
  transform: rotate(${(props) => props.deg}deg);
`;
