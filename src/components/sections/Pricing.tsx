
import { Check, Zap, Crown, Building } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(true);

  const plans = [
    {
      name: "Starter",
      icon: Zap,
      description: "Perfect for small teams getting started",
      monthlyPrice: 29,
      annualPrice: 25,
      popular: false,
      features: [
        "Up to 5 team members",
        "Basic automation workflows",
        "Standard integrations",
        "Email support",
        "Basic analytics",
        "Mobile app access",
        "2GB storage"
      ]
    },
    {
      name: "Professional",
      icon: Crown,
      description: "Ideal for growing businesses",
      monthlyPrice: 79,
      annualPrice: 65,
      popular: true,
      features: [
        "Up to 25 team members",
        "Advanced automation workflows",
        "Premium integrations",
        "Priority support",
        "Advanced analytics & reporting",
        "Custom dashboard",
        "50GB storage",
        "API access",
        "Custom branding"
      ]
    },
    {
      name: "Enterprise",
      icon: Building,
      description: "For large organizations with custom needs",
      monthlyPrice: "Custom",
      annualPrice: "Custom",
      popular: false,
      features: [
        "Unlimited team members",
        "Enterprise automation suite",
        "Custom integrations",
        "24/7 dedicated support",
        "White-label solution",
        "Advanced security features",
        "Unlimited storage",
        "On-premise deployment",
        "SLA guarantee",
        "Custom training"
      ]
    }
  ];

  return (
    <section id="pricing" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-green-50 border border-green-200 rounded-full text-sm font-medium text-green-700 mb-6">
            <Crown className="w-4 h-4 mr-2" />
            Simple, Transparent Pricing
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Choose Your
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Growth Plan</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10">
            Start free and scale as you grow. All plans include our core features with no hidden fees or surprise charges.
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center space-x-4">
            <span className={`text-sm font-medium ${!isAnnual ? 'text-gray-900' : 'text-gray-500'}`}>
              Monthly
            </span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                isAnnual ? 'bg-blue-600' : 'bg-gray-200'
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  isAnnual ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
            <span className={`text-sm font-medium ${isAnnual ? 'text-gray-900' : 'text-gray-500'}`}>
              Annual
            </span>
            {isAnnual && (
              <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                Save 20%
              </span>
            )}
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={plan.name}
              className={`relative rounded-2xl border-2 p-8 transition-all duration-300 transform hover:scale-105 ${
                plan.popular 
                  ? 'border-blue-500 bg-gradient-to-br from-blue-50 to-purple-50 shadow-xl' 
                  : 'border-gray-200 bg-white shadow-lg hover:border-blue-300'
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}

              {/* Plan Header */}
              <div className="text-center mb-8">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl flex items-center justify-center ${
                  plan.popular 
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600' 
                    : 'bg-gray-100'
                }`}>
                  <plan.icon className={`w-8 h-8 ${plan.popular ? 'text-white' : 'text-gray-600'}`} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-6">{plan.description}</p>
                
                {/* Price */}
                <div className="mb-6">
                  {typeof plan.monthlyPrice === 'number' ? (
                    <>
                      <span className="text-4xl font-bold text-gray-900">
                        ${isAnnual ? plan.annualPrice : plan.monthlyPrice}
                      </span>
                      <span className="text-gray-600 ml-2">per month</span>
                      {isAnnual && (
                        <div className="text-sm text-green-600 font-medium mt-1">
                          Save ${(plan.monthlyPrice - plan.annualPrice) * 12}/year
                        </div>
                      )}
                    </>
                  ) : (
                    <span className="text-4xl font-bold text-gray-900">Contact Us</span>
                  )}
                </div>

                {/* CTA Button */}
                <Button 
                  className={`w-full py-3 text-lg font-semibold rounded-xl transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl'
                      : 'bg-gray-900 hover:bg-gray-800 text-white'
                  }`}
                >
                  {typeof plan.monthlyPrice === 'number' ? 'Start Free Trial' : 'Contact Sales'}
                </Button>
              </div>

              {/* Features */}
              <ul className="space-y-4">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="mt-20 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto text-left">
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Can I change plans anytime?</h4>
              <p className="text-gray-600">Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately.</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Is there a free trial?</h4>
              <p className="text-gray-600">Absolutely! All plans come with a 14-day free trial. No credit card required to get started.</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">What payment methods do you accept?</h4>
              <p className="text-gray-600">We accept all major credit cards, PayPal, and wire transfers for enterprise customers.</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Is my data secure?</h4>
              <p className="text-gray-600">Yes, we use bank-level encryption and are SOC 2 compliant with 99.9% uptime guarantee.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
