import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-orange-600">SafeHaul</h1>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-700 hover:text-orange-600 transition">Home</a>
              <a href="#services" className="text-gray-700 hover:text-orange-600 transition">Services</a>
              <a href="#about" className="text-gray-700 hover:text-orange-600 transition">About</a>
              <a href="#contact" className="text-gray-700 hover:text-orange-600 transition">Contact</a>
            </div>
            <div className="md:hidden">
              <button className="text-gray-700">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative pt-16 min-h-screen flex items-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="https://images.unsplash.com/photo-1601581875308-fafbf2c1c563?w=1920&q=80"
            alt="Towing truck"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
              24/7 Towing
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8">
              Our trusted towing team is ready 24/7<br />
              to get you and your car safely moving again
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+1234567890"
                className="inline-flex items-center justify-center px-8 py-4 bg-orange-600 text-white font-semibold rounded-lg hover:bg-orange-700 transition text-lg"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call Now: (123) 456-7890
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-gray-900 font-semibold rounded-lg hover:bg-gray-100 transition text-lg"
              >
                Get a Quote
              </a>
            </div>
            <p className="mt-8 text-gray-300 text-lg">
              We&apos;re ready 24/7 to help
            </p>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              What <span className="text-orange-600">We Offer</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional towing vehicle service across the region including accident recovery, winch-outs, and flatbed towing for premium vehicles. When vehicles stop, we start moving.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="text-5xl font-bold text-orange-600 mb-2">5+</div>
              <div className="text-gray-600">Years of Experience</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-orange-600 mb-2">30</div>
              <div className="text-gray-600">Mins Arrival</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-orange-600 mb-2">1000+</div>
              <div className="text-gray-600">Vehicles Towed</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-orange-600 mb-2">100%</div>
              <div className="text-gray-600">Expert Team Support</div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition">
              <div className="text-orange-600 text-3xl mb-4">✓</div>
              <h3 className="text-xl font-semibold mb-2">More than 5 years of experience</h3>
            </div>
            <div className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition">
              <div className="text-orange-600 text-3xl mb-4">✓</div>
              <h3 className="text-xl font-semibold mb-2">Short arrival time of 30 minutes or less</h3>
            </div>
            <div className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition">
              <div className="text-orange-600 text-3xl mb-4">✓</div>
              <h3 className="text-xl font-semibold mb-2">Cheap & Affordable prices - zero hidden fees</h3>
            </div>
            <div className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition">
              <div className="text-orange-600 text-3xl mb-4">✓</div>
              <h3 className="text-xl font-semibold mb-2">Professional Towing service</h3>
            </div>
            <div className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition">
              <div className="text-orange-600 text-3xl mb-4">✓</div>
              <h3 className="text-xl font-semibold mb-2">Available 24/7</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our <span className="text-orange-600">Services</span>
            </h2>
            <p className="text-xl text-gray-600">Emergency Roadside Assistance</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition">
              <div className="relative h-48">
                <Image
                  src="https://images.unsplash.com/photo-1601581875308-fafbf2c1c563?w=800&q=80"
                  alt="Professional Towing Services"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Professional Towing Services</h3>
                <p className="text-gray-600">
                  One of the trusted and cheapest local towing services, reliable and affordable towing solutions for all vehicle types.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition">
              <div className="relative h-48">
                <Image
                  src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80"
                  alt="Road Assistance"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Road Assistance</h3>
                <p className="text-gray-600">
                  Our fast and reliable roadside assistance service is here to help you get moving again without the stress.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition">
              <div className="relative h-48">
                <Image
                  src="https://images.unsplash.com/photo-1601581875038-18f8d1b3f44b?w=800&q=80"
                  alt="Emergency Towing 24/7"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Emergency Towing 24/7</h3>
                <p className="text-gray-600">
                  We specialize in local and long-distance towing, emergency roadside help, and vehicle recovery, available 24/7.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition">
              <div className="relative h-48">
                <Image
                  src="https://images.unsplash.com/photo-1601581875203-85dae3c0d2a3?w=800&q=80"
                  alt="Heavy-duty Towing"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Heavy-duty Towing</h3>
                <p className="text-gray-600">
                  Our experienced team is equipped with advanced tow trucks and specialized tools to handle large vehicles and commercial trucks.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition">
              <div className="relative h-48">
                <Image
                  src="https://images.unsplash.com/photo-1601581875038-18f8d1b3f44b?w=800&q=80"
                  alt="Vehicle Recovery"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Vehicle Recovery & Winch-outs</h3>
                <p className="text-gray-600">
                  We offer specialized winch-out services and recovery services using the right equipment and techniques to safely pull your vehicle back onto the road.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition">
              <div className="relative h-48">
                <Image
                  src="https://images.unsplash.com/photo-1601581875308-fafbf2c1c563?w=800&q=80"
                  alt="Fast Arrival"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Fast Arrival & Expert Support</h3>
                <p className="text-gray-600">
                  Our towing team is on standby 24/7 to provide fast arrival times and expert support anywhere in the region.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Why Choose <span className="text-orange-600">SafeHaul</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              At SafeHaul Services, one quick call connects you to the most trusted towing service in the region.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Fast Response</h3>
              <p className="text-gray-600">Most calls answered immediately and we get to you in minutes</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Affordable Pricing</h3>
              <p className="text-gray-600">We deliver quality service without expensive surprises</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Professional Drivers</h3>
              <p className="text-gray-600">Experienced, certified, friendly and reliable</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Local & Trusted</h3>
              <p className="text-gray-600">A leading towing company serving the community</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              What Our <span className="text-orange-600">Customers Say</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="text-orange-600 text-4xl mb-4">&quot;</div>
              <p className="text-gray-700 mb-6 italic">
                I was stranded late at night with a dead battery on the highway, and SafeHaul showed up in less than 20 minutes. The technician was professional and made me feel completely safe. Their quick response and excellent service turned a stressful situation into a smooth experience. Highly recommend!
              </p>
              <div className="font-semibold text-gray-900">Emily R.</div>
              <div className="text-gray-600 text-sm">Local Customer</div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="text-orange-600 text-4xl mb-4">&quot;</div>
              <p className="text-gray-700 mb-6 italic">
                My car broke down on my way to work, and I called SafeHaul. They arrived quickly, handled my vehicle with care, and towed it straight to my mechanic. Their prices were much lower than I expected for such professional service. I won&apos;t call anyone else for towing again.
              </p>
              <div className="font-semibold text-gray-900">James P.</div>
              <div className="text-gray-600 text-sm">Local Customer</div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="text-orange-600 text-4xl mb-4">&quot;</div>
              <p className="text-gray-700 mb-6 italic">
                I&apos;ve used towing services before, but SafeHaul stands out. Their team is punctual, polite, and knows exactly what they&apos;re doing. They even followed up to make sure I got home safely. It&apos;s rare to see this level of care and professionalism these days.
              </p>
              <div className="font-semibold text-gray-900">S. Menorah</div>
              <div className="text-gray-600 text-sm">Local Customer</div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Most Asked <span className="text-orange-600">Questions</span>
            </h2>
          </div>

          <div className="space-y-6">
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                What Areas Do SafeHaul Services Serve?
              </h3>
              <p className="text-gray-600">
                We serve areas throughout the region and surrounding areas. Whether you&apos;re stuck on a busy highway or need roadside help in your neighborhood, our towing team will arrive quickly to get you back on the road.
              </p>
            </div>

            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                How long does SafeHaul Services take to arrive?
              </h3>
              <p className="text-gray-600">
                Our average response time is 15 to 30 minutes within the service area, depending on traffic and distance. We know breakdowns are stressful, so our dispatch team works fast to get a tow truck or roadside technician to you as quickly as possible — 24/7, day or night.
              </p>
            </div>

            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Do you offer 24/7 service?
              </h3>
              <p className="text-gray-600">
                Yes! We are available 24 hours a day, 7 days a week, including holidays. Emergencies don&apos;t wait, and neither do we.
              </p>
            </div>

            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                What types of vehicles can you tow?
              </h3>
              <p className="text-gray-600">
                We can handle all types of vehicles, from small cars to heavy-duty trucks and commercial vehicles. Our fleet includes flatbed trucks, wheel-lift trucks, and specialized equipment for premium and oversized vehicles.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Get a <span className="text-orange-600">Quote</span>
            </h2>
            <p className="text-xl text-gray-600">Delivers the best service</p>
          </div>

          <form className="bg-white rounded-lg shadow-lg p-8">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="towFrom" className="block text-sm font-medium text-gray-700 mb-2">
                  Tow From *
                </label>
                <input
                  type="text"
                  id="towFrom"
                  name="towFrom"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="towTo" className="block text-sm font-medium text-gray-700 mb-2">
                  Tow To *
                </label>
                <input
                  type="text"
                  id="towTo"
                  name="towTo"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="vehicleType" className="block text-sm font-medium text-gray-700 mb-2">
                  Vehicle Type *
                </label>
                <select
                  id="vehicleType"
                  name="vehicleType"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent"
                >
                  <option value="">Select Vehicle Type</option>
                  <option value="car">Car</option>
                  <option value="suv">SUV</option>
                  <option value="truck">Truck</option>
                  <option value="motorcycle">Motorcycle</option>
                  <option value="rv">RV</option>
                  <option value="commercial">Commercial Vehicle</option>
                </select>
              </div>
              <div>
                <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-2">
                  Date *
                </label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-orange-600 text-white font-semibold py-4 rounded-lg hover:bg-orange-700 transition text-lg"
            >
              Submit Now
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">SafeHaul</h3>
              <p className="text-gray-400">
                Need fast towing? SafeHaul offers 24/7 roadside assistance, vehicle towing, and professional tow trucks. Call now for quick help near you!
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Useful Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#about" className="hover:text-white transition">About</a></li>
                <li><a href="#services" className="hover:text-white transition">Services</a></li>
                <li><a href="#contact" className="hover:text-white transition">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Get in Touch</h4>
              <ul className="space-y-2 text-gray-400">
                <li>123 Main Street</li>
                <li>Your City, ST 12345</li>
                <li>info@safehaul.com</li>
                <li>(123) 456-7890</li>
                <li>Available 24/7</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">SafeHaul Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Towing Services</li>
                <li>Road Assistance</li>
                <li>Emergency Towing Services</li>
                <li>Heavy Duty Towing</li>
                <li>Vehicle Recovery & Winch-out</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>SafeHaul Services All Rights Reserved 2025 ©</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
