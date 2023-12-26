import React from 'react';
import { FaYoutube, FaSpotify, FaInstagram } from 'react-icons/fa';
import classes from './MainFooter.module.css'

const MainFooter = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes.leftSection}>
        <p className={classes.name}>MovieShow</p>
      </div>
      <div className={classes.rightSection}>
        <FaYoutube className={classes.icon} />
        <FaSpotify className={classes.icon}/>
        <FaInstagram className={classes.icon}/>
      </div>
    </footer>
  );
};



export default MainFooter;