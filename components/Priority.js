import React from 'react';

const App = () => {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col items-center justify-center p-4 font-sans">
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Figtree:wght@400;500;600;700&display=swap');
        `}
      </style>
      <div className="container max-w-5xl mx-auto py-12">
        <div className="text-center mb-12">
          <h1 className="text-xl sm:text-4xl md:text-4xl tracking-tight text-white mb-4">
            Your Data. Our Top Priority.
          </h1>
          <p className="text-sm sm:text-xl text-gray-400 max-w-2xl mx-auto">
            At Osto, we prioritize data privacy and uphold the highest standards of security.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* ISO Card */}
          <div className="relative bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-gray-700 shadow-xl transition-transform duration-300 hover:scale-105">
            <div className="mb-4">
              {/* Using a simple SVG icon for the logo */}
              <svg className="w-12 h-12 text-blue-400 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.01 12.01 0 002.944 12c.036 3.193 1.107 6.326 3.298 8.875-1.574-1.29-2.274-2.857-2.618-4.996a8 8 0 01.371-2.936c.55-.918 1.258-1.742 2.05-2.483.568-.52.923-1.127.923-1.847 0-.72-.355-1.327-.923-1.847-.792-.74-1.49-1.564-2.05-2.483-.344-.64-.567-1.31-.69-2A11.952 11.952 0 0112 2.944z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-center mb-2">ISO 27001 Certified</h3>
            <p className="text-center text-gray-300">
              Our systems meet international standards for security management.
            </p>
          </div>

          {/* SOC 2 Card */}
          <div className="relative bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-gray-700 shadow-xl transition-transform duration-300 hover:scale-105">
            <div className="mb-4">
              {/* Using a simple SVG icon for the logo */}
              <svg className="w-12 h-12 text-blue-400 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.01 12.01 0 002.944 12c.036 3.193 1.107 6.326 3.298 8.875-1.574-1.29-2.274-2.857-2.618-4.996a8 8 0 01.371-2.936c.55-.918 1.258-1.742 2.05-2.483.568-.52.923-1.127.923-1.847 0-.72-.355-1.327-.923-1.847-.792-.74-1.49-1.564-2.05-2.483-.344-.64-.567-1.31-.69-2A11.952 11.952 0 0112 2.944z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-center mb-2">SOC 2 Type II Compliant</h3>
            <p className="text-center text-gray-300">
              Independently verified security, availability, and confidentiality.
            </p>
          </div>

          {/* GDPR Card */}
          <div className="relative bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-gray-700 shadow-xl transition-transform duration-300 hover:scale-105">
            <div className="mb-4">
              {/* Using a simple SVG icon for the logo */}
              <svg className="w-12 h-12 text-blue-400 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.01 12.01 0 002.944 12c.036 3.193 1.107 6.326 3.298 8.875-1.574-1.29-2.274-2.857-2.618-4.996a8 8 0 01.371-2.936c.55-.918 1.258-1.742 2.05-2.483.568-.52.923-1.127.923-1.847 0-.72-.355-1.327-.923-1.847-.792-.74-1.49-1.564-2.05-2.483-.344-.64-.567-1.31-.69-2A11.952 11.952 0 0112 2.944z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-center mb-2">GDPR Compliant</h3>
            <p className="text-center text-gray-300">
              We adhere to strict data privacy regulations and best practices.
            </p>
          </div>
        </div>

        {/* Enterprise-Grade Security Section */}
        <div className="relative bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-gray-700 shadow-xl">
          <div className="flex items-start mb-4">
            {/* SVG Checkmark Icon */}
            <svg className="w-8 h-8 text-blue-400 mr-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <div>
              <h3 className="text-2xl font-bold mb-2">Enterprise-Grade Security</h3>
              <p className="text-gray-300">
                Osto employs industry-leading security measures, including end-to-end encryption, multi-factor
                authentication, and continuous security monitoring to ensure your data remains protected at all times.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Chat Button */}
      <button className="fixed bottom-8 right-8 bg-blue-500 text-white rounded-full p-4 shadow-lg hover:bg-blue-600 transition-colors duration-300">
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.593 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      </button>
    </div>
  );
};

export default App;
