import React from 'react';
import Link from 'next/link';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import styles from './Footer.module.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const servicesList = [
    { name: 'Roof Repair', href: '/services/roof-repair' },
    { name: 'Roof Replacement', href: '/services/roof-replacement' },
    { name: 'Residential Roofing', href: '/services/residential-roofing' },
    { name: 'Commercial Roofing', href: '/services/commercial-roofing' },
    { name: 'Flat Roofing', href: '/services/flat-routing' },
    { name: 'Roof Coatings', href: '/services/roof-coatings' },
    { name: 'Roof Inspections', href: '/services/roof-inspections' },
    { name: 'Emergency Roof Repair', href: '/services/emergency-roof-repair' },
  ];

  const serviceAreasList = [
    { name: 'Fort Lauderdale', href: '/service-areas/fort-lauderdale-roofing' },
    { name: 'Hollywood', href: '/service-areas/hollywood-roofing' },
    { name: 'Coral Springs', href: '/service-areas/coral-springs-roofing' },
    { name: 'Pompano Beach', href: '/service-areas/pompano-beach-roofing' },
    { name: 'Plantation', href: '/service-areas/plantation-roofing' },
    { name: 'Davie', href: '/service-areas/davie-roofing' },
    { name: 'Weston', href: '/service-areas/weston-roofing' },
    { name: 'Pembroke Pines', href: '/service-areas/pembroke-pines-roofing' },
    { name: 'Boca Raton', href: '/service-areas/boca-raton-roofing' },
    { name: 'Miramar', href: '/service-areas/miramar-roofing' },
  ];

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Column 1: Brand details */}
          <div className={styles.col}>
            <svg width="200" height="60" viewBox="0 0 220 72" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.logo}>
              <path d="M38 12 A28 28 0 1 0 38 60 L38 50 A18 18 0 1 1 38 22 Z" fill="#ffffff" />
              <polygon points="36,20 40,36 36,32 32,36" fill="#AA0808" />
              <polygon points="36,52 40,36 36,40 32,36" fill="rgba(255,255,255,0.3)" />
              <text x="72" y="32" fontFamily="Montserrat, sans-serif" fontWeight="800" fontSize="16" fill="#ffffff" letterSpacing="-0.5">COMPASS</text>
              <text x="72" y="52" fontFamily="Montserrat, sans-serif" fontWeight="400" fontSize="12" fill="rgba(255,255,255,0.6)" letterSpacing="2">ROOFING</text>
              <path d="M72 57 L220 57" stroke="rgba(255,255,255,0.15)" strokeWidth="0.5" />
            </svg>
            <p className={styles.tagline}>Clear Direction. Stronger Roofs.</p>
            <p className={styles.license}>License #MOCK12345ZM</p>
            <p className={styles.copyright}>&copy; {currentYear} Compass Roofing. All rights reserved.</p>
          </div>

          {/* Column 2: Services */}
          <div className={styles.col}>
            <h4 className={styles.heading}>Roofing Services</h4>
            <ul className={styles.list}>
              {servicesList.map((service) => (
                <li key={service.href}>
                  <Link href={service.href} className={styles.link}>
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Service Areas */}
          <div className={styles.col}>
            <h4 className={styles.heading}>Service Areas</h4>
            <ul className={styles.list}>
              {serviceAreasList.map((area) => (
                <li key={area.href}>
                  <Link href={area.href} className={styles.link}>
                    {area.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & NAP */}
          <div className={styles.col}>
            <h4 className={styles.heading}>Contact Compass</h4>
            <ul className={styles.contactList}>
              <li>
                <a href="tel:5551234567" className={styles.contactLink}>
                  <Phone size={16} className={styles.icon} />
                  <span>(555) 123-4567</span>
                </a>
              </li>
              <li>
                <a href="mailto:info@compassroofing.com" className={styles.contactLink}>
                  <Mail size={16} className={styles.icon} />
                  <span>info@compassroofing.com</span>
                </a>
              </li>
              <li className={styles.contactInfo}>
                <MapPin size={16} className={styles.icon} />
                <div>
                  <strong>Compass Roofing</strong>
                  <br />
                  Serving Broward County &amp; South Florida
                </div>
              </li>
              <li className={styles.contactInfo}>
                <Clock size={16} className={styles.icon} />
                <span>Mon–Sat: 7:00 AM – 6:00 PM</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={styles.bottomBar}>
          <div className={styles.bottomLinks}>
            <Link href="/privacy-policy" className={styles.bottomLink}>
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className={styles.bottomLink}>
              Terms of Service
            </Link>
          </div>
          <p className={styles.bottomNote}>
            NAP consistent with Google Business Profile. Built for South Florida wind ratings and storm standards.
          </p>
        </div>
      </div>
    </footer>
  );
}
