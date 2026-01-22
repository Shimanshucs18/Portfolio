import React from 'react';

const TestimonialCard = ({ text, author }) => {
  return (
    <div className="bg-[#252525] border border-[#3a3a3a] rounded-xl p-6 hover:bg-[#2a2a2a] transition-all">
      <p className="text-gray-300 text-base font-medium leading-[30px] tracking-[0.03em] mb-4">{text}</p>
      
      {/* Star Rating */}
      <div className="flex gap-1 mb-3">
        {[...Array(5)].map((_, i) => (
          <span key={i} className="text-accent-yellow text-lg">⭐</span>
        ))}
      </div>
      
      <p className="text-white text-base font-semibold italic leading-[26px]">{author}</p>
    </div>
  );
};

const Testimonials = () => {
  const testimonials = [
    {
      text: "Excellent work in our project by Shimanshu. Very knowledgeable and went above and beyond to meet our requirements. Highly recommend working with him!",
      author: "Client FeedBack",
    },
    {
      text: "The work was excellent and delivered fast. I highly recommend them for their professionalism, great results, and clear communication.",
      author: "Client FeedBack",
    },
    {
      text: "It was a pleasure working with Shimanshu. He demonstrated excellent communication, adaptability, and teamwork, and the final outcome exceeded our expectations.",
      author: "Client FeedBack",
    },
    {
      text: "Shimanshu understood our needs perfectly and delivered a polished, user-friendly solution. Professional, detail-oriented, and highly recommended.",
      author: "Client FeedBack",
    },
  ];

  return (
    <section>
      <h2 className="text-white text-3xl font-bold mb-8">What Clients Say About Me</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard
            key={index}
            text={testimonial.text}
            author={testimonial.author}
          />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;

