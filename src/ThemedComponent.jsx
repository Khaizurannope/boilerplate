import React, { useContext } from 'react';
import ThemeContext from './ThemeContext';

function ThemedComponent() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const style = {
    backgroundColor: theme === 'light' ? '#fff' : '#333',
    color: theme === 'light' ? '#000' : '#fff',
    padding: '20px',
    textAlign: 'center',
    marginBottom: '10px',
    borderRadius: '5px',
  };

  const buttonStyle = {
    marginTop: '15px',  // Menambah jarak antara teks tema dan tombol
    padding: '10px 20px',
    backgroundColor: theme === 'light' ? '#000' : '#fff',
    color: theme === 'light' ? '#fff' : '#000',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    display: 'block',  // Memastikan tombol tampil sebagai block element
    marginLeft: 'auto',  // Mengatur posisi tombol agar berada di tengah
    marginRight: 'auto',
  };

  return (
    <div style={style}>
      <div>Tema saat ini: {theme}</div>
      <button style={buttonStyle} onClick={toggleTheme}>Ganti Tema</button>
    </div>
  );
}

export default ThemedComponent;
