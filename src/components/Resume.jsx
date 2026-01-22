import React from 'react';

const TimelineItem = ({ title, period, institution, description }) => {
  return (
    <div className="relative pb-8 last:pb-0 pl-8">
      {/* Glowing sphere on the line */}
      <div className="absolute left-[7px] top-2">
        <div className="w-3 h-3 rounded-full bg-accent-yellow shadow-[0_0_8px_rgba(255,219,112,0.6)]"></div>
        <div className="absolute inset-0 w-3 h-3 rounded-full bg-accent-yellow opacity-40 blur-[2px]"></div>
      </div>
      
      <div>
        <h4 className="text-white text-lg font-medium mb-2">{title}</h4>
        <p className="text-accent-yellow text-sm mb-2">{period}</p>
        {institution && <p className="text-gray-400 text-sm mb-2">{institution}</p>}
        {description && <p className="text-gray-300 text-sm leading-relaxed">{description}</p>}
      </div>
    </div>
  );
};

const SkillIcon = ({ src, alt }) => {
  return (
    <div className="w-[100px] h-[100px] flex items-center justify-center">
      <img src={src} alt={alt} className="w-full h-full object-contain" />
    </div>
  );
};

const Resume = () => {
  const baseUrl = import.meta.env.BASE_URL;
  
  const education = [
    {
      title: "Bachelor's degree, Computer engineering",
      period: '2010-2014',
      institution: 'UIET, Panjab University',
    },
  ];

  const experience = [
    {
      title: 'Freelancer',
      period: '2020 - Present',
      description: 'Worked with startups and agencies to build scalable web apps, automate workflows, and deliver end-to-end full-stack solutions.',
    },
  ];

  const skills = [
    { src: `${baseUrl}skills/Group 1.svg`, alt: 'GraphQL' },
    { src: `${baseUrl}skills/Group 7.svg`, alt: 'Node.js' },
    { src: `${baseUrl}skills/Group 8.svg`, alt: 'React' },
    { src: `${baseUrl}skills/Group 9.svg`, alt: 'Vue' },
    { src: `${baseUrl}skills/Group 10.svg`, alt: 'HTML5 & CSS3' },
    { src: `${baseUrl}skills/Group 11.svg`, alt: 'JavaScript' },
    { src: `${baseUrl}skills/Group 12.svg`, alt: 'Python' },
    { src: `${baseUrl}skills/Group 13.svg`, alt: 'PowerShell' },
    { src: `${baseUrl}skills/n8n-logo.svg`, alt: 'n8n' },
    { src: `${baseUrl}skills/zapier-logo.svg`, alt: 'Zapier' },
    { src: `${baseUrl}skills/Group 17.svg`, alt: 'Next.js' },
    { src: `${baseUrl}skills/Group 1.svg`, alt: 'Nuxt' },
  ];

  return (
    <div>
      <section className="mb-12">
        <h2 className="text-white text-3xl font-bold mb-6 relative pb-3">
          Resume
          <span className="absolute bottom-0 left-0 w-12 h-1 bg-accent-yellow rounded-full"></span>
        </h2>
      </section>

      {/* Education Section */}
      <section className="mb-12 relative">
        <div className="flex items-center gap-3 mb-6">
          <img src={`${baseUrl}Frame.svg`} alt="Education" className="w-6 h-6" />
          <h3 className="text-white text-2xl font-semibold">Education</h3>
        </div>
        {/* Single continuous vertical line from icon through timeline */}
        <div className="absolute left-3 top-[32px] w-[1px] h-[calc(100%-94px)] bg-dark-border"></div>
        <div className="relative">
          {education.map((item, index) => (
            <TimelineItem key={index} {...item} />
          ))}
        </div>
      </section>

      {/* Experience Section */}
      <section className="mb-12 relative">
        <div className="flex items-center gap-3 mb-6">
          <img src={`${baseUrl}Frame.svg`} alt="Experience" className="w-6 h-6" />
          <h3 className="text-white text-2xl font-semibold">Experience</h3>
        </div>
        {/* Single continuous vertical line from icon through timeline */}
        <div className="absolute left-3 top-[32px] w-[1px] h-[calc(100%-94px)] bg-dark-border"></div>
        <div className="relative">
          {experience.map((item, index) => (
            <TimelineItem key={index} {...item} />
          ))}
        </div>
      </section>

      {/* My Skills Section */}
      <section>
        <h3 className="text-white text-2xl font-semibold mb-8">My Skills</h3>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
          {skills.map((skill, index) => (
            <SkillIcon key={index} src={skill.src} alt={skill.alt} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Resume;

