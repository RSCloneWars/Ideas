import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

import rssLogo from '@/assets/images/rsschooljs.png';
import styles from './Footer.scss';
import { Link } from 'react-router-dom';

const Footer = (): JSX.Element => (
  <footer className="bg-light py-3 theme-container">
    <Nav className="pr-4 pb-3 justify-content-end">
      <Link className={styles['footer__menu']} to="/">
        Main page
      </Link>
      <Link className={styles['footer__menu']} to="/search">
        Let's search
      </Link>
      <Link className={styles['footer__menu']} to="/devteam">
        Development team
      </Link>
    </Nav>
    <div className={styles['footer__wrapper']}>
      <a className={styles['footer__school']} href="https://rs.school/js/">
        <img src={rssLogo} alt="rsschool" />
      </a>
      <span>2021</span>
      <div className="footer__dev d-flex flex-wrap">
        <a className={styles['footer__link']} href="https://github.com/Torondil">
          Torondil
        </a>
        <a className={styles['footer__link']} href="https://github.com/KingstonTwelve">
          KingstonTwelve
        </a>
        {/* <a className={styles['footer__link']} href="https://github.com/nstgorbenko">nstgorbenko</a> */}
        <a className={styles['footer__link']} href="https://github.com/IvanPekh">
          IvanPekh
        </a>
        <a className={styles['footer__link']} href="https://github.com/Nerbet">
          Nerbet
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
