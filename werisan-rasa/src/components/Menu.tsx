import { useState } from "react";
import Reveal from "./Reveal";
import { menuTiers } from "../data/menuTiers";
import plumRight from "../assets/plum-right.webp";
import mtnA from "../assets/mtn-a.webp";
import "./Menu.css";

export default function Menu() {
  const [activeId, setActiveId] = useState<string>(menuTiers[0].id);
  const currentTier = menuTiers.find((t) => t.id === activeId) ?? menuTiers[0];

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

        {/* Opsi Pengganti Kelas Menu (1 Baris Penuh dari Kiri sampai Kanan Tanpa Gap) */}
        <Reveal delay={60}>
          <div className="menu__tier-nav" role="tablist" aria-label="Pilih kelas hidangan">
            {menuTiers.map((tier, idx) => (
              <button
                key={tier.id}
                type="button"
                role="tab"
                aria-selected={tier.id === activeId}
                className={`menu__tier-btn ${tier.id === activeId ? "is-active" : ""}`}
                onClick={() => setActiveId(tier.id)}
              >
                <span className="menu__tier-roman">{["I", "II", "III"][idx]}</span>
                <span className="menu__tier-label">{tier.name}</span>
                <span className="menu__tier-dot" aria-hidden="true">·</span>
                <span className="menu__tier-level">{tier.level}</span>
              </button>
            ))}
          </div>
        </Reveal>

        <Reveal delay={120} className="menu__showcase">
          {/* Kolom Kiri: Frame Foto Tunggal & Rincian Kemasan */}
          <div className="menu__visual-col">
            <div className="menu__frame">
              <img
                key={currentTier.id}
                className="menu__image"
                src={currentTier.image}
                alt={currentTier.imageAlt}
              />
              <span className={`menu__frame-badge menu__frame-badge--${currentTier.id}`}>
                {currentTier.name}
              </span>
            </div>

            {/* Rincian Spesifikasi Kemasan yang Mengisi Ruang Bawah Secara Bermanfaat */}
            <div className="menu__specs" key={`specs-${currentTier.id}`}>
              <div className="menu__spec-item">
                <span className="menu__spec-label">Dimensi Kotak</span>
                <span className="menu__spec-val">{currentTier.specs.dimension}</span>
              </div>
              <div className="menu__spec-item">
                <span className="menu__spec-label">Material Kemasan</span>
                <span className="menu__spec-val">{currentTier.specs.material}</span>
              </div>
              <div className="menu__spec-item">
                <span className="menu__spec-label">Isi Hantaran</span>
                <span className="menu__spec-val">{currentTier.specs.capacity}</span>
              </div>
            </div>
          </div>

          {/* Kolom Kanan: Detail Narasi */}
          <div className="menu__details-wrap">
            <div className="menu__content-body" key={currentTier.id}>
              <div className="menu__meta">
                <span className="menu__category">{currentTier.badge}</span>
                <span className="menu__tagline">&mdash; {currentTier.tagline}</span>
              </div>

              <h3 className="menu__dish-title">{currentTier.dishTitle}</h3>
              <p className="menu__dish-lead">{currentTier.dishLead}</p>

              <div className="menu__traits">
                {currentTier.traits.map((trait) => (
                  <div key={trait.label} className="menu__trait-item">
                    <span className="menu__trait-label">{trait.label}</span>
                    <p className="menu__trait-text">{trait.text}</p>
                  </div>
                ))}
              </div>

              <p className="menu__note">{currentTier.note}</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
