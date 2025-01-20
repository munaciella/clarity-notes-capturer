// src/app/privacy-policy/page.tsx

import React from "react";

const PrivacyPolicyPage = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
      <p className="mb-4">
        Effective Date: <strong>[20/01/2025]</strong>
      </p>
      <p className="mb-6">
        At <strong>Clarity Capture</strong>, we value your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, and safeguard your data in compliance with Google&#39;s terms and applicable laws.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Information We Collect</h2>
      <ul className="list-disc list-inside mb-6">
        <li>
          <strong>Personal Information:</strong> When you sign up or interact with our app, we may collect your name, email address, and other contact details.
        </li>
        <li>
          <strong>Usage Data:</strong> Information about how you use our website or app, such as IP address, browser type, and pages visited.
        </li>
        <li>
          <strong>Google-Provided Data:</strong> If you sign in using Google, we may access certain data from your Google account, as authorised by you, such as your email address or profile information.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-4">How We Use Your Information</h2>
      <p className="mb-6">
        We use your information to:
      </p>
      <ul className="list-disc list-inside mb-6">
        <li>Provide and improve our services.</li>
        <li>Facilitate account creation and secure authentication.</li>
        <li>Send you account-related notifications.</li>
        <li>Comply with legal obligations and Google&#39;s API Terms of Service.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Sharing Your Information</h2>
      <p className="mb-6">
        We do not sell or share your personal data with third parties, except:
      </p>
      <ul className="list-disc list-inside mb-6">
        <li>When required by law.</li>
        <li>To service providers who help us operate the app (e.g., hosting providers).</li>
        <li>
          As part of integrations with Google services, in compliance with their{" "}
          <a
            href="https://developers.google.com/terms/api-services-user-data-policy"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
          >
            API Services User Data Policy
          </a>.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Data Security</h2>
      <p className="mb-6">
        We implement industry-standard security measures to protect your data. However, no system is 100% secure, and we cannot guarantee absolute protection.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Your Rights</h2>
      <p className="mb-6">
        Depending on your location, you may have the right to:
      </p>
      <ul className="list-disc list-inside mb-6">
        <li>Access or correct your personal data.</li>
        <li>Request deletion of your account and associated data.</li>
        <li>Opt-out of non-essential data collection.</li>
      </ul>
      <p className="mb-6">
  To exercise these rights, contact us <strong><a href="mailto:franes88@gmail.com" className="text-blue-600 underline">here</a></strong>.
</p>

<h2 className="text-2xl font-semibold mt-8 mb-4">Changes to This Policy</h2>
<p className="mb-6">
  We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated effective date.
</p>

<h2 className="text-2xl font-semibold mt-8 mb-4">Contact Us</h2>
<p>
  If you have any questions or concerns about this Privacy Policy, please contact us at:
</p>
<ul className="list-none mb-6">
  <li>
    <strong><a href="mailto:franes88@gmail.com" className="text-blue-600 underline">Email</a></strong>
  </li>
  <li>
    <strong><a href="https://www.clarity-capture.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">Website</a></strong>
  </li>
</ul>
    </div>
  );
};

export default PrivacyPolicyPage;