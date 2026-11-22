import { useState, useEffect } from "react";
import Reveal from "./Reveal";
import { menuTiers } from "../data/menuTiers";
import { useTastePassport } from "../context/TastePassportContext";
import { IconInsignia } from "./HeritageIcons";
import plumRight from "../assets/plum-right.webp";
import mtnA from "../assets/mtn-a.webp";
import "./Menu.css";

export default function Menu() {
  const [activeId, setActiveId] = useState<string>(menuTiers[0].id);
  const { unlockStamp, setSelectDishFromQuizHandler } = useTastePassport();

  const currentTier = menuTiers.find((t) => t.id === activeId) ?? menuTiers[0];

  useEffect(() => {
    // Daftarkan handler kuis agar kuis dapat memilih hidangan
    setSelectDishFromQuizHandler((dishId: string) => {
      setActiveId(dishId);
    });
  }, [setSelectDishFromQuizHandler]);

  // Buka stempel paspor kurasi saat hidangan dipilih
  useEffect(() => {
    unlockStamp(activeId);
  }, [activeId, unlockStamp]);

  return (
    <section id="hidangan" className="menu">
      {/* Ornamen Latar Alam */}
      <img className="menu__plum blend" src={plumRight} alt="" aria-hidden="true" />
      <img className="menu__mtn blend" src={mtnA} alt="" aria-hidden="true" />

      <div className="container">
        <Reveal className="menu__head">
          <span className="eyebrow">Hidangan Pilihan</span>
          <h2 className="section-title">Kudapan Istimewa Warisan Nusantara</h2>
        </Reveal>

        {/* Tab Pemilih Hidangan: Ramping & Elegan */}
        <Reveal delay={60}>
          <div className="menu__tier-nav" role="tablist" aria-label="Pilih hidangan nusantara">
            {menuTiers.map((tier, idx) => (
              <button
                key={tier.id}
                type="button"
                role="tab"
                aria-selected={tier.id === activeId}
                className={`menu__tier-btn ${tier.id === activeId ? "is-active" : ""}`}
                onClick={() => setActiveId(tier.id)}
              >
                <span className="menu__tier-roman">{["01", "02", "03"][idx]}</span>
                <span className="menu__tier-label">{tier.name}</span>
                <span className="menu__tier-dot" aria-hidden="true">·</span>
                <span className="menu__tier-level">{tier.level}</span>
              </button>
            ))}
          </div>
        </Reveal>

        {/* ====================================================================
            SHOWCASE 2-KOLOM SIMETRIS: KIRI & KANAN (TANPA FRAME KOTAK, TANPA GAP ANEH)
            ==================================================================== */}
        <div className="menu__spread" key={currentTier.id}>
          {/* Sisi Kiri: Foto Alami + Spesifikasi Meja + Meter Sensori Rasa */}
          <div className="menu__col-visual">
            <div className="menu__photo-wrap">
              <img
                className="menu__photo"
                src={currentTier.image}
                alt={currentTier.imageAlt}
              />
              <span className="menu__photo-tag">{currentTier.name}</span>
            </div>

            {/* Strip Spesifikasi Meja (Garis Hairline, Bukan Frame Kotak) */}
            <div className="menu__specs-strip">
              <div className="menu__spec-cell">
                <span className="menu__spec-label">Daerah Asal</span>
                <span className="menu__spec-val">{currentTier.specs.origin}</span>
              </div>
              <div className="menu__spec-divider" aria-hidden="true" />
              <div className="menu__spec-cell">
                <span className="menu__spec-label">Karakter Tekstur</span>
                <span className="menu__spec-val">{currentTier.specs.texture}</span>
              </div>
              <div className="menu__spec-divider" aria-hidden="true" />
              <div className="menu__spec-cell">
                <span className="menu__spec-label">Tradisi Meja</span>
                <span className="menu__spec-val">{currentTier.specs.tradition}</span>
              </div>
            </div>

            {/* Indikator Sensori Rasa (Melebur Rapi Tanpa Kotak Abu-Abu) */}
            <div className="menu__sensory">
              <div className="menu__sensory-head">
                <span className="menu__sensory-title">Karakteristik Sensori & Rasa</span>
                <span className="menu__sensory-badge">Profil Tekstur</span>
              </div>
              <div className="menu__sensory-grid">
                {currentTier.gauges.map((g) => (
                  <div key={g.label} className="menu__sensory-item">
                    <div className="menu__sensory-meta">
                      <span className="menu__sensory-name">{g.label}</span>
                      <span className="menu__sensory-pct">{g.percentage}%</span>
                    </div>
                    <div className="menu__sensory-track">
                      <div
                        className="menu__sensory-bar"
                        style={{ width: `${g.percentage}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sisi Kanan: Identitas + Narasi Inti + 3 Pilar Budaya Ringkas */}
          <div className="menu__col-info">
            <div className="menu__info-header">
              <div className="menu__meta">
                <span className="menu__badge">{currentTier.badge}</span>
                <span className="menu__tagline">&mdash; {currentTier.tagline}</span>
              </div>
              <h3 className="menu__dish-title">{currentTier.dishTitle}</h3>
              <p className="menu__lead">{currentTier.dishLead}</p>
            </div>

            {/* 3 Rincian Budaya: Ramping & Elegan dengan Garis Hairline (Bukan Frame Kotak) */}
            <div className="menu__culture-list">
              {currentTier.culturalPoints.map((pt, idx) => (
                <div key={pt.category} className="menu__culture-row">
                  <div className="menu__culture-lead">
                    <span className="menu__culture-num">0{idx + 1}</span>
                    <h4 className="menu__culture-cat">{pt.category}</h4>
                  </div>
                  <p className="menu__culture-text">{pt.text}</p>
                </div>
              ))}
            </div>

            {/* Catatan Kurasi di Bagian Bawah */}
            <div className="menu__footnote">
              <IconInsignia className="menu__footnote-icon" />
              <span className="menu__footnote-text">{currentTier.note}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
