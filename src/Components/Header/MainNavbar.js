import React, { useState } from 'react';
import classes from './MainNavbar.module.css';
import { Button,Navbar } from 'react-bootstrap';
import { GiHamburgerMenu} from 'react-icons/gi';


const MainNavbar = () => {
  const [showMenuList,setShowMenuList]=useState(false)

  return (
    <div>
    <Navbar expand="lg"  className={classes.navbar}>
      <div className={classes['logo-name']}>
        <Navbar.Brand style={{fontSize: '1.6rem',fontWeight:'bold'}} href="#home">MovieShow</Navbar.Brand>
      </div>
      <div className={showMenuList ? classes['mobile-menu-list'] : classes['menu-list']}>
        <li className={classes.list}><a href="#home">Home</a></li>
        <li className={classes.list}><a href="#store">Store</a></li>
        <li className={classes.list}><a href="#about">About</a></li>
      </div>
      <div className={classes.button}>
        <div className={classes['cart-button']}>
          <Button variant="primary" style={{display: 'flex',alignItems: 'center',justifyContent: 'center',gap: '0.5rem'}}>
            <span>Add Cart</span>
            <span className={classes.cartCircle}>6</span>
          </Button>
        </div>
        <button className={classes['toggle-menu']} onClick={()=>setShowMenuList(!showMenuList)}>
          <GiHamburgerMenu/>
        </button>
      </div>
    </Navbar>
    </div>
  );
};

export default MainNavbar;