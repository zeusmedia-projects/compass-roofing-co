'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Phone, Calendar } from 'lucide-react';
import styles from './StickyMobileCta.module.css';

export default function StickyMobileCta() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Hide sticky bar when user is typing in form inputs on mobile
    const handleFocus = (e: FocusEvent) => {
      const target = e.target as HTMLElement;
      if (target && (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || target.tagName === 'SELECT')) {
        setIsVisible(false);
      }
    };

    const handleBlur = () => {
      setIsVisible(true);
    };

    document.addEventListener('focusin', handleFocus);
    document.addEventListener('focusout', handleBlur);

    return () => {
      document.removeEventListener('focusin', handleFocus);
      document.removeEventListener('focusout', handleBlur);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className={styles.stickyBar}>
      <a href="tel:5551234567" className={styles.callButton}>
        <Phone size={18} />
        <span>Call Now</span>
      </a>
      <Link href="/contact" className={styles.scheduleButton}>
        <Calendar size={18} />
        <span>Schedule Inspection</span>
      </Link>
    </div>
  );
}
