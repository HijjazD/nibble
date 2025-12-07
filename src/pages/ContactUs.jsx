import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, Coffee, Star } from 'lucide-react';
import emailjs from '@emailjs/browser';

function ContactUs() {
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    phone: '',
    message: ''
  });
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if all fields are filled
    if (!formData.name || !formData.email || !formData.phone || !formData.message) {
      alert("Please fill in all fields!");
      return;
    }

    setIsSending(true);

    // Send email via EmailJS
    emailjs.send(
      "service_t87axeh",      // <-- replace with your service ID
      "template_ww4xkwg",     // <-- replace with your template ID
      {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        time: new Date().toLocaleString(),
        message: formData.message,
      },
      "Mc6RCxHVmpzOb1c5M"       // <-- replace with your public key
    )
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        alert("Message sent successfully! ☕");
        // Reset form
        setFormData({ email: '', name: '', phone: '', message: '' });
      })
      .catch((err) => {
        console.error('FAILED...', err);
        alert("Oops! Something went wrong. Please try again.");
      })
      .finally(() => setIsSending(false));
  };

  const visitDetails = [
    {
      icon: MapPin,
      title: 'Location',
      content: '41, Jalan SS 18/6, Ss 18, 47500 Subang Jaya, Selangor',
      color: 'bg-red-500'
    },
    {
      icon: Phone,
      title: 'Phone',
      content: '011-2618-0850',
      color: 'bg-green-500'
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'email@gmail.com',
      color: 'bg-blue-500'
    },
    {
      icon: Clock,
      title: 'Hours',
      content: 'Tuesday – Saturday, 9:30 AM – 6:30 PM',
      color: 'bg-amber-500'
    }
  ];

  return (
    <section id="contact" className="relative w-full min-h-screen py-20 px-5 md:px-10 bg-[#fff4dc] overflow-hidden">
      {/* Pixel Art Decorations */}
      <div className="absolute top-10 left-5 w-8 h-8 bg-amber-600 opacity-30"></div>
      <div className="absolute top-20 left-5 w-8 h-8 bg-green-600 opacity-30"></div>
      <div className="absolute top-10 right-5 w-8 h-8 bg-red-500 opacity-30"></div>
      <div className="absolute top-20 right-5 w-8 h-8 bg-blue-500 opacity-30"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Gaming-Style Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4 relative">
            <div className="absolute -inset-2 bg-amber-600 transform rotate-1 rounded-lg opacity-20"></div>
            <div className="relative bg-amber-600 px-6 py-3 rounded-lg border-4 border-amber-900 shadow-lg">
              <p className="text-white font-bold text-sm tracking-widest font-masa">LEVEL UP YOUR VISIT</p>
            </div>
          </div>
          
          <h2 className="text-5xl md:text-7xl mb-6 text-amber-900 font-bold relative inline-block" style={{ fontFamily: 'monospace', textShadow: '4px 4px 0px rgba(0,0,0,0.1)' }}>
            <span className="relative font-gameboy">
              CONTACT US
              <Star className="absolute -top-4 -right-8 w-8 h-8 text-amber-500 animate-pulse" />
            </span>
          </h2>
          
          <div className="flex justify-center gap-2 mb-6">
            <div className="w-12 h-1 bg-amber-600"></div>
            <div className="w-12 h-1 bg-green-600"></div>
            <div className="w-12 h-1 bg-red-500"></div>
            <div className="w-12 h-1 bg-blue-500"></div>
          </div>
          
          <p className="text-xl md:text-2xl text-gray-700 max-w-2xl mx-auto font-remington">
            Ready to level up your coffee game? Drop us a message! ☕🎮
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Visit Us Info - Gaming Card Style */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-8 border-4 border-amber-900 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-red-500 via-amber-500 to-green-500"></div>
              
              <div className="flex items-center gap-3 mb-6">
                <Coffee className="w-8 h-8 text-amber-600" />
                <h3 className="text-3xl font-bold text-amber-900" style={{ fontFamily: 'monospace' }}>
                  VISIT US
                </h3>
              </div>

              <div className="space-y-4">
                {visitDetails.map((detail, index) => (
                  <div 
                    key={index}
                    className="group bg-gradient-to-r from-amber-50 to-white rounded-xl p-4 border-2 border-amber-200 hover:border-amber-600 transition-all duration-300 hover:shadow-lg"
                  >
                    <div className="flex items-start gap-4">
                      <div className={`${detail.color} p-3 rounded-lg border-2 border-gray-900 shadow-md flex-shrink-0`}>
                        <detail.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="font-kiwi text-gray-900 mb-1" >
                          {detail.title.toUpperCase()}
                        </p>
                        <p className="text-gray-700 leading-relaxed font-typo">
                          {detail.content}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Pixel Hearts Decoration */}
              <div className="flex gap-2 mt-6 justify-center">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="w-4 h-4 bg-red-500 transform rotate-45"></div>
                ))}
              </div>
            </div>

            {/* Achievement Badge */}
            <div className="bg-gradient-to-r from-amber-600 to-amber-700 rounded-2xl p-6 border-4 border-amber-900 shadow-xl text-white">
              <div className="flex items-center gap-3">
                <div className="bg-white rounded-full p-3">
                  <Star className="w-6 h-6 text-amber-600" />
                </div>
                <div>
                  <p className="font-bold text-lg" style={{ fontFamily: 'monospace' }}>ACHIEVEMENT UNLOCKED!</p>
                  <p className="text-sm opacity-90">Found our contact page 🏆</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form - Gaming Interface */}
          <div className="bg-white rounded-2xl p-8 border-4 border-gray-900 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>
            
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-3xl font-bold text-gray-900" style={{ fontFamily: 'monospace' }}>
                SEND MESSAGE
              </h3>
              <div className="flex gap-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-amber-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
            </div>

            <div className="space-y-5">
              {/* Name */}
              <div>
                <label className="block text-sm font-bold text-gray-900 mb-2" style={{ fontFamily: 'monospace' }}>
                  PLAYER NAME
                </label>
                <input 
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Enter your name"
                  className="w-full bg-amber-50 border-2 border-gray-900 rounded-lg p-4 text-gray-900 focus:outline-none focus:ring-4 focus:ring-amber-500 transition-all font-mono"
                  required
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-bold text-gray-900 mb-2" style={{ fontFamily: 'monospace' }}>
                  EMAIL ADDRESS
                </label>
                <input 
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="your@email.com"
                  className="w-full bg-amber-50 border-2 border-gray-900 rounded-lg p-4 text-gray-900 focus:outline-none focus:ring-4 focus:ring-amber-500 transition-all font-mono"
                  required
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-bold text-gray-900 mb-2" style={{ fontFamily: 'monospace' }}>
                  PHONE NUMBER
                </label>
                <input 
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="012345678"
                  className="w-full bg-amber-50 border-2 border-gray-900 rounded-lg p-4 text-gray-900 focus:outline-none focus:ring-4 focus:ring-amber-500 transition-all font-mono"
                  required
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-bold text-gray-900 mb-2" style={{ fontFamily: 'monospace' }}>
                  YOUR MESSAGE
                </label>
                <textarea 
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us what's on your mind..."
                  className="w-full bg-amber-50 border-2 border-gray-900 rounded-lg p-4 text-gray-900 focus:outline-none focus:ring-4 focus:ring-amber-500 transition-all resize-none font-mono"
                  required
                />
              </div>

              {/* Submit Button - Gaming Style */}
              <button 
                onClick={handleSubmit}
                disabled={isSending}
                className="w-full py-4 bg-gradient-to-r from-green-500 to-green-600 text-white font-bold text-lg tracking-wider uppercase rounded-lg border-4 border-gray-900 hover:from-green-600 hover:to-green-700 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0 flex items-center justify-center gap-3"
                style={{ fontFamily: 'monospace' }}
              >
                {isSending ? (
                  <>
                    <div className="animate-spin w-5 h-5 border-2 border-white border-t-transparent rounded-full"></div>
                    SENDING...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    SEND MESSAGE
                  </>
                )}
              </button>
            </div>

            {/* HP Bar decoration */}
            <div className="mt-6 pt-6 border-t-2 border-gray-200">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-gray-500" style={{ fontFamily: 'monospace' }}>FORM POWER:</span>
                <div className="flex-1 h-3 bg-gray-200 rounded-full border-2 border-gray-900 overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-green-500 to-green-600 w-full"></div>
                </div>
                <span className="text-xs font-bold text-green-600" style={{ fontFamily: 'monospace' }}>100%</span>
              </div>
            </div>
          </div>
        </div>

        {/* Pixel Coffee Animation */}
        <div className="mt-12 text-center">
          <Coffee className="w-12 h-12 text-amber-600 mx-auto animate-bounce" />
          <p className="text-gray-600 mt-4 font-mono">
            Press START to continue your adventure at Nibbles! 🎮☕
          </p>
        </div>
      </div>

      {/* Corner Decorations */}
      <div className="absolute bottom-10 left-10 w-16 h-16 border-4 border-amber-600 border-r-0 border-b-0 opacity-20"></div>
      <div className="absolute bottom-10 right-10 w-16 h-16 border-4 border-green-600 border-l-0 border-b-0 opacity-20"></div>
    </section>
  );
}

export default ContactUs;
