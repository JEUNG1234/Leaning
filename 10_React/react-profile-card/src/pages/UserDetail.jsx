import React, { useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { UserContext } from './UserContext';

const PageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5rem 1rem;
`;

const ContentCard = styled.div`
  background: white;
  padding: 3rem;
  border-radius: 20px;
  box-shadow: 0 12px 36px rgba(0, 0, 0, 0.06);
  max-width: 800px;
  width: 100%;
  height: 600px;
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center; 

  h2 {
    font-size: 2.2rem;
    margin-bottom: 2rem;
    text-align: center;
  }

  p {
    font-size: 1.2rem;
    margin: 0.75rem 0;
    text-align: center;
  }
`;



const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.2rem;
  margin-top: 2rem;

  button {
    padding: 10px 20px;
    font-size: 1rem;
    border-radius: 8px;
    border: none;
    cursor: pointer;
    font-weight: 600;
    transition: all 0.2s;
  }

  button:first-child {
    background: #f1f2f6;
    color: #333;
  }

  button:first-child:hover {
    background: #dcdde1;
  }

  button:last-child {
    background: #ff6b6b;
    color: white;
  }

  button:last-child:hover {
    background: #e55039;
  }
`;

const UserDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { users, deleteUser } = useContext(UserContext);

  const user = users.find(user => user.id === parseInt(id));

  if (!user) {
    return (
      <PageWrapper>
        <ContentCard>
          <h2>존재하지 않는 유저입니다.</h2>
          <button onClick={() => navigate('/')}>목록으로</button>
        </ContentCard>
      </PageWrapper>
    );
  }

  const handleDelete = () => {
    if (window.confirm(`${user.name} 유저를 삭제하시겠습니까?`)) {
      deleteUser(user.id);
      navigate('/');
    }
  };

  return (
    <PageWrapper>
      <ContentCard>
        <h2>{user.name}님의 상세 정보</h2>
        <p>나이: {user.age}</p>
        <p>상태: {user.status}</p>
        <ButtonGroup>
          <button onClick={() => navigate('/')}>뒤로 가기</button>
          <button onClick={handleDelete}>삭제</button>
        </ButtonGroup>
      </ContentCard>
    </PageWrapper>
  );
};

export default UserDetail;
