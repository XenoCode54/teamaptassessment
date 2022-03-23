import {
  BreadCrumbs,
  BreadCrumbTextOne, BreadCrumbTextTwo,
  TopNavContainer, UserInfo, UserInfoText, VerticalDivider,
} from './Main/Main.styled';

export function TopNav () {
  return <TopNavContainer>
    <BreadCrumbs>
      <BreadCrumbTextOne>Projects</BreadCrumbTextOne><BreadCrumbTextTwo>> GSE Banking App</BreadCrumbTextTwo>
    </BreadCrumbs>
    <UserInfo>
      <div>
      <svg style={{marginRight: '24px'}} width={'24'} height={'24'} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M511.1 63.1v287.1c0 35.25-28.75 63.1-64 63.1h-144l-124.9 93.68c-7.875 5.75-19.12 .0497-19.12-9.7v-83.98h-96c-35.25 0-64-28.75-64-63.1V63.1c0-35.25 28.75-63.1 64-63.1h384C483.2 0 511.1 28.75 511.1 63.1z"/></svg>
      <svg style={{marginRight: '24px'}} width={'24'} height={'24'} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M256 32V51.2C329 66.03 384 130.6 384 208V226.8C384 273.9 401.3 319.2 432.5 354.4L439.9 362.7C448.3 372.2 450.4 385.6 445.2 397.1C440 408.6 428.6 416 416 416H32C19.4 416 7.971 408.6 2.809 397.1C-2.353 385.6-.2883 372.2 8.084 362.7L15.5 354.4C46.74 319.2 64 273.9 64 226.8V208C64 130.6 118.1 66.03 192 51.2V32C192 14.33 206.3 0 224 0C241.7 0 256 14.33 256 32H256zM224 512C207 512 190.7 505.3 178.7 493.3C166.7 481.3 160 464.1 160 448H288C288 464.1 281.3 481.3 269.3 493.3C257.3 505.3 240.1 512 224 512z"/></svg>
      </div>
      <VerticalDivider />
      <UserInfoText>
        <svg style={{marginLeft: '24px'}} width={'24'} height={'24'} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM256 352C309 352 352 309 352 256C352 202.1 309 160 256 160C202.1 160 160 202.1 160 256C160 309 202.1 352 256 352z"/></svg>
        <p style={{marginLeft: '14px'}}>RonasIT</p>
        <svg
          width={'20'}
          style={{marginLeft: '14px'}}
          height={'20'}
          fill={'#999'}
          xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M192 384c-8.188 0-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L192 306.8l137.4-137.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-160 160C208.4 380.9 200.2 384 192 384z"/></svg>
      </UserInfoText>
    </UserInfo>
  </TopNavContainer>;
}
