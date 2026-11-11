import Reveal from "./Reveal";
import garuda from "../assets/garuda.webp";
import mtnE from "../assets/mtn-e.webp";
import "./About.css";

const pillars = [
  {
    title: "Akar",
    text: "Setiap resep ditelusuri sampai ke asalnya, lalu dicatat dengan setia agar tidak hilang dibawa waktu.",
  },
  {
    title: "Rempah",
    text: "Bumbu diracik dari awal dengan sabar. Tidak ada jalan pintas untuk rasa yang dalam.",
  },
  {
    title: "Rasa",
    text: "Hidangan disajikan hangat dan jujur, seperti dari dapur keluarga yang menyambut siapa saja.",
  },
];

export default function About() {
  return (
    <section id="tentang" className="about">
      <div className="container about__grid">
        <div className="about__art">
          <img className="about__mist blend" src={mtnE} alt="" aria-hidden="true" />
          <div className="about__halo" />
          <img className="about__figure blend" src={garuda} alt="Garuda Wisnu dalam gaya cat air" />
        </div>

        <div className="about__copy">
          <Reveal>
            <span className="eyebrow">Tentang Kami</span>
            <h2 className="section-title">Warisan yang dirasakan, bukan sekadar dikenang.</h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="section-lead">
              Wérisan Rasa lahir dari satu keyakinan sederhana: setiap hidangan Nusantara membawa
              cerita tentang tanah, tangan, dan keluarga yang merawatnya. Nama kami berpijak pada
              kata warisan, sesuatu yang diteruskan dari generasi ke generasi, dan rasa, bahasa
              paling jujur untuk menyampaikannya.
            </p>
            <p className="section-lead">
              Kami menjelajahi dapur-dapur dari Bukittinggi hingga Magelang untuk menyajikan
              kembali resep-resep lama dengan cara yang hormat pada asalnya dan hangat bagi lidah
              hari ini.
            </p>
          </Reveal>

          <ul className="about__pillars">
            {pillars.map((p, i) => (
              <li key={p.title}>
                <Reveal delay={200 + i * 120}>
                  <h3>{p.title}</h3>
                  <p>{p.text}</p>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
