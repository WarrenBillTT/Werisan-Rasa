import Reveal from "./Reveal";
import plumRight from "../assets/plum-right.webp";
import mtnA from "../assets/mtn-a.webp";
import "./Menu.css";

// Dapat diisi path gambar kue bila sudah tersedia (misal: import kueImg from "../assets/kue.webp")
const featuredImage: string | null = null;

export default function Menu() {
  return (
    <section id="hidangan" className="menu">
      {/* Ornamen Alam: Ranting Plum di Kanan Atas & Gunung di Kanan Bawah */}
      <img className="menu__plum blend" src={plumRight} alt="" aria-hidden="true" />
      <img className="menu__mtn blend" src={mtnA} alt="" aria-hidden="true" />

      <div className="container">
        <Reveal className="menu__head">
          <span className="eyebrow">Hidangan Pilihan</span>
          <h2 className="section-title">Kudapan Istimewa Warisan Nusantara</h2>
        </Reveal>

        <Reveal delay={100} className="menu__showcase">
          {/* Frame Foto Hidangan (Bersih, Arsitektural, Bukan AI Slop) */}
          <div className="menu__frame-wrap">
            <div className="menu__frame">
              {featuredImage ? (
                <img
                  className="menu__image"
                  src={featuredImage}
                  alt="Kue Tradisional Nusantara"
                />
              ) : (
                <div className="menu__placeholder">
                  <span className="menu__placeholder-label">Foto Hidangan Daerah</span>
                  <span className="menu__placeholder-hint">Siap menampilkan sajian pilihan</span>
                </div>
              )}
            </div>
          </div>

          {/* Narasi Cerita & Karakteristik Kue Daerah */}
          <div className="menu__details-wrap">
            <span className="menu__category">Resep Pusaka Daerah</span>
            <h3 className="menu__dish-title">Kue Lumpur Pandan Gula Aren</h3>
            <p className="menu__dish-lead">
              Kudapan klasik bertekstur selembut sutra yang dipanggang perlahan di atas cetakan
              kuningan bertutup bara arang. Menghadirkan perpaduan sari perasan daun pandan suji segar,
              gurih kentalnya santan kelapa tua, dan lelehan gula aren organik yang meleleh hangat.
            </p>

            <div className="menu__traits">
              <div className="menu__trait-item">
                <span className="menu__trait-label">Bahan Utama</span>
                <p className="menu__trait-text">
                  Tepung beras pulen, daun pandan suji kebun, santan kelapa murni, dan gula aren organik.
                </p>
              </div>

              <div className="menu__trait-item">
                <span className="menu__trait-label">Karakter Rasa</span>
                <p className="menu__trait-text">
                  Manis legit alami dengan gurih santan yang seimbang, aroma pandan semerbak, dan tekstur lumer di lidah.
                </p>
              </div>

              <div className="menu__trait-item">
                <span className="menu__trait-label">Tradisi Pembuatan</span>
                <p className="menu__trait-text">
                  Dipanggang perlahan dengan bara arang kayu untuk mengunci kelembutan dan aroma wangi panggangan.
                </p>
              </div>
            </div>

            <p className="menu__note">
              Dibuat segar setiap hari · Tanpa bahan pengawet & pemanis buatan
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
