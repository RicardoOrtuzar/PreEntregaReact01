const Footer = () => {
  return (
    <footer style={footerStyle}>

      <div style={copyrightStyle}>
        <p>&copy; 2024 curacionesavanzadas.com - Todos los derechos reservados</p>
      </div>
    </footer>
  );
};

// Estilos para el footer
const footerStyle = {
    backgroundColor: '#333',
    color: '#fff',
    padding: '20px',
    paddingTop: '20px',  
    position: 'fixed',
    bottom: 0,
    width: '100%',
  };
  
    
  const copyrightStyle = {
    marginTop: '20px',
    textAlign: 'center',
  };

export default Footer;