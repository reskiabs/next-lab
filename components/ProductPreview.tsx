import Image from "next/image";

export default function ProductPreview() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:flex lg:gap-16 lg:items-center">
        <div className="flex-1">
          <h2 className="text-3xl font-bold text-gray-900">
            Powerful Dashboard
          </h2>

          <p className="mt-6 text-gray-600 max-w-xl">
            Visualize your product analytics, monitor performance, and scale
            your application with ease.
          </p>

          <button className="mt-8 rounded-xl bg-indigo-600 px-6 py-3 text-white font-semibold hover:bg-indigo-500">
            Explore Features
          </button>
        </div>

        <div className="flex-1 mt-12 lg:mt-0">
          <Image
            src="/cra.jpg"
            alt="dashboard"
            width={900}
            height={600}
            className="rounded-2xl shadow-xl border"
          />
        </div>
      </div>
    </section>
  );
}
