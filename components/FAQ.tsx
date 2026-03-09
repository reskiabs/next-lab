export default function FAQ() {
  const faqs = [
    {
      q: "What is hybrid rendering?",
      a: "Hybrid rendering combines SSR, SSG, ISR and CSR.",
    },
    {
      q: "Is Next.js SEO friendly?",
      a: "Yes, Next.js supports server rendering for SEO.",
    },
  ];

  return (
    <section className="bg-slate-50">
      <div className="mx-auto max-w-3xl px-6 py-24">
        <h2 className="text-center text-3xl font-bold text-gray-900">
          Frequently Asked Questions
        </h2>

        <div className="mt-12 space-y-8">
          {faqs.map((faq) => (
            <div key={faq.q}>
              <h3 className="font-semibold text-gray-900">{faq.q}</h3>

              <p className="mt-2 text-gray-600">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
