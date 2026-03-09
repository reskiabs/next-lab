export default function Navbar() {
  return (
    <header className="border-b bg-white">
      <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
        <div className="text-lg font-semibold text-gray-900">Next Tech</div>

        <nav className="hidden md:flex items-center gap-8 text-sm text-gray-600">
          <a href="#">Features</a>
          <a href="#">Pricing</a>
          <a href="#">Docs</a>
          <a href="#">Blog</a>
        </nav>

        <button className="rounded-xl bg-indigo-600 px-5 py-2 text-white text-sm font-medium hover:bg-indigo-500">
          Get Started
        </button>
      </div>
    </header>
  );
}
