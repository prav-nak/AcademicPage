import React from 'react';

const SimplifiedLayout = () => {
  return (
    <div style={{ display: 'flex', height: '100vh', overflow: 'hidden' }}>
      <nav style={{ 
        width: '250px', 
        backgroundColor: 'white', 
        borderRight: '1px solid #e2e8f0',
        display: 'flex',
        flexDirection: 'column',
        height: '100%'
      }}>
        <div style={{ 
          padding: '1rem', 
          backgroundColor: '#2d3748', 
          color: 'white'
        }}>
          <h2 style={{ margin: 0 }}>Contents</h2>
        </div>
        <ul style={{ 
          listStyle: 'none', 
          padding: '1rem', 
          margin: 0,
          flexGrow: 1,
          overflowY: 'auto'
        }}>
          <li style={{ marginBottom: '0.5rem' }}>01. introduction</li>
          <li style={{ marginLeft: '1rem', marginBottom: '0.25rem' }}>01. overview</li>
          <li style={{ marginLeft: '1rem', marginBottom: '0.25rem' }}>02. basic concepts</li>
          {/* Add more list items as needed */}
        </ul>
      </nav>
      <main style={{ 
        flexGrow: 1, 
        padding: '2rem',
        overflowY: 'auto',
        backgroundColor: '#f7fafc'
      }}>
        <h1>01. introduction</h1>
        <h2>01. overview</h2>
        <h3>Overview of Partial Differential Equations</h3>
        <p>Content goes here...</p>
      </main>
    </div>
  );
};

export default SimplifiedLayout;