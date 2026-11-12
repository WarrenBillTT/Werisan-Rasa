import { useState } from "react";
import Reveal from "./Reveal";
import { islands } from "../data/islands";
import type { CSSVars } from "../types";
import plumLeft from "../assets/plum-left.webp";
import mtnC from "../assets/mtn-c.webp";
import "./RegionExplorer.css";

export default function RegionExplorer() {
  const [activeId, setActiveId] = useState(islands[0].id);
  const island = islands.find((item) => item.id === activeId) ?? islands[0];
  const style: CSSVars = { "--accent": island.accent };

  return (
    <section id="nusantara" className="explorer">
      {/* Ornamen Alam: Ranting Pohon Plum di Kiri & Gunung di Kanan */}
      <img className="explorer__plum blend" src={plumLeft} alt="" aria-hidden="true" />
      <img className="explorer__mtn blend" src={mtnC} alt="" aria-hidden="true" />

      <div className="container">
        <Reveal className="explorer__head">
          <span className="eyebrow">Jelajah Nusantara</span>
          <h2 className="section-title">Lima pulau, lima bentang budaya dan rasa.</h2>
        </Reveal>

        <div className="explorer__tabs" role="tablist" aria-label="Pilih pulau Nusantara">
          {islands.map((item) => (
            <button
              key={item.id}
              id={`tab-${item.id}`}
              role="tab"
              type="button"
              aria-selected={item.id === activeId}
              aria-controls="island-panel"
              className={`explorer__tab ${item.id === activeId ? "is-active" : ""}`}
              onClick={() => setActiveId(item.id)}
            >
              {item.name}
            </button>
          ))}
        </div>

        <div
          id="island-panel"
          role="tabpanel"
          aria-labelledby={`tab-${island.id}`}
          className="explorer__spread"
          style={style}
          key={island.id}
        >
          {/* Kolom Kiri: Esensi & Fakta Identitas Pulau */}
          <div className="explorer__col-identity">
            <span className="explorer__tagline">{island.tagline}</span>
            <h3 className="explorer__island-name">Pulau {island.name}</h3>
            <p className="explorer__essence">{island.essence}</p>

            <div className="explorer__facts">
              <div className="explorer__fact">
                <span className="explorer__fact-label">Rempah Utama</span>
                <span className="explorer__fact-val">{island.spices}</span>
              </div>
              <div className="explorer__fact">
                <span className="explorer__fact-label">Karakter Rasa</span>
                <span className="explorer__fact-val">{island.flavor}</span>
              </div>
              <div className="explorer__fact">
                <span className="explorer__fact-label">Tradisi Meja</span>
                <span className="explorer__fact-val">{island.tradition}</span>
              </div>
            </div>
          </div>

          {/* Kolom Kanan: 3 Narasi Editorial Terpadu (Bukan Kotak AI Slop) */}
          <div className="explorer__col-narratives">
            {island.traits.map((trait) => (
              <article key={trait.title} className="explorer__narrative-block">
                <div className="explorer__narrative-header">
                  <span className="explorer__narrative-badge">{trait.category}</span>
                  <h4 className="explorer__narrative-title">{trait.title}</h4>
                </div>
                <p className="explorer__narrative-text">{trait.text}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
