import React from 'react';
import Counter from './Counter';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <h2>Please leave feedback</h2>

      <Counter />
    </div>
  );
};
