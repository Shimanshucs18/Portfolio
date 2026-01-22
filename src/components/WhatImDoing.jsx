import React from 'react';

const ServiceCard = ({ iconSrc, title, description }) => {
  return (
    <div className="bg-[#252525] border border-[#3a3a3a] rounded-xl p-6 hover:bg-[#2a2a2a] transition-all">
      <div className="flex gap-4">
        <div className="w-12 h-12 flex-shrink-0">
          <img src={iconSrc} alt={title} className="w-full h-full object-contain" />
        </div>
        <div>
          <h3 className="text-white text-xl font-bold leading-[120%] tracking-[0.03em] mb-2">{title}</h3>
          <p className="text-gray-400 text-base font-medium leading-[30px] tracking-[0.03em]">{description}</p>
        </div>
      </div>
    </div>
  );
};

const WhatImDoing = () => {
  const services = [
    {
      iconSrc: '/ai-processor.svg',
      title: 'AI Development',
      description: 'Smart AI solutions built for real-world impact.',
    },
    {
      iconSrc: '/electron-tauri.svg',
      title: 'Electron & Tauri development',
      description: 'High-performance cross-platform desktop apps.',
    },
    {
      iconSrc: '/coding 1.svg',
      title: 'Web Development',
      description: 'Crafting responsive, fast, and modern websites that drive results.',
    },
    {
      iconSrc: '/mobile-development 1.svg',
      title: 'Desktop Apps',
      description: 'Building efficient and user-friendly desktop applications for all platforms.',
    },
    {
      iconSrc: '/coding (1) 1.svg',
      title: 'Full Stack Development',
      description: 'Delivering complete end-to-end web solutions from UI to backend.',
    },
    {
      iconSrc: '/coding (1) 1.svg',
      title: 'Automation',
      description: 'Streamlining workflows with smart automation and AI integrations.',
    },
  ];

  return (
    <section className="mb-12">
      <h2 className="text-white text-3xl font-bold mb-8">What I'm Doing</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            iconSrc={service.iconSrc}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
    </section>
  );
};

export default WhatImDoing;

