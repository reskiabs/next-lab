import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* background gradient */}
      <div className="absolute inset-0 -z-10 bg-linear-to-b from-slate-50 to-white" />

      <div className="mx-auto max-w-7xl px-6 py-24 lg:flex lg:items-center lg:gap-16">
        {/* LEFT CONTENT */}
        <div className="flex-1 text-center lg:text-left">
          <span className="inline-block rounded-full bg-indigo-50 px-4 py-1 text-sm font-medium text-indigo-600">
            🚀 New Platform
          </span>

          <h1 className="mt-6 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Build Modern Web
            <span className="block text-indigo-600">Faster with Next.js</span>
          </h1>

          <p className="mt-6 text-lg text-gray-600 max-w-xl mx-auto lg:mx-0">
            Create high-performance applications using hybrid rendering, modern
            tooling, and scalable architecture.
          </p>

          {/* CTA */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button className="rounded-xl bg-indigo-600 px-6 py-3 text-white font-semibold shadow hover:bg-indigo-500 transition">
              Get Started
            </button>

            <button className="rounded-xl border border-gray-300 px-6 py-3 font-semibold hover:bg-gray-50 transition">
              Live Demo
            </button>
          </div>

          {/* social proof */}
          <div className="mt-10 text-sm text-gray-500">
            Trusted by engineers from
            <span className="ml-2 font-semibold text-gray-700">
              Google · Vercel · Stripe
            </span>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex-1 mt-16 lg:mt-0">
          <div className="relative mx-auto max-w-xl">
            {/* glow */}
            <div className="absolute -inset-4 bg-linear-to-r from-indigo-200 via-purple-200 to-pink-200 blur-3xl opacity-30" />

            <Image
              src="/cra.jpg"
              alt="Product Preview"
              width={900}
              height={600}
              className="relative rounded-2xl shadow-2xl border"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
