import Reveal from "./Reveal";
import mtnD from "../assets/mtn-d.webp";
import plumRight from "../assets/plum-right.webp";
import "./Contact.css";

export default function Contact() {
  return (
    <section id="kontak" className="contact">
      {/* Ornamen Alam: Gunung di Sisi Kiri & Ranting Plum di Sisi Kanan */}
      <img className="contact__mtn blend" src={mtnD} alt="" aria-hidden="true" />
      <img className="contact__plum blend" src={plumRight} alt="" aria-hidden="true" />

      <div className="container contact__inner">
        <Reveal>
          <span className="contact__eyebrow">HUBUNGI KAMI</span>
        </Reveal>

        <Reveal delay={80}>
          <h2 className="contact__title">Mari Bertegur Sapa</h2>
        </Reveal>

        <Reveal delay={160} className="contact__actions">
          <a
            className="contact__btn contact__btn--wa"
            href="https://wa.me/6281234567890"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Hubungi via WhatsApp"
          >
            <svg
              className="contact__icon"
              viewBox="0 0 24 24"
              width="20"
              height="20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M20.52 3.48A11.93 11.93 0 0 0 12.06 0C5.46 0 .09 5.37.09 11.97c0 2.11.55 4.17 1.6 5.99L0 24l6.23-1.63a11.9 11.9 0 0 0 5.83 1.51h.01c6.6 0 11.97-5.37 11.97-11.97 0-3.2-1.25-6.21-3.52-8.43zM12.07 21.9c-1.8 0-3.57-.48-5.11-1.4l-.37-.22-3.79.99 1.01-3.69-.24-.38a9.94 9.94 0 0 1-1.53-5.23c0-5.5 4.48-9.98 9.99-9.98 2.67 0 5.18 1.04 7.07 2.93a9.93 9.93 0 0 1 2.92 7.06c0 5.51-4.48 10-10 10zm5.48-7.48c-.3-.15-1.78-.88-2.06-.98-.28-.1-.48-.15-.68.15-.2.3-.78.98-.95 1.18-.18.2-.35.23-.65.08-.3-.15-1.27-.47-2.42-1.5-.9-.8-1.5-1.78-1.68-2.08-.18-.3-.02-.46.13-.61.14-.14.3-.35.45-.53.15-.17.2-.3.3-.5.1-.2.05-.38-.03-.53-.07-.15-.68-1.63-.93-2.24-.24-.58-.49-.5-.68-.51l-.58-.01c-.2 0-.53.07-.8.38-.28.3-1.05 1.03-1.05 2.51s1.08 2.91 1.23 3.11c.15.2 2.12 3.24 5.14 4.54.72.31 1.28.5 1.72.64.72.23 1.38.2 1.9.12.58-.09 1.78-.73 2.03-1.43.25-.7.25-1.31.18-1.43-.08-.12-.28-.2-.58-.35z" />
            </svg>
            <span>WHATSAPP</span>
          </a>

          <a
            className="contact__btn contact__btn--ig"
            href="https://instagram.com/werisanrasa"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Kunjungi Instagram Wérisan Rasa"
          >
            <svg
              className="contact__icon"
              viewBox="0 0 24 24"
              width="20"
              height="20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
            <span>INSTAGRAM</span>
          </a>
        </Reveal>

        <Reveal delay={240}>
          <p className="contact__caption">
            RESERVASI MEJA & LAYANAN KATERING KHUSUS — EST. 2026
          </p>
        </Reveal>
      </div>
    </section>
  );
}
