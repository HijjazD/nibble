import { Coffee, MapPin, Phone, Mail, Clock, Heart, Instagram, Facebook, Twitter } from 'lucide-react';

function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Menu', href: '#menu' },
    { name: 'Blog', href: '#blog' },
    { name: 'Contact', href: '#contact' }
  ];

  const socialLinks = [
    { icon: Instagram, href: '#', label: 'Instagram', color: 'hover:bg-pink-500' },
    { icon: Facebook, href: '#', label: 'Facebook', color: 'hover:bg-blue-500' },
    { icon: Twitter, href: '#', label: 'Twitter', color: 'hover:bg-sky-500' }
  ];

  return (
    <footer className="relative w-full bg-gradient-to-b from-amber-900 to-amber-950 text-white overflow-hidden">
      {/* Pixel decorations at top */}
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-red-500 via-amber-500 via-green-500 to-blue-500"></div>
      
      {/* Floating pixel blocks */}
      <div className="absolute top-10 left-10 w-6 h-6 bg-amber-600 opacity-20"></div>
      <div className="absolute top-20 right-20 w-8 h-8 bg-green-600 opacity-20"></div>
      <div className="absolute bottom-40 left-1/4 w-4 h-4 bg-red-500 opacity-20"></div>

      <div className="max-w-7xl mx-auto px-5 md:px-10 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-amber-600 p-3 rounded-lg border-2 border-white">
                <Coffee className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold" style={{ fontFamily: 'monospace' }}>
                NIBBLES
              </h3>
            </div>
            <p className="text-amber-200 leading-relaxed">
              Your cozy gaming café in Subang Jaya. Inspired by Sarawakian culture, serving quality coffee and good vibes! ☕🎮
            </p>
            <div className="flex gap-2">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="w-3 h-3 bg-red-500 transform rotate-45"></div>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-6 border-b-2 border-amber-600 pb-2" style={{ fontFamily: 'monospace' }}>
              QUICK LINKS
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-amber-200 hover:text-white transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-2 h-2 bg-amber-600 group-hover:bg-white transition-colors"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-bold mb-6 border-b-2 border-amber-600 pb-2" style={{ fontFamily: 'monospace' }}>
              CONTACT INFO
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-amber-200">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-1 text-amber-500" />
                <span className="text-sm">41, Jalan SS 18/6, Ss 18, 47500 Subang Jaya, Selangor</span>
              </li>
              <li className="flex items-center gap-3 text-amber-200">
                <Phone className="w-5 h-5 text-amber-500" />
                <span className="text-sm">011-2618-0850</span>
              </li>
              <li className="flex items-center gap-3 text-amber-200">
                <Mail className="w-5 h-5 text-amber-500" />
                <span className="text-sm">nibblesenterprise@gmail.com</span>
              </li>
              <li className="flex items-start gap-3 text-amber-200">
                <Clock className="w-5 h-5 flex-shrink-0 mt-1 text-amber-500" />
                <span className="text-sm">Tuesday – Saturday<br/>9:30 AM – 6:30 PM</span>
              </li>
            </ul>
          </div>

          {/* Social & CTA */}
          <div>
            <h4 className="text-xl font-bold mb-6 border-b-2 border-amber-600 pb-2" style={{ fontFamily: 'monospace' }}>
              CONNECT WITH US
            </h4>
            <p className="text-amber-200 mb-6 text-sm">
              Follow our gaming café adventures and never miss our special events! 🎮
            </p>
            
            {/* Social Icons */}
            <div className="flex gap-3 mb-6">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className={`bg-amber-800 p-3 rounded-lg border-2 border-amber-600 hover:border-white transition-all ${social.color} group`}
                >
                  <social.icon className="w-5 h-5 text-white" />
                </a>
              ))}
            </div>

            {/* Achievement Badge */}
            <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-lg p-4 border-2 border-white">
              <p className="text-xs font-bold mb-1" style={{ fontFamily: 'monospace' }}>ACHIEVEMENT:</p>
              <p className="text-sm">Scroll Master 🏆</p>
            </div>
          </div>
        </div>

        {/* Divider with pixels */}
        <div className="flex items-center gap-2 mb-8">
          <div className="flex-1 h-0.5 bg-amber-700"></div>
          <div className="flex gap-1">
            <div className="w-2 h-2 bg-red-500"></div>
            <div className="w-2 h-2 bg-amber-500"></div>
            <div className="w-2 h-2 bg-green-500"></div>
            <div className="w-2 h-2 bg-blue-500"></div>
          </div>
          <div className="flex-1 h-0.5 bg-amber-700"></div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-amber-300 text-sm">
          <div className="flex items-center gap-2">
            <span>© {currentYear} Nibbles Café. All rights reserved.</span>
          </div>
          
          <div className="flex items-center gap-2 font-mono">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-red-500 fill-red-500 animate-pulse" />
            <span>& ☕ in Malaysia</span>
          </div>
        </div>

        {/* Extra Gaming Touch */}
        <div className="text-center mt-8 pt-8 border-t border-amber-800">
          <p className="text-amber-500 text-xs font-mono">
            🎮 GAME OVER? NEVER! PRESS START TO VISIT US AGAIN 🎮
          </p>
        </div>
      </div>

      {/* Bottom pixel decoration */}
      <div className="h-2 bg-gradient-to-r from-blue-500 via-purple-500 via-pink-500 to-red-500"></div>
    </footer>
  );
}

export default Footer;
