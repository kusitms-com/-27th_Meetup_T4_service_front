import React, { useState } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { authState, sideToggleState } from "../atoms/auth";
import { patchLogoutUser } from "../remotes";

const Navigation = () => {
  const navigate = useNavigate();
  const [listToggle, setListToggle] = useRecoilState(sideToggleState);
  const [userToggle, setUserToggle] = useState(false);

  const sidebarToggle = () => {
    setListToggle(!listToggle);
  };
  const userInfoToggle = () => {
    setUserToggle(!userToggle);
  };

  //   const Logout = () => {
  //     patchLogoutUser()
  //       .then((res) => {
  //         console.log(res);
  //       })
  //       .catch((err) => console.log(err));
  //     localStorage.removeItem("accessToken");
  //     localStorage.removeItem("refreshToken");
  //     setAuth(false);
  //     navigate("/");
  //   };

  return (
    <Container>
      <ContainerLeft>
        <div clasName="navi-logo">
          <img src="navigation.svg" />
        </div>
        <div className="navi-list">
          <img onClick={sidebarToggle} src="menu.svg" />
        </div>
      </ContainerLeft>
      <ContainerRight>
        <div className="challenge-title">
          <div>5월 25일 오늘 진행 중인 챌린지</div>
          <div className="count">3</div>
        </div>
        <div className="user-info" onClick={userInfoToggle}>
          <img width={22} src="user_img.svg" />
          <div className="name">라이언님</div>
          <img width={12} src={!userToggle ? "arrow1.svg" : "arrow2.svg"} />
          {userToggle ? (
            <div>
              <div className="drop">
                <div className="drop-container">
                  <div
                    className="text"
                    style={{ textAlign: "center", lineHeight: "28px" }}
                  >
                    라이언님 하이
                  </div>
                  <div className="control">
                    <div>마이페이지</div>
                    <div>로그아웃</div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      </ContainerRight>
    </Container>
  );
};

export default Navigation;

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 88px;
  background-color: #266cf4;
  display: flex;
  /* justify-content: space-between; */
  align-items: center;
  padding-left: 30px;
  padding-right: 30px;
  a {
    color: #ffffff;
    text-decoration: none;
  }
`;

const ContainerLeft = styled.div`
  display: flex;
  position: absolute;

  .navi-logo {
  }
  .navi-list {
    position: absolute;
    z-index: 4;
    top: 40px;
    cursor: pointer;
  }
`;

const ContainerRight = styled.div`
  display: flex;
  margin: auto;
  margin-bottom: 17px;
  justify-content: space-between;
  width: 920px;
  z-index: 2;
  .challenge-title {
    display: flex;
    font-family: "Happiness-Sans-Bold";
    color: #ffffff;
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 22px;
    align-items: center;
  }
  .count {
    width: 20px;
    height: 20px;
    background-color: #ffffff;
    color: #266cf4;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    cursor: pointer;
    box-shadow: 0px 10px 30px rgba(136, 51, 255, 0.15);
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    margin-left: 8px;
  }

  .user-info {
    color: #ffffff;
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 22px;
    background: rgba(255, 255, 255, 0.2);
    border: 1px solid #d9d9d9;
    border-radius: 32px;
    width: 148px;
    height: 38px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    position: relative;
  }

  .user-info .name {
    margin-left: 8px;
    margin-right: 8px;
    font-family: "Pretendard";
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 16px;
  }

  .sign {
    display: block;
  }

  .drop-triangle {
    position: absolute;
    z-index: 2;
    border-bottom: 20px solid lightgray;
    border-left: 20px solid transparent;
    border-right: 20px solid transparent;
    margin-right: 60px;
    right: 0;
    margin-top: 25px;
    border-radius: 10px;
  }
  .drop {
    position: absolute;
    z-index: 3;
    width: 148px;
    height: 232px;
    background-color: violet;
    margin-top: 20px;
    right: 0;
    border-radius: 10px;
    display: flex;
  }
  .drop-container {
    width: 134px;
    height: 165px;
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`;