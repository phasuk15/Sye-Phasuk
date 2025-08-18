import ScrollLink from "../components/ScrollLink";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-800 text-white p-4 flex justify-between items-center shadow-lg z-50">
      <a href="/" className="text-2xl font-bold">Herb <span className="text-xl">and</span> Spice</a>
      <div className="space-x-6 font-pix">
        <ScrollLink href="#home">Home</ScrollLink>
        <ScrollLink href="#menu">Menu</ScrollLink>
        <ScrollLink href="#booking">Booking</ScrollLink>
        <ScrollLink href="#contact">Contact</ScrollLink>
      </div>
    </nav>
  );
}