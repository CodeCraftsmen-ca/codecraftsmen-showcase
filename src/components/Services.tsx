import { Settings, Cloud, TestTube, Headphones } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import implementationImg from "@/assets/service-implementation.jpg";
import cloudImg from "@/assets/service-cloud.jpg";
import testingImg from "@/assets/service-testing.jpg";
import supportImg from "@/assets/service-support.jpg";

const Services = () => {
  const services = [
    {
      icon: Settings,
      title: "Guidewire Implementation",
      description:
        "Our implementation is agile, with on-site or offshore delivery model for quick go-to-market of insurance products. Save 30% operational costs and 30-40% efforts by keeping implementation simple and scalable.",
      image: implementationImg,
    },
    {
      icon: Cloud,
      title: "Guidewire Cloud Migration",
      description:
        "Be it migration for clean deployments or rehosting, we handle discovery to go live and post-cutover support. Follow a Lift-and-Shift approach to move Guidewire apps from on-premise data centers to cloud.",
      image: cloudImg,
    },
    {
      icon: TestTube,
      title: "Guidewire QA & Testing",
      description:
        "Based on Guidewire Test Automation Framework, we deliver cyclical test automation with zero-cost frameworks & reusable packages. Real-time failure/results dashboard & an ML-powered reporting portal.",
      image: testingImg,
    },
    {
      icon: Headphones,
      title: "Guidewire Managed Services",
      description:
        "We are a one-stop managed services provider for Guidewire and aided products. Enhance your core insurance suite with empowering analytics, deployment, integration, quality, and support.",
      image: supportImg,
    },
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Guidewire Services
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6" />
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            End-to-end Guidewire services tailored to your specific needs with unmatched
            product knowledge and domain expertise.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Card
              key={index}
              className="border-border shadow-medium hover:shadow-large transition-all hover:-translate-y-2 animate-fade-in-up cursor-pointer group overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
                <div className="absolute bottom-4 left-4 w-14 h-14 rounded-lg bg-white/90 flex items-center justify-center">
                  <service.icon className="text-primary" size={28} />
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-2xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
