import React from 'react';

import{SubHeading} from '../../components'
import {images} from'../../constants'
import './Header.css';

const Header = () => (
  <div className="app__header section__padding" id="home">
      <div className="app__wrapper_info">
        <SubHeading title="chase the new flavour" />
          <h1 className="app__header-h1" >The key to fine Dining</h1>
          <p className="p__opensans" style={{ margin: '2rem 0'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur assumenda corporis dolor eos fugiat impedit, iusto libero saepe tenetur veniam? Animi at blanditiis ducimus enim </p>
          <button className="custom__button" type="button">Explore Menu</button>
      </div>
      <div className="app__wrapper_img">
          <img src={images.welcome} alt="header img"/>
      </div>
  </div>
);

export default Header;
