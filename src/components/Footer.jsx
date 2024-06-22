import React from 'react';

const Footer = () => {
  return (
    <footer style={{fontFamily:'Questrial'}} className="text-light py-4 footer-color">
      <div className="container">
        <div className="row">
        </div>
        <div className="row mt-3">
          <div className="col-12 text-center">
            <p>&copy; {new Date().getFullYear()} Luxoo. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;