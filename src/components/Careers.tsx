import { Button } from "@/components/ui/button";
import { Briefcase, Users, TrendingUp } from "lucide-react";

const Careers = () => {
  const benefits = [
    {
      icon: Briefcase,
      title: "Exciting Projects",
      description: "Work on cutting-edge Guidewire implementations",
    },
    {
      icon: Users,
      title: "Collaborative Team",
      description: "Join a team of passionate professionals",
    },
    {
      icon: TrendingUp,
      title: "Growth Opportunities",
      description: "Continuous learning and career advancement",
    },
  ];

  const handleApply = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="careers" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Join Our Team
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6" />
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Be part of a dynamic team transforming the insurance technology landscape
            </p>
          </div>

          <div className="bg-card rounded-2xl p-8 md:p-12 shadow-large animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="text-center animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="text-primary" size={28} />
                  </div>
                  <h3 className="text-xl font-semibold text-card-foreground mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </div>
              ))}
            </div>

            <div className="text-center">
              <p className="text-lg text-card-foreground mb-6 leading-relaxed">
                We're always looking for talented individuals who are passionate about
                technology and insurance. If you're ready to take your career to the next
                level, we'd love to hear from you.
              </p>
              <Button
                size="lg"
                onClick={handleApply}
                className="bg-primary hover:bg-primary-hover transition-smooth text-lg px-8"
              >
                Apply Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Careers;
