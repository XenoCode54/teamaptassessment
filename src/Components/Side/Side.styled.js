import styled from 'styled-components';

export const SideContainer = styled.div`
  background-color: #f5f5f5;
  width: 25%;
  height: 100vh;
  padding: 0 20px 0;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
`;

export const TopContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 20px;
  //background-color: red;
  box-sizing: border-box;
  //border-radius: 10px;
`;

export const TopText = styled.p`
  font-size: 2rem;
  font-weight: bold;
  color: #333;
  margin: 0 0 0 -80px;
`;

export const Icon = styled.div`
  width: 40px;
  height: 40px;
  padding: 5px;
  background-color: #1d5cfc;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  //cursor: pointer;
  //box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
`;

export const MidContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;
  width: 100%;
  padding: 20px;
  //background-color: red;
  box-sizing: border-box;
  //border-radius: 10px;
  //box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
`;

export const Selector = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
  cursor: pointer;
  padding: 20px 0;
  //background-color: red;
  box-sizing: border-box;
  //border-radius: 10px;
  //box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  
  :hover {
    color: #1d5cfc;
  }
  `;

export const SelectorIcon = styled.div`
  margin-right: 20px;
`;

export const SelectorText = styled.div`
  font-size: 1.1rem;
  font-weight: 500;
  color: #333;
  
  :hover {
    color: #1d5cfc;
  }
`;

export const Card = styled.div`
  display: flex;
  justify-content: space-between;
  width: 90%;
  padding: 20px 30px;
  //background-color: red;
  background: rgba(132, 167, 255, 0.4);
  box-sizing: border-box;
  border-radius: 20px;
  //box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
`;

export const CardText = styled.div`
  font-size: 1.2rem;
  font-weight: 500;
  color: #333;
  margin-right: 20px;
`;

export const ProfileCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 70px;
  padding: 0 20px;
  box-sizing: border-box;
  border-radius: 20px;
`;

export const ProfileImage = styled.img`
  border-radius: 100%;
  width: 50px;
  height: 50px;
`;

export const ProfileCardTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  margin-left: -20px;
  //width: 100%;
  //padding: 20px 30px;
  box-sizing: border-box;
  border-radius: 20px;
  `;

export const ProfileCardTopText = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
  color: #333;
  margin: 0;
  `;

export const ProfileCardBottomText = styled.div`
  font-size: 0.9rem;
  font-weight: 500;
  color: #999;
  margin: 0;
  `;
