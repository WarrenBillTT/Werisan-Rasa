import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import Reveal from "./Reveal";
import istiqlal from "../assets/istiqlal.webp";
import "./Contact.css";

interface FormState {
  nama: string;
  email: string;
  topik: string;
  pesan: string;
}

const initial: FormState = { nama: "", email: "", topik: "Pertanyaan", pesan: "" };

export default function Contact() {
  const [form, setForm] = useState<FormState>(initial);
  const [sentTo, setSentTo] = useState<string | null>(null);

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSentTo(form.nama.trim());
    setForm(initial);
  };

  return (
    <section id="kontak" className="contact">
      <div className="container contact__grid">
        <div className="contact__copy">
          <Reveal>
            <span className="eyebrow">Kontak</span>
            <h2 className="section-title">Mari berbagi meja.</h2>
            <p className="section-lead">
              Punya pertanyaan, ingin berkolaborasi, atau sekadar ingin tahu kapan kami membuka
              pintu? Tinggalkan pesan, kami akan membalasnya dengan senang hati.
            </p>
          </Reveal>
          <Reveal delay={150} className="contact__note">
            <p>
              Alamat dan jam buka akan diumumkan di sini.
              <br />
              <strong>Est. 2026</strong>
            </p>
          </Reveal>
          <img className="contact__mosque blend" src={istiqlal} alt="" aria-hidden="true" />
        </div>

        <Reveal delay={100}>
          {sentTo !== null ? (
            <div className="contact__thanks" role="status">
              <h3>Terima kasih{sentTo ? `, ${sentTo}` : ""}.</h3>
              <p>Pesan Anda sudah kami catat. Sampai jumpa di meja makan.</p>
              <button className="btn btn--ghost" type="button" onClick={() => setSentTo(null)}>
                Kirim pesan lain
              </button>
            </div>
          ) : (
            <form className="contact__form" onSubmit={onSubmit}>
              <label>
                <span>Nama</span>
                <input name="nama" type="text" required autoComplete="name" value={form.nama} onChange={onChange} />
              </label>
              <label>
                <span>Email</span>
                <input name="email" type="email" required autoComplete="email" value={form.email} onChange={onChange} />
              </label>
              <label>
                <span>Topik</span>
                <select name="topik" value={form.topik} onChange={onChange}>
                  <option>Pertanyaan</option>
                  <option>Reservasi</option>
                  <option>Kolaborasi</option>
                  <option>Lainnya</option>
                </select>
              </label>
              <label>
                <span>Pesan</span>
                <textarea name="pesan" rows={5} required value={form.pesan} onChange={onChange} />
              </label>
              <button className="btn" type="submit">
                Kirim Pesan
              </button>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}
