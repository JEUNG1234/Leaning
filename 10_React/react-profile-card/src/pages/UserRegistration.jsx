import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { UserContext } from './UserContext';

const Container = styled.div`
  max-width: 600px;
  margin: 2rem auto;
  padding: 2.5rem;
  background: white;
  border-radius: 16px;
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.05);
`;

const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 2rem;
  text-align: center;
  background: linear-gradient(90deg, #4b7bec, #3867d6);
  background: linear-gradient(90deg, #4b7bec, #3867d6);
  -webkit-background-clip: text;
  background-clip: text; 
  -webkit-text-fill-color: transparent; 
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;

  label {
    display: block;
    margin-bottom: 0.5rem;
    font-weight: 600;
  }

  input[type="text"],
  input[type="number"] {
    width: 100%;
    padding: 10px;
    font-size: 1rem;
    border-radius: 8px;
    border: 1px solid #ccc;
    box-sizing: border-box;

    &:focus {
      border-color: #4b7bec;
      outline: none;
    }
  }

  input[type="checkbox"] {
    transform: scale(1.2);
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  margin-top: 2rem;

  button {
    padding: 10px 18px;
    font-size: 1rem;
    border-radius: 8px;
    border: none;
    cursor: pointer;
    font-weight: 600;
    transition: all 0.2s;
  }

  button[type="submit"] {
    background: #4b7bec;
    color: white;
  }

  button[type="submit"]:hover {
    background: #3867d6;
  }

  button[type="button"] {
    background: #f1f2f6;
    color: #333;
  }

  button[type="button"]:hover {
    background: #dcdde1;
  }
`;

const UserRegistration = () => {
  const navigate = useNavigate();
  const { addUser } = useContext(UserContext);

  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [online, setOnline] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !age || isNaN(age)) {
      alert('이름과 나이를 정확히 입력해주세요.');
      return;
    }
    addUser({ name, age: parseInt(age), status: online ? '온라인' : '오프라인' });
    navigate('/');
  };

  return (
    <Container>
      <Title>유저 등록</Title>
      <form onSubmit={handleSubmit}>
        <FormGroup>
          <label>이름:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <label>나이:</label>
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <label>온라인 여부:</label>
          <input
            type="checkbox"
            checked={online}
            onChange={() => setOnline(!online)}
          />
        </FormGroup>
        <ButtonGroup>
          <button type="submit">저장</button>
          <button type="button" onClick={() => navigate('/')}>
            취소
          </button>
        </ButtonGroup>
      </form>
    </Container>
  );
};

export default UserRegistration;
