'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Phone, Menu, X, Calendar } from 'lucide-react';
import styles from './Header.module.css';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on mount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when pathname changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navLinks = [
    { label: 'Services', href: '/services' },
    { label: 'Service Areas', href: '/service-areas' },
    { label: 'Projects', href: '/projects' },
    { label: 'Reviews', href: '/reviews' },
    { label: 'Resources', href: '/resources' },
  ];

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        {/* Concept A SVG Logo */}
        <Link href="/" className={styles.logoLink}>
          <svg width="220" height="64" viewBox="0 0 220 72" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.logoSvg}>
            {/* C mark */}
            <path d="M38 12 A28 28 0 1 0 38 60 L38 50 A18 18 0 1 1 38 22 Z" fill="#ffffff" className={styles.logoC} />
            {/* Compass needle in negative space */}
            <polygon points="36,20 40,36 36,32 32,36" fill="#AA0808" />
            <polygon points="36,52 40,36 36,40 32,36" fill="rgba(255,255,255,0.3)" />
            {/* Wordmark */}
            <text x="72" y="32" fontFamily="Montserrat, sans-serif" fontWeight="800" fontSize="16" fill="#ffffff" letterSpacing="-0.5" className={styles.textWord}>COMPASS</text>
            <text x="72" y="52" fontFamily="Montserrat, sans-serif" fontWeight="400" fontSize="12" fill="rgba(255,255,255,0.6)" letterSpacing="2" className={styles.textSub}>ROOFING</text>
            {/* Small roof line accent */}
            <path d="M72 57 L220 57" stroke="rgba(255,255,255,0.15)" strokeWidth="0.5" className={styles.logoLine} />
          </svg>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className={styles.desktopNav}>
          {navLinks.map((link) => (
            <Link 
              key={link.href} 
              href={link.href} 
              className={`${styles.navLink} ${pathname === link.href ? styles.activeLink : ''}`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA Actions */}
        <div className={styles.desktopCta}>
          <a href="tel:5551234567" className={styles.phoneLink}>
            <Phone size={16} />
            <span>(555) 123-4567</span>
          </a>
          <Link href="/contact" className="btn btn-primary">
            <Calendar size={16} />
            <span>Schedule Inspection</span>
          </Link>
        </div>

        {/* Mobile Navigation Icons */}
        <div className={styles.mobileActions}>
          <a href="tel:5551234567" className={styles.mobilePhoneIcon} aria-label="Call Compass Roofing">
            <Phone size={20} />
          </a>
          <button className={styles.menuButton} onClick={toggleMobileMenu} aria-label="Toggle Navigation Menu">
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <div className={`${styles.mobileDrawer} ${isMobileMenuOpen ? styles.drawerOpen : ''}`}>
        <div className={styles.drawerHeader}>
          <svg width="180" height="50" viewBox="0 0 220 72" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M38 12 A28 28 0 1 0 38 60 L38 50 A18 18 0 1 1 38 22 Z" fill="#ffffff" />
            <polygon points="36,20 40,36 36,32 32,36" fill="#AA0808" />
            <polygon points="36,52 40,36 36,40 32,36" fill="rgba(255,255,255,0.3)" />
            <text x="72" y="32" fontFamily="Montserrat, sans-serif" fontWeight="800" fontSize="16" fill="#ffffff" letterSpacing="-0.5">COMPASS</text>
            <text x="72" y="52" fontFamily="Montserrat, sans-serif" fontWeight="400" fontSize="12" fill="rgba(255,255,255,0.6)" letterSpacing="2">ROOFING</text>
            <path d="M72 57 L220 57" stroke="rgba(255,255,255,0.15)" strokeWidth="0.5" />
          </svg>
          <button className={styles.closeButton} onClick={toggleMobileMenu} aria-label="Close Navigation Menu">
            <X size={24} />
          </button>
        </div>
        <nav className={styles.mobileNavLinks}>
          {navLinks.map((link) => (
            <Link 
              key={link.href} 
              href={link.href} 
              className={`${styles.mobileNavLink} ${pathname === link.href ? styles.activeMobileLink : ''}`}
            >
              {link.label}
            </Link>
          ))}
          <a href="tel:5551234567" className={styles.mobileDrawerPhone}>
            <Phone size={18} />
            <span>(555) 123-4567</span>
          </a>
          <Link href="/contact" className="btn btn-primary styles.mobileDrawerCta">
            <Calendar size={18} />
            <span>Schedule Inspection</span>
          </Link>
        </nav>
      </div>
      {/* Mobile Drawer Backdrop */}
      {isMobileMenuOpen && (
        <div className={styles.drawerBackdrop} onClick={toggleMobileMenu} />
      )}
    </header>
  );
}
