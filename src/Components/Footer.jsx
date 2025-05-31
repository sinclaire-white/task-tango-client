import React from 'react';
import Swal from 'sweetalert2';

const Footer = () => {
  // Mock policy content
  const policies = {
    terms: {
      title: "Terms of Service",
      content: `
        <div class="text-left max-h-[60vh] overflow-y-auto p-2">
          <h2 class="text-xl font-bold mb-4">Terms of Service</h2>
          <p class="mb-6 text-sm opacity-80">Last Updated: January 1, 2023</p>
          
          <h3 class="text-lg font-semibold mb-2 mt-4">1. Acceptance of Terms</h3>
          <p class="mb-4">By accessing or using TaskTango ("Service"), you agree to be bound by these Terms of Service.</p>
          
          <h3 class="text-lg font-semibold mb-2 mt-4">2. User Responsibilities</h3>
          <p class="mb-4">You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.</p>
          
          <h3 class="text-lg font-semibold mb-2 mt-4">3. Prohibited Conduct</h3>
          <ul class="list-disc pl-6 mb-4 space-y-2">
            <li>Violating any applicable laws or regulations</li>
            <li>Infringing on intellectual property rights</li>
            <li>Distributing malware or harmful code</li>
            <li>Harassing other users</li>
          </ul>
          
          <h3 class="text-lg font-semibold mb-2 mt-4">4. Service Modifications</h3>
          <p class="mb-4">We reserve the right to modify or discontinue the Service at any time without notice.</p>
        </div>
      `
    },
    privacy: {
      title: "Privacy Policy",
      content: `
        <div class="text-left max-h-[60vh] overflow-y-auto p-2">
          <h2 class="text-xl font-bold mb-4">Privacy Policy</h2>
          <p class="mb-6 text-sm opacity-80">Last Updated: January 1, 2023</p>
          
          <h3 class="text-lg font-semibold mb-2 mt-4">1. Information Collection</h3>
          <p class="mb-4">We collect personal information when you register, including name, email address, and payment details. We also automatically collect usage data through cookies.</p>
          
          <h3 class="text-lg font-semibold mb-2 mt-4">2. Data Usage</h3>
          <p class="mb-4">Your information is used to:</p>
          <ul class="list-disc pl-6 mb-4 space-y-2">
            <li>Provide and maintain our Service</li>
            <li>Process transactions</li>
            <li>Improve user experience</li>
            <li>Ensure security</li>
          </ul>
          
          <h3 class="text-lg font-semibold mb-2 mt-4">3. Data Protection</h3>
          <p class="mb-4">We implement security measures but cannot guarantee absolute security of data transmitted online.</p>
        </div>
      `
    },
    cookies: {
      title: "Cookie Policy",
      content: `
        <div class="text-left max-h-[60vh] overflow-y-auto p-2">
          <h2 class="text-xl font-bold mb-4">Cookie Policy</h2>
          <p class="mb-6 text-sm opacity-80">Last Updated: January 1, 2023</p>
          
          <h3 class="text-lg font-semibold mb-2 mt-4">1. What Are Cookies</h3>
          <p class="mb-4">Cookies are small text files stored on your device that help websites remember your preferences and activity.</p>
          
          <h3 class="text-lg font-semibold mb-2 mt-4">2. How We Use Cookies</h3>
          <ul class="list-disc pl-6 mb-4 space-y-2">
            <li><span class="font-medium">Essential:</span> For basic site functionality</li>
            <li><span class="font-medium">Performance:</span> To analyze site usage</li>
            <li><span class="font-medium">Functional:</span> To remember preferences</li>
            <li><span class="font-medium">Marketing:</span> To personalize content</li>
          </ul>
          
          <h3 class="text-lg font-semibold mb-2 mt-4">3. Managing Cookies</h3>
          <p class="mb-4">You can control cookies through your browser settings, but disabling essential cookies may affect site functionality.</p>
        </div>
      `
    },
    refund: {
      title: "Refund Policy",
      content: `
        <div class="text-left max-h-[60vh] overflow-y-auto p-2">
          <h2 class="text-xl font-bold mb-4">Refund Policy</h2>
          <p class="mb-6 text-sm opacity-80">Last Updated: January 1, 2023</p>
          
          <h3 class="text-lg font-semibold mb-2 mt-4">1. Digital Products</h3>
          <p class="mb-4">Due to the nature of digital products, we generally don't offer refunds unless required by law. Exceptions may be made at our discretion.</p>
          
          <h3 class="text-lg font-semibold mb-2 mt-4">2. Subscriptions</h3>
          <p class="mb-4">You may cancel anytime, but we don't provide refunds for partial subscription periods.</p>
          
          <h3 class="text-lg font-semibold mb-2 mt-4">3. Processing Refunds</h3>
          <p class="mb-4">Approved refunds are processed within 7-10 business days to the original payment method.</p>
        </div>
      `
    }
  };

  const showPolicy = (policyKey) => {
    Swal.fire({
      title: policies[policyKey].title,
      html: policies[policyKey].content,
      width: '800px',
      background: '#262626', // bg-neutral
      color: '#e5e7eb', // text-secondary
      showConfirmButton: false,
      showCloseButton: true,
      customClass: {
        closeButton: 'text-secondary hover:text-primary !focus:ring-0',
        popup: 'rounded-lg'
      },
      scrollbarPadding: false
    });
  };

  return (
    <footer className="px-4 py-10 bg-neutral text-secondary sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 lg:gap-12">
          
          {/* Contact Column */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold tracking-wider uppercase">CONTACT US</h3>
            <div className="space-y-2">
              <p className="flex items-start">
                <span className="inline-block w-16 font-medium">Phone:</span>
                <span>+380 1234 567 890</span>
              </p>
              <p className="flex items-start">
                <span className="inline-block w-16 font-medium">Email:</span>
                <span>contact@tasktango.com</span>
              </p>
              <p className="flex items-start">
                <span className="inline-block w-16 font-medium">Address:</span>
                <span>123 Business Ave, Suite 500</span>
              </p>
            </div>
          </div>

          {/* Policies Column */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold tracking-wider uppercase">COMPANY</h3>
            <div className="grid grid-cols-1 gap-2">
              <button 
                onClick={() => showPolicy('terms')}
                className="text-left transition-colors duration-200 hover:text-primary"
              >
                Terms of Service
              </button>
              <button 
                onClick={() => showPolicy('privacy')}
                className="text-left transition-colors duration-200 hover:text-primary"
              >
                Privacy Policy
              </button>
              <button 
                onClick={() => showPolicy('cookies')}
                className="text-left transition-colors duration-200 hover:text-primary"
              >
                Cookie Policy
              </button>
              <button 
                onClick={() => showPolicy('refund')}
                className="text-left transition-colors duration-200 hover:text-primary"
              >
                Refund Policy
              </button>
            </div>
          </div>

          {/* Social Column */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold tracking-wider uppercase">FOLLOW US</h3>
            <div className="flex space-x-6">
              {/* Twitter */}
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" 
                 className="transition-colors duration-200 text-secondary hover:text-primary">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
              
              {/* Facebook */}
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" 
                 className="transition-colors duration-200 text-secondary hover:text-primary">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                </svg>
              </a>
              
              {/* Instagram */}
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" 
                 className="transition-colors duration-200 text-secondary hover:text-primary">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              
              {/* LinkedIn */}
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" 
                 className="transition-colors duration-200 text-secondary hover:text-primary">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-6 mt-12 text-sm text-center border-t border-gray-700 opacity-80">
          <p>© 2025 TaskTango. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;