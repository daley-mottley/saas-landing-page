
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      content: "SaaSFlow transformed our operations completely. We went from spending 30 hours a week on manual tasks to just 5 hours. The ROI was immediate and substantial.",
      author: "Sarah Chen",
      title: "VP of Operations",
      company: "TechCorp",
      avatar: "SC",
      rating: 5
    },
    {
      content: "The automation features are incredible. Our team productivity increased by 40% in the first month. It's like having an extra team member that never sleeps.",
      author: "Marcus Rodriguez",
      title: "CEO",
      company: "GrowthLab",
      avatar: "MR",
      rating: 5
    },
    {
      content: "Security was our main concern, but SaaSFlow exceeded all expectations. Enterprise-grade protection with an intuitive interface. Perfect combination.",
      author: "Emily Watson",
      title: "CTO",
      company: "SecureFlow",
      avatar: "EW",
      rating: 5
    },
    {
      content: "Implementation was seamless and the support team is outstanding. We were up and running in less than a day with immediate results.",
      author: "David Kim",
      title: "Director of IT",
      company: "InnovateCo",
      avatar: "DK",
      rating: 5
    },
    {
      content: "The analytics and insights have revolutionized our decision-making process. We can now predict trends and act proactively instead of reactively.",
      author: "Lisa Thompson",
      title: "Head of Strategy",
      company: "FutureTech",
      avatar: "LT",
      rating: 5
    },
    {
      content: "Best investment we've made for our business. The time savings alone paid for the subscription in the first week. Absolutely recommended.",
      author: "James Wilson",
      title: "Founder",
      company: "StartupXYZ",
      avatar: "JW",
      rating: 5
    }
  ];

  const stats = [
    { number: "10,000+", label: "Happy Customers" },
    { number: "99.9%", label: "Uptime SLA" },
    { number: "40%", label: "Productivity Increase" },
    { number: "20+", label: "Hours Saved Weekly" }
  ];

  return (
    <section id="testimonials" className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-white border border-gray-200 rounded-full text-sm font-medium text-gray-700 mb-6">
            <Quote className="w-4 h-4 mr-2" />
            Customer Success Stories
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Loved by Teams
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Worldwide</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join thousands of successful teams who have transformed their operations and achieved remarkable growth with SaaSFlow.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100"
            >
              {/* Rating */}
              <div className="flex items-center mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Content */}
              <blockquote className="text-gray-700 mb-6 leading-relaxed">
                "{testimonial.content}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.author}</div>
                  <div className="text-gray-600 text-sm">{testimonial.title}</div>
                  <div className="text-blue-600 text-sm font-medium">{testimonial.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg border border-gray-200 max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Ready to Join These Success Stories?
            </h3>
            <p className="text-lg text-gray-600 mb-8">
              Start your free trial today and experience the transformation for yourself.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                Start Free Trial
              </button>
              <button className="border-2 border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300">
                Schedule Demo
              </button>
            </div>
            <p className="text-sm text-gray-500 mt-4">
              No credit card required • 14-day free trial • Cancel anytime
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
