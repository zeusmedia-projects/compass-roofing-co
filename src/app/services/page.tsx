import React from 'react';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { servicesData } from '@/data/sitemapData';
import styles from './page.module.css';

export const metadata = {
  title: 'Roofing Services in South Florida | Compass Roofing',
  description: 'Compass Roofing provides tile repairs, shingle replacements, metal roofs, TPO flat roof membranes, and protective silicone coatings across Broward County.',
};

export default function ServicesPage() {
  const services = Object.values(servicesData);

  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className="blueprint-overlay-dark" />
        <div className="container" style={{ position: 'relative', zIndex: 5 }}>
          <span className={styles.eyebrow}>Our Capabilities</span>
          <h1 className={styles.title}>South Florida Roofing Services</h1>
          <p className={styles.subtitle}>
            From minor residential shingle repairs to major commercial flat roof installations, we provide clear direction and dependable results.
          </p>
        </div>
      </section>

      <section className={styles.section}>
        <div className="container">
          <div className={styles.grid}>
            {services.map((service) => (
              <div key={service.slug} className={styles.card}>
                <span className={styles.tag}>{service.tag}</span>
                <h3 className={styles.cardTitle}>{service.name}</h3>
                <p className={styles.cardText}>{service.shortDesc}</p>
                <Link href={`/services/${service.slug}`} className={styles.link}>
                  <span>Explore Service Details</span>
                  <ChevronRight size={14} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
