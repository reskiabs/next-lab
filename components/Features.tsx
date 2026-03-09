export default function Features() {
  const features = [
    {
      title: "Hybrid Rendering",
      desc: "Combine SSR, SSG, ISR and CSR for maximum performance.",
    },
    {
      title: "Modern Architecture",
      desc: "Build scalable applications with clean structure.",
    },
    {
      title: "Optimized Images",
      desc: "Automatic image optimization and lazy loading.",
    },
    {
      title: "SEO Ready",
      desc: "Pre-rendered HTML for better search ranking.",
    },
  ];

  return (
    <section className="bg-slate-50">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900">
            Powerful Features
          </h2>
          <p className="mt-4 text-gray-600">
            Everything you need to build modern web applications.
          </p>
        </div>

        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-2xl bg-white p-6 shadow hover:shadow-lg transition"
            >
              <h3 className="font-semibold text-gray-900">{feature.title}</h3>

              <p className="mt-3 text-sm text-gray-600">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
