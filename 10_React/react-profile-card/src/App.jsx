import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import UserList from './pages/UserList';
import UserDetail from './pages/UserDetail';
import UserRegistration from './pages/UserRegistration';
import NotFound from './pages/NotFound';
import { UserProvider } from './pages/UserContext';
import styled from 'styled-components';
import './App.css';

const AppWrapper = styled.div`
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
  max-width: 1400px;
  margin: 0 auto;
  padding: 2rem 1rem;
  width: 100%;
  height: 100px;
`;




function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <AppWrapper>
          <Routes>
            <Route path="/" element={<UserList />} />
            <Route path="/user" element={<UserRegistration />} />
            <Route path="/user/:id" element={<UserDetail />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AppWrapper>
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;
