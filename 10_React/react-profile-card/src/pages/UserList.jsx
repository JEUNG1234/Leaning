import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { UserContext } from './UserContext';

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem 1rem;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
`;

const ContentBox = styled.div`
  width: 100%;
`;

const Title = styled.h2`
  text-align: center;
  font-size: 2.2rem;
  margin-bottom: 2rem;
  font-weight: 700;
  background: linear-gradient(90deg, #4b7bec, #3867d6);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const SearchInput = styled.input`
  padding: 0.6rem 1rem;
  margin-bottom: 2rem;
  font-size: 1rem;
  border-radius: 8px;
  border: 1px solid #ccc;
  width: 100%;
  max-width: 400px;
  display: block;
  margin-left: auto;
  margin-right: auto;
`;

const StyledLinkButton = styled(Link)`
  display: inline-block;
  padding: 0.8rem 1.4rem;
  background: linear-gradient(135deg, #4b7bec, #3867d6);
  color: white;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  margin: 0 auto 2rem;
  text-decoration: none;
  transition: background 0.3s ease;
  text-align: center;

  &:hover {
    background: linear-gradient(135deg, #3867d6, #4b7bec);
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
`;

const Card = styled.div`
  background: white;
  padding: 1.5rem;
  border-radius: 16px;
  border: 1px solid #eee;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  transition: transform 0.2s, box-shadow 0.2s;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 24px rgba(0, 0, 0, 0.08);
  }

  p {
    margin: 0.5rem 0;
  }

  a {
    display: inline-block;
    margin-top: 1rem;
    font-weight: bold;
    color: #4b7bec;
    transition: color 0.3s;

    &:hover {
      color: #3867d6;
      text-decoration: underline;
    }
  }
`;

const UserList = () => {
  const { users } = useContext(UserContext);
  const [search, setSearch] = useState('');

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <PageWrapper>
      <ContentBox>
        <Title>유저 목록</Title>
        <SearchInput
          type="text"
          placeholder="이름으로 검색"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <StyledLinkButton to="/user">유저 등록</StyledLinkButton>
        <Grid>
          {filteredUsers.map((user) => (
            <Card key={user.id}>
              <p><strong>이름:</strong> {user.name}</p>
              <p><strong>나이:</strong> {user.age}</p>
              <p><strong>상태:</strong> {user.status}</p>
              <Link to={`/user/${user.id}`}>상세 보기</Link>
            </Card>
          ))}
        </Grid>
      </ContentBox>
    </PageWrapper>
  );
};

export default UserList;
