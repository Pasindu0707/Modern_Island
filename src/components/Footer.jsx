import React from 'react';
import './footer.css';

function Footer() {
  return (
    <footer className="footer-bg text-white py-14 relative">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* About Section */}
          <div>
            <h3 className="text-2xl font-semibold mb-6">About Modern Island</h3>
            <p className="text-lg">
              Modern Island is a dynamic band bringing live music to life. With a blend of vibrant
              sounds and electrifying performances, we create unforgettable experiences for our
              fans.
            </p>
          </div>

          {/* Social Media & Contact */}
          <div className="sm:col-span-2">
            <h3 className="text-2xl font-semibold mb-6">Follow Us</h3>
            <p className="text-lg mb-6">
              Stay connected and follow us on social media for the latest updates and events.
            </p>
            <div className="flex space-x-8 justify-center">
              <a
                href="https://www.facebook.com/modernislandfb"
                className="footer-icon"
                aria-label="Facebook"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 12.073c0-5.523-4.477-10-10-10S2 6.55 2 12.073c0 4.991 3.657 9.127 8.438 9.878v-6.988h-2.54v-2.89h2.54V9.579c0-2.507 1.492-3.89 3.777-3.89 1.094 0 2.238.196 2.238.196v2.466h-1.26c-1.243 0-1.632.772-1.632 1.562v1.878h2.773l-.443 2.89h-2.33v6.988c4.781-.751 8.438-4.887 8.438-9.878z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/modernislandofficial/"
                className="footer-icon"
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M7.75 2h8.5C19.55 2 21 3.45 21 5.25v8.5c0 1.8-1.45 3.25-3.25 3.25h-8.5C5.45 17 4 15.55 4 13.75v-8.5C4 3.45 5.45 2 7.75 2zm0 1.5c-1.02 0-1.75.73-1.75 1.75v8.5c0 1.02.73 1.75 1.75 1.75h8.5c1.02 0 1.75-.73 1.75-1.75v-8.5c0-1.02-.73-1.75-1.75-1.75h-8.5zm4.25 2.5a4.25 4.25 0 110 8.5 4.25 4.25 0 010-8.5zm0 1.5a2.75 2.75 0 100 5.5 2.75 2.75 0 000-5.5zm5-2.25a1 1 0 110 2 1 1 0 010-2z" />
                </svg>
              </a>
              <a
                href="https://www.tiktok.com/@modern.island"
                className="footer-icon"
                aria-label="TikTok"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm0 2a8 8 0 100 16 8 8 0 000-16zm3.5 3.5v3a4.5 4.5 0 11-2.875 1.375h-1.75V10h2v4a2.5 2.5 0 002.5 2.5A2.5 2.5 0 1014.5 9V5.5h1z" />
                </svg>
              </a>
              <a
                href="https://www.youtube.com/@ModernIslandofficial"
                className="footer-icon"
                aria-label="YouTube"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M10 15l5.54-3.07a.8.8 0 000-1.45L10 7.5v7.5zM12 22C6.48 22 2 17.52 2 12S6.48 2 12 2s10 4.48 10 10-4.48 10-10 10z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="text-center mt-12">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Modern Island. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
