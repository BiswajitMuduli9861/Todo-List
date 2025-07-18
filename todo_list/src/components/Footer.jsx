import React from 'react';
import { FaLinkedinIn, FaGithub, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="w-fit rounded-[15px] flex flex-col items-center justify-center gap-4 backdrop-blur-md shadow-inner shadow-white/20 hover:bg-white/5 transition-all">
      <ul className="p-4 flex flex-wrap items-center justify-center gap-4">
        {/* LinkedIn */}
        <li className="relative cursor-pointer group">
          <span className="absolute h-[60px] w-[60px] rounded-full bg-[#0077b5] opacity-0 group-hover:opacity-20 transition-all" />
          <span className="absolute h-[60px] w-[60px] rounded-full bg-[#0077b5] opacity-0 group-hover:opacity-40 translate-x-1 -translate-y-1 transition-all" />
          <span className="absolute h-[60px] w-[60px] rounded-full bg-[#0077b5] opacity-0 group-hover:opacity-60 translate-x-2 -translate-y-2 transition-all" />

          <a href="https://www.linkedin.com/in/biswajit-muduli-9a85a4267/" target='_blank' className="inline-block">
            <FaLinkedinIn className="h-[60px] w-[60px] p-4 rounded-full text-yellow-500 shadow-inner shadow-white/30 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
          </a>

          <div className="absolute z-50 opacity-0 group-hover:opacity-100 bg-white/30 text-yellow-500 text-sm px-2 py-1 rounded shadow-md transform group-hover:translate-x-6 -translate-y-1 skew-x-[-5deg] transition-all">
            LinkedIn
          </div>
        </li>

        {/* GitHub */}
        <li className="relative cursor-pointer group">
          <span className="absolute h-[60px] w-[60px] rounded-full bg-gray-800 opacity-0 group-hover:opacity-20 transition-all" />
          <span className="absolute h-[60px] w-[60px] rounded-full bg-gray-800 opacity-0 group-hover:opacity-40 translate-x-1 -translate-y-1 transition-all" />
          <span className="absolute h-[60px] w-[60px] rounded-full bg-gray-800 opacity-0 group-hover:opacity-60 translate-x-2 -translate-y-2 transition-all" />

          <a href="https://github.com/BiswajitMuduli9861" target='_blank' className="inline-block">
            <FaGithub className="h-[60px] w-[60px] p-4 rounded-full text-yellow-500 shadow-inner shadow-white/30 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
          </a>

          <div className="absolute z-50 opacity-0 group-hover:opacity-100 bg-white/30 text-yellow-500 text-sm px-2 py-1 rounded shadow-md transform group-hover:translate-x-6 -translate-y-1 skew-x-[-5deg] transition-all">
            GitHub
          </div>
        </li>

        {/* Email */}
        <li className="relative cursor-pointer group">
          <span className="absolute h-[60px] w-[60px] rounded-full bg-red-500 opacity-0 group-hover:opacity-20 transition-all" />
          <span className="absolute h-[60px] w-[60px] rounded-full bg-red-500 opacity-0 group-hover:opacity-40 translate-x-1 -translate-y-1 transition-all" />
          <span className="absolute h-[60px] w-[60px] rounded-full bg-red-500 opacity-0 group-hover:opacity-60 translate-x-2 -translate-y-2 transition-all" />

          <a href="mailto:bmuduli126@gmail.com" target='_blank' className="inline-block">
            <FaEnvelope className="h-[60px] w-[60px] p-4 rounded-full text-yellow-500 shadow-inner shadow-white/30 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
          </a>

          <div className="absolute z-50 opacity-0 group-hover:opacity-100 bg-white/30 text-yellow-500 text-sm px-2 py-1 rounded shadow-md transform group-hover:translate-x-6 -translate-y-1 skew-x-[-5deg] transition-all">
            Email
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
