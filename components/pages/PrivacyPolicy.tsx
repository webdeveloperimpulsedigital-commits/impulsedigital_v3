'use client';

import React from 'react';
import { useServicePageBackground } from '@/hooks/useServicePageBackground';

export default function PrivacyPolicy() {
  useServicePageBackground();

  return (
    <main style={{ paddingTop: '150px', paddingBottom: '100px', color: '#fff', minHeight: '100vh', position: 'relative', zIndex: 1 }}>
      <div className="container" style={{ maxWidth: '900px', margin: '0 auto', lineHeight: '1.8' }}>
        <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '3rem', color: '#fff', fontWeight: 700 }}>Privacy Policy</h1>
        
        <p style={{ marginBottom: '1.5rem', color: 'rgba(255,255,255,0.8)', fontSize: '1.1rem' }}>
          This Privacy Policy governs the manner in which Impulse Digital and its subsidiaries, partners, agents and affiliates collect, use, maintain and disclose information collected from visitors of Impulse Digital (www.theimpulsedigital.com). By accessing our website, you consent to the collection, storage and use of the personal information you provide for any of the services we offer.
        </p>

        <h2 style={{ fontSize: '2rem', marginTop: '3rem', marginBottom: '1rem', color: '#fff', fontWeight: 600 }}>Personal Identification Information</h2>
        <p style={{ marginBottom: '1.5rem', color: 'rgba(255,255,255,0.8)', fontSize: '1.1rem' }}>
          We may collect personal identification information from Users in various ways, including when Users visit our website, subscribe to the newsletter, fill out a form, or engage in other services or features offered on our site. Users may be asked for their name, email address, mailing address, and phone number. Users may, however, visit our website anonymously. Refusing to supply this information may prevent Users from engaging in certain website-related activities.
        </p>

        <h2 style={{ fontSize: '2rem', marginTop: '3rem', marginBottom: '1rem', color: '#fff', fontWeight: 600 }}>Non-Personal Identification Information</h2>
        <p style={{ marginBottom: '1.5rem', color: 'rgba(255,255,255,0.8)', fontSize: '1.1rem' }}>
          We may automatically collect non-personal identification information whenever Users interact with our website. This may include technical details such as browser type, IP address, operating system, device type, ISP used, page interaction data, and duration of visits.
        </p>

        <h2 style={{ fontSize: '2rem', marginTop: '3rem', marginBottom: '1rem', color: '#fff', fontWeight: 600 }}>Web Browser Cookies</h2>
        <p style={{ marginBottom: '1.5rem', color: 'rgba(255,255,255,0.8)', fontSize: '1.1rem' }}>
          Our site may use cookies to enhance the User experience. Cookies help us keep records and track certain information. Users may choose to disable cookies in their browser settings, but doing so may result in some website functionalities not working properly.
        </p>

        <h2 style={{ fontSize: '2rem', marginTop: '3rem', marginBottom: '1rem', color: '#fff', fontWeight: 600 }}>How We Use Collected Information</h2>
        <ul style={{ marginBottom: '1.5rem', color: 'rgba(255,255,255,0.8)', fontSize: '1.1rem', listStyleType: 'disc', paddingLeft: '2rem' }}>
          <li style={{ marginBottom: '0.8rem' }}><strong style={{ color: '#fff' }}>To improve customer service:</strong> Information helps us respond more efficiently to support needs.</li>
          <li style={{ marginBottom: '0.8rem' }}><strong style={{ color: '#fff' }}>To personalize experience:</strong> We analyze how Users engage with our website.</li>
          <li style={{ marginBottom: '0.8rem' }}><strong style={{ color: '#fff' }}>To improve our website:</strong> Feedback is used to enhance our products and services.</li>
          <li style={{ marginBottom: '0.8rem' }}><strong style={{ color: '#fff' }}>To run promotions or surveys:</strong> For campaigns relevant to Users.</li>
          <li style={{ marginBottom: '0.8rem' }}><strong style={{ color: '#fff' }}>To send information:</strong> Users receive updates or newsletters they opt in for.</li>
          <li style={{ marginBottom: '0.8rem' }}><strong style={{ color: '#fff' }}>To send emails:</strong> Used for responses, updates, and communication. Users may unsubscribe anytime.</li>
        </ul>

        <h2 style={{ fontSize: '2rem', marginTop: '3rem', marginBottom: '1rem', color: '#fff', fontWeight: 600 }}>How We Protect Your Information</h2>
        <p style={{ marginBottom: '1.5rem', color: 'rgba(255,255,255,0.8)', fontSize: '1.1rem' }}>
          We adopt industry-standard data collection, storage, and processing practices to protect your information against unauthorized access, alteration, disclosure, loss or destruction. Sensitive data exchanges happen over SSL-secured, encrypted communication channels.
        </p>

        <h2 style={{ fontSize: '2rem', marginTop: '3rem', marginBottom: '1rem', color: '#fff', fontWeight: 600 }}>Sharing Your Personal Information</h2>
        <p style={{ marginBottom: '1.5rem', color: 'rgba(255,255,255,0.8)', fontSize: '1.1rem' }}>
          We do not sell, trade, or rent Users’ personal information. We may share aggregated demographic information not linked to personal identification with trusted partners for the purposes outlined above.
        </p>

        <h2 style={{ fontSize: '2rem', marginTop: '3rem', marginBottom: '1rem', color: '#fff', fontWeight: 600 }}>Changes to This Privacy Policy</h2>
        <p style={{ marginBottom: '1.5rem', color: 'rgba(255,255,255,0.8)', fontSize: '1.1rem' }}>
          Impulse Digital may update this Privacy Policy at any time. Changes will be posted on this page. Continued use of our website after changes are applied constitutes acceptance of the updated policy. Users are encouraged to review this page regularly.
        </p>

        <h2 style={{ fontSize: '2rem', marginTop: '3rem', marginBottom: '1rem', color: '#fff', fontWeight: 600 }}>Contacting Us</h2>
        <p style={{ marginBottom: '1.5rem', color: 'rgba(255,255,255,0.8)', fontSize: '1.1rem' }}>
          For questions about this Privacy Policy or your interaction with our website, contact us at:<br />
          <a href="mailto:collabs@theimpulsedigital.com" style={{ color: '#8A5CF6', textDecoration: 'none', fontWeight: 500 }}>collabs@theimpulsedigital.com</a>
        </p>
      </div>
    </main>
  );
}
