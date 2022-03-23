import styled from 'styled-components';

export const AppContainer = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
`;

export const MainContainer = styled.div`
  flex-grow: 1;
  padding: 20px 40px;
  position: relative;
  overflow: auto;
  width: 100%;
`;

export const TopNavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 50px;
`;

export const BreadCrumbs = styled.div`
  display: flex;
  align-items: center;
`;

export const BreadCrumbTextOne = styled.div`
  font-size: 14px;
  font-weight: bold;
  color: #333;
  margin-right: 10px;
`;

export const BreadCrumbTextTwo = styled(BreadCrumbTextOne)`
  color: #999;
`;

export const VerticalDivider = styled.div`
  border-left: 2px solid #999;
  border-radius: 3px;
  height: 40px;
  margin: 0 10px;
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
`;

export const UserInfoText = styled(UserInfo)`
  font-size: 14px;
  font-weight: bold;
  color: #333;
  //margin-left: 10px;
`;

export const NumbersContainer = styled.div`
  display: flex;
  width: 100%;
  position: relative;
  justify-content: space-between;
  align-items: center;
`;

export const TimelineBar = styled.div`
  position: absolute;
  //top: 0px;
  //left: 0px;
  height: 820px;
  border-right: 2px solid #1d5cfc;
  width: 1px;
  border-radius: 3px;
  margin-left: 30px;
  z-index: 1000;

  &:before {
    content: '';
    position: absolute;
    top: -6px;
    left: -6px;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background: #1d5cfc;
  }
`;

export const NumberContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({active}) => active && '#1d5cfc'};
  cursor: pointer;
  color: #fff;
  padding: 5px;
  border-radius: 10px;

  // ${({active}) => active && TimelineBar} {
    //position: absolute;
    //top: 0;
    //height: 500px;
    //border-right: 2px solid #1d5cfc;
    //width: 1px;
    //border-radius: 3px;
  //}
  // ${({active}) => active && `
  //   color: #fff;
  //   background-color: #1d5cfc`};
  `;

export const DayNumber = styled.div`
  font-weight: bold;
  //color: #333;
  color: ${({active}) => active ? '#fff' : '#333'};
  margin-left: 3px;
`;

export const DayText = styled.div`
  //color: #999;
  color: ${({active}) => active ? '#fff' : '#999'};
`;

export const Columns = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  `;

export const ColumnSeparator = styled.div`
  border-right: 1px solid #ccc;
  width: 1px;
  border-radius: 3px;
  height: 820px;
  margin-left: auto;
`;


export const timelineContainer = styled.div`
  height: 700px;
  border-right: 2px solid #1d5cfc;
  width: 1px;
  border-radius: 3px;
`;


export const CardFloatContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  bottom: -60px;
  left: 50px;
  width: 300px;
  height: 70%;
  z-index: 100;
`;

export const ProfileCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 250px;
  max-width: 400px;
  border: 1px solid #ccc;
  background: #fff;
  padding: 10px;
  margin-bottom: 10px;
  z-index: 100;
  box-sizing: border-box;
  border-radius: 10px;
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
  margin-left: -30px;
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

export const StatsContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  bottom: 0;
  right: 0;
  width: 300px;
  height: 70%;
  z-index: 10;
`;

export const Row = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  width: calc(100vw - 300px);
  //background: red;
`;

export const RoundContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  padding: 0 20px;
  //width: 30%;
  width: ${({ percentage }) => percentage}%;
  //margin-left: 120px;
  margin-left: ${({ startDay }) => startDay}px;
  border-radius: 500px;
  z-index: 10;
  background: ${({ color }) => color};
`;
// background: rgba(241, 162, 113, 0.55);
// background: rgba(245, 219, 106, 0.4);
// background: rgba(37, 45, 64, 0.55);
// background: rgba(123, 222, 245, 0.51);

export const ProgressBar = styled.div`
  width: ${({percentage}) => percentage}%;
  position: absolute;
  left: 0;
  bottom: 0;
  height: 100%;
  border-radius: 500px;
  background: ${({color}) => color};
  margin-top: 5px;
  `;

export const LastNavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  //margin-top: 20px;
`;

export const MidNavContainer = styled(LastNavContainer)`
  margin-top: 0;
  `;

export const LastNavTextContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  `;

export const MidNavTextContainer = styled(LastNavTextContainer)`
  flex-direction: column;
  align-items: flex-start;
  `;

export const LastLastContainer = styled(LastNavTextContainer)`
  border: 1px solid #ccc;
  justify-content: space-between;
  padding: 0 1em;
  margin-left: 30px;
  color: #131e3a;
  font-weight: 500;
  width: 150px;
  height: 40px;
  box-sizing: border-box;
  border-radius: 100px;
  `;

export const MidMidContainer = styled.div`
  border: 1px dashed #ccc;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1em;
  margin-left: 30px;
  color: #ccc;
  font-weight: 500;
  width: 120px;
  height: 40px;
  box-sizing: border-box;
  border-radius: 10px;
`;

export const ThinRoundContainer = styled.div`
  position: relative;
  padding: 0 20px;
  //width: 30%;
  width: 100px;
  height: 5px;
  //margin-left: 120px;
  margin-left: 10px;
  border-radius: 500px;
  background: #c9d6f8;
`;

export const ThinProgressBar = styled.div`
  width: 56%;
  position: absolute;
  left: 0;
  bottom: 0;
  height: 100%;
  border-radius: 500px;
  background: #1d5cfc;
  `;
