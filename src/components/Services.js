import React from 'react';
import Image from 'next/image';

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Relationship Counseling ",
      description: "Personal therapy sessions focused on your unique needs and goals.",
      details: "I provide a safe, supportive space for you to explore your thoughts and feelings.",
      image: "/img3.jpg",
      buttonText: "Learn More"
    },
    {
      id: 2,
      title: "Trauma Recovery",
      description: "panic Attacks resolve",
      details: "Make a communication and help to recover the person from trauma",
      image: "/img4.jpg",
      buttonText: "Learn More"
    },
    
  ];

  return (
    <div className=" p-8 max-w-4xl mx-auto shadow-lg relative">
      {/* Three dots menu button */}
    

      {/* Title */}
      <h2 className="text-4xl font-bold text-black text-center mb-8">Services</h2>

      {/* Services Grid */}
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        {services.map((service) => (
          <div key={service.id} className="bg-teal-50 rounded-xl p-6 shadow-sm border border-teal-100">
            {/* Service Image */}
            <div className="relative h-80 w-full mb-4 rounded-lg ">
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover"
              />
            </div>

            {/* Service Content */}
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-gray-800 leading-tight">
                {service.title}
              </h3>
              
              <p className="text-sm text-gray-600 leading-relaxed">
                {service.description}
              </p>
              
              <p className="text-xs text-gray-500 leading-relaxed">
                {service.details}
              </p>

              {/* Learn More Button */}
              <div className="pt-2">
                <button className="bg-teal-600 hover:bg-teal-700 text-white text-sm px-4 py-2 rounded-lg transition-colors duration-200">
                  {service.buttonText}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      
      
    </div>
  );
};





export default Services;
