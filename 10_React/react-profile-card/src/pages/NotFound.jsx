import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: #f8f9fa;
  padding: 3rem 1rem;
  text-align: center;

  h2 {
    font-size: 2rem;
    margin-bottom: 2rem;
    color: #333;
  }
`;

const StyledButton = styled.button`
  padding: 12px 20px;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 8px;
  background: #4b7bec;
  color: white;
  border: none;
  cursor: pointer;
  transition: background 0.2s, transform 0.2s;

  &:hover {
    background: #3867d6;
    transform: translateY(-2px);
  }
`;

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <h2>페이지를 찾을 수 없습니다. (404)</h2>
      <StyledButton onClick={() => navigate('/')}>홈으로 가기</StyledButton>
    </Container>
  );
};

export default NotFound;
