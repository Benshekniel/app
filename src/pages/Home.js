import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const WelcomeMessage = styled.h1`
  font-size: 2em;
  margin-bottom: 20px;
`;

const Input = styled.input`
  padding: 10px;
  font-size: 1em;
`;

const Home = () => {
  const [welcomeMessage, setWelcomeMessage] = useState('Welcome to our website!');
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    const currentHour = new Date().getHours();
    if (currentHour < 12) {
      setWelcomeMessage('Good Morning!');
    } else if (currentHour < 18) {
      setWelcomeMessage('Good Afternoon!');
    } else {
      setWelcomeMessage('Good Evening!');
    }
  }, []);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    setWelcomeMessage(`Welcome, ${e.target.value}!`);
  };

  return (
    <Container>
      <WelcomeMessage>{welcomeMessage}</WelcomeMessage>
      <Input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Enter your name"
      />
    </Container>
  );
};

export default Home;
