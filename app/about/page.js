

// "use client"

// import React from "react";
// import { FaTools, FaBookReader, FaShieldAlt, FaHandsHelping } from "react-icons/fa";

// const AboutPage = () => {
//   return (
//     <div className="max-w-6xl mx-auto px-4 py-12">
//       <div className="text-center mb-16">
//         <h1 className="text-4xl md:text-5xl font-bold text-blue-800 mb-6">
//           About 123printerssetupsteps
//         </h1>
//         <div className="w-24 h-1 bg-blue-500 mx-auto mb-8"></div>
//         <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//           Your trusted guide for solving printer problems with clear, step-by-step solutions.
//         </p>
//       </div>

//       <div className="grid md:grid-cols-2 gap-12 mb-16">
//         <div>
//           <div className="bg-blue-50 p-8 rounded-xl shadow-sm">
//             <h2 className="text-2xl font-semibold text-blue-800 mb-4">Our Mission</h2>
//             <p className="text-gray-700 mb-6">
//               123printerssetupsteps is an independent platform dedicated to helping users resolve everyday printer issues through easy-to-understand troubleshooting guides and how-to articles.
//             </p>
//             <p className="text-gray-700">
//               We provide clear, step-by-step information for all major printer brands, including HP, Canon, Epson, Brother, and more.
//             </p>
//           </div>
//         </div>
        
//         <div>
//           <div className="bg-gray-50 p-8 rounded-xl shadow-sm">
//             <h2 className="text-2xl font-semibold text-blue-800 mb-4">What We Offer</h2>
//             <p className="text-gray-700 mb-6">
//               Whether you're facing connectivity problems, ink cartridge errors, setup challenges, or offline issues, our articles aim to help you identify the cause and apply effective solutions.
//             </p>
//             <p className="text-gray-700">
//               We focus on common printer problems and provide solutions that work for most users.
//             </p>
//           </div>
//         </div>
//       </div>

//       <div className="bg-white rounded-xl shadow-md overflow-hidden mb-16">
//         <div className="p-8 md:p-12">
//           <h2 className="text-2xl font-semibold text-blue-800 mb-6">Important Note</h2>
//           <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
//             <p className="text-yellow-700">
//               We do not offer live technical support, remote repair services, or hardware sales. All content is purely for educational and informational purposes to help users troubleshoot on their own.
//             </p>
//           </div>
//           <p className="text-gray-700">
//             Our goal is to empower you with knowledge so you can solve printer issues confidently without needing to wait for professional support.
//           </p>
//         </div>
//       </div>

//       <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
//         <div className="bg-white p-6 rounded-lg shadow-sm text-center">
//           <div className="text-blue-600 text-4xl mb-4 flex justify-center">
//             <FaTools />
//           </div>
//           <h3 className="text-xl font-semibold mb-2">Practical Solutions</h3>
//           <p className="text-gray-600">
//             Step-by-step guides for real-world printer problems
//           </p>
//         </div>
        
//         <div className="bg-white p-6 rounded-lg shadow-sm text-center">
//           <div className="text-blue-600 text-4xl mb-4 flex justify-center">
//             <FaBookReader />
//           </div>
//           <h3 className="text-xl font-semibold mb-2">Easy to Follow</h3>
//           <p className="text-gray-600">
//             Clear instructions anyone can understand
//           </p>
//         </div>
        
//         <div className="bg-white p-6 rounded-lg shadow-sm text-center">
//           <div className="text-blue-600 text-4xl mb-4 flex justify-center">
//             <FaShieldAlt />
//           </div>
//           <h3 className="text-xl font-semibold mb-2">Safe Methods</h3>
//           <p className="text-gray-600">
//             Tested solutions that won't harm your device
//           </p>
//         </div>
        
//         <div className="bg-white p-6 rounded-lg shadow-sm text-center">
//           <div className="text-blue-600 text-4xl mb-4 flex justify-center">
//             <FaHandsHelping />
//           </div>
//           <h3 className="text-xl font-semibold mb-2">Brand Coverage</h3>
//           <p className="text-gray-600">
//             Help for all major printer manufacturers
//           </p>
//         </div>
//       </div>

//       <div className="bg-blue-800 text-white rounded-xl p-8 md:p-12 text-center">
//         <h2 className="text-2xl md:text-3xl font-bold mb-4">Need Help With Your Printer?</h2>
//         <p className="text-xl mb-6 max-w-3xl mx-auto">
//           Browse our collection of troubleshooting guides and how-to articles to find the solution you need.
//         </p>
//         <button className="bg-white text-blue-800 font-semibold px-6 py-3 rounded-lg hover:bg-blue-100 transition duration-300">
//           Explore Articles
//         </button>
//       </div>
//     </div>
//   );
// };

