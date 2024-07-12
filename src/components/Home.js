import React, { useState, useEffect } from 'react';

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
    <div>
      <h1>{welcomeMessage}</h1>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Enter your name"
      />
    </div>
  );
};

export default Home;
