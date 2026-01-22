import React from 'react';

const About = () => {
  return (
    <section className="mb-12">
      <h2 className="text-white text-3xl font-bold mb-6 relative pb-3">
        About Me
        <span className="absolute bottom-0 left-0 w-12 h-1 bg-accent-yellow rounded-full"></span>
      </h2>
      
      <div className="text-gray-300 space-y-4">
        <p>
          I'm Shimanshu Sharma, a Full-Stack Developer and Automation Engineer with 5+ years of experience
          helping startups and businesses save time, cut costs, and scale efficiently. I build production-ready web
          apps using Next.js, Python, and Django, with a focus on clean architecture, performance, and user
          experience.
        </p>
        
        <p>
          I specialize in automating workflows with n8n, Make.com, Zapier, and AI integrations (GPT-4, custom
          agents), transforming complex processes into seamless, autonomous systems. My goal: build smart,
          scalable solutions that deliver measurable value and drive growth.
        </p>
      </div>
    </section>
  );
};

export default About;

