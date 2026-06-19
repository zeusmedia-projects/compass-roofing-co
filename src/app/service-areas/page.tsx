import React from 'react';
import Link from 'next/link';
import { MapPin } from 'lucide-react';
import { citiesData } from '@/data/sitemapData';
import styles from './page.module.css';

export const metadata = {
  title: 'Our Service Areas in South Florida | Compass Roofing',
  description: 'Compass Roofing serves Broward County and adjacent South Florida cities, offering licensed, code-compliant residential and commercial roofing solutions.',
};

export default function ServiceAreasPage() {
  const cities = Object.values(citiesData);

  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className="blueprint-overlay-dark" />
        <div className="container" style={{ position: 'relative', zIndex: 5 }}>
          <span className={styles.eyebrow}>Local Dispatch</span>
          <h1 className={styles.title}>Service Areas in South Florida</h1>
          <p className={styles.subtitle}>
            We serve residential neighborhoods and commercial developments across Broward County with fully equipped local crews.
          </p>
        </div>
      </section>

      <section className={styles.section}>
        <div className="container">
          <div className={styles.grid}>
            {cities.map((city) => (
              <div key={city.slug} className={styles.card}>
                <div className={styles.cardHeader}>
                  <MapPin size={18} className={styles.icon} />
                  <h3 className={styles.cardTitle}>{city.cityName}</h3>
                </div>
                <p className={styles.cardText}>{city.shortDesc}</p>
                <div className={styles.metaLine}>
                  <strong>Weather Risk:</strong> <span>{city.weatherThreat}</span>
                </div>
                <Link href={`/service-areas/${city.slug}`} className={styles.link}>
                  <span>Book inspection in {city.cityName} →</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
