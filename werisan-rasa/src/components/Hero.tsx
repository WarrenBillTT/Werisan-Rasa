import { useEffect, useRef } from "react";
import type { CSSVars } from "../types";
import "./Hero.css";

import istiqlal from "../assets/istiqlal.webp";
import monas from "../assets/monas.webp";
import gedungSate from "../assets/gedung-sate.webp";
import jamGadang from "../assets/jam-gadang.webp";
import lawangSewu from "../assets/lawang-sewu.webp";
import garuda from "../assets/garuda.webp";
import map from "../assets/map.webp";
import borobudur from "../assets/borobudur.webp";
import plumLeft from "../assets/plum-left.webp";
import plumRight from "../assets/plum-right.webp";
import logo from "../assets/logo.webp";
import mtnA from "../assets/mtn-a.webp";
import mtnB from "../assets/mtn-b.webp";
import mtnC from "../assets/mtn-c.webp";
import mtnD from "../assets/mtn-d.webp";
import birds from "../assets/birds.webp";

interface Layer {
  src: string;
  alt: string;
  left: number;
  top: number;
  width: number;
  speed: number;
  delay: number;
  className?: string;
}

const skyline: Layer[] = [
  { src: istiqlal, alt: "Masjid Istiqlal, Jakarta", left: 26.5, top: 15.7, width: 50, speed: 0.1, delay: 0.1 },
  { src: monas, alt: "Monumen Nasional, Jakarta", left: 53, top: -5.8, width: 39.5, speed: 0.08, delay: 0.2 },
  { src: gedungSate, alt: "Gedung Sate, Bandung", left: 57, top: 20.7, width: 52.5, speed: 0.05, delay: 0.3 },
  { src: jamGadang, alt: "Jam Gadang, Bukittinggi", left: 5, top: 3, width: 24.5, speed: 0.06, delay: 0.25 },
  { src: lawangSewu, alt: "Lawang Sewu, Semarang", left: -19, top: 26, width: 63.5, speed: 0.03, delay: 0.35 },
  { src: garuda, alt: "Garuda Wisnu", left: 35, top: 28.8, width: 31.5, speed: 0.02, delay: 0.45 },
  { src: map, alt: "Peta Nusantara", left: 35.5, top: 56.7, width: 29, speed: 0.02, delay: 0.6, className: "layer--map" },
  { src: borobudur, alt: "", left: -107.5, top: 54.5, width: 105, speed: 0, delay: 0.5, className: "layer--flip" },
  { src: borobudur, alt: "", left: 102.5, top: 54.5, width: 105, speed: 0, delay: 0.5, className: "layer--flip" },
  { src: borobudur, alt: "Candi Borobudur", left: -2.5, top: 54.5, width: 105, speed: 0, delay: 0.5 },
  { src: plumLeft, alt: "", left: -2, top: 33, width: 25, speed: -0.02, delay: 0.7 },
  { src: plumRight, alt: "", left: 79, top: 30.5, width: 23, speed: -0.02, delay: 0.7 },
];

interface Deco {
  src: string;
  left: number;
  top: number;
  width: number;
  speed: number;
  delay: number;
}

const decos: Deco[] = [
  { src: mtnD, left: -3, top: 7, width: 13, speed: 0.22, delay: 0 },
  { src: mtnC, left: 91, top: 6, width: 13, speed: 0.22, delay: 0 },
  { src: mtnB, left: -2, top: 31, width: 22, speed: 0.16, delay: 0.05 },
  { src: mtnA, left: 71, top: 32, width: 19, speed: 0.16, delay: 0.05 },
  { src: birds, left: 20, top: 17, width: 14, speed: 0.3, delay: 0.9 },
];

function boxStyle(l: { left: number; top: number; width: number; speed: number; delay: number }): CSSVars {
  return {
    left: `${l.left}%`,
    top: `${l.top}%`,
    width: `${l.width}%`,
    "--speed": l.speed,
    "--d": `${l.delay}s`,
  };
}

export default function Hero() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let frame = 0;
    const update = () => {
      frame = 0;
      const y = window.scrollY;
      if (y < window.innerHeight * 1.5) el.style.setProperty("--py", String(y));
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <section id="beranda" className="hero" ref={ref}>
      {decos.map((d, i) => (
        <img
          key={i}
          className="layer layer--deco"
          src={d.src}
          alt=""
          aria-hidden="true"
          draggable={false}
          style={{ ...boxStyle(d), position: "absolute" }}
        />
      ))}

      <div className="skyline">
        {skyline.map((l, i) => (
          <img
            key={`${l.src}-${i}`}
            className={`layer ${l.className ?? ""}`.trim()}
            src={l.src}
            alt={l.alt}
            aria-hidden={l.alt === "" ? true : undefined}
            draggable={false}
            style={boxStyle(l)}
          />
        ))}

        <h1 className="hero__logo" style={{ left: "31.5%", top: "-7%", width: "37%" }}>
          <img className="layer-in" src={logo} alt="Wérisan Rasa" draggable={false} />
        </h1>

        <p className="hero__est">Est. 2026</p>
      </div>
    </section>
  );
}
