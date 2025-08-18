import ScrollLink from "../components/ScrollLink";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-800 text-white p-4 flex justify-between items-center shadow-lg z-50">
      <a href="/" className="text-2xl font-bold">Sye Phasuk</a>
      <div className="space-x-6">
        <ScrollLink href="#home">home</ScrollLink>
        <ScrollLink href="#menu">about</ScrollLink>
        <ScrollLink href="#booking">projects</ScrollLink>
        <ScrollLink href="#contact">gallery</ScrollLink>
        <ScrollLink href="#contact">essays</ScrollLink>
      </div>
    </nav>
  );
}