export default function Trusted() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16 text-center">
        <p className="text-sm text-gray-500 mb-10">Trusted by teams from</p>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 text-gray-400 font-semibold">
          <span>Google</span>
          <span>Stripe</span>
          <span>Vercel</span>
          <span>Airbnb</span>
          <span>Shopify</span>
        </div>
      </div>
    </section>
  );
}
