import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "motion/react";
import "./Hero.css";

import background from "../assets/background.webp";
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
import mtnF from "../assets/mtn-f.webp";
import birds from "../assets/birds.webp";

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Spring physics persis seperti di Portfolio-V1 (damping: 50, stiffness: 100)
  const smooth = useSpring(scrollYProgress, {
    damping: 50,
    stiffness: 100,
    mass: 1,
  });

  // Parallax motion transform untuk setiap kedalaman layer (Portfolio-V1 style)
  const mtnFarY = useTransform(smooth, [0, 1], ["0%", "45%"]);
  const mtnMidY = useTransform(smooth, [0, 1], ["0%", "30%"]);
  const birdsX = useTransform(smooth, [0, 1], ["0%", "-20%"]);
  const birdsY = useTransform(smooth, [0, 1], ["0%", "25%"]);

  const istiqlalY = useTransform(smooth, [0, 1], ["0%", "24%"]);
  const monasY = useTransform(smooth, [0, 1], ["0%", "18%"]);
  const jamGadangY = useTransform(smooth, [0, 1], ["0%", "16%"]);
  const lawangSewuY = useTransform(smooth, [0, 1], ["0%", "10%"]);
  const gedungSateY = useTransform(smooth, [0, 1], ["0%", "10%"]);
  const garudaY = useTransform(smooth, [0, 1], ["0%", "6%"]);
  const mapY = useTransform(smooth, [0, 1], ["0%", "6%"]);
  const plumY = useTransform(smooth, [0, 1], ["0%", "4%"]);
  const logoY = useTransform(smooth, [0, 1], ["0%", "8%"]);

  return (
    <section id="beranda" className="hero" ref={containerRef}>
      {/* Background Gambar Resmi (PASTI DI PALING BELAKANG - z-index: 0) */}
      <img
        className="hero__bg"
        src={background}
        alt=""
        aria-hidden="true"
        draggable={false}
      />

      {/* Background Decos (Gunung & Burung) */}
      {/* Kiri: 2 Gunung (mtnD jauh, mtnA sedang) */}
      <motion.img
        className="hero__deco"
        src={mtnD}
        alt=""
        aria-hidden="true"
        draggable={false}
        style={{ left: "-3%", top: "1%", width: "15%", z: -110, y: mtnFarY }}
      />
      <motion.img
        className="hero__deco"
        src={mtnA}
        alt=""
        aria-hidden="true"
        draggable={false}
        style={{ left: "-1%", top: "24%", width: "17%", z: -80, y: mtnMidY }}
      />

      {/* Kanan: 3 Gunung (dibuat lebih ke kanan agar tidak menumpuk di tengah) */}
      <motion.img
        className="hero__deco"
        src={mtnC}
        alt=""
        aria-hidden="true"
        draggable={false}
        style={{ left: "88%", top: "1%", width: "14%", z: -110, y: mtnFarY }}
      />
      <motion.img
        className="hero__deco"
        src={mtnF}
        alt=""
        aria-hidden="true"
        draggable={false}
        style={{ left: "72%", top: "20%", width: "13%", z: -85, y: mtnMidY }}
      />
      <motion.img
        className="hero__deco"
        src={mtnB}
        alt=""
        aria-hidden="true"
        draggable={false}
        style={{ left: "86%", top: "29%", width: "12%", z: -80, y: mtnMidY }}
      />

      <motion.img
        className="hero__deco"
        src={birds}
        alt=""
        aria-hidden="true"
        draggable={false}
        style={{ left: "20%", top: "16%", width: "12%", z: -60, x: birdsX, y: birdsY }}
      />

      <div className="stage">
        {/* Masjid Istiqlal: tertanam megah di balik Borobudur & Jam Gadang */}
        <motion.img
          className="layer"
          src={istiqlal}
          alt="Masjid Istiqlal, Jakarta"
          draggable={false}
          style={{ left: "18.0%", top: "33.5%", width: "61.0%", z: -55, y: istiqlalY }}
        />

        {/* Monas: di belakang Gedung Sate */}
        <motion.img
          className="layer"
          src={monas}
          alt="Monumen Nasional, Jakarta"
          draggable={false}
          style={{ left: "61.0%", top: "18.0%", width: "36.0%", z: -35, y: monasY }}
        />

        {/* Jam Gadang: pilar menyatu rapat dengan Istiqlal */}
        <motion.img
          className="layer"
          src={jamGadang}
          alt="Jam Gadang, Bukittinggi"
          draggable={false}
          style={{ left: "8.8%", top: "27.5%", width: "20.5%", z: -35, y: jamGadangY }}
        />

        {/* Lawang Sewu: dinaikkan & digeser ke kiri agar lebih tampak megah */}
        <motion.img
          className="layer"
          src={lawangSewu}
          alt="Lawang Sewu, Semarang"
          draggable={false}
          style={{ left: "-16.0%", top: "42.5%", width: "54.0%", z: 5, y: lawangSewuY }}
        />

        {/* Gedung Sate: menutup GWK hingga sisi kanan */}
        <motion.img
          className="layer"
          src={gedungSate}
          alt="Gedung Sate, Bandung"
          draggable={false}
          style={{ left: "57.0%", top: "52.0%", width: "48.0%", z: 5, y: gedungSateY }}
        />

        {/* Garuda Wisnu Kencana di tengah */}
        <motion.img
          className="layer"
          src={garuda}
          alt="Garuda Wisnu"
          draggable={false}
          style={{ left: "38.5%", top: "48.0%", width: "23.0%", z: 15, y: garudaY }}
        />

        {/* Ranting plum/sakura pembingkai kiri dan kanan */}
        <motion.img
          className="layer"
          src={plumLeft}
          alt=""
          aria-hidden="true"
          draggable={false}
          style={{ left: "-4.0%", top: "51.0%", width: "26.0%", z: 28, y: plumY }}
        />
        <motion.img
          className="layer"
          src={plumRight}
          alt=""
          aria-hidden="true"
          draggable={false}
          style={{ left: "80.0%", top: "52.0%", width: "23.0%", z: 28, y: plumY }}
        />

        {/* Candi Borobudur: digabung 2 gambar membentang penuh (base layer) */}
        <img
          className="layer"
          src={borobudur}
          alt="Candi Borobudur"
          draggable={false}
          style={{ left: "-10.0%", top: "63.0%", width: "64.0%", transform: "translate3d(0, 0, 35px)" }}
        />
        <img
          className="layer layer--flip"
          src={borobudur}
          alt=""
          aria-hidden="true"
          draggable={false}
          style={{ left: "46.0%", top: "63.0%", width: "64.0%", transform: "translate3d(0, 0, 35px)" }}
        />

        {/* Pulau Indonesia: DIPERBESAR (35%) & DITURUNKAN (68.5%) - LAYER TERDEPAN (z: 45) */}
        <motion.img
          className="layer"
          src={map}
          alt="Peta Nusantara Indonesia"
          draggable={false}
          style={{ left: "32.5%", top: "68.5%", width: "35.0%", z: 45, y: mapY }}
        />

        {/* Logo Wérisan Rasa: floating elegan tanpa efek hover kursor */}
        <motion.h1
          className="hero__logo"
          style={{ left: "38.5%", top: "16.0%", width: "23.0%", z: 50, y: logoY }}
        >
          <div className="hero__logo-float">
            <img className="layer-in" src={logo} alt="Wérisan Rasa" draggable={false} />
          </div>
        </motion.h1>

        <p className="hero__est">Est. 2026</p>
      </div>
    </section>
  );
}
