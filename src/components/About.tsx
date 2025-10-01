import { CheckCircle } from "lucide-react";
import teamImage from "@/assets/about-team.jpg";

const About = () => {
  const capabilities = [
    "Achieve digital transformation through Guidewire configuration, integration, conversion, and upgrades",
    "Implement and support integrations between InsuranceSuite and other downstream/upstream applications",
    "Testing and intelligent automation for Guidewire PolicyCenter, ClaimCenter, and BillingCenter",
    "Transform insurance workflows using Artificial Intelligence (AI), automation, and OCR",
  ];

  return (
    <section id="about" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Who We Are
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6" />
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Insurers have been adopting digital technologies to streamline operations,
              enhance customer experience, and increase underwriting and claims efficiency
              to accomplish strategic objectives.
            </p>
          </div>

          {/* Team Image */}
          <div className="mb-12 animate-fade-in overflow-hidden rounded-2xl shadow-large">
            <img 
              src={teamImage} 
              alt="CodeCraftsmen Team" 
              className="w-full h-80 object-cover"
            />
          </div>

          <div className="bg-card rounded-2xl p-8 md:p-12 shadow-large animate-fade-in">
            <p className="text-lg text-card-foreground mb-8 leading-relaxed">
              Guidewire is the most trusted insurance software platform in the industry.
              The Guidewire product portfolio represents a modern approach to building a
              next-generation IT platform for core insurance processes right from new
              business intake to rating, underwriting, policy administration, billing, and
              claims. With a technology partner to support them through their Guidewire
              initiatives, insurers are set to win increased mindshare and accomplish
              financial targets with repeatable success.
            </p>

            <h3 className="text-2xl font-bold text-card-foreground mb-6">
              CodeCraftsmen Guidewire Services Enable Insurers To:
            </h3>

            <div className="space-y-4">
              {capabilities.map((capability, index) => (
                <div
                  key={index}
                  className="flex gap-4 items-start animate-slide-in-left"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CheckCircle className="text-primary flex-shrink-0 mt-1" size={24} />
                  <p className="text-card-foreground leading-relaxed">{capability}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
