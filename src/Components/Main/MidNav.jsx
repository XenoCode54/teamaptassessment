import {
  LastLastContainer,
  LastNavContainer,
  LastNavTextContainer, MidMidContainer,
  MidNavContainer,
  MidNavTextContainer, ThinProgressBar,
  ThinRoundContainer,
} from './Main.styled';

export function MidNav () {
  return <MidNavContainer>
    <MidNavTextContainer>
      <p style={{color: '#131e3a', fontWeight: 'bold', fontSize: '30px'}}>GSE Banking app</p>
      <div style={{display: 'flex', alignItems: 'center', marginTop: '-35px'}}>
        <p style={{color: '#333', fontSize: '14px'}}>56%</p>
        <ThinRoundContainer>
          <ThinProgressBar />
        </ThinRoundContainer>
      </div>
    </MidNavTextContainer>
    <LastNavTextContainer>
      <MidMidContainer>
        <svg  fill={'#ccc'} width={'10'} height={'10'} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"/></svg>
        <p>Invite</p>
      </MidMidContainer>
    </LastNavTextContainer>
  </MidNavContainer>;
}
