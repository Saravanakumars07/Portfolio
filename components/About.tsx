import React from 'react';
import { PERSONAL_DETAILS } from '../constants';
import { Download, Code2 } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-slate-900 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          
         <div className="order-2 md:order-1">
  <div className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-indigo-600 dark:text-indigo-400 uppercase bg-indigo-50 dark:bg-indigo-900/30 rounded-full">
    About Me — Full Stack Developer
  </div>

  <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">
    Full Stack Developer Focused on <span className="text-indigo-600">Scalable Products</span>
  </h2>

  {/* About Text - Updated from Resume */}
  <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
    Full Stack Developer with 4+ years of IT experience specializing in building responsive, 
    user-friendly, and scalable web applications. Proficient in ReactJS, JavaScript, HTML5, 
    CSS3, Java, and Node.js, with strong expertise in both frontend and backend development.
    <br /><br />
    I am passionate about the MERN Stack and build scalable products from frontend to backend — 
    focusing on clean UI, robust REST APIs, and smooth deployment. Experienced in building 
    E-commerce, Music Streaming and SaaS products. Skilled in REST API integration, Git, Docker, 
    and application deployment. Delivered an enterprise reliability platform with 
    <span className="font-semibold text-indigo-600 dark:text-indigo-400"> 99.9% uptime</span>.
  </p>

  <p className="text-sm text-slate-500 dark:text-slate-400 mb-6">
    <strong>Core:</strong> JavaScript • TypeScript • React.js • Node.js • Express • MongoDB • MySQL • REST APIs • JWT • Socket.io • Redux • Tailwind • Git • Docker • AWS/Vercel • DSA
  </p>

            
            <div className="flex flex-wrap gap-4 mt-6 mb-8">
              <a 
                href="/Saravanakumar.pdf" 
                download="Saravanakumar_S_Resume.pdf"
                className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-full font-semibold hover:bg-indigo-700 transition shadow-lg shadow-indigo-500/20"
              >
                <Download size={18} /> Download Resume
              </a>
              <a 
                href="#projects" 
                className="inline-flex items-center gap-2 px-6 py-3 bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white rounded-full font-semibold hover:bg-slate-200 dark:hover:bg-slate-700 transition"
              >
                <Code2 size={18} /> View MERN Projects
              </a>
            </div>

            <div className="grid grid-cols-3 gap-4">
               <div className="p-4 border border-slate-100 dark:border-slate-800 rounded-xl bg-slate-50/50 dark:bg-slate-800/50 text-center">
                 <h3 className="font-bold text-2xl text-indigo-600 mb-1">21+</h3>
                 <p className="text-slate-600 dark:text-slate-400 text-xs">MERN Projects</p>
               </div>
               <div className="p-4 border border-slate-100 dark:border-slate-800 rounded-xl bg-slate-50/50 dark:bg-slate-800/50 text-center">
                 <h3 className="font-bold text-2xl text-indigo-600 mb-1">300+</h3>
                 <p className="text-slate-600 dark:text-slate-400 text-xs">DSA Solved</p>
               </div>
               <div className="p-4 border border-slate-100 dark:border-slate-800 rounded-xl bg-slate-50/50 dark:bg-slate-800/50 text-center">
                 <h3 className="font-bold text-2xl text-indigo-600 mb-1">4+</h3>
                 <p className="text-slate-600 dark:text-slate-400 text-xs">Years Coding</p>
               </div>
            </div>
          </div>

         <div className="order-1 md:order-2 flex justify-center">
  <div className="relative w-72 h-72 md:w-96 md:h-96 group">
    <div className="absolute inset-0 bg-indigo-600 rounded-2xl rotate-6 group-hover:rotate-3 transition-transform duration-300 opacity-20"></div>
    <div className="absolute inset-0 bg-slate-900 rounded-2xl -rotate-6 group-hover:-rotate-3 transition-transform duration-300 opacity-10"></div>
    <img 
      src="https://files.media2url.com/free/4669645f3cbd4a.jpg"
      alt="SARAVANAKUMAR S - Software Developer MERN"
      className="relative w-full h-full object-cover object-top rounded-2xl shadow-xl"
    />
  </div>
</div>

        </div>
      </div>
    </section>
  );
};

export default About;