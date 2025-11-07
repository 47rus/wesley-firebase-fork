'use client';

import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react';
import Container from '@/components/layout/Container';
import { WeCard, WeCardContent, WeCardHeader } from '@/components/ui/WeCard';
import WeButton from '@/components/ui/WeButton';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    organization: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic here
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        organization: '',
        message: ''
      });
    }, 3000);
  };

  const contactMethods = [
    {
      icon: Phone,
      title: 'Telefoon',
      detail: '020 808 8670',
      description: 'Bel ons direct voor vragen',
      color: 'text-blue-500'
    },
    {
      icon: Mail,
      title: 'Email',
      detail: 'info@weplayunited.nl',
      description: 'Stuur ons een bericht',
      color: 'text-green-500'
    },
    {
      icon: MapPin,
      title: 'Adres',
      detail: 'Sportpark De Voorland',
      description: 'Amsterdam, Nederland',
      color: 'text-purple-500'
    },
    {
      icon: Clock,
      title: 'Openingstijden',
      detail: 'Ma-Vr 09:00-18:00',
      description: '24/7 online beschikbaar',
      color: 'text-orange-500'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <main>
        {/* Page Header */}
        <section className="bg-white border-b">
          <Container>
            <div className="py-16 text-center">
              <h1 className="text-4xl sm:text-5xl font-heading font-bold text-weplay-text mb-6">
                Contact
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Klaar om je event te organiseren? Neem contact met ons op! 
                Wij helpen je graag verder met het samenstellen van jouw perfecte event.
              </p>
            </div>
          </Container>
        </section>

        {/* Contact Content */}
        <section className="py-20">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Contact Information */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-heading font-bold text-weplay-text mb-6">
                    Kom in contact
                  </h2>
                  <p className="text-lg text-gray-600 mb-8">
                    Heb je vragen over onze events of wil je een offerte aanvragen? 
                    We staan klaar om je te helpen!
                  </p>
                </div>

                {/* Contact Methods */}
                <div className="space-y-6">
                  {contactMethods.map((method, index) => {
                    const IconComponent = method.icon;
                    return (
                      <WeCard key={index} hover className="border-l-4 border-l-weplay-primary">
                        <WeCardContent className="p-6">
                          <div className="flex items-start gap-4">
                            <div className={`flex-shrink-0 w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center ${method.color}`}>
                              <IconComponent className="w-6 h-6" />
                            </div>
                            <div className="flex-1">
                              <h3 className="font-heading font-bold text-weplay-text mb-1">
                                {method.title}
                              </h3>
                              <p className="font-medium text-gray-900 mb-1">
                                {method.detail}
                              </p>
                              <p className="text-sm text-gray-600">
                                {method.description}
                              </p>
                            </div>
                          </div>
                        </WeCardContent>
                      </WeCard>
                    );
                  })}
                </div>

                {/* Quick Actions */}
                <div className="space-y-4">
                  <h3 className="text-xl font-heading font-bold text-weplay-text">
                    Direct contact
                  </h3>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <WeButton variant="primary" size="lg" icon={Phone} className="flex-1">
                      020 808 8670
                    </WeButton>
                    <WeButton variant="outline" size="lg" icon={Mail} className="flex-1">
                      Email ons
                    </WeButton>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div>
                <WeCard className="sticky top-8">
                  <WeCardHeader>
                    <h2 className="text-2xl font-heading font-bold text-weplay-text">
                      Stuur ons een bericht
                    </h2>
                    <p className="text-gray-600">
                      Vul het formulier in en we nemen binnen 24 uur contact met je op.
                    </p>
                  </WeCardHeader>
                  
                  <WeCardContent>
                    {!isSubmitted ? (
                      <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Name Fields */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                              Voornaam *
                            </label>
                            <input
                              type="text"
                              id="firstName"
                              name="firstName"
                              value={formData.firstName}
                              onChange={handleInputChange}
                              required
                              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-weplay-primary focus:border-transparent"
                              placeholder="Je voornaam"
                            />
                          </div>
                          <div>
                            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                              Achternaam *
                            </label>
                            <input
                              type="text"
                              id="lastName"
                              name="lastName"
                              value={formData.lastName}
                              onChange={handleInputChange}
                              required
                              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-weplay-primary focus:border-transparent"
                              placeholder="Je achternaam"
                            />
                          </div>
                        </div>

                        {/* Email */}
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                            Email *
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-weplay-primary focus:border-transparent"
                            placeholder="je@email.nl"
                          />
                        </div>

                        {/* Organization */}
                        <div>
                          <label htmlFor="organization" className="block text-sm font-medium text-gray-700 mb-2">
                            Organisatie
                          </label>
                          <input
                            type="text"
                            id="organization"
                            name="organization"
                            value={formData.organization}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-weplay-primary focus:border-transparent"
                            placeholder="Bedrijf, school of club"
                          />
                        </div>

                        {/* Message */}
                        <div>
                          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                            Bericht *
                          </label>
                          <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleInputChange}
                            required
                            rows={4}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-weplay-primary focus:border-transparent resize-none"
                            placeholder="Vertel ons over je event plannen..."
                          />
                        </div>

                        {/* Submit Button */}
                        <WeButton 
                          type="submit"
                          variant="primary" 
                          size="lg" 
                          icon={Send}
                          className="w-full"
                        >
                          Verstuur bericht
                        </WeButton>
                      </form>
                    ) : (
                      <div className="text-center py-8">
                        <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                        <h3 className="text-xl font-heading font-bold text-gray-900 mb-2">
                          Bericht verzonden!
                        </h3>
                        <p className="text-gray-600">
                          Bedankt voor je bericht. We nemen binnen 24 uur contact met je op.
                        </p>
                      </div>
                    )}
                  </WeCardContent>
                </WeCard>
              </div>
            </div>
          </Container>
        </section>
      </main>
    </div>
  );
};

export default ContactPage;