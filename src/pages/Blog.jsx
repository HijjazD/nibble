import { Calendar, Clock, Coffee, Leaf, ArrowRight } from 'lucide-react';

function Blog() {
  const posts = [
    {
      image: 'https://media.freemalaysiatoday.com/wp-content/uploads/2025/03/7cc0030d-nibbles-cafe-lifestyle-emel-pic-270325-1.webp',
      title: 'Brewing Success Through Entrepreneurial Studies',
      excerpt: 'Fresh out of Taylor\'s University, Wan Muhammad Wan Sa\'adi knew with certainty that he hadn\'t only earned a degree – he had brewed up his entrepreneurial dream with Nibbles Café.',
      date: 'March 28, 2025',
      readTime: '5 min read',
      category: 'Our Story',
      link: 'https://www.freemalaysiatoday.com/category/leisure/2025/03/28/brewing-success-through-entrepreneurial-studies'
    }
  ];

  return (
    <section id="blog" className="relative w-full min-h-screen py-20 px-5 md:px-10 bg-[#fff4dc] overflow-hidden">
      {/* Decorative leaves */}
      <div className="absolute top-10 left-0 w-32 h-32 opacity-20">
        <Leaf className="w-full h-full text-green-700 transform -rotate-45" />
      </div>
      <div className="absolute bottom-20 right-0 w-40 h-40 opacity-20">
        <Coffee className="w-full h-full text-amber-700 transform rotate-12" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <Coffee className="w-12 h-12 text-amber-600 mx-auto mb-2" />
          </div>
          <h2 className="text-5xl md:text-7xl mb-6 text-amber-800" style={{ fontFamily: 'cursive' }}>
            Café Chronicles
          </h2>
          <div className="w-32 h-1 bg-amber-600 mx-auto mb-6"></div>
          <p className="text-xl md:text-2xl text-gray-700 max-w-2xl mx-auto leading-relaxed">
            Stories, updates & the heart behind every cup at Nibbles
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-1 gap-8">
          {posts.map((post, index) => (
            <article
              key={index}
              className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border-4 border-amber-900"
            >
              {/* Decorative corner elements */}
              <div className="absolute top-0 left-0 w-16 h-16 bg-amber-600 rounded-br-full opacity-20"></div>
              <div className="absolute bottom-0 right-0 w-20 h-20 bg-green-600 rounded-tl-full opacity-20"></div>

              <div className="flex flex-col md:flex-row">
                {/* Image Section */}
                <div className="relative md:w-1/2 h-80 md:h-auto overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-6 left-6">
                    <span className="px-4 py-2 bg-amber-600 text-white text-sm font-bold rounded-full shadow-lg border-2 border-white">
                      {post.category}
                    </span>
                  </div>
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>

                {/* Content Section */}
                <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-4 text-sm text-gray-600 mb-4 flex-wrap">
                    <div className="flex items-center gap-2 bg-amber-100 px-3 py-1 rounded-full">
                      <Calendar className="h-4 w-4 text-amber-700" />
                      <span className="font-medium">{post.date}</span>
                    </div>
                    <div className="flex items-center gap-2 bg-green-100 px-3 py-1 rounded-full">
                      <Clock className="h-4 w-4 text-green-700" />
                      <span className="font-medium">{post.readTime}</span>
                    </div>
                  </div>

                  <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight group-hover:text-amber-700 transition-colors duration-300">
                    {post.title}
                  </h3>

                  <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                    {post.excerpt}
                  </p>

                  <a 
                    href={post.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 text-amber-700 font-bold text-lg hover:text-amber-900 transition-all duration-300 group-hover:gap-5 border-b-2 border-amber-700 pb-1 w-fit"
                  >
                    Read Full Story
                    <ArrowRight className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Coming Soon Section */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-white rounded-2xl px-8 py-6 shadow-md border-4 border-dashed border-amber-600">
            <Coffee className="w-8 h-8 text-amber-600 mx-auto mb-3 animate-bounce" />
            <p className="text-xl text-gray-700 font-semibold">
              More stories brewing...
            </p>
            <p className="text-gray-600 mt-2">
              Stay tuned for more updates from Nibbles!
            </p>
          </div>
        </div>
      </div>

      {/* Floating decorative elements */}
      <div className="absolute top-1/4 right-10 w-3 h-3 bg-amber-600 rounded-full animate-pulse"></div>
      <div className="absolute top-1/2 left-10 w-2 h-2 bg-green-600 rounded-full animate-pulse delay-300"></div>
      <div className="absolute bottom-1/4 right-20 w-4 h-4 bg-amber-700 rounded-full animate-pulse delay-700"></div>
    </section>
  );
}

export default Blog;
