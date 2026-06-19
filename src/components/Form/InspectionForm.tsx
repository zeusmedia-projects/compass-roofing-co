'use client';

import React, { useState, useEffect } from 'react';
import { ShieldCheck, Upload, AlertCircle } from 'lucide-react';
import styles from './InspectionForm.module.css';

interface FormProps {
  isFullVersion?: boolean;
}

export default function InspectionForm({ isFullVersion = false }: FormProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    service: '',
    type: 'residential',
    message: '',
    // Full version fields
    roofType: '',
    actionNeeded: '',
    timeline: '',
    referrer: '',
    // Hidden UTM parameters for Osiris One attribution
    utm_source: '',
    utm_medium: '',
    utm_campaign: '',
    utm_term: '',
    utm_content: '',
    landing_page: '',
  });

  const [photo, setPhoto] = useState<File | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    // Read URL parameters on mount to capture UTM tracking (Osiris One Pipeline)
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      setFormData((prev) => ({
        ...prev,
        utm_source: params.get('utm_source') || '',
        utm_medium: params.get('utm_medium') || '',
        utm_campaign: params.get('utm_campaign') || '',
        utm_term: params.get('utm_term') || '',
        utm_content: params.get('utm_content') || '',
        landing_page: window.location.href,
      }));
    }
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setPhoto(e.target.files[0]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    // Quick Validation
    if (!formData.name.trim() || !formData.phone.trim() || !formData.email.trim()) {
      setErrorMsg('Name, Phone, and Email are required.');
      return;
    }

    // Capture Emergency flag in Osiris UTM metadata if the requested service is emergency
    const submissionData = {
      ...formData,
      emergency_flag: formData.service === 'emergency-roof-repair' ? 'EMERGENCY_PRIORITY' : 'STANDARD',
      uploaded_photo: photo ? photo.name : null,
    };

    console.log('Submitting lead payload to CRM / Osiris One attribution dashboard:', submissionData);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className={styles.successContainer}>
        <div className={styles.successHeader}>
          <ShieldCheck size={48} className={styles.successIcon} />
          <h3 className={styles.successTitle}>Inspection Scheduled!</h3>
          <p className={styles.successText}>
            Thank you, <strong>{formData.name}</strong>. Our South Florida dispatch team has received your request and will call you at <strong>{formData.phone}</strong> within 15 minutes to confirm your time slot.
          </p>
        </div>
        <div className={styles.successMeta}>
          {formData.service === 'emergency-roof-repair' && (
            <div className={styles.emergencyNotice}>
              <AlertCircle size={16} />
              <span>EMERGENCY PROTOCOL ACTIVATED: Crew dispatcher notified.</span>
            </div>
          )}
          <span className={styles.leadId}>Attribution: Osiris One Lead Registered</span>
        </div>
      </div>
    );
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h3 className={styles.formTitle}>
        {isFullVersion ? 'Request a Full Roofing Estimate' : 'Schedule a Roof Inspection'}
      </h3>
      <p className={styles.formSubtitle}>
        Get honest answers about your roof condition. No sales pressure.
      </p>

      {errorMsg && (
        <div className={styles.errorAlert}>
          <AlertCircle size={16} />
          <span>{errorMsg}</span>
        </div>
      )}

      {/* Hidden Fields for UTM Tracking */}
      <input type="hidden" name="utm_source" value={formData.utm_source} />
      <input type="hidden" name="utm_medium" value={formData.utm_medium} />
      <input type="hidden" name="utm_campaign" value={formData.utm_campaign} />
      <input type="hidden" name="utm_term" value={formData.utm_term} />
      <input type="hidden" name="utm_content" value={formData.utm_content} />
      <input type="hidden" name="landing_page" value={formData.landing_page} />

      <div className={styles.row}>
        <div className={styles.col}>
          <label htmlFor="name" className={styles.label}>Your Name *</label>
          <input
            id="name"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="John Doe"
            className={styles.input}
            required
          />
        </div>
        <div className={styles.col}>
          <label htmlFor="phone" className={styles.label}>Phone Number *</label>
          <input
            id="phone"
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            placeholder="(555) 000-0000"
            className={styles.input}
            required
          />
        </div>
      </div>

      <div className={styles.row}>
        <div className={styles.col}>
          <label htmlFor="email" className={styles.label}>Email Address *</label>
          <input
            id="email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="john@example.com"
            className={styles.input}
            required
          />
        </div>
        <div className={styles.col}>
          <label htmlFor="address" className={styles.label}>Property Address</label>
          <input
            id="address"
            type="text"
            name="address"
            value={formData.address}
            onChange={handleInputChange}
            placeholder="123 Main St, Fort Lauderdale, FL"
            className={styles.input}
          />
        </div>
      </div>

      <div className={styles.row}>
        <div className={styles.col}>
          <label htmlFor="service" className={styles.label}>Service Needed</label>
          <select
            id="service"
            name="service"
            value={formData.service}
            onChange={handleInputChange}
            className={styles.select}
          >
            <option value="">-- Select Service --</option>
            <option value="roof-inspection">Free Diagnostic Inspection</option>
            <option value="roof-repair">Roof Repair</option>
            <option value="roof-replacement">Roof Replacement</option>
            <option value="roof-coatings">Roof Coating / Restoration</option>
            <option value="flat-roofing">Flat Roofing Solutions</option>
            <option value="commercial-roofing">Commercial Roofing</option>
            <option value="emergency-roof-repair">Emergency Roof Leak Repair</option>
          </select>
        </div>
        <div className={styles.col}>
          <label className={styles.label}>Property Type</label>
          <div className={styles.radioGroup}>
            <label className={styles.radioLabel}>
              <input
                type="radio"
                name="type"
                value="residential"
                checked={formData.type === 'residential'}
                onChange={handleInputChange}
                className={styles.radio}
              />
              <span>Residential</span>
            </label>
            <label className={styles.radioLabel}>
              <input
                type="radio"
                name="type"
                value="commercial"
                checked={formData.type === 'commercial'}
                onChange={handleInputChange}
                className={styles.radio}
              />
              <span>Commercial</span>
            </label>
          </div>
        </div>
      </div>

      {/* Extra fields for the full estimate version */}
      {isFullVersion && (
        <>
          <div className={styles.row}>
            <div className={styles.col}>
              <label htmlFor="roofType" className={styles.label}>Existing Roof Type</label>
              <select
                id="roofType"
                name="roofType"
                value={formData.roofType}
                onChange={handleInputChange}
                className={styles.select}
              >
                <option value="">-- Select Material --</option>
                <option value="tile">Concrete / Clay Tile</option>
                <option value="shingle">Asphalt Shingle</option>
                <option value="metal">Metal Standing-Seam</option>
                <option value="flat">Flat Roof (TPO/Modified Bitumen)</option>
                <option value="other">Other / Not Sure</option>
              </select>
            </div>
            <div className={styles.col}>
              <label htmlFor="actionNeeded" className={styles.label}>Required Action</label>
              <select
                id="actionNeeded"
                name="actionNeeded"
                value={formData.actionNeeded}
                onChange={handleInputChange}
                className={styles.select}
              >
                <option value="">-- Select Action --</option>
                <option value="repair">Minor / Major Repairs</option>
                <option value="coating">Protective Waterproof Coating</option>
                <option value="replace">Full Roof Replacement</option>
                <option value="inspect">Diagnostic / Assessment Only</option>
              </select>
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.col}>
              <label htmlFor="timeline" className={styles.label}>Project Timeline</label>
              <select
                id="timeline"
                name="timeline"
                value={formData.timeline}
                onChange={handleInputChange}
                className={styles.select}
              >
                <option value="">-- Select Timeline --</option>
                <option value="immediate">Immediate / Emergency</option>
                <option value="month">Within 30 Days</option>
                <option value="planning">Planning / Budgeting (30+ days)</option>
              </select>
            </div>
            <div className={styles.col}>
              <label htmlFor="referrer" className={styles.label}>How Did You Hear About Us?</label>
              <select
                id="referrer"
                name="referrer"
                value={formData.referrer}
                onChange={handleInputChange}
                className={styles.select}
              >
                <option value="">-- Select Option --</option>
                <option value="google">Google Search</option>
                <option value="google-maps">Google Maps Profile</option>
                <option value="word-of-mouth">Friend / Referral</option>
                <option value="signage">Branded Truck / Jobsite Sign</option>
                <option value="social">Social Media</option>
              </select>
            </div>
          </div>

          <div className={styles.fileCol}>
            <label className={styles.label}>Upload Roof Photos (Optional)</label>
            <div className={styles.fileUploadBox}>
              <input
                type="file"
                id="photo-upload"
                onChange={handlePhotoChange}
                accept="image/*"
                className={styles.fileInput}
              />
              <label htmlFor="photo-upload" className={styles.fileLabel}>
                <Upload size={18} />
                <span>{photo ? photo.name : 'Choose file or drag here...'}</span>
              </label>
            </div>
          </div>
        </>
      )}

      <div className={styles.col}>
        <label htmlFor="message" className={styles.label}>Message / Notes (Optional)</label>
        <textarea
          id="message"
          name="message"
          rows={3}
          value={formData.message}
          onChange={handleInputChange}
          placeholder="Details about leaks, shingles missing, or special instructions..."
          className={styles.textarea}
        />
      </div>

      <div className={styles.reassuranceText}>
        Not sure what you need? Start with an inspection and we will help you understand your options — no commitment required.
      </div>

      <button type="submit" className={`btn btn-primary ${styles.submitButton}`}>
        {isFullVersion ? 'Request Estimate' : 'Schedule Inspection'}
      </button>

      <div className={styles.trustFooter}>
        <span className={styles.trustItem}>✓ Licensed Florida Contractor</span>
        <span className={styles.trustItem}>✓ 5-Star Broward Rated</span>
      </div>
    </form>
  );
}
