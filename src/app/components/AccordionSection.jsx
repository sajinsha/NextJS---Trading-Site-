'use client';
import { useState, useEffect } from 'react';

export default function AccordionSection() {
  const [openIndex, setOpenIndex] = useState(0); 
  const [faqItems, setFaqItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

 
  useEffect(() => {
    const fetchFaqData = async () => {
      try {
        setLoading(true);
        const response = await fetch('https://mocki.io/v1/94cb45d3-da0b-4d55-b874-0afbf87f3fd3');
        
        if (!response.ok) {
          throw new Error('Failed to fetch FAQ data');
        }
        
        const data = await response.json();
        setFaqItems(data.faq || []);
        setError(null);
      } catch (err) {
        setError(err.message);
        console.error('Error fetching FAQ data:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchFaqData();
  }, []);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  // Loading state
  if (loading) {
    return (
      <section className="bg-[#021620] py-20 sm:py-28 lg:py-40">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 bg-[#E4E4E42E] rounded-3xl py-12 sm:py-16 lg:py-20">
          <div className="text-center mb-12">
            <h2
              className="text-white  text-[24px] sm:text-3xl lg:text-4xl font-bold mb-4"
              style={{
                fontFamily: '"Geist", "Inter", sans-serif',
                letterSpacing: "0.02em",
              }}
            >
              Most Trusted Cryptocurrency Platform
            </h2>
            <p 
              className="text-gray-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed"
              style={{
                fontFamily: '"Geist", "Inter", sans-serif',
              }}
            >
              Nec faucibus ut mauris iaculis tristique dolor aliquam. 
              Euismod arcu arcu aliquet laoreet blandit. Nam velit 
              euismod egestas in. Sed purus.
            </p>
          </div>
          <div className="bg-[#5E767F] rounded-2xl p-6 sm:p-8 border border-[#1a3d4f] flex items-center justify-center min-h-[200px]">
            <div className="text-white text-center">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white mx-auto mb-4"></div>
              <p>Loading FAQ...</p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Error state
  if (error) {
    return (
      <section className="bg-[#021620] py-20 sm:py-28 lg:py-40">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 bg-[#E4E4E42E] rounded-3xl py-12 sm:py-16 lg:py-20">
          <div className="text-center mb-12">
            <h2
              className="text-white text-2xl sm:text-3xl lg:text-4xl font-bold mb-4"
              style={{
                fontFamily: '"Geist", "Inter", sans-serif',
                letterSpacing: "0.02em",
              }}
            >
              Most Trusted Cryptocurrency Platform
            </h2>
            <p 
              className="text-gray-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed"
              style={{
                fontFamily: '"Geist", "Inter", sans-serif',
              }}
            >
              Nec faucibus ut mauris iaculis tristique dolor aliquam. 
              Euismod arcu arcu aliquet laoreet blandit. Nam velit 
              euismod egestas in. Sed purus.
            </p>
          </div>
          <div className="bg-[#5E767F] rounded-2xl p-6 sm:p-8 border border-[#1a3d4f] flex items-center justify-center min-h-[200px]">
            <div className="text-white text-center">
              <p className="text-red-400 mb-2">Failed to load FAQ</p>
              <p className="text-gray-300 text-sm">{error}</p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-[#021620] py-20 sm:py-28 lg:py-40 md:px-[100px]   p-[5px]">
      <div className=" mx-auto px-4 sm:px-6 lg:px-8 bg-[#E4E4E42E] rounded-3xl py-12 sm:py-16 lg:py-20">
       
        <div className="text-center mb-12">
          <h2
            className="text-white text-2xl sm:text-3xl lg:text-4xl font-bold mb-4"
            style={{
              fontFamily: '"Geist", "Inter", sans-serif',
              letterSpacing: "0.02em",
            }}
          >
            Most Trusted Cryptocurrency Platform
          </h2>
          <p 
            className="text-gray-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed"
            style={{
              fontFamily: '"Geist", "Inter", sans-serif',
            }}
          >
            Nec faucibus ut mauris iaculis tristique dolor aliquam. 
            Euismod arcu arcu aliquet laoreet blandit. Nam velit 
            euismod egestas in. Sed purus.
          </p>
        </div>

      
        <div 
          className="bg-[#5E767F] rounded-2xl p-2 sm:p-8 border border-[#1a3d4f]"
          style={{
            boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
          }}
        >
          {faqItems.length > 0 ? (
            faqItems.map((item, index) => (
              <div 
                key={index}
                className={`border-b border-[#1a3d4f] ${index === faqItems.length - 1 ? 'border-b-0' : ''}`}
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full py-6 flex items-center text-left hover:bg-[#0f2f3f] transition-colors duration-200 rounded-lg px-4"
                >
               
                  <div className="flex-shrink-0 mr-4">
                    {openIndex === index ? (
                      <svg 
                        className="w-5 h-5 text-white transform transition-transform duration-200" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                      </svg>
                    ) : (
                      <svg 
                        className="w-5 h-5 text-white transform transition-transform duration-200" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                      </svg>
                    )}
                  </div>
                  
                  <span 
                    className="text-base sm:text-lg font-medium text-black flex-1"
                    style={{
                      fontFamily: '"Geist", "Inter", sans-serif',
                    }}
                  >
                    {item.question}
                  </span>
                </button>
                
                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-4 pb-6 ml-9">
                    <p 
                      className="text-[#252525] text-sm sm:text-base leading-relaxed"
                      style={{
                        fontFamily: '"Geist", "Inter", sans-serif',
                      }}
                    >
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center text-white py-8">
              <p>No FAQ items available.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}