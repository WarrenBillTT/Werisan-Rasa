import { useMemo, useState } from "react";
import Reveal from "./Reveal";
import { regions } from "../data/regions";
import type { CSSVars } from "../types";
import "./Menu.css";

const ALL = "semua";

export default function Menu() {
  const [filter, setFilter] = useState<string>(ALL);

  const dishes = useMemo(
    () =>
      regions
        .filter((r) => filter === ALL || r.id === filter)
        .flatMap((r) => r.dishes.map((d) => ({ ...d, region: r }))),
    [filter],
  );

  return (
    <section id="hidangan" className="menu">
      <div className="container">
        <Reveal className="menu__head">
          <span className="eyebrow">Hidangan Pilihan</span>
          <h2 className="section-title">Dari dapur-dapur Nusantara.</h2>
        </Reveal>

        <div className="menu__filters" role="group" aria-label="Saring hidangan menurut kota">
          <button
            type="button"
            className={`menu__chip ${filter === ALL ? "is-active" : ""}`}
            aria-pressed={filter === ALL}
            onClick={() => setFilter(ALL)}
          >
            Semua
          </button>
          {regions.map((r) => (
            <button
              key={r.id}
              type="button"
              className={`menu__chip ${filter === r.id ? "is-active" : ""}`}
              aria-pressed={filter === r.id}
              onClick={() => setFilter(r.id)}
            >
              {r.city}
            </button>
          ))}
        </div>

        <ul className="menu__grid">
          {dishes.map((dish) => {
            const style: CSSVars = { "--accent": dish.region.accent };
            return (
              <li key={`${dish.region.id}-${dish.name}`} className="menu__card" style={style}>
                <span className="menu__region">{dish.region.city}</span>
                <h3>{dish.name}</h3>
                <p>{dish.description}</p>
                <div className="menu__tags">
                  {dish.tags.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
