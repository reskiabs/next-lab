export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Frontend Engineer",
      quote: "This platform helped us ship faster than ever.",
    },
    {
      name: "David Kim",
      role: "Tech Lead",
      quote: "Performance and developer experience are amazing.",
    },
    {
      name: "Michael Tan",
      role: "Startup Founder",
      quote: "Scaling our product became much easier.",
    },
  ];

  return (
    <section className="bg-slate-50">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <h2 className="text-center text-3xl font-bold text-gray-900">
          What Developers Say
        </h2>

        <div className="mt-16 grid md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div key={t.name} className="rounded-2xl bg-white p-6 shadow">
              <p className="text-gray-600">“{t.quote}”</p>

              <div className="mt-6">
                <p className="font-semibold text-gray-900">{t.name}</p>
                <p className="text-sm text-gray-500">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
