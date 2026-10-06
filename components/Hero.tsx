import React from 'react';
import { Github, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { PERSONAL_DETAILS } from '../constants';

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-[#0B1120] pt-28 pb-20 px-6 lg:px-12"
    >
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-[420px_1fr] gap-12 md:gap-20 items-center">

        {/* Left: Photo */}
        <div className="flex justify-center md:justify-start">
          <div className="relative">
            <div className="absolute -inset-6 bg-indigo-600/30 rounded-full blur-2xl"></div>
            <img
              src="https://avatars.githubusercontent.com/u/154059864?v=4"
              alt="Saravanakumar S"
              className="relative w-[320px] h-[320px] md:w-[400px] md:h-[400px] object-cover rounded-full shadow-2xl"
            />
          </div>
        </div>

        {/* Right: Info */}
        <div className="text-center md:text-left space-y-5">
          <div>
            <h2 className="text-indigo-400 font-bold text-[14px] tracking-widest uppercase mb-3">
              Hello, I'm
            </h2>
            <h1 className="text-4xl md:text-[48px] font-extrabold text-white tracking-tight leading-none">
              {PERSONAL_DETAILS.name}
            </h1>
            <p className="mt-4 text-lg md:text-[20px] text-slate-300 font-medium leading-snug">
              {PERSONAL_DETAILS.role}
            </p>
          </div>

          <div className="flex flex-col md:flex-row flex-wrap gap-3 md:gap-5 text-[14px] text-slate-400 pt-2 justify-center md:justify-start">
            <div className="flex items-center justify-center md:justify-start gap-2">
              <Mail size={16} className="text-indigo-400" />
              <span>{PERSONAL_DETAILS.email}</span>
            </div>
            <div className="flex items-center justify-center md:justify-start gap-2">
              <Phone size={16} className="text-indigo-400" />
              <span>{PERSONAL_DETAILS.phone}</span>
            </div>
            <div className="flex items-center justify-center md:justify-start gap-2">
              <MapPin size={16} className="text-indigo-400" />
              <span>{PERSONAL_DETAILS.location}</span>
            </div>
          </div>

          <div className="flex items-center justify-center md:justify-start gap-3 pt-4">
            <a href={PERSONAL_DETAILS.linkedin} target="_blank" rel="noreferrer" className="w-10 h-10 flex items-center justify-center bg-[#1E293B] text-white rounded-full hover:bg-[#334155] transition-all">
              <Linkedin size={18} />
            </a>
            <a href={PERSONAL_DETAILS.github} target="_blank" rel="noreferrer" className="w-10 h-10 flex items-center justify-center bg-[#1E293B] text-white rounded-full hover:bg-[#334155] transition-all">
              <Github size={18} />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;