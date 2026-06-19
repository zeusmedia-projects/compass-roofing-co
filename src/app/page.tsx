'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  ShieldCheck, 
  MapPin, 
  ChevronRight, 
  Star, 
  TrendingUp, 
  Users, 
  CheckCircle2, 
  Wrench, 
  Home as HomeIcon, 
  Building2, 
  AlertTriangle, 
  FileText,
  Plus,
  Minus
} from 'lucide-react';
import DiagnosticSection from '@/components/Diagnostic/DiagnosticSection';
import InspectionForm from '@/components/Form/InspectionForm';
import styles from './page.module.css';

export default function Home() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const services = [
    { name: 'Roof Repair', slug: 'roof-repair', tag: 'Popular', text: 'Stops active leaks and replaces damaged shingles or tiles to extend the lifespan of your roof.' },
    { name: 'Roof Replacement', slug: 'roof-replacement', tag: 'Guaranteed', text: 'A complete roof rebuild using storm-ready underlayment and high-performance tiles or metal.' },
    { name: 'Residential Roofing', slug: 'residential-roofing', tag: 'Homeowners', text: 'Tailored roofing systems designed to secure and beautify single-family homes across Broward County.' },
    { name: 'Commercial Roofing', slug: 'commercial-roofing', tag: 'Properties', text: 'Heavy-duty roofing solutions for industrial, retail, and commercial flat roofs with certified warranties.' },
    { name: 'Flat Roofing', slug: 'flat-roofing', tag: 'Specialist', text: 'TPO, PVC, and modified bitumen installations engineered for flat slopes and optimal ponding-water drainage.' },
    { name: 'Roof Coatings', slug: 'roof-coatings', tag: 'Restoration', text: 'Elastomeric and silicone liquid membranes that restore waterproofing integrity and defer replacement costs.' },
    { name: 'Roof Inspections', slug: 'roof-inspections', tag: 'Diagnostic', text: 'Comprehensive visual and physical inspections with digital photography and detailed health reports.' },
    { name: 'Emergency Roof Repair', slug: 'emergency-roof-repair', tag: 'Emergency', text: 'Fast-response dispatch for active storm leaks, wind damage, and structural tarping services.' },
  ];

  const educationOptions = [
    { title: 'Roof Repair', subtitle: 'Targeted Fixes', text: 'Best for leaks under 100 sq ft, localized wind damage, or failed flashing around pipes. Extends current roof life without major spending.', slug: 'roof-repair' },
    { title: 'Silicone Coating', subtitle: 'Surface Restoration', text: 'Ideal for aging flat or metal roofs with surface wear but solid structural decks. Creates a seamless water barrier for 10+ years.', slug: 'roof-coatings' },
    { title: 'Full Replacement', subtitle: 'Total Rebuild', text: 'Required when wood rot is systemic, leaks exceed 30% of surface area, or shingles/tiles have reached their manufacturer lifespan.', slug: 'roof-replacement' },
    { title: 'Commercial TPO', subtitle: 'Flat Roof Decking', text: 'Reflective single-ply membrane that reduces cooling costs and resists UV damage. Recommended for warehouse and retail roofs.', slug: 'flat-roofing' },
  ];

  const sfConditions = [
    { title: 'Heavy Rain', desc: 'Downpours test flashing seals. Proactive drainage checks prevent water backing up under your tiles.' },
    { title: 'Hurricane Winds', desc: 'Uplift forces pull loose tiles. We fastening roofs beyond Broward code standards.' },
    { title: 'Intense UV rays', desc: 'Constant sun breaks down asphalt shingles. Coating protects against UV brittleness.' },
    { title: 'Flat Roof Ponding', desc: 'Stagnant water rots seams. We correct slopes and install single-ply systems.' },
    { title: 'Tile Delamination', desc: 'Heat causes clay tiles to crack. Concrete alternatives offer superior South Florida life.' },
    { title: 'Commercial Wind Uplift', desc: 'Commercial parapets experience high perimeter drag. We install heavy-duty edge details.' },
    { title: 'Asset Valuation', desc: 'A verified storm-rated roof decreases insurance premiums and increases resell value.' }
  ];

  const projects = [
    { city: 'Fort Lauderdale', type: 'Residential', service: 'Tile Roof Repair', title: 'Flashing Restoration near Las Olas', desc: 'Sealed leaking chimney flashing and replaced 45 wind-damaged concrete barrel tiles.' },
    { city: 'Hollywood', type: 'Commercial', service: 'Flat Roof Silicone Coating', title: 'Warehouse Roof Preservation', desc: 'Applied high-solids silicone coating over 12,000 sq ft flat roof, extending life by 10 years.' },
    { city: 'Coral Springs', type: 'Residential', service: 'Full Roof Replacement', title: 'Storm-Ready Shingle Installation', desc: 'Completed full strip-off and replacement with Class 4 impact-resistant shingles and secondary water barrier.' }
  ];

  const reviews = [
    { name: 'Maria T.', city: 'Fort Lauderdale', rating: 5, type: 'Roof Coating · Residential', text: 'Compass Roofing came out, gave us a clear report, and explained why we needed a coating rather than a full replacement. Saved us thousands.' },
    { name: 'Robert H.', city: 'Coral Springs', rating: 5, type: 'Roof Repair · Residential', text: 'Honest inspection, fair pricing, clean work. They flagged two problem areas I didn\'t even know about. Highly recommend for Broward homeowners.' },
    { name: 'Allied Property', city: 'Hollywood', rating: 5, type: 'Commercial Roofing · Flat Roof', text: 'We needed a commercial flat roof evaluated quickly before hurricane season. Compass got out within 48 hours and gave us a prioritized action plan.' }
  ];

  const cities = [
    'Fort Lauderdale', 'Hollywood', 'Coral Springs', 'Pompano Beach', 'Plantation',
    'Davie', 'Weston', 'Pembroke Pines', 'Miramar', 'Deerfield Beach',
    'Boca Raton', 'Sunrise', 'Lauderhill', 'Tamarac', 'Wilton Manors',
    'Oakland Park', 'Margate', 'Coconut Creek', 'Parkland', 'Miami'
  ];

  const faqs = [
    { q: 'How do I know if I need roof repair or replacement?', a: 'Generally, if leaks are isolated, your roof is under 12 years old, and surface wear is under 30%, a targeted repair or coating is best. If the roof deck has widespread moisture saturation, or the system is near the end of its lifespan (15+ years for shingles), a full replacement is recommended to prevent structural damage.' },
    { q: 'How often should I have my roof inspected in South Florida?', a: 'We recommend having your roof inspected at least once a year, preferably in the spring before hurricane season begins (June 1st), and immediately following any major storm event with high wind speeds.' },
    { q: 'Are roof coatings a good option for flat roofs in Florida?', a: 'Yes. Liquid silicone and elastomeric roof coatings are highly effective for South Florida flat roofs. They create a seamless, waterproof barrier that stands up to ponding water and reflects UV rays, which lowers cooling bills and extends the roof lifespan by 7 to 10 years.' },
    { q: 'What are signs of roof damage after heavy rain?', a: 'Common signs include water stains on your drywall, dripping noises, peeling paint near rooflines, active leaks in attic spaces, or damp spots around penetrations like pipes and chimney joints.' },
    { q: 'Do you handle both residential and commercial roofs?', a: 'Yes. Compass Roofing is fully licensed and equipped to handle both residential properties (shingle, tile, metal roofs) and commercial buildings (flat roofs, TPO, PVC, and liquid restoration coatings).' },
    { q: 'What should I do if I have an active roof leak right now?', a: 'If you have an active leak, try to place buckets under the drip to minimize water damage, clear valuable assets from the area, and contact our emergency roof dispatch line immediately at (555) 123-4567 for tarping services.' },
  ];

  return (
    <div className={styles.page}>
      
      {/* ── SECTION 02: HERO ── */}
      <section className={styles.heroSection}>
        <div className="blueprint-overlay-dark" />
        <div className={styles.heroBg}>
          <Image 
            src="/images/hero-roof.png" 
            alt="Compass Roofing premium tile roof project in South Florida" 
            fill
            priority
            quality={90}
            className={styles.heroImage}
          />
        </div>
        <div className={styles.heroOverlay} />
        
        <div className="container">
          <div className={styles.heroContent}>
            <span className={styles.heroEyebrow}>{"South Florida's Clear-Direction Roofer"}</span>
            <h1 className={styles.heroTitle}>Know Where Your Roof Stands</h1>
            <p className={styles.heroText}>
              Clear visual inspections, honest repair-vs-replace recommendations, and dependable roofing systems built for South Florida winds and heat.
            </p>
            <div className={styles.heroCtaRow}>
              <Link href="#lead-form" className="btn btn-primary">
                Schedule Roof Inspection
              </Link>
              <Link href="/services" className="btn btn-ghost-light">
                Explore Services
              </Link>
            </div>
            
            {/* Floating Glass Service Pills */}
            <div className={styles.glassPills}>
              {['Roof Repair', 'Replacement', 'Coatings', 'Flat Roofs', 'Commercial', 'Emergency'].map((pill, idx) => (
                <div key={idx} className={styles.glassPill}>
                  <div className={styles.glassPillDot} />
                  <span>{pill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 03: PROOF BAR ── */}
      <section className={styles.proofBar}>
        <div className="container">
          <div className={styles.proofGrid}>
            <div className={styles.proofCard}>
              <ShieldCheck size={20} className={styles.proofIcon} />
              <div>
                <h4 className={styles.proofValue}>Local Crew</h4>
                <p className={styles.proofLabel}>Broward County Trusted</p>
              </div>
            </div>
            <div className={styles.proofCard}>
              <TrendingUp size={20} className={styles.proofIcon} />
              <div>
                <h4 className={styles.proofValue}>Res + Com</h4>
                <p className={styles.proofLabel}>Both Service Sectors</p>
              </div>
            </div>
            <div className={styles.proofCard}>
              <Wrench size={20} className={styles.proofIcon} />
              <div>
                <h4 className={styles.proofValue}>Full Spectrum</h4>
                <p className={styles.proofLabel}>Repair → Coating → Replace</p>
              </div>
            </div>
            <div className={styles.proofCard}>
              <MapPin size={20} className={styles.proofIcon} />
              <div>
                <h4 className={styles.proofValue}>South Florida</h4>
                <p className={styles.proofLabel}>Primary Service Area</p>
              </div>
            </div>
            <div className={styles.proofCard}>
              <Users size={20} className={styles.proofIcon} />
              <div>
                <h4 className={styles.proofValue}>Inspection First</h4>
                <p className={styles.proofLabel}>Clear Decisions Always</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 04: INTERACTIVE DIAGNOSTIC ── */}
      <DiagnosticSection />

      {/* ── SECTION 05: SERVICES GRID ── */}
      <section className={styles.servicesSection} id="services">
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className="btn btn-primary" style={{ pointerEvents: 'none', background: 'rgba(27, 58, 107, 0.05)', color: 'var(--compass-blue)', padding: '6px 12px', fontSize: '11px' }}>
              Roofing Services
            </span>
            <h2 className={styles.sectionTitle} style={{ marginTop: '16px' }}>Services with a Clear Path Forward</h2>
            <p className={styles.sectionSubtitle}>
              Whether you need to resolve a minor leak, extend flat roof life with a restoration coating, or complete a full storm-proof rebuild.
            </p>
          </div>

          <div className={styles.servicesGrid}>
            {services.map((service, idx) => (
              <div key={idx} className={styles.serviceCard}>
                <div className={styles.serviceTag}>{service.tag}</div>
                <h3 className={styles.serviceName}>{service.name}</h3>
                <p className={styles.serviceText}>{service.text}</p>
                <Link href={`/services/${service.slug}`} className={styles.serviceLink}>
                  <span>Learn About {service.name}</span>
                  <ChevronRight size={14} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 06: EDUCATION ── */}
      <section className={styles.educationSection}>
        <div className="container">
          <div className={styles.educationGrid}>
            <div className={styles.educationInfo}>
              <span className={styles.eyebrow}>Know Your Options</span>
              <h2 className={styles.sectionTitle} style={{ color: '#ffffff' }}>Not Every Roof Problem Requires a Brand New Roof</h2>
              <p className={styles.educationText}>
                {"We believe in providing the path that makes sense for your property's budget and age. Sometimes a target repair or liquid restoration coating is the best choice to delay massive replacements."}
              </p>
              <div style={{ marginTop: '24px' }}>
                <Link href="#lead-form" className="btn btn-primary">
                  Get a Free Diagnostics Audit
                </Link>
              </div>
            </div>
            
            <div className={styles.educationCards}>
              {educationOptions.map((opt, idx) => (
                <div key={idx} className={styles.eduCard}>
                  <div className={styles.eduNum}>0{idx + 1}</div>
                  <div>
                    <h4 className={styles.eduTitle}>{opt.title}</h4>
                    <p className={styles.eduSubtitle}>{opt.subtitle}</p>
                    <p className={styles.eduDesc}>{opt.text}</p>
                    <Link href={`/services/${opt.slug}`} className={styles.eduLink}>
                      View details
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 07: RESIDENTIAL / COMMERCIAL SPLIT ── */}
      <section className={styles.splitSection}>
        <div className="container">
          <div className={styles.splitGrid}>
            {/* Left split - Homeowners */}
            <div className={`${styles.splitCard} ${styles.splitLeft}`}>
              <HomeIcon size={40} className={styles.splitIcon} />
              <h3 className={styles.splitTitle}>For Homeowners</h3>
              <p className={styles.splitText}>
                Protect your family and investment. We offer tile roof repairs, storm-ready shingle replacements, and secondary leak barrier underlayments.
              </p>
              <Link href="/services/residential-roofing" className="btn btn-primary" style={{ background: '#ffffff', color: 'var(--compass-blue)' }}>
                Protect Your Home
              </Link>
            </div>
            
            {/* Right split - Property Owners */}
            <div className={`${styles.splitCard} ${styles.splitRight}`}>
              <Building2 size={40} className={styles.splitIcon} />
              <h3 className={styles.splitTitle}>For Property Owners</h3>
              <p className={styles.splitText}>
                Commercial TPO, modified bitumen repairs, and high-solids silicone roof coatings designed to waterproof and decrease cooling demands.
              </p>
              <Link href="/services/commercial-roofing" className="btn btn-primary">
                Plan a Commercial Project
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 08: SOUTH FLORIDA CONDITIONS ── */}
      <section className={styles.conditionsSection}>
        <div className="blueprint-overlay" />
        <div className="container">
          <div className={styles.sectionHeader} style={{ position: 'relative', zIndex: 5 }}>
            <span className={styles.eyebrow} style={{ color: 'var(--compass-blue)' }}>Built For Where You Live</span>
            <h2 className={styles.sectionTitle}>Built for South Florida Conditions</h2>
            <p className={styles.sectionSubtitle}>
              Our materials and fastening methods are specifically designed to survive local climate challenges.
            </p>
          </div>

          <div className={styles.conditionsGrid}>
            {sfConditions.map((cond, idx) => (
              <div key={idx} className={styles.conditionCard}>
                <div className={styles.conditionIcon}>
                  <AlertTriangle size={18} />
                </div>
                <h4 className={styles.conditionTitle}>{cond.title}</h4>
                <p className={styles.conditionDesc}>{cond.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 09: RECENT PROJECTS ── */}
      <section className={styles.projectsSection} id="projects">
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className={styles.eyebrow} style={{ color: 'var(--compass-blue)' }}>Our Work</span>
            <h2 className={styles.sectionTitle}>Recent Roof Work Across South Florida</h2>
            <p className={styles.sectionSubtitle}>
              Check out completed roofing solutions in your neighborhood. Real local proof.
            </p>
          </div>

          <div className={styles.projectsGrid}>
            {projects.map((proj, idx) => (
              <div key={idx} className={styles.projectCard}>
                <div className={styles.projectImagePlaceholder}>
                  <div className={styles.projectImgGlow} />
                  <span className={styles.projectTag}>{proj.city}</span>
                  <span className={styles.projectMaterialTag}>{proj.service}</span>
                </div>
                <div className={styles.projectDetails}>
                  <h3 className={styles.projectTitle}>{proj.title}</h3>
                  <p className={styles.projectDesc}>{proj.desc}</p>
                  <Link href={`/projects/project-${idx}`} className={styles.projectLink}>
                    View Project Details →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 10: TESTIMONIALS ── */}
      <section className={styles.reviewsSection} id="reviews">
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className={styles.eyebrow} style={{ color: 'var(--compass-blue)' }}>What Clients Say</span>
            <h2 className={styles.sectionTitle}>Peace of Mind Starts at the Roofline</h2>
            <p className={styles.sectionSubtitle}>
              We are proud of our Broward County track record. See why neighbors trust Compass.
            </p>
          </div>

          <div className={styles.reviewsGrid}>
            {reviews.map((rev, idx) => (
              <div key={idx} className={styles.reviewCard}>
                <div className={styles.stars}>
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} size={14} fill="var(--color-accent-red)" color="var(--color-accent-red)" />
                  ))}
                </div>
                <h4 className={styles.reviewerName}>{rev.name} — {rev.city}</h4>
                <p className={styles.reviewText}>&ldquo;{rev.text}&rdquo;</p>
                <div className={styles.reviewMeta}>{rev.type}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 11: SERVICE AREAS ── */}
      <section className={styles.areasSection} id="service-areas">
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Roofing Services Across South Florida</h2>
            <p className={styles.sectionSubtitle}>
              Our fully equipped crews serve Broward County and adjacent South Florida markets from our base.
            </p>
          </div>

          <div className={styles.citiesGrid}>
            {cities.map((city, idx) => (
              <Link key={idx} href={`/service-areas/${city.toLowerCase().replace(/\s+/g, '-')}-roofing`} className={styles.cityPill}>
                <MapPin size={12} className={styles.cityIcon} />
                <span>{city}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 12: FAQ SECTION ── */}
      <section className={styles.faqSection} id="faq">
        <div className="container">
          <div className={styles.faqLayout}>
            <div className={styles.faqHeader}>
              <span className={styles.eyebrow} style={{ color: 'var(--compass-blue)' }}>Common Questions</span>
              <h2 className={styles.sectionTitle}>Frequently Asked Questions</h2>
              <p className={styles.sectionSubtitle}>
                Get clear answers regarding South Florida roofing requirements, inspections, and waterproofing coatings.
              </p>
              <div className={styles.faqBadge}>
                <FileText size={16} />
                <span>FAQPage Schema Enabled</span>
              </div>
            </div>

            <div className={styles.faqAccordions}>
              {faqs.map((faq, idx) => {
                const isOpen = activeFaq === idx;
                return (
                  <div key={idx} className={styles.faqItem}>
                    <button 
                      className={styles.faqQuestion} 
                      onClick={() => toggleFaq(idx)}
                      aria-expanded={isOpen}
                    >
                      <span>{faq.q}</span>
                      <span className={styles.faqToggleIcon}>
                        {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                      </span>
                    </button>
                    <div className={`${styles.faqAnswer} ${isOpen ? styles.faqAnswerOpen : ''}`}>
                      <p>{faq.a}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 13: LEAD FORM & FINAL CTA ── */}
      <section className={styles.leadFormSection} id="lead-form">
        <div className="blueprint-overlay-dark" />
        <div className="container" style={{ position: 'relative', zIndex: 5 }}>
          <div className={styles.leadGrid}>
            <div className={styles.leadTextContent}>
              <span className={styles.eyebrow}>Request Inspection</span>
              <h2 className={styles.sectionTitle} style={{ color: '#ffffff', fontSize: '36px' }}>
                Not Sure If You Need A Repair Or Replacement?
              </h2>
              <p className={styles.leadDescription}>
                Don\'t let roof anxiety dictate your budget. Get a clear roof inspection first. We\'ll diagnose active leaks, check structural straps, and present you with options—whether it\'s a targeted repair, a protective coating, or a replacement.
              </p>
              <div className={styles.leadPoints}>
                <div className={styles.leadPoint}>
                  <CheckCircle2 size={16} className={styles.leadPointIcon} />
                  <span>Crawlable digital photo inspection report provided</span>
                </div>
                <div className={styles.leadPoint}>
                  <CheckCircle2 size={16} className={styles.leadPointIcon} />
                  <span>Licensed under Florida code #MOCK12345ZM</span>
                </div>
                <div className={styles.leadPoint}>
                  <CheckCircle2 size={16} className={styles.leadPointIcon} />
                  <span>Osiris One multi-point CRM routing for 15-min call back</span>
                </div>
              </div>
              <div className={styles.emergencyBanner}>
                <strong>Need Immediate Help? </strong>
                <span>Call Dispatch at <a href="tel:5551234567" className={styles.emergencyTel}>(555) 123-4567</a></span>
              </div>
            </div>
            
            <div className={styles.leadFormContainer}>
              <InspectionForm />
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
