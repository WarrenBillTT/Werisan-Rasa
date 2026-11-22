import { useState } from "react";
import { useTastePassport, ALL_STAMPS, type StampIconType } from "../context/TastePassportContext";
import {
  IconBook,
  IconPrawn,
  IconSagu,
  IconSesame,
  IconSpices,
  IconTemple,
  IconScroll,
  IconCheck,
  IconLock,
  IconVolume,
  IconVolumeMute,
  IconArrowRight,
  IconClose,
  IconInsignia,
} from "./HeritageIcons";
import "./TastePassport.css";

function renderStampIcon(type: StampIconType) {
  switch (type) {
    case "prawn":
      return <IconPrawn />;
    case "sagu":
      return <IconSagu />;
    case "sesame":
      return <IconSesame />;
    case "spices":
      return <IconSpices />;
    case "temple":
      return <IconTemple />;
    case "scroll":
      return <IconScroll />;
    default:
      return <IconScroll />;
  }
}

export default function TastePassport() {
  const {
    unlockedStamps,
    isPassportOpen,
    setIsPassportOpen,
    activeToast,
    soundEnabled,
    toggleSound,
  } = useTastePassport();

  const [copied, setCopied] = useState(false);

  const totalStamps = ALL_STAMPS.length;
  const count = unlockedStamps.length;
  const progressPercent = Math.round((count / totalStamps) * 100);

  // Curatorial rank
  let rankTitle = "Kurator Mula";
  let rankTag = "Tahap Eksplorasi";
  if (count >= 5) {
    rankTitle = "Ahli Rasa Nusantara";
    rankTag = "Kurator Utama";
  } else if (count >= 3) {
    rankTitle = "Kurator Tradisi";
    rankTag = "Penikmat Pusaka";
  }

  const isRewardUnlocked = count >= 3;

  const handleCopyCode = () => {
    navigator.clipboard.writeText("WARISAN10");
    setCopied(true);
    setTimeout(() => setCopied(false), 2400);
  };

  const whatsappMessage = encodeURIComponent(
    `Halo Wérisan Rasa, saya telah menjelajahi arsip rasa Nusantara dan membuka ${count} insignia di Buku Kurasi. Saya ingin menggunakan kode kurasi WARISAN10 untuk pesanan hantaran saya.`
  );
  const waUrl = `https://wa.me/6283865038866?text=${whatsappMessage}`;

  return (
    <>
      {/* Toast Notification when newly stamped */}
      {activeToast && (
        <div
          className="passport-toast"
          role="status"
          onClick={() => setIsPassportOpen(true)}
          title="Klik untuk melihat Buku Kurasi Pusaka"
        >
          <div className="passport-toast__icon">
            {renderStampIcon(activeToast.stamp.iconType)}
          </div>
          <div className="passport-toast__body">
            <span className="passport-toast__eyebrow">Insignia Tercatat</span>
            <span className="passport-toast__title">{activeToast.stamp.title}</span>
            <span className="passport-toast__hint">
              {activeToast.stamp.subtitle} &middot; Buka Buku Kurasi &rarr;
            </span>
          </div>
        </div>
      )}

      {/* Floating Action Button */}
      <button
        type="button"
        className="passport-fab"
        onClick={() => setIsPassportOpen(true)}
        aria-label="Buka Buku Kurasi Pusaka Nusantara"
      >
        <span className="passport-fab__icon" aria-hidden="true">
          <IconBook />
        </span>
        <span className="passport-fab__text">Buku Kurasi</span>
        <span className="passport-fab__badge">
          {count}/{totalStamps} Insignia
        </span>
      </button>

      {/* Modal Passport Overlay */}
      {isPassportOpen && (
        <div
          className="passport-modal-overlay"
          onClick={(e) => {
            if (e.target === e.currentTarget) setIsPassportOpen(false);
          }}
          role="dialog"
          aria-modal="true"
          aria-label="Buku Kurasi Pusaka Nusantara"
        >
          <div className="passport-modal">
            <button
              type="button"
              className="passport-modal__close"
              onClick={() => setIsPassportOpen(false)}
              aria-label="Tutup Buku Kurasi"
            >
              <IconClose />
            </button>

            {/* Header */}
            <div className="passport-modal__header">
              <div className="passport-modal__top-row">
                <span className="passport-modal__emblem-badge">
                  <IconInsignia /> Arsip Rasa Nusantara
                </span>
                <button
                  type="button"
                  className="passport-modal__sound-btn"
                  onClick={toggleSound}
                  title="Pengaturan audio inskripsi"
                >
                  {soundEnabled ? (
                    <>
                      <IconVolume /> Suara Aktif
                    </>
                  ) : (
                    <>
                      <IconVolumeMute /> Suara Senyap
                    </>
                  )}
                </button>
              </div>

              <h2 className="passport-modal__title">Buku Kurasi Pusaka</h2>
              <p className="passport-modal__subtitle">
                Catatan terverifikasi penjelajahan rasa dan inskripsi tradisi kuliner Nusantara.
                Eksplorasi ragam sajian dan wilayah untuk mengumpulkan insignia kehormatan.
              </p>
            </div>

            {/* Status & Progress */}
            <div className="passport-modal__status">
              <div className="passport-modal__status-row">
                <div className="passport-modal__rank-title">
                  <span>{rankTitle}</span>
                  <span className="passport-modal__rank-tag">{rankTag}</span>
                </div>
                <span className="passport-modal__rank-count">
                  {count} dari {totalStamps} Insignia ({progressPercent}%)
                </span>
              </div>
              <div className="passport-modal__progress-track">
                <div
                  className="passport-modal__progress-bar"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>
            </div>

            {/* Insignia Grid */}
            <div className="passport-grid">
              {ALL_STAMPS.map((stamp) => {
                const isUnlocked = unlockedStamps.includes(stamp.id);
                return (
                  <div
                    key={stamp.id}
                    className={`passport-stamp ${
                      isUnlocked ? "passport-stamp--unlocked" : "passport-stamp--locked"
                    }`}
                  >
                    <div className="passport-stamp__seal">
                      {isUnlocked ? (
                        renderStampIcon(stamp.iconType)
                      ) : (
                        <IconLock style={{ opacity: 0.5 }} />
                      )}
                      {isUnlocked && (
                        <span className="passport-stamp__check" title="Terverifikasi">
                          <IconCheck />
                        </span>
                      )}
                    </div>
                    <h3 className="passport-stamp__title">{stamp.title}</h3>
                    <span className="passport-stamp__subtitle">{stamp.subtitle}</span>
                    <p className="passport-stamp__hint">
                      {isUnlocked ? "Tercatat dalam kurasi personal" : stamp.hint}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Reward Section */}
            <div className="passport-reward">
              <span className="passport-reward__eyebrow">
                {isRewardUnlocked ? "Apresiasi Kurasi Pusaka" : "Inskripsi Hadiah"}
              </span>
              <h3 className="passport-reward__title">
                {isRewardUnlocked
                  ? "Voucher Eksklusif: Diskon 10% Hantaran"
                  : `Buka ${Math.max(0, 3 - count)} Insignia Lagi untuk Membuka Diskon`}
              </h3>
              <p className="passport-reward__desc">
                {isRewardUnlocked
                  ? "Sebagai wujud terima kasih atas apresiasi budaya Anda, nikmati potongan 10% untuk pemesanan kotak hantaran pusaka melalui kontak resmi WhatsApp Wérisan Rasa."
                  : "Buka minimal 3 insignia pusaka melalui eksplorasi hidangan daerah, pulau Nusantara, atau panduan kurasi karakter rasa untuk membuka kode apresiasi khusus."}
              </p>

              {isRewardUnlocked && (
                <>
                  <div className="passport-reward__code-box">
                    <span className="passport-reward__code">WARISAN10</span>
                    <button
                      type="button"
                      style={{
                        background: "none",
                        border: "none",
                        color: "#f5ede0",
                        cursor: "pointer",
                        textDecoration: "underline",
                        fontSize: "0.8rem",
                        fontFamily: "var(--font-body)",
                      }}
                      onClick={handleCopyCode}
                    >
                      {copied ? "Tersalin" : "Salin Kode"}
                    </button>
                  </div>
                  <div>
                    <a
                      className="passport-reward__btn"
                      href={waUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Klaim via WhatsApp <IconArrowRight />
                    </a>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
