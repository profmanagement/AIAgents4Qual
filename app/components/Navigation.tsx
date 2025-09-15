// app/components/Navigation.tsx
export default function Navigation() {
  return (
    <nav className="bg-white shadow-sm border-b border-gray-200">
      <div className="container">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <a className="text-xl font-bold text-gray-900" href="/">
              AI Agents4Qual 2026
            </a>
          </div>
          <div className="hidden md:flex space-x-8">
            <a className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium" href="/">
              Home
            </a>
            <a className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium" href="/call-for-papers/">
              Call for Papers
            </a>
            <a className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium" href="/faq/">
              FAQ
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
