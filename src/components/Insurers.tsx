const Insurers = () => {
  const insurers = [
    { name: "Amica Mutual", logo: "AM" },
    { name: "Assurant", logo: "AS" },
    { name: "Direct Line", logo: "DL" },
    { name: "First American", logo: "FA" },
    { name: "Guardian Life", logo: "GL" },
    { name: "Sompo International", logo: "SI" },
  ];

  return (
    <section id="insurers" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Insurers We Have Served
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6" />
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Trusted by leading insurance companies worldwide
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-6xl mx-auto">
          {insurers.map((insurer, index) => (
            <div
              key={index}
              className="bg-card rounded-xl p-8 shadow-soft hover:shadow-medium transition-all hover:-translate-y-2 flex items-center justify-center animate-fade-in cursor-pointer group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-3 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-smooth">
                  <span className="text-2xl font-bold text-primary">{insurer.logo}</span>
                </div>
                <p className="text-sm font-medium text-card-foreground">{insurer.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Insurers;
