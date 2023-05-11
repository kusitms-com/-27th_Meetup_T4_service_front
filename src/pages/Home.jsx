import React from "react";
import styled from "styled-components";
import LeftNav from "../components/LeftNav";
import Navigation from "../components/Navigation";
import { useEffect, useState } from "react";
import Progress from "../components/Progress";
import ChallengeStory from "../components/ChallengeStory";
import ChallengeFeed from "../components/ChallengeFeed";

const Home = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    function handleResize() {
      setIsSmallScreen(window.innerWidth <= 1390);
    }

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div>
      <Container>
        <ChallengeStory />
        <ChallengeFeed />
      </Container>
    </div>
  );
};

export default Home;

const Container = styled.div`
  background-color: lightgreen;
  max-width: 920px;
  margin: auto;
  /* height: 1000px; */
  margin-top: 80px;
  padding-top: 0.1px;
`;

// const Main = styled.div`
//   /* background-color: lightgreen; */
//   width: 100%;
// `;

//전체 width가 1390px 되면 사이드바 사라지게끔 하기
