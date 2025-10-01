import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "What is Guidewire and why is it important for insurers?",
      answer:
        "Guidewire is the most trusted insurance software platform in the industry. It provides a modern approach to building next-generation IT platforms for core insurance processes including policy administration, billing, and claims management. It helps insurers streamline operations, enhance customer experience, and improve efficiency.",
    },
    {
      question: "What types of Guidewire services do you offer?",
      answer:
        "We offer comprehensive Guidewire services including implementation, cloud migration, QA & testing, managed services, consulting, and digital portal development. Our services span the entire project lifecycle from assessment to ongoing support and optimization.",
    },
    {
      question: "How long does a typical Guidewire implementation take?",
      answer:
        "Implementation timelines vary based on project scope and complexity. However, our agile delivery model with on-site or offshore teams helps reduce implementation time by 30-40% compared to traditional approaches, enabling faster go-to-market for insurance products.",
    },
    {
      question: "What are the benefits of migrating to Guidewire Cloud?",
      answer:
        "Migrating to Guidewire Cloud offers several benefits including reduced infrastructure costs, automatic updates and patches, improved scalability, enhanced security, and faster time-to-market for new features. We handle the entire migration process from discovery to post-cutover support.",
    },
    {
      question: "Do you provide ongoing support after implementation?",
      answer:
        "Yes, we provide comprehensive managed services including maintenance, monitoring, support, and continuous optimization. Our team ensures your Guidewire platform runs smoothly and evolves with your business needs.",
    },
    {
      question: "What makes CodeCraftsmen different from other Guidewire partners?",
      answer:
        "We combine deep technical expertise with domain knowledge in insurance. Our team has extensive experience across multiple Guidewire products and lines of business. We use frameworks and accelerators to fast-track implementations while reducing costs, and we maintain long-term relationships focused on client satisfaction.",
    },
  ];

  return (
    <section id="faq" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6" />
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Find answers to common questions about our Guidewire services
          </p>
        </div>

        <div className="max-w-4xl mx-auto animate-fade-in">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card rounded-xl px-6 shadow-soft border-border"
              >
                <AccordionTrigger className="text-left text-lg font-semibold hover:text-primary transition-smooth py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
