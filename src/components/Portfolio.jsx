import React, { useState } from 'react';

const ProjectCard = ({ image, title, category, link }) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className="cursor-pointer group">
      <div className="bg-dark-card border border-dark-border rounded-2xl overflow-hidden hover:bg-opacity-80 transition-all mb-3 w-full">
        <div className="relative overflow-hidden">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-[200px] object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>
      <div>
        <h3 className="text-white text-lg font-semibold mb-1">{title}</h3>
        <p className="text-gray-400 text-sm">{category}</p>
      </div>
    </a>
  );
};

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const filters = ['All', 'Web Development', 'Mobile Development'];
  const baseUrl = import.meta.env.BASE_URL;

  const projects = [
    {
      image: `${baseUrl}projects/getbild.svg`,
      title: 'CuraStream AI',
      category: 'Desktop App Development',
      type: 'Desktop',
      link: 'https://curastream.ai/en/'
    },
    {
      image: `${baseUrl}projects/curastream.svg`,
      title: 'GetBild',
      category: 'Web Development',
      type: 'Web Development',
      link: 'https://www.getbild.com/'
    },
    {
      image: `${baseUrl}projects/talkstack.svg`,
      title: 'Talkstack AI',
      category: 'Web Development',
      type: 'Web Development',
      link: 'https://www.talkstack.ai/'
    },
    {
      image: `${baseUrl}projects/voece.svg`,
      title: 'Voece AI',
      category: 'AI Integration',
      type: 'Web Development',
      link: 'https://voece.ai/'
    },
  ];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.type === activeFilter);

  return (
    <div>
      <section className="mb-12">
        <h2 className="text-white text-3xl font-bold mb-6 relative pb-3">
          Portfolio
          <span className="absolute bottom-0 left-0 w-12 h-1 bg-accent-yellow rounded-full"></span>
        </h2>
      </section>

      {/* Filter Tabs */}
      <div className="flex gap-4 mb-8">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
              activeFilter === filter
                ? 'text-accent-yellow bg-dark-card'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-full">
        {filteredProjects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;

