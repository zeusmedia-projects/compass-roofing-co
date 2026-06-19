import React from 'react';
import Link from 'next/link';
import { ShieldCheck, Users, Trophy } from 'lucide-react';
import styles from './page.module.css';

export const metadata = {
  title: 'About Compass Roofing | South Florida Contractor Details',
  description: 'Compass Roofing is a licensed, local roofing contractor in Broward County, FL, specializing in concrete tile repairs, metal standing-seam installations, and TPO flat roof coatings.',
};

export default function AboutPage() {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className="blueprint-overlay-dark" />
        <div className="container" style={{ position: 'relative', zIndex: 5 }}>
          <span className={styles.eyebrow}>Our Company</span>
          <h1 className={styles.title}>About Compass Roofing</h1>
          <p className={styles.subtitle}>
            A dedicated team of local South Florida roofing professionals providing clear direction and storm-ready installations.
          </p>
        </div>
      </section>

      <section className={styles.section}>
        <div className="container">
          <div className={styles.grid}>
            {/* Story */}
            <div>
              <h2 className={styles.heading}>The Compass Story</h2>
              <p className={styles.text}>
                Founded in Broward County, Compass Roofing was established to remove the anxiety from roofing projects. Most property owners delay roofing decisions because they don\'t know if they need a minor repair or a complete replacement.
              </p>
              <p className={styles.text}>
                We built our brand around a simple promise: <strong>&ldquo;Know Where Your Roof Stands.&rdquo;</strong> We start every project with a detailed diagnostic inspection, providing photo evidence and clear options so you can choose the path that makes the most sense for your budget and timeline.
              </p>
            </div>

            {/* Core Values */}
            <div className={styles.valuesBox}>
              <h3 className={styles.valuesTitle}>Our Core Values</h3>
              
              <div className={styles.valueItem}>
                <ShieldCheck size={20} className={styles.valueIcon} />
                <div>
                  <strong>Clear Inspections First</strong>
                  <p className={styles.valueText}>We always explain the condition of your roof before asking for a commitment.</p>
                </div>
              </div>

              <div className={styles.valueItem}>
                <Users size={20} className={styles.valueIcon} />
                <div>
                  <strong>Local Craftsmanship</strong>
                  <p className={styles.valueText}>Our crews live in South Florida and understand the wind codes and UV dynamics.</p>
                </div>
              </div>

              <div className={styles.valueItem}>
                <Trophy size={20} className={styles.valueIcon} />
                <div>
                  <strong>Premium Execution</strong>
                  <p className={styles.valueText}>We use advanced underlayments and hurricane-rated fasteners on all projects.</p>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.ctaBlock}>
            <h3>Looking for an Honest Evaluation?</h3>
            <p>Our visual inspections are free for Broward County homeowners. Request an audit today.</p>
            <Link href="/contact" className="btn btn-primary" style={{ marginTop: '16px' }}>
              Book Inspection
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
