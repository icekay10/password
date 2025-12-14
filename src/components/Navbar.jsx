'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Navbar.module.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);
  const isActive = (path) => pathname === path;

  return (
    <>
      <nav className={`${styles.navbar} ${isScrolled ? styles.navbarScrolled : ''}`}>
        <div className={styles.container}>
          {/* Logo */}
          <div className={styles.logo}>
            <Link href="/" className={styles.logoLink} onClick={closeMenu} aria-label="Home">
              <span className={styles.logoIcon}>🔒</span>
              <span className={styles.logoText}>VaultPassGenerator</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <ul className={styles.menu}>
            <li className={styles.item}>
              <Link
                href="/free-password-generator"
                className={`${styles.link} ${isActive('/free-password-generator') ? styles.linkActive : ''}`}
                onClick={closeMenu}
              >
                Generator
              </Link>
            </li>
            <li className={styles.item}>
              <Link
                href="/about"
                className={`${styles.link} ${isActive('/about') ? styles.linkActive : ''}`}
                onClick={closeMenu}
              >
                About
              </Link>
            </li>
            <li className={styles.item}>
              <Link
                href="/contact"
                className={`${styles.link} ${isActive('/contact') ? styles.linkActive : ''}`}
                onClick={closeMenu}
              >
                Contact
              </Link>
            </li>
          </ul>

          {/* Hamburger */}
          <button
            className={`${styles.hamburger} ${isMenuOpen ? styles.hamburgerActive : ''}`}
            onClick={toggleMenu}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
          >
            <span className={styles.hamburgerLine}></span>
            <span className={styles.hamburgerLine}></span>
            <span className={styles.hamburgerLine}></span>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          id="mobile-menu"
          className={`${styles.mobileMenu} ${isMenuOpen ? styles.mobileMenuOpen : ''}`}
          role="dialog"
          aria-modal="true"
        >
          <div className={styles.mobileHeader}>
            <div className={styles.logo}>
              <Link href="/" className={styles.logoLink} onClick={closeMenu} aria-label="Home">
                <span className={styles.logoIcon}>🔒</span>
                <span className={styles.logoText}>VaultPassGenerator</span>
              </Link>
            </div>
            <button className={styles.mobileClose} onClick={closeMenu} aria-label="Close menu">
              ✕
            </button>
          </div>
          <ul className={styles.mobileList}>
            <li className={styles.mobileItem}>
              <Link
                href="/free-password-generator"
                className={`${styles.mobileLink} ${isActive('/free-password-generator') ? styles.mobileLinkActive : ''}`}
                onClick={closeMenu}
              >
                <span className={styles.mobileIcon}>🔑</span> Generator
              </Link>
            </li>
            <li className={styles.mobileItem}>
              <Link
                href="/about"
                className={`${styles.mobileLink} ${isActive('/about') ? styles.mobileLinkActive : ''}`}
                onClick={closeMenu}
              >
                <span className={styles.mobileIcon}>ℹ️</span> About
              </Link>
            </li>
            <li className={styles.mobileItem}>
              <Link
                href="/contact"
                className={`${styles.mobileLink} ${isActive('/contact') ? styles.mobileLinkActive : ''}`}
                onClick={closeMenu}
              >
                <span className={styles.mobileIcon}>📞</span> Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Overlay */}
        {isMenuOpen && <div className={styles.overlay} onClick={closeMenu}></div>}
      </nav>

      {/* Spacer to prevent content under navbar */}
      <div className={styles.navbarSpacer}></div>
    </>
  );
};

export default Navbar;