import React from 'react';

const Sidebar = () => {
  return (
    <aside className="bg-dark-card border border-dark-border rounded-2xl p-8 flex flex-col items-center">
      {/* Profile Image Container */}
      <div className="relative mb-6">
        <div className="w-[220px] h-[228px] rounded-2xl overflow-hidden bg-gradient-to-br from-yellow-200 to-orange-100">
          <img
            src="/profile.svg"
            alt="Shimanshu"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Name and Title */}
      <div className="text-center">
        <h2 className="text-white text-2xl font-semibold mb-2">Shimanshu</h2>
        <div className="bg-dark-bg px-4 py-1.5 rounded-lg border border-dark-border inline-block">
          <p className="text-accent-yellow text-sm font-semibold leading-[120%] tracking-[0.03em] text-center">
            Full Stack Developer
          </p>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;

