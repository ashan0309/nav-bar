import { useState } from 'react';
import styles from './Navbar.module.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={styles.navbar}>
        <a href="/" className={styles.title}>My Navbar</a>
      <div className={styles.container}>
        <div className={styles.menuIcon} onClick={toggleNavbar}>
          {isOpen ? 'X' : '☰'}
        </div>
        <div className={`${styles.menu} ${isOpen ? styles.menuOpen : ''}`}>
          <a href="/" className={styles.navLink}>Home</a>
          <a href="/about" className={styles.navLink}>About</a>
          <a href="/services" className={styles.navLink}>Services</a>
          <a href="/contact" className={styles.navLink}>Contact</a>
          <a href="/blog" className={styles.navLink}>Blog</a>
          <input type="text" placeholder="Search..." className={styles.searchInput} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
