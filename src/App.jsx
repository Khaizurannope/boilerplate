import React from 'react';
import { ThemeProvider } from './ThemeContext';
import { UserProvider } from './UserContext';
import { CounterProvider } from './CounterContext';
import ThemedComponent from './ThemedComponent';
import UserComponent from './UserComponent';
import CounterComponent from './CounterComponent';

function App() {
  return (
    <ThemeProvider>
      <UserProvider>
        <CounterProvider>
          <div style={{ padding: '20px' }}>
            <ThemedComponent />
            <UserComponent />
            <CounterComponent />
          </div>
        </CounterProvider>
      </UserProvider>
    </ThemeProvider>
  );
}

export default App;
