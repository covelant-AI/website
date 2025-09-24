'use client';
import { useEffect } from 'react';
import '../../global.css';

export default function PrivacyPolicyPage() {
  useEffect(() => {
    // Hide header and footer when component mounts
    const footer = document.querySelector('footer');
    
    if (footer) footer.style.display = 'none';

    // Cleanup function to show header and footer when component unmounts
    return () => {
      if (footer) footer.style.display = '';
    };
  }, []);

  return (
    <div className="min-h-screen bg-white pt-20 md:pt-0">
      <iframe
        src="/docs/privacyPolicy.pdf#toolbar=0&navpanes=0&scrollbar=0&view=FitH"
        className="w-full h-screen border-0"
        title="Privacy Policy"
        style={{
          border: 'none',
          outline: 'none',
          overflow: 'hidden'
        }}
      />
      <style jsx global>{`
        iframe {
          border: none !important;
          outline: none !important;
        }
        iframe::-webkit-scrollbar {
          display: none;
        }
        iframe {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );

}
