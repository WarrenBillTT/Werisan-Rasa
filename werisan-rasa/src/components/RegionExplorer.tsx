import { useState } from "react";
import Reveal from "./Reveal";
import { regions } from "../data/regions";
import type { CSSVars } from "../types";
import mtnB from "../assets/mtn-b.webp";
import plumLeft from "../assets/plum-left.webp";
import "./RegionExplorer.css";

export default function RegionExplorer() {
  const [activeId, setActiveId] = useState(regions[0].id);
  const region = regions.find((r) => r.id === activeId) ?? regions[0];
  const style: CSSVars = { "--accent": region.accent };

  return (
    <section id="nusantara" className="explorer">
      <img className="explorer__plum blend" src={plumLeft} alt="" aria-hidden="true" />
      <div className="container">
        <Reveal className="explorer__head">
          <span className="eyebrow">Jelajah Nusantara</span>
          <h2 className="section-title">Lima kota, lima cara merawat rasa.</h2>
          <p className="section-lead">
            Setiap daerah punya landmark yang kita kenal dan dapur yang kita rindukan. Pilih satu
            kota untuk melihat hidangan yang kami hidupkan kembali.
          </p>
        </Reveal>

        <div className="explorer__tabs" role="tablist" aria-label="Pilih kota">
          {regions.map((r) => (
            <button
              key={r.id}
              id={`tab-${r.id}`}
              role="tab"
              type="button"
              aria-selected={r.id === activeId}
              aria-controls="region-panel"
              className={`explorer__tab ${r.id === activeId ? "is-active" : ""}`}
              onClick={() => setActiveId(r.id)}
            >
              {r.city}
            </button>
          ))}
        </div>

        <div
          id="region-panel"
          role="tabpanel"
          aria-labelledby={`tab-${region.id}`}
          className="explorer__panel"
          style={style}
        >
          <div className="explorer__art">
            <div className="explorer__glow" />
            <img className="explorer__mist blend" src={mtnB} alt="" aria-hidden="true" />
            <img
              key={region.id}
              className={`explorer__landmark blend ${region.id === "borobudur" ? "explorer__landmark--band" : ""}`.trim()}
              src={region.image}
              alt={region.landmark}
            />
          </div>

          <div className="explorer__info" key={`info-${region.id}`}>
            <p className="explorer__place">
              {region.landmark} · {region.province}
            </p>
            <h3 className="explorer__city">{region.city}</h3>
            <p className="explorer__intro">{region.intro}</p>

            <ul className="explorer__dishes">
              {region.dishes.map((dish) => (
                <li key={dish.name}>
                  <h4>{dish.name}</h4>
                  <p>{dish.description}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
