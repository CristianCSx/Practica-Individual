import React from 'react';
import '../styles/footer.css';

export const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer-container">
          <p>© {new Date().getFullYear()} Relatos de Papel. Todos los derechos reservados.</p>
            <div className="footer-link-container">
              <p  className="footer-link">Términos de uso</p> | <p  className="footer-link">Política de privacidad</p> | <p  className="footer-link">Contáctanos</p>
            </div>
        </div>
      </footer>
    </>
  );
};
