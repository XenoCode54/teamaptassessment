import { useState } from 'react';
import {
  CardFloatContainer,
  Columns,
  ColumnSeparator,
  DayNumber,
  DayText,
  NumberContainer,
  NumbersContainer,
  ProfileCard, ProfileCardBottomText,
  ProfileCardTextContainer,
  ProfileCardTopText,
  ProfileImage, ProgressBar, RoundContainer, Row, TimelineBar,
} from './Main/Main.styled';

export function Calender () {
  const [selectedDate, setSelectedDate] = useState('20');

  const days = [
    {
      day: 'T',
      date: '11',
    },
    {
      day: 'W',
      date: '12',
    },
    {
      day: 'T',
      date: '13',
    },
    {
      day: 'F',
      date: '14',
    },
    {
      day: 'S',
      date: '15',
    },
    {
      day: 'S',
      date: '16',
    },
    {
      day: 'S',
      date: '17',
    },
    {
      day: 'S',
      date: '18',
    },
    {
      day: 'S',
      date: '19',
    },
    {
      day: 'S',
      date: '20',
    },
    {
      day: 'S',
      date: '21',
    },
    {
      day: 'S',
      date: '22',
    },
    {
      day: 'S',
      date: '23',
    },
    {
      day: 'S',
      date: '24',
    },
    {
      day: 'S',
      date: '25',
    },
    {
      day: 'S',
      date: '26',
    },
    {
      day: 'S',
      date: '27',
    },
  ];

  const CalenderData = [
    {
      name: 'Finna A.',
      image: 'https://images.pexels.com/photos/10153603/pexels-photo-10153603.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      role: 'UX Designer',
      title: 'Flow Swift transfer',
      progress: 68,
      days: 6,
      color: '#fd7e2e',
      background: 'rgba(241, 162, 113, 0.55)',
      startDay: 6,
    },
    {
      name: 'Emma F.',
      image: 'https://images.pexels.com/photos/10153603/pexels-photo-10153603.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      role: 'UI Designer',
      title: 'Flow Swift transfer',
      progress: 100,
      color: '#f9d018',
      background: 'rgba(245, 219, 106, 0.4)',
      days: 8,
      startDay: 3,
    },
    {
      name: 'Alex B.',
      image: 'https://images.pexels.com/photos/10153603/pexels-photo-10153603.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      role: 'UI Analyst',
      title: 'User profile',
      color: '#131e3a',
      background: 'rgba(37, 45, 64, 0.55)',
      progress: 32,
      days: 9,
      startDay: 6,
    },
    {
      name: 'Cody D.',
      image: 'https://images.pexels.com/photos/10153603/pexels-photo-10153603.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      role: 'UX Analyst',
      title: 'Transfers by phone',
      color: '#131e3a',
      background: 'rgba(37, 45, 64, 0.55)',
      progress: 32,
      days: 9,
      startDay: 5,
    },
    {
      name: 'Sam G.',
      image: 'https://images.pexels.com/photos/10153603/pexels-photo-10153603.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      role: 'Designer',
      title: 'Chat bot',
      color: '#1bd3fc',
      background: 'rgba(123, 222, 245, 0.51)',
      progress: 77,
      days: 11,
      startDay: 5,
    },
    {
      name: 'Erik F.',
      image: 'https://images.pexels.com/photos/10153603/pexels-photo-10153603.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      role: 'UX Designer',
      title: 'Transaction analytics',
      progress: 42,
      color: '#fd7e2e',
      background: 'rgba(241, 162, 113, 0.55)',
      days: 7,
      startDay: 6,
    },
    {
      name: 'Emma F.',
      image: 'https://images.pexels.com/photos/10153603/pexels-photo-10153603.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      role: 'UI Designer',
      title: 'Savings',
      progress: 41,
      color: '#f9d018',
      background: 'rgba(245, 219, 106, 0.4)',
      days: 6,
      startDay: 6,
    },
    {
      name: 'Alex B.',
      image: 'https://images.pexels.com/photos/10153603/pexels-photo-10153603.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      role: 'UI Analyst',
      title: 'User profile',
      color: '#131e3a',
      background: 'rgba(37, 45, 64, 0.55)',
      progress: 32,
      days: 9,
      startDay: 6,
    },
    {
      name: 'Cody D.',
      image: 'https://images.pexels.com/photos/10153603/pexels-photo-10153603.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      role: 'UX Analyst',
      title: 'Transfers by phone',
      color: '#131e3a',
      background: 'rgba(37, 45, 64, 0.55)',
      progress: 32,
      days: 9,
      startDay: 5,
    },
    {
      name: 'Sam G.',
      image: 'https://images.pexels.com/photos/10153603/pexels-photo-10153603.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      role: 'Designer',
      title: 'Chat bot',
      color: '#1bd3fc',
      background: 'rgba(123, 222, 245, 0.51)',
      progress: 77,
      days: 11,
      startDay: 5,
    },
  ];

  return <div>
    {/*  numbers*/}
    <NumbersContainer>
      {days.map((day, index) => {
        return <Columns key={day.date}>
          <NumberContainer onClick={() => setSelectedDate(day.date)} active={day.date === selectedDate} key={index}>
            <DayText active={day.date === selectedDate}>{day.day}</DayText>
            <DayNumber active={day.date === selectedDate}>{day.date}</DayNumber>
          </NumberContainer>
          <div style={{ flexGrow: '1', marginTop: '20px' }}>
            {day.date === selectedDate && <TimelineBar active={day.date !== selectedDate} />}
            <ColumnSeparator />
          </div>
        </Columns>;
      })}
    </NumbersContainer>
    <CardFloatContainer>
      {
        CalenderData.map((data, index) => {
          const width = (data.days / 17) * 100;
          const position = (data.startDay * 60) - 240;

          return <Row key={`profile-${index}`}>
            <ProfileCard>
              <ProfileImage
                src={data.image}
                alt={data.name} />
              <ProfileCardTextContainer>
                <ProfileCardTopText>{data.name}</ProfileCardTopText>
                <ProfileCardBottomText>{data.role}</ProfileCardBottomText>
              </ProfileCardTextContainer>
              <ProfileCardBottomText>
                <svg
                  width={'20'}
                  height={'20'}
                  fill={'#999'}
                  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 512">
                  <path
                    d="M64 360C94.93 360 120 385.1 120 416C120 446.9 94.93 472 64 472C33.07 472 8 446.9 8 416C8 385.1 33.07 360 64 360zM64 200C94.93 200 120 225.1 120 256C120 286.9 94.93 312 64 312C33.07 312 8 286.9 8 256C8 225.1 33.07 200 64 200zM64 152C33.07 152 8 126.9 8 96C8 65.07 33.07 40 64 40C94.93 40 120 65.07 120 96C120 126.9 94.93 152 64 152z" />
                </svg>
              </ProfileCardBottomText>
            </ProfileCard>
            <RoundContainer color={data.background} startDay={position} percentage={width}>
              <ProgressBar color={data.color} percentage={data.progress} />
              <svg style={{ zIndex: '10', marginRight: '10px' }} fill={'#fff'}
                   width={'24'} height={'24'} xmlns="http://www.w3.org/2000/svg"
                   viewBox="0 0 512 512">
                <path
                  d="M0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM256 352C309 352 352 309 352 256C352 202.1 309 160 256 160C202.1 160 160 202.1 160 256C160 309 202.1 352 256 352z" />
              </svg>
              <p style={{
                zIndex: '10',
                color: '#fff',
                marginRight: 'auto',
              }}>{data.title}</p>
              <p style={{ zIndex: '10', color: data.progress > 90 ? '#fff' : data.color, fontWeight: 'bold' }}>{data.progress}%</p>
            </RoundContainer>
          </Row>;
        })
      }
    </CardFloatContainer>
  </div>;
}
