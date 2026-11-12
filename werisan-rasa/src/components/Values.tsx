import Reveal from "./Reveal";
import plumRight from "../assets/plum-right.webp";
import mtnC from "../assets/mtn-c.webp";
import "./Values.css";

const values = [
  {
    no: "I",
    title: "Setia pada asal",
    text: "Kami menghormati cara lama dan tidak tergesa mengubahnya. Perubahan hanya hadir bila rasa asli tetap terjaga.",
  },
  {
    no: "II",
    title: "Hangat di meja",
    text: "Makan adalah cara paling tua untuk berkumpul. Setiap sajian dibuat agar orang mau duduk lebih lama.",
  },
  {
    no: "III",
    title: "Terbuka bercerita",
    text: "Di balik setiap hidangan ada nama kota, tangan, dan musim. Kami senang menceritakannya kepada siapa pun yang bertanya.",
  },
];

export default function Values() {
  return (
    <section id="cerita" className="values">
      {/* Ornamen Alam: Ranting Plum di Kanan Atas & Siluet Gunung di Kiri Bawah */}
      <img className="values__plum blend" src={plumRight} alt="" aria-hidden="true" />
      <img className="values__mtn blend" src={mtnC} alt="" aria-hidden="true" />

      <div className="container">
        <Reveal className="values__quote">
          <p>&ldquo;Rasa adalah cara paling pelan untuk pulang.&rdquo;</p>
          <span className="eyebrow">Wérisan Rasa</span>
        </Reveal>

        <ul className="values__list">
          {values.map((v, i) => (
            <li key={v.no}>
              <Reveal delay={i * 130}>
                <span className="values__no">{v.no}</span>
                <h3>{v.title}</h3>
                <p>{v.text}</p>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
