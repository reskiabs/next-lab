export default function Footer() {
  return (
    <footer className="border-t bg-white">
      <div className="mx-auto max-w-7xl px-6 py-10 flex flex-col md:flex-row justify-between text-sm text-gray-500">
        <p>© 2026 Next Tech</p>

        <div className="flex gap-6 mt-4 md:mt-0">
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
          <a href="#">Twitter</a>
        </div>
      </div>
    </footer>
  );
}
