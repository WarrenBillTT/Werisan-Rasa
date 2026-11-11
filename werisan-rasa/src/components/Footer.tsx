import borobudur from "../assets/borobudur.webp";
import logo from "../assets/logo.webp";
import "./Footer.css";

const links = [
  { href: "#tentang", label: "Tentang" },
  { href: "#nusantara", label: "Nusantara" },
  { href: "#hidangan", label: "Hidangan" },
  { href: "#kontak", label: "Kontak" },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <img className="footer__logo blend" src={logo} alt="Wérisan Rasa" />
        <nav className="footer__links" aria-label="Navigasi footer">
          {links.map((l) => (
            <a key={l.href} href={l.href}>
              {l.label}
            </a>
          ))}
        </nav>
        <p className="footer__copy">&copy; 2026 Wérisan Rasa. Merawat warisan, merayakan rasa.</p>
      </div>
      <img className="footer__band blend" src={borobudur} alt="" aria-hidden="true" />
    </footer>
  );
}
