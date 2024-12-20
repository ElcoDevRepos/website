import React from 'react';
import { CodeBracketIcon, DevicePhoneMobileIcon, UserGroupIcon } from '@heroicons/react/24/outline';

const services = [
  {
    title: 'Custom Web Development',
    description: 'Modern, scalable web applications built with cutting-edge technologies. From enterprise solutions to startup MVPs, we deliver robust web applications that drive business growth.',
    icon: CodeBracketIcon,
  },
  {
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile applications that provide seamless user experiences across all devices. We build apps that your users will love.',
    icon: DevicePhoneMobileIcon,
  },
  {
    title: 'Staff Augmentation',
    description: 'Strengthen your team with our experienced developers. We provide skilled professionals who integrate seamlessly with your existing workforce.',
    icon: UserGroupIcon,
  },
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600">
            Leveraging 10+ years of expertise to deliver exceptional software solutions
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
            >
              <service.icon className="h-12 w-12 text-blue-600 mb-6" />
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
