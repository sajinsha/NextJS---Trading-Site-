"use client";
import { useState } from "react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("Cristina");

  const handleSubscribe = (e) => {
    e.preventDefault();

    console.log("Subscribing email:", email);
    setEmail("");
  };

  return (
    <footer
      className="relative py-12 px-4 sm:px-6 lg:px-8 overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, #0f2027 0%, #203a43 50%, #2c5364 100%)",
      }}
    >
      <div
        className="absolute inset-0 opacity-40"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(44, 83, 100, 0.3) 0%, rgba(15, 32, 39, 0.8) 70%)",
        }}
      />

      <div className="relative md:px-[100px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <div className="lg:col-span-1">
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center mr-3">
                <span className="text-white font-bold text-lg">B</span>
              </div>
              <span
                className="text-white text-xl font-bold"
                style={{
                  fontFamily: '"Geist", "Inter", sans-serif',
                }}
              >
                BitNow
              </span>
            </div>
            <p
              className="text-gray-300 text-sm mb-6 leading-relaxed"
              style={{
                fontFamily: '"Geist", "Inter", sans-serif',
              }}
            >
              Lorem ipsum Player Neymar
              <br />
              cryptocurrency wallet.
            </p>

            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors duration-200"
                aria-label="Facebook"
              >
                <svg
                  className="w-5 h-5 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center hover:bg-purple-700 transition-colors duration-200"
                aria-label="Discord"
              >
                <svg
                  className="w-5 h-5 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.317 4.492c-1.53-.69-3.17-1.2-4.885-1.49a.075.075 0 0 0-.079.036c-.21.369-.444.85-.608 1.23a18.566 18.566 0 0 0-5.487 0 12.36 12.36 0 0 0-.617-1.23A.077.077 0 0 0 8.562 3c-1.714.29-3.354.8-4.885 1.491a.07.07 0 0 0-.032.027C.533 9.093-.32 13.555.099 17.961a.08.08 0 0 0 .031.055 20.03 20.03 0 0 0 5.993 2.98.078.078 0 0 0 .084-.026c.462-.62.873-1.277 1.226-1.963a.076.076 0 0 0-.041-.106 13.201 13.201 0 0 1-1.872-.878.075.075 0 0 1-.008-.125c.126-.093.252-.19.372-.287a.075.075 0 0 1 .078-.01c3.927 1.764 8.18 1.764 12.061 0a.075.075 0 0 1 .079.009c.12.098.246.195.372.288a.075.075 0 0 1-.006.125c-.598.344-1.22.635-1.873.877a.075.075 0 0 0-.041.107c.36.685.772 1.341 1.225 1.962a.077.077 0 0 0 .084.028 19.963 19.963 0 0 0 6.002-2.981.076.076 0 0 0 .032-.054c.5-5.094-.838-9.52-3.549-13.442a.06.06 0 0 0-.031-.028zM8.02 15.278c-1.182 0-2.157-1.069-2.157-2.38 0-1.312.956-2.38 2.157-2.38 1.21 0 2.176 1.077 2.157 2.38 0 1.312-.956 2.38-2.157 2.38zm7.975 0c-1.183 0-2.157-1.069-2.157-2.38 0-1.312.955-2.38 2.157-2.38 1.21 0 2.176 1.077 2.157 2.38 0 1.312-.946 2.38-2.157 2.38z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-blue-400 rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors duration-200"
                aria-label="Twitter"
              >
                <svg
                  className="w-5 h-5 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
              </a>
            </div>
          </div>

          <div className="lg:col-span-1">
            <h3
              className="text-white text-lg font-semibold mb-6"
              style={{
                fontFamily: '"Geist", "Inter", sans-serif',
              }}
            >
              Other Pages
            </h3>
            <ul className="space-y-4">
              {["Home", "About Us", "Services", "Token Sale", "Contact"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-gray-300 hover:text-white transition-colors duration-200 text-sm flex items-center group"
                      style={{
                        fontFamily: '"Geist", "Inter", sans-serif',
                      }}
                    >
                      <img
                        src="/lefticon.svg"
                        alt="arrow"
                        className="w-5 h-5 mr-2 opacity-70 group-hover:opacity-100 transition-opacity duration-200"
                      />
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          <div className="lg:col-span-1">
            <h3
              className="text-white text-lg font-semibold mb-6"
              style={{
                fontFamily: '"Geist", "Inter", sans-serif',
              }}
            >
              Quick Links
            </h3>
            <ul className="space-y-4">
              {[
                "Privacy Policy",
                "Term of Service",
                "Disclaimer",
                "Credits",
                "FAQ",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors duration-200 text-sm flex items-center group"
                    style={{
                      fontFamily: '"Geist", "Inter", sans-serif',
                    }}
                  >
                    <img
                      src="/lefticon.svg"
                      alt="arrow"
                      className="w-5 h-5 mr-2 opacity-70 group-hover:opacity-100 transition-opacity duration-200"
                    />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-1">
            <h3
              className="text-white text-lg font-semibold mb-4"
              style={{
                fontFamily: '"Geist", "Inter", sans-serif',
              }}
            >
              Newsletter
            </h3>
            <p
              className="text-gray-300 text-sm mb-6 leading-relaxed"
              style={{
                fontFamily: '"Geist", "Inter", sans-serif',
              }}
            >
              All important messenger ipsum adipiscing elit. Accumsan tellus non
              sodales potent.
            </p>

            <form onSubmit={handleSubscribe} className="space-y-3">
              <input
                type="email"
                placeholder="Enter Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 bg-white/10 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                style={{
                  fontFamily: '"Geist", "Inter", sans-serif',
                }}
                required
              />
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-200 text-sm"
                style={{
                  fontFamily: '"Geist", "Inter", sans-serif',
                }}
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-600/30">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <div className="flex items-center">
              <div className="w-6 h-6 rounded-full bg-green-500 mr-3"></div>
              <select
                value={selectedCountry}
                onChange={(e) => setSelectedCountry(e.target.value)}
                className="bg-transparent text-white border-none focus:outline-none text-sm cursor-pointer"
                style={{
                  fontFamily: '"Geist", "Inter", sans-serif',
                }}
              >
                <option value="Cristina" className="bg-gray-800">
                  Cristina
                </option>
                <option value="United States" className="bg-gray-800">
                  United States
                </option>
                <option value="Canada" className="bg-gray-800">
                  Canada
                </option>
                <option value="United Kingdom" className="bg-gray-800">
                  United Kingdom
                </option>
              </select>
            </div>

            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6 text-sm text-gray-400">
              <span
                style={{
                  fontFamily: '"Geist", "Inter", sans-serif',
                }}
              >
                Privacy Policy
              </span>
              <span
                style={{
                  fontFamily: '"Geist", "Inter", sans-serif',
                }}
              >
                Notice at Collection
              </span>
              <span
                style={{
                  fontFamily: '"Geist", "Inter", sans-serif',
                }}
              >
                Terms
              </span>
              <span
                style={{
                  fontFamily: '"Geist", "Inter", sans-serif',
                }}
              >
                Copyright © 2023 Atlassian
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
