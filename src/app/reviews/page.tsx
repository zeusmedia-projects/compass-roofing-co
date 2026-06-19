import React from 'react';
import Link from 'next/link';
import { Star } from 'lucide-react';
import styles from './page.module.css';

export const metadata = {
  title: 'Customer Reviews & Testimonials | Compass Roofing Broward',
  description: 'Read verified 5-star customer reviews from residential and commercial roofing clients across Broward County and South Florida.',
};

export default function ReviewsPage() {
  const reviews = [
    { name: 'Maria T.', city: 'Fort Lauderdale', rating: 5, type: 'Roof Coating · Residential', text: 'Compass Roofing came out, gave us a clear report, and explained why we needed a coating rather than a full replacement. Saved us thousands.' },
    { name: 'Robert H.', city: 'Coral Springs', rating: 5, type: 'Roof Repair · Residential', text: 'Honest inspection, fair pricing, clean work. They flagged two problem areas I didn\'t even know about. Highly recommend for Broward homeowners.' },
    { name: 'Allied Property', city: 'Hollywood', rating: 5, type: 'Commercial Roofing · Flat Roof', text: 'We needed a commercial flat roof evaluated quickly before hurricane season. Compass got out within 48 hours and gave us a prioritized action plan.' },
    { name: 'James L.', city: 'Pompano Beach', rating: 5, type: 'Shingle Replacement · Residential', text: 'Professional crew, handled permitting seamlessly, cleaned the site daily. Our new architectural shingle roof looks fantastic.' },
    { name: 'Sandra K.', city: 'Plantation', rating: 5, type: 'Tile Maintenance · Residential', text: 'They repointed our barrel tiles and cleared organic build-up. Honest crew who didn\'t try to upsell me on a replacement.' }
  ];

  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className="blueprint-overlay-dark" />
        <div className="container" style={{ position: 'relative', zIndex: 5 }}>
          <span className={styles.eyebrow}>Client Feedback</span>
          <h1 className={styles.title}>Customer Reviews</h1>
          <p className={styles.subtitle}>
            Peace of mind starts at the roofline. Read about our commitment to clear communication and professional execution.
          </p>
        </div>
      </section>

      <section className={styles.section}>
        <div className="container">
          <div className={styles.grid}>
            {reviews.map((rev, idx) => (
              <div key={idx} className={styles.card}>
                <div className={styles.stars}>
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} size={16} fill="var(--color-accent-red)" color="var(--color-accent-red)" />
                  ))}
                </div>
                <h4 className={styles.reviewerName}>{rev.name} — {rev.city}</h4>
                <p className={styles.reviewText}>&ldquo;{rev.text}&rdquo;</p>
                <div className={styles.reviewMeta}>{rev.type}</div>
              </div>
            ))}
          </div>

          <div className={styles.ctaBlock}>
            <h3>Ready to Experience the Compass Difference?</h3>
            <p>Start with a clear, free visual roof inspection and get honest recommendations.</p>
            <Link href="/contact" className="btn btn-primary" style={{ marginTop: '16px' }}>
              Book Inspection
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