// export default AboutPage;



import Head from 'next/head';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Head>
        <title>About Us | Printer Support & Solutions</title>
        <meta name="description" content="Learn about our mission to provide reliable printer troubleshooting guides and setup assistance" />
      </Head>

      <main className="max-w-4xl mx-auto px-4 py-12">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">About Us</h1>
          <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
        </div>

        {/* Mission Section */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              At <span className="font-semibold text-blue-600">123printerssetupsteps</span>, we are dedicated to helping individuals and businesses keep their printers running smoothly. We provide informational content, setup guides, and troubleshooting steps for a wide range of printer models.
            </p>
            
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Our goal is simple: to make printer setup and problem-solving easy, safe, and stress-free. Whether you are installing a new device, fixing a common error, or learning how to maintain your printer, our content is designed to provide clear, step-by-step instructions.
            </p>
            
            <p className="text-lg text-gray-700 leading-relaxed">
              We are not a manufacturer or authorized service center. Instead, we focus on providing reliable content and resources to help users solve common printer issues on their own.
            </p>
          </div>
        </section>

        {/* Experience Section */}
        <section className="mb-16">
          <div className="bg-blue-50 rounded-2xl p-8 md:p-10 border border-blue-100">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Our Expertise</h2>
            <p className="text-lg text-gray-700 text-center">
              With years of experience in IT and technical content, our team ensures that the guides are accurate, up to date, and easy to understand.
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Get In Touch</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-center">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium text-gray-700">Location</h3>
                  <p className="text-gray-600">Los Angeles, California United States</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium text-gray-700">Contact</h3>
                  <p className="text-gray-600">+(1) 808-468-1018</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="border-t border-gray-200 my-12"></div>

        {/* Terms Section */}
        <section className="mt-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Terms of Service</h2>
            <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
          </div>
          
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10">
            <p className="text-lg text-gray-600 mb-8 italic">
              Welcome to <span className="font-semibold text-blue-600">123printerssetupsteps</span>. By accessing or using our website, you agree to the following terms:
            </p>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3 flex items-center">
                  <span className="bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center mr-3">1</span>
                  Informational Purpose Only
                </h3>
                <ul className="list-disc pl-10 text-gray-700 space-y-2">
                  <li>Our website provides guides, tutorials, and informational content related to printer setup and troubleshooting.</li>
                  <li>We do not sell hardware, software, or direct technical support services.</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3 flex items-center">
                  <span className="bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center mr-3">2</span>
                  No Official Affiliation
                </h3>
                <ul className="list-disc pl-10 text-gray-700 space-y-2">
                  <li>We are an independent content provider and are not affiliated with any printer brand, manufacturer, or third-party company.</li>
                  <li>All brand names and logos mentioned are the property of their respective owners and are used for educational reference purposes only.</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3 flex items-center">
                  <span className="bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center mr-3">3</span>
                  Use of Content
                </h3>
                <ul className="list-disc pl-10 text-gray-700 space-y-2">
                  <li>The information provided is intended for personal and educational use.</li>
                  <li>We strive to ensure accuracy but do not guarantee that every solution will work for every device or situation.</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3 flex items-center">
                  <span className="bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center mr-3">4</span>
                  Limitation of Liability
                </h3>
                <ul className="list-disc pl-10 text-gray-700 space-y-2">
                  <li><span className="font-semibold text-blue-600">123printerssetupsteps</span> will not be held responsible for any loss, damage, or technical issues that may occur from following the guides.</li>
                  <li>Users should proceed carefully and consult the official manufacturer's support if necessary.</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3 flex items-center">
                  <span className="bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center mr-3">5</span>
                  User Responsibility
                </h3>
                <ul className="list-disc pl-10 text-gray-700 space-y-2">
                  <li>By using this site, you acknowledge that you are responsible for applying the information provided at your own discretion.</li>
                  <li>For hardware defects or warranty issues, please contact the official brand support directly.</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3 flex items-center">
                  <span className="bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center mr-3">6</span>
                  Changes to Terms
                </h3>
                <ul className="list-disc pl-10 text-gray-700 space-y-2">
                  <li>We may update these Terms of Service at any time. Continued use of our site indicates acceptance of the updated terms.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-8 text-center mt-16">
        <p>© {new Date().getFullYear()} 123printerssetupsteps. All rights reserved.</p>
      </footer>
    </div>
  );
}