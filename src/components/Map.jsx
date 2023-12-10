import React from 'react';
import Subscribe from './Subscribe';
import Footer from './Footer';

function Map() {
  return (
    <div>
      <div className='map'>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12158.52872998439!2d49.8430385!3d40.3726794!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307d71ee68c54b%3A0x16fdc738277e4355!2zWGFyxLEgQsO8bGLDvGwgQ2hvY29sYXRlIEhvdXNl!5e0!3m2!1str!2saz!4v1700224277586!5m2!1str!2saz"
          width="600"
          height="450"
          style={{ border: '0' }} // Stil özelliğini obje olarak tanımlayın
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className='subscribe_btn'>
      <Subscribe />
      </div>
      <Footer />
    </div>
  );
}

export default Map;
