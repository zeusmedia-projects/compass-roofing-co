import React from 'react';
import Link from 'next/link';
import { BookOpen } from 'lucide-react';
import { resourcesData } from '@/data/sitemapData';
import styles from './page.module.css';

export const metadata = {
  title: 'Roofing Resources & Blog | South Florida Guides | Compass Roofing',
  description: 'Read detailed guides on tile leaks, flat roof ponding, silicone coatings, wind mitigation credits, and preparing your roof for Florida hurricane season.',
};

export default function ResourcesPage() {
  const articles = Object.values(resourcesData);

  return (
    <div className={styles.page}>
      {/* Hero */}
      <section className={styles.hero}>
        <div className="blueprint-overlay-dark" />
        <div className="container" style={{ position: 'relative', zIndex: 5 }}>
          <span className={styles.eyebrow}>Educational Guides</span>
          <h1 className={styles.title}>Roofing Resources &amp; Guides</h1>
          <p className={styles.subtitle}>
            Empowering Broward County property owners to make informed decisions about repairs, coatings, and replacements.
          </p>
        </div>
      </section>

      {/* Grid List */}
      <section className={styles.section}>
        <div className="container">
          <div className={styles.grid}>
            {articles.map((art) => (
              <div key={art.slug} className={styles.card}>
                <div className={styles.cardHeader}>
                  <BookOpen size={20} className={styles.icon} />
                  <h3 className={styles.cardTitle}>{art.title}</h3>
                </div>
                <p className={styles.cardText}>{art.excerpt}</p>
                <Link href={`/resources/${art.slug}`} className={styles.link}>
                  <span>Read Full Article →</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
