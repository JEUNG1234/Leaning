import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 16px;
  padding: 20px;
`

const StyledUl = styled.ul`
  background-color: #c7e3fc;
  list-style: none;
  padding: 16px;
  border-radius: 12px;
  box-shadow: 2px 2px 8px rgba(0,0,0,0.1);
`

const StyledLi = styled.li`
  margin-bottom: 10px;
  background-color: #ffffff;
  padding: 12px;
  border-radius: 8px;
  box-shadow: 1px 1px 5px rgba(0,0,0,0.1);
  font-size: 16px;
  line-height: 1.5;
  text-align: left;
  
  .status {
    color: ${(props) => (props.online ? 'green' : 'gray')};
    font-weight: bold;
  }
`

const ProfileCard = ({ profiles }) => {
  return (
    <Container>
      <StyledUl>
        {profiles.map((profile) => (
          <StyledLi key={profile.name} online={profile.isOnline}>
            <strong>이름:</strong> {profile.name}, <br />
            <strong>나이:</strong> {profile.age}, <br />
            <strong>상태:</strong>{' '}
            <span className="status">
              {profile.isOnline ? "온라인 상태입니다." : "오프라인 상태입니다."}
            </span>
          </StyledLi>
        ))}
      </StyledUl>
    </Container>
  )
}

export default ProfileCard
