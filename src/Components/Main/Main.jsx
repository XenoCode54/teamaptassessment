import { Calender } from '../Calender';
import { LastNav } from '../LastNav';
import { TopNav } from '../TopNav';
import { MainContainer } from './Main.styled';
import { MidNav } from './MidNav';

export function Main () {
  return <MainContainer>
    <TopNav />
    {/*  Second nav*/}
    {/*  Third nav*/}
    <MidNav />
    <LastNav />
    <div style={{ height: '10px', width: '10px' }} />
    <Calender />
  </MainContainer>;
}
