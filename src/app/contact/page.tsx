import React from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import InspectionForm from '@/components/Form/InspectionForm';
import styles from './page.module.css';

export const metadata = {
  title: 'Contact Compass Roofing | Request a Broward Roofing Estimate',
  description: 'Request a free, multi-point digital roofing inspection or full structural estimate for repairs, coatings, and replacements in Broward County.',
};

export default function ContactPage() {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className="blueprint-overlay-dark" />
        <div className="container" style={{ position: 'relative', zIndex: 5 }}>
          <span className={styles.eyebrow}>Get in Touch</span>
          <h1 className={styles.title}>Contact Compass Roofing</h1>
          <p className={styles.subtitle}>
            Request a free roof inspection or submit a detailed plan to get a comprehensive estimate for your commercial or residential project.
          </p>
        </div>
      </section>

      <section className={styles.section}>
        <div className="container">
          <div className={styles.grid}>
            {/* Left Column - Contact Details */}
            <div className={styles.detailsCol}>
              <h2 className={styles.heading}>Dispatch &amp; Support</h2>
              <p className={styles.text}>
                We serve Broward County and adjacent South Florida markets from our central location. Contact us directly or book online.
              </p>

              <div className={styles.contactCard}>
                <Phone size={24} className={styles.icon} />
                <div>
                  <h4 className={styles.cardTitle}>Immediate Dispatch</h4>
                  <a href="tel:5551234567" className={styles.cardValue}>(555) 123-4567</a>
                  <p className={styles.cardText}>Priority response for active leaks.</p>
                </div>
              </div>

              <div className={styles.contactCard}>
                <Mail size={24} className={styles.icon} />
                <div>
                  <h4 className={styles.cardTitle}>Email Support</h4>
                  <a href="mailto:info@compassroofing.com" className={styles.cardValue}>info@compassroofing.com</a>
                  <p className={styles.cardText}>Response within 24 business hours.</p>
                </div>
              </div>

              <div className={styles.contactCard}>
                <MapPin size={24} className={styles.icon} />
                <div>
                  <h4 className={styles.cardTitle}>Service Area</h4>
                  <span className={styles.cardValue}>Broward County &amp; South Florida</span>
                  <p className={styles.cardText}>Licensce #MOCK12345ZM</p>
                </div>
              </div>

              <div className={styles.contactCard}>
                <Clock size={24} className={styles.icon} />
                <div>
                  <h4 className={styles.cardTitle}>Operating Hours</h4>
                  <span className={styles.cardValue}>Mon–Sat: 7:00 AM – 6:00 PM</span>
                  <p className={styles.cardText}>Closed on Sundays except for emergencies.</p>
                </div>
              </div>
            </div>

            {/* Right Column - Form Container */}
            <div className={styles.formCol}>
              {/* Full 12-field estimate form */}
              <InspectionForm isFullVersion={true} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
