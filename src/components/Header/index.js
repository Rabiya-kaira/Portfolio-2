import "./style.css";
import Modal from 'react-modal'
 import React from 'react';

function Header() {

const customStyles = {
  content: {
    top: '0',
    right: '0',
  },
};
Modal.setAppElement('#root');


  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    
    subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <header className="headerdiv">
      <nav>
        <div>
          <img
            src="http://demos.codexcoder.com/labartisan/html/maxino/assets/images/logo/logo.gif"
            alt="logo"
          />
        </div>
        <ul>
           <li>Home</li>
           <li>About Me</li>
           <li>Resume</li>
           <li>Services</li>
           <li>Portfolio</li>
           <li>Pricing</li>
           <li>Clients</li>
           <li>Blog</li>
           <li>Contact</li>
        </ul>
        <div className="navbarimgdiv">
        <button onClick={openModal}>
          <img
            className="navbarimg"
            src="https://w7.pngwing.com/pngs/117/74/png-transparent-hamburger-button-business-menu-computer-icons-horizontal-line-angle-company-text-thumbnail.png"
            alt="logo"
          /></button>
        </div>
      </nav>
     <div>
     
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>
        <button onClick={closeModal}>X</button>
        </h2>
        
        
      </Modal>
    </div>
    </header>
  );
}
export default Header;
