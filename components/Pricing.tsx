export default function Pricing() {
  const plans = [
    {
      name: "Starter",
      price: "$0",
    },
    {
      name: "Pro",
      price: "$29",
    },
    {
      name: "Enterprise",
      price: "Custom",
    },
  ];

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <h2 className="text-center text-3xl font-bold text-gray-900">
          Pricing
        </h2>

        <div className="mt-16 grid md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div key={plan.name} className="rounded-2xl border p-8 shadow-sm">
              <h3 className="text-lg font-semibold">{plan.name}</h3>

              <p className="mt-4 text-3xl font-bold">{plan.price}</p>

              <button className="mt-6 w-full rounded-xl bg-indigo-600 px-6 py-3 text-white">
                Choose Plan
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
