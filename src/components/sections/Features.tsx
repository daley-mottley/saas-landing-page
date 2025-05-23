
import { Zap, Shield, BarChart, Users, Clock, Sparkles } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Zap,
      title: "Lightning Fast Automation",
      description: "Automate repetitive tasks in seconds. Set up workflows that save you 20+ hours per week with our intelligent automation engine."
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-level security with SOC 2 compliance, end-to-end encryption, and advanced threat protection for your peace of mind."
    },
    {
      icon: BarChart,
      title: "Advanced Analytics",
      description: "Get actionable insights with real-time dashboards, custom reports, and predictive analytics to drive better decisions."
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Seamlessly work together with real-time collaboration tools, shared workspaces, and integrated communication features."
    },
    {
      icon: Clock,
      title: "Time Tracking & Management",
      description: "Track productivity, manage deadlines, and optimize workflows with intelligent time management and scheduling tools."
    },
    {
      icon: Sparkles,
      title: "AI-Powered Insights",
      description: "Leverage machine learning to get smart recommendations, automate complex decisions, and predict future trends."
    }
  ];

  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-blue-50 border border-blue-200 rounded-full text-sm font-medium text-blue-700 mb-6">
            <Sparkles className="w-4 h-4 mr-2" />
            Powerful Features
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Everything You Need to 
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Scale Efficiently</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our comprehensive platform provides all the tools your growing business needs to streamline operations, 
            boost productivity, and achieve sustainable growth.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={feature.title}
              className="group relative bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl hover:border-blue-300 transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative z-10">
                {/* Icon */}
                <div className="w-14 h-14 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-7 h-7 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-700 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>

                {/* Learn More Link */}
                <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-blue-600 font-semibold text-sm cursor-pointer hover:text-blue-700">
                    Learn more →
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-lg text-gray-600 mb-6">
            Ready to transform your workflow?
          </p>
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            Start Your Free Trial
          </button>
        </div>
      </div>
    </section>
  );
};

export default Features;
