import { useState, useEffect } from 'react';

const WHATSAPP_LINK = "https://wa.me/2348000000000?text=Hello%2C%20I%27d%20like%20to%20check%20room%20availability.";
const PHONE_NUMBER = "+234 800 000 0000";
const PHONE_TEL = "tel:+2348000000000";

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-offwhite">
      {/* Preview Banner */}
      <div className="preview-banner">
        Design preview. Your name, photos and real details replace the sample content.
      </div>

      {/* Header */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-sm shadow-sm'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-6xl mx-auto px-5 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-teal-deep flex items-center justify-center">
              <span className="text-gold font-display font-bold text-sm">H</span>
            </div>
            <span className="font-display font-bold text-lg text-teal-ink tracking-tight">
              [Hotel Name]
            </span>
          </div>
          <a
            href={PHONE_TEL}
            className="w-12 h-12 rounded-full bg-teal-deep flex items-center justify-center text-white hover:bg-teal-ink transition-colors"
            aria-label="Call reception"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
            </svg>
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative min-h-[85vh] flex items-center">
        {/* Background with gradient fallback */}
        <div className="absolute inset-0 hero-fallback">
          {/* Image slot: replace this div with an <img> tag */}
          {/* var(--hero-image) */}
        </div>
        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-teal-ink/70 via-teal-ink/50 to-teal-ink/80"></div>

        <div className="relative z-10 max-w-6xl mx-auto px-5 py-20 w-full">
          <h1 className="font-display font-bold text-white text-4xl sm:text-5xl lg:text-6xl leading-tight max-w-xl">
            Book your stay in one WhatsApp message.
          </h1>
          <p className="mt-5 text-white/80 text-lg sm:text-xl max-w-md leading-relaxed">
            Clean rooms, reliable power, and fast check-in — right in the heart of Aba.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-gold hover:bg-gold-light text-teal-ink font-semibold px-6 py-4 rounded-lg text-base transition-colors min-h-[48px]"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Check availability on WhatsApp
            </a>
            <a
              href={PHONE_TEL}
              className="inline-flex items-center justify-center gap-2 border-2 border-white/40 text-white hover:border-white hover:bg-white/10 font-semibold px-6 py-4 rounded-lg text-base transition-colors min-h-[48px]"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              Call reception
            </a>
          </div>
        </div>
      </section>

      {/* Rooms */}
      <section className="py-16 sm:py-20 px-5">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-teal-ink mb-3">
            Our rooms
          </h2>
          <p className="text-teal-ink/70 mb-8 max-w-lg">
            Every room has en-suite bathroom, air conditioning, and free Wi-Fi. Swipe to see options.
          </p>

          <div className="rooms-scroll">
            {/* Standard Room */}
            <div className="room-card">
              <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100">
                <div className="img-slot h-48 sm:h-56 relative">
                  <span className="absolute bottom-3 left-3 text-white/60 text-xs bg-black/30 px-2 py-1 rounded">
                    Photo slot
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="font-display font-bold text-xl text-teal-ink">Standard Room</h3>
                  <p className="mt-2 text-teal-ink/70 text-sm leading-relaxed">
                    Comfortable bed, clean bathroom, and everything you need for a restful night.
                  </p>
                  <p className="mt-4 font-semibold text-teal-deep">
                    From ₦25,000<span className="font-normal text-teal-ink/60">/night</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Executive Suite */}
            <div className="room-card">
              <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100">
                <div className="img-slot-alt h-48 sm:h-56 relative">
                  <span className="absolute bottom-3 left-3 text-white/60 text-xs bg-black/30 px-2 py-1 rounded">
                    Photo slot
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="font-display font-bold text-xl text-teal-ink">Executive Suite</h3>
                  <p className="mt-2 text-teal-ink/70 text-sm leading-relaxed">
                    Separate living area, work desk, and premium finishes for business travellers.
                  </p>
                  <p className="mt-4 font-semibold text-teal-deep">
                    From ₦45,000<span className="font-normal text-teal-ink/60">/night</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Family Suite */}
            <div className="room-card">
              <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100">
                <div className="img-slot-warm h-48 sm:h-56 relative">
                  <span className="absolute bottom-3 left-3 text-white/60 text-xs bg-black/30 px-2 py-1 rounded">
                    Photo slot
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="font-display font-bold text-xl text-teal-ink">Family Suite</h3>
                  <p className="mt-2 text-teal-ink/70 text-sm leading-relaxed">
                    Two bedrooms, extra space, and room for the whole family to settle in.
                  </p>
                  <p className="mt-4 font-semibold text-teal-deep">
                    From ₦65,000<span className="font-normal text-teal-ink/60">/night</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-teal-deep font-semibold hover:text-teal-ink transition-colors min-h-[48px]"
            >
              Check room availability
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="py-16 sm:py-20 px-5 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-teal-ink mb-10">
            What's on site
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
            <FacilityItem
              icon={
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 8h1a4 4 0 0 1 0 8h-1"/><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/><line x1="6" y1="1" x2="6" y2="4"/><line x1="10" y1="1" x2="10" y2="4"/><line x1="14" y1="1" x2="14" y2="4"/>
                </svg>
              }
              title="Restaurant & Bar"
              description="Nigerian and continental dishes served daily. Cold drinks at the bar from noon."
            />
            <FacilityItem
              icon={
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/>
                </svg>
              }
              title="Event Hall"
              description="Air-conditioned hall for meetings, weddings, and private events up to 200 guests."
            />
            <FacilityItem
              icon={
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="1" y="3" width="15" height="13" rx="2" ry="2"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/>
                </svg>
              }
              title="Secure Parking"
              description="Fenced, well-lit car park with 24-hour security. No extra charge for guests."
            />
            <FacilityItem
              icon={
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17.8 19.2L16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"/>
                </svg>
              }
              title="Airport Pickup"
              description="We arrange transfers from Port Harcourt and Aba airports. Ask when you book."
            />
          </div>
        </div>
      </section>

      {/* How to Book */}
      <section className="py-16 sm:py-20 px-5">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-teal-ink mb-10">
            How to book
          </h2>

          <div className="space-y-6 sm:space-y-0 sm:grid sm:grid-cols-3 sm:gap-8">
            <StepItem
              number="1"
              title="Choose a room"
              description="Pick the room type that fits your needs and budget."
            />
            <StepItem
              number="2"
              title="Message your dates"
              description="Send us your check-in and check-out dates on WhatsApp."
            />
            <StepItem
              number="3"
              title="Confirm and arrive"
              description="We confirm availability and hold your room. Just show up."
            />
          </div>

          <div className="mt-10">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-teal-deep hover:bg-teal-ink text-white font-semibold px-6 py-4 rounded-lg text-base transition-colors min-h-[48px]"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Start booking on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 sm:py-20 px-5 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-teal-ink mb-10">
            A look around
          </h2>

          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            <div className="img-slot rounded-xl aspect-[4/3] relative">
              <span className="absolute bottom-2 left-2 text-white/50 text-xs bg-black/30 px-2 py-0.5 rounded">
                Lobby
              </span>
            </div>
            <div className="img-slot-alt rounded-xl aspect-[4/3] relative">
              <span className="absolute bottom-2 left-2 text-white/50 text-xs bg-black/30 px-2 py-0.5 rounded">
                Restaurant
              </span>
            </div>
            <div className="img-slot-warm rounded-xl aspect-[4/3] relative">
              <span className="absolute bottom-2 left-2 text-white/50 text-xs bg-black/30 px-2 py-0.5 rounded">
                Event Hall
              </span>
            </div>
            <div className="img-slot-gold rounded-xl aspect-[4/3] relative">
              <span className="absolute bottom-2 left-2 text-white/50 text-xs bg-black/30 px-2 py-0.5 rounded">
                Exterior
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-16 sm:py-20 px-5">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-teal-ink mb-10">
            Find us
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-12">
            <div className="space-y-5">
              <div>
                <p className="text-sm font-medium text-teal-ink/50 mb-1">Address</p>
                <p className="text-teal-ink leading-relaxed">
                  [Street address],<br />
                  Aba, Abia State, Nigeria
                </p>
              </div>
              <div>
                <p className="text-sm font-medium text-teal-ink/50 mb-1">Reception hours</p>
                <p className="text-teal-ink">Open 24 hours</p>
              </div>
              <div>
                <p className="text-sm font-medium text-teal-ink/50 mb-1">Phone</p>
                <a href={PHONE_TEL} className="text-teal-deep font-medium hover:text-teal-ink transition-colors">
                  {PHONE_NUMBER}
                </a>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-teal-deep hover:bg-teal-ink text-white font-semibold px-5 py-3.5 rounded-lg text-sm transition-colors min-h-[48px]"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  WhatsApp us
                </a>
                <a
                  href="https://maps.google.com/?q=Aba+Abia+State+Nigeria"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 border-2 border-teal-deep/20 text-teal-deep hover:border-teal-deep hover:bg-teal-deep/5 font-semibold px-5 py-3.5 rounded-lg text-sm transition-colors min-h-[48px]"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
                  </svg>
                  Open in Maps
                </a>
              </div>
            </div>

            {/* Map placeholder */}
            <div className="img-slot rounded-xl aspect-video sm:aspect-[4/3] flex items-center justify-center">
              <div className="text-center text-white/50">
                <svg className="mx-auto mb-2" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
                </svg>
                <p className="text-sm">Map embed slot</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-teal-ink text-white/70 py-10 px-5 pb-24 sm:pb-10">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <p className="font-display font-bold text-white text-lg">[Hotel Name]</p>
              <p className="text-sm mt-1">Aba, Abia State, Nigeria</p>
            </div>
            <div className="text-sm">
              <p>© {new Date().getFullYear()} [Hotel Name]. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>

      {/* Sticky Bottom Bar (mobile only) */}
      <div className="sticky-bar">
        <a
          href={PHONE_TEL}
          className="flex-1 inline-flex items-center justify-center gap-2 border-2 border-teal-deep text-teal-deep font-semibold py-3 rounded-lg text-sm min-h-[48px] transition-colors active:bg-teal-deep/5"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
          </svg>
          Call
        </a>
        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 inline-flex items-center justify-center gap-2 bg-teal-deep text-white font-semibold py-3 rounded-lg text-sm min-h-[48px] transition-colors active:bg-teal-ink"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
          WhatsApp
        </a>
      </div>
    </div>
  );
}

function FacilityItem({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="flex gap-4">
      <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-teal-deep/10 flex items-center justify-center text-teal-deep">
        {icon}
      </div>
      <div>
        <h3 className="font-semibold text-teal-ink text-base">{title}</h3>
        <p className="mt-1 text-teal-ink/70 text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

function StepItem({ number, title, description }: { number: string; title: string; description: string }) {
  return (
    <div className="flex gap-4 sm:flex-col sm:text-center sm:items-center">
      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center">
        <span className="font-display font-bold text-gold text-lg">{number}</span>
      </div>
      <div>
        <h3 className="font-semibold text-teal-ink text-base">{title}</h3>
        <p className="mt-1 text-teal-ink/70 text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

export default App;
