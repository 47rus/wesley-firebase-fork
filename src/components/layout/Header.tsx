"use client";
import React, { useState, useRef, useEffect } from 'react';
import { Menu, X, Phone, Settings, ChevronLeft, ChevronRight, Trophy, GraduationCap, Building2, Heart, Newspaper } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import WeButton from '@/components/ui/WeButton';
import Container from '@/components/layout/Container';
import { useLogos } from '@/hooks/use-logos';
import { useSeo } from '@/hooks/use-seo';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const pathname = usePathname();
  const isNavigatingRef = useRef(false);
  const { data: logos, isLoading: logosLoading } = useLogos();
  const { data: seoData, isLoading: seoLoading } = useSeo();

  const lightLogo = logos?.find(logo => logo.background_type === 'light');

  const events = seoData?.map(item => ({
    id: item.id,
    name: item.landing_page,
    href: `/events/${item.url_slug}`,
    icon: item.event_emoji,
    color: 'text-gray-600' // Default color, can be customized if needed
  })) || [];

  // Check if we're on sportclubs page for orange branding
  const isOrangePage = pathname === '/sportclubs';

  // Segments for the slider (target audience groups)
  const segments = [
    { name: 'Sportclubs', href: '/sportclubs', icon: Trophy },
    { name: 'Scholen', href: '/scholen', icon: GraduationCap },
    { name: 'Non-profits', href: '/non-profits', icon: Heart },
    { name: 'Bedrijven', href: '/bedrijven', icon: Building2 },
  ];

  // Add refs and state for segments slider
  const segmentsScrollRef = useRef<HTMLDivElement>(null);
  const [canScrollSegmentsLeft, setCanScrollSegmentsLeft] = useState(false);
  const [canScrollSegmentsRight, setCanScrollSegmentsRight] = useState(true);

  // Scroll functions for events
  const checkScrollButtons = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' });
      setTimeout(checkScrollButtons, 300);
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
      setTimeout(checkScrollButtons, 300);
    }
  };

  // Scroll functions for segments
  const checkSegmentsScrollButtons = () => {
    if (segmentsScrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = segmentsScrollRef.current;
      setCanScrollSegmentsLeft(scrollLeft > 0);
      setCanScrollSegmentsRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  const scrollSegmentsLeft = () => {
    if (segmentsScrollRef.current) {
      segmentsScrollRef.current.scrollBy({ left: -200, behavior: 'smooth' });
      setTimeout(checkSegmentsScrollButtons, 300);
    }
  };

  const scrollSegmentsRight = () => {
    if (segmentsScrollRef.current) {
      segmentsScrollRef.current.scrollBy({ left: 200, behavior: 'smooth' });
      setTimeout(checkSegmentsScrollButtons, 300);
    }
  };

  // Check if an element is visible in the scroll container
  const isElementVisible = (element: HTMLElement, container: HTMLElement) => {
    const elementRect = element.getBoundingClientRect();
    const containerRect = container.getBoundingClientRect();
    
    return (
      elementRect.left >= containerRect.left &&
      elementRect.right <= containerRect.right
    );
  };

  const scrollToActiveEvent = () => {
    if (scrollRef.current && !isNavigatingRef.current) {
      const activeEvent = events.find(event => event.href === pathname);
      if (activeEvent) {
        const activeElement = scrollRef.current.querySelector(`[href="${activeEvent.href}"]`) as HTMLElement;
        if (activeElement) {
          // Only scroll if the element is not already visible
          if (!isElementVisible(activeElement, scrollRef.current)) {
            const container = scrollRef.current;
            const containerWidth = container.clientWidth;
            const elementLeft = activeElement.offsetLeft;
            const elementWidth = activeElement.offsetWidth;
            
            // Calculate scroll position to center the element, accounting for padding
            const scrollPosition = elementLeft - (containerWidth / 2) + (elementWidth / 2);
            
            container.scrollTo({
              left: scrollPosition,
              behavior: 'smooth'
            });
            
            // Update scroll buttons after scrolling
            setTimeout(checkScrollButtons, 300);
          }
        }
      }
    }
  };

  const handleEventClick = () => {
    // Set flag to prevent auto-scroll after menu clicks
    isNavigatingRef.current = true;
    setTimeout(() => {
      isNavigatingRef.current = false;
    }, 500);
  };

  // Auto-scroll to active event when route changes (only for direct navigation)
  useEffect(() => {
    const timer = setTimeout(() => {
      scrollToActiveEvent();
    }, 100);

    return () => clearTimeout(timer);
  }, [pathname]);

  React.useEffect(() => {
    checkScrollButtons();
    checkSegmentsScrollButtons();
    const handleResize = () => {
      checkScrollButtons();
      checkSegmentsScrollButtons();
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [events, segments]);

  return (
    <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <Container>
        {/* Main Navigation Row */}
        <div className="flex justify-between items-center py-3">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            {logosLoading ? (
              <div className="h-12 w-32 bg-gray-200 animate-pulse rounded-md"></div>
            ) : (
              <img 
                src={lightLogo?.url}
                alt="WePlay Logo"
                className="h-12 w-auto"
              />
            )}
          </Link>

          {/* Center Navigation - Segments */}
          <div className="hidden lg:flex items-center flex-1 max-w-2xl mx-8">
            {/* Primary CTA Button */}
            <WeButton 
              variant="primary"
              size="sm"
              icon={Settings}
              className="text-sm mr-6 flex-shrink-0"
            >
              Stel event samen
            </WeButton>
            
            {/* Segments - Simple flex layout */}
            <div className="flex items-center space-x-4 flex-1">
              {segments.map((segment) => {
                const IconComponent = segment.icon;
                const isActive = pathname === segment.href;
                return (
                  <Link
                    key={segment.name}
                    href={segment.href}
                    className={`flex items-center space-x-2 transition-colors text-sm font-medium px-3 py-2 rounded-lg ${
                      isActive 
                        ? (isOrangePage ? 'bg-orange-500 text-white' : 'bg-weplay-primary text-white')
                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                    }`}
                  >
                    <IconComponent className="w-4 h-4" />
                    <span className="whitespace-nowrap">{segment.name}</span>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Right Side - Nieuws, Contact & Phone */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button 
              variant="outline" 
              className="border-gray-300 text-gray-700 hover:text-gray-900"
              asChild
            >
              <Link href="/nieuws" className="flex items-center space-x-2">
                <Newspaper className="w-4 h-4" />
                <span>Nieuws</span>
              </Link>
            </Button>
            <Button 
              variant="outline" 
              className="border-gray-300 text-gray-700 hover:text-gray-900"
              asChild
            >
              <Link href="/contact">Contact</Link>
            </Button>
            <div className="flex items-center space-x-2 text-gray-600">
              <Phone className="w-4 h-4" />
              <span className="font-medium">020 808 8670</span>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-md text-gray-600 hover:text-gray-900"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Events Section - Full width with max boundary at phone number */}
        <div className="hidden lg:block py-3 border-t border-gray-100 overflow-hidden">
          <div className="flex items-center">
            {/* Left side - ALLE EVENTS label */}
            <div className="flex-shrink-0 w-32">
              <span className="text-sm font-semibold text-gray-700 uppercase tracking-wide">
                ALLE EVENTS
              </span>
            </div>

            {/* Center - Events container that extends to phone number position */}
            <div className="flex-1 relative mr-4 overflow-hidden" style={{ maxWidth: 'calc(100% - 16rem)' }}>
              {/* Left navigation button */}
              <button
                onClick={scrollLeft}
                disabled={!canScrollLeft}
                className={`absolute left-0 top-1/2 transform -translate-y-1/2 z-10 p-1.5 rounded-full border transition-all h-8 w-8 bg-white shadow-md ${
                  canScrollLeft 
                    ? 'border-gray-300 text-gray-600 hover:border-gray-400 hover:text-gray-800 hover:shadow-lg' 
                    : 'border-gray-200 text-gray-300 cursor-not-allowed opacity-50'
                }`}
              >
                <ChevronLeft className="w-3 h-3" />
              </button>

              {/* Right navigation button */}
              <button
                onClick={scrollRight}
                disabled={!canScrollRight}
                className={`absolute right-0 top-1/2 transform -translate-y-1/2 z-10 p-1.5 rounded-full border transition-all h-8 w-8 bg-white shadow-md ${
                  canScrollRight 
                    ? 'border-gray-300 text-gray-600 hover:border-gray-400 hover:text-gray-800 hover:shadow-lg' 
                    : 'border-gray-200 text-gray-300 cursor-not-allowed opacity-50'
                }`}
              >
                <ChevronRight className="w-3 h-3" />
              </button>

              {/* Events scroll container with maximum width usage */}
              <div
                ref={scrollRef}
                onScroll={checkScrollButtons}
                className="flex space-x-3 overflow-x-auto scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] px-10"
              >
                {seoLoading ? (
                  <div className="flex space-x-3">
                    {[...Array(8)].map((_, i) => (
                      <div key={i} className="h-9 w-32 bg-gray-200 animate-pulse rounded-lg"></div>
                    ))}
                  </div>
                ) : ( events.map((event) => {
                  const isActive = pathname === event.href;
                  return (
                    <Link
                      key={event.id}
                      href={event.href}
                      className="flex-shrink-0 group cursor-pointer"
                      onClick={handleEventClick}
                    >
                        <div className={`flex items-center space-x-2 px-3 py-1.5 rounded-lg shadow-sm transition-all duration-200 hover:scale-105 hover:shadow-md h-9 ${
                          isActive 
                            ? (isOrangePage ? 'bg-orange-500 text-white shadow-lg' : 'bg-weplay-primary text-white shadow-lg')
                            : 'bg-white border border-gray-200 hover:border-gray-300'
                        }`}>
                        {/* Event Icon */}
                        <div className={`w-5 h-5 rounded-full flex items-center justify-center text-sm flex-shrink-0 ${
                          isActive ? 'bg-white/20' : 'bg-gray-50'
                        }`}>
                          <span className={isActive ? 'text-white' : event.color}>{event.icon}</span>
                        </div>
                        
                        {/* Event Name */}
                        <span className={`text-sm font-medium leading-tight whitespace-nowrap ${
                          isActive ? 'text-white' : 'text-gray-700'
                        }`}>
                          {event.name}
                        </span>
                      </div>
                    </Link>
                  );
                }))}
              </div>
            </div>

            {/* Right side - Space to align with phone number end */}
            <div className="flex-shrink-0" style={{ width: '4.5rem' }}>
              {/* This space ensures alignment with the end of the phone number above */}
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              <WeButton 
                variant="primary"
                size="md"
                icon={Settings}
                className="w-full"
                onClick={() => setIsMenuOpen(false)}
              >
                Stel event samen
              </WeButton>
              
              {/* Segments Links */}
              {segments.map((segment) => {
                const IconComponent = segment.icon;
                const isActive = pathname === segment.href;
                return (
                  <Link
                    key={segment.name}
                    href={segment.href}
                    className={`flex items-center space-x-2 transition-colors text-sm font-medium py-2 px-3 rounded-lg ${
                      isActive 
                        ? (isOrangePage ? 'bg-orange-500 text-white' : 'bg-weplay-primary text-white')
                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <IconComponent className="w-4 h-4" />
                    <span>{segment.name}</span>
                  </Link>
                );
              })}
              
              {/* Nieuws Link */}
              <Link
                href="/nieuws"
                className={`flex items-center space-x-2 transition-colors text-sm font-medium py-2 px-3 rounded-lg ${
                  pathname === '/nieuws'
                    ? (isOrangePage ? 'bg-orange-500 text-white' : 'bg-weplay-primary text-white')
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                <Newspaper className="w-4 h-4" />
                <span>Nieuws</span>
              </Link>
              
              {/* Mobile Events with arrows */}
              <div className="pt-4 border-t border-gray-200">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-semibold text-gray-700 uppercase tracking-wide">
                    ALLE EVENTS
                  </span>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={scrollLeft}
                      disabled={!canScrollLeft}
                      className={`p-1 rounded-full border transition-all h-8 w-8 ${
                        canScrollLeft 
                          ? 'border-gray-300 text-gray-600 hover:border-gray-400 hover:text-gray-800' 
                          : 'border-gray-200 text-gray-300 cursor-not-allowed'
                      }`}
                    >
                      <ChevronLeft className="w-3 h-3" />
                    </button>
                    <button
                      onClick={scrollRight}
                      disabled={!canScrollRight}
                      className={`p-1 rounded-full border transition-all h-8 w-8 ${
                        canScrollRight 
                          ? 'border-gray-300 text-gray-600 hover:border-gray-400 hover:text-gray-800' 
                          : 'border-gray-200 text-gray-300 cursor-not-allowed'
                      }`}
                    >
                      <ChevronRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>
                <div
                  ref={scrollRef}
                  onScroll={checkScrollButtons}
                  className="flex space-x-3 overflow-x-auto scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
                >
                  {seoLoading ? (
                    <div className="flex space-x-3">
                      {[...Array(8)].map((_, i) => (
                        <div key={i} className="h-16 w-20 bg-gray-200 animate-pulse rounded-lg"></div>
                      ))}
                    </div>
                  ) : (events.map((event) => {
                    const isActive = pathname === event.href;
                    return (
                      <Link
                        key={event.id}
                        href={event.href}
                        className="flex-shrink-0 group cursor-pointer"
                        onClick={() => {
                          handleEventClick();
                          setIsMenuOpen(false);
                        }}
                      >
                          <div className={`flex flex-col items-center space-y-1 p-2 rounded-lg transition-all duration-200 hover:scale-105 hover:shadow-md min-w-[80px] ${
                            isActive 
                              ? (isOrangePage ? 'bg-orange-500 text-white shadow-lg' : 'bg-weplay-primary text-white shadow-lg')
                              : 'bg-white border border-gray-200 hover:border-gray-300'
                          }`}>
                          <div className={`w-6 h-6 rounded-full flex items-center justify-center text-sm ${
                            isActive ? 'bg-white/20' : 'bg-gray-50'
                          }`}>
                            <span className={isActive ? 'text-white' : event.color}>{event.icon}</span>
                          </div>
                          <span className={`text-sm font-medium text-center leading-tight ${
                            isActive ? 'text-white' : 'text-gray-800'
                          }`}>
                            {event.name}
                          </span>
                        </div>
                      </Link>
                    );
                  }))}
                </div>
              </div>
              
              <div className="flex flex-col space-y-3 pt-4 border-t border-gray-200">
                <Button variant="outline" className="w-full" asChild>
                  <Link href="/contact">Contact</Link>
                </Button>
                <div className="flex items-center justify-center space-x-2 text-gray-600 py-2">
                  <Phone className="w-4 h-4" />
                  <span className="font-medium">020 808 8670</span>
                </div>
              </div>
            </nav>
          </div>
        )}
      </Container>
    </header>
  );
};

export default Header;
