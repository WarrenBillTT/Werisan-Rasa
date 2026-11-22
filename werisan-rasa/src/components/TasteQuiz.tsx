import { useState } from "react";
import Reveal from "./Reveal";
import { menuTiers } from "../data/menuTiers";
import { useTastePassport } from "../context/TastePassportContext";
import { IconPrawn, IconSagu, IconSesame, IconBook, IconArrowRight } from "./HeritageIcons";
import plumLeft from "../assets/plum-left.webp";
import mtnB from "../assets/mtn-b.webp";
import "./TasteQuiz.css";

interface QuizOption {
  letter: string;
  text: string;
  dishId: "sumpia-udang" | "kue-sagu-susu" | "keciput-wijen";
}

interface Question {
  id: number;
  question: string;
  options: QuizOption[];
}

const QUESTIONS: Question[] = [
  {
    id: 1,
    question: "Ketika secangkir teh hangat tersaji di beranda sore hari, sensasi rasa dan tekstur apa yang paling Anda rindukan?",
    options: [
      {
        letter: "A",
        text: "Kriuk renyah keemasan dengan ledakan gurih umami ebi laut pesisir yang harum rempah.",
        dishId: "sumpia-udang",
      },
      {
        letter: "B",
        text: "Manis lembut creamy yang langsung lumer meleleh sejuk membanjiri lidah beraroma pandan suji.",
        dishId: "kue-sagu-susu",
      },
      {
        letter: "C",
        text: "Kriuk padat bertabur limpahan wijen sangrai wangi yang berpadu gurih santan kelapa tua.",
        dishId: "keciput-wijen",
      },
    ],
  },
  {
    id: 2,
    question: "Dalam lingkaran pertemanan atau keluarga besar, Anda paling sering dikenal sebagai sosok yang...?",
    options: [
      {
        letter: "A",
        text: "Bersemangat, dinamis, gemar mencoba hal baru, dan selalu membawa kehangatan suasana.",
        dishId: "sumpia-udang",
      },
      {
        letter: "B",
        text: "Lembut, penuh empati dan perhatian, menenangkan suasana, serta pendengar setia yang tulus.",
        dishId: "kue-sagu-susu",
      },
      {
        letter: "C",
        text: "Hangat, setia kawan, perekat kebersamaan yang guyub rukun, dan membawa berkah bagi semua.",
        dishId: "keciput-wijen",
      },
    ],
  },
  {
    id: 3,
    question: "Filosofi hidup manakah yang paling dekat dan mewakili pandangan Anda dalam merayakan jamuan?",
    options: [
      {
        letter: "A",
        text: "'Rezeki seluas samudra, sambutlah dengan keberanian, kegigihan, dan rasa syukur yang teguh.'",
        dishId: "sumpia-udang",
      },
      {
        letter: "B",
        text: "'Kelembutan budi pekerti dan ketulusan hati akan selalu meluluhkan segala prasangka serta sekat.'",
        dishId: "kue-sagu-susu",
      },
      {
        letter: "C",
        text: "'Guyub rukun adalah pilar utama; butiran kebersamaan yang erat akan mendatangkan berkah tiada putus.'",
        dishId: "keciput-wijen",
      },
    ],
  },
];

const PERSONAS = {
  "sumpia-udang": {
    persona: "Sang Penjelajah Berani & Tangguh",
    narrative:
      "Karakter Anda sangat selaras dengan Sumpia Udang Pesisir. Seperti akulturasi pelaut pesisir Cirebon yang berani mengarungi samudra, Anda menyukai kejutan rasa yang tegas, berani, dan renyah. Anda adalah sosok yang selalu dinanti untuk mencairkan suasana dalam setiap perkumpulan silaturahmi.",
  },
  "kue-sagu-susu": {
    persona: "Sang Jiwa Lembut & Penuh Kedamaian",
    narrative:
      "Karakter Anda mencerminkan kemurnian Kue Sagu Susu Pandan. Berakar dari kebaikan pati sagu purba yang lumer selembut sutra di lidah, Anda memiliki kepribadian menenangkan yang senantiasa menebarkan ketenangan, keikhlasan, dan keharmonisan tanpa pernah memaksakan kehendak.",
  },
  "keciput-wijen": {
    persona: "Sang Perekat Guyub & Pembawa Berkah",
    narrative:
      "Karakter Anda berpadu harmonis dengan Keciput Wijen Pusaka. Seperti ratusan butiran wijen yang merekat erat satu sama lain dalam tradisi pesisir Jawa, Anda adalah sosok pemersatu yang guyub rukun, bersahabat tulus, dan senantiasa menjadi berkah serta kebanggaan bagi orang-orang terkasih.",
  },
};

function renderPersonaIcon(dishId: "sumpia-udang" | "kue-sagu-susu" | "keciput-wijen") {
  switch (dishId) {
    case "sumpia-udang":
      return <IconPrawn />;
    case "kue-sagu-susu":
      return <IconSagu />;
    case "keciput-wijen":
      return <IconSesame />;
  }
}

export default function TasteQuiz() {
  const { unlockStamp, setIsPassportOpen, selectDishFromQuiz } = useTastePassport();
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [matchedId, setMatchedId] = useState<"sumpia-udang" | "kue-sagu-susu" | "keciput-wijen" | null>(null);

  const handleSelectOption = (dishId: "sumpia-udang" | "kue-sagu-susu" | "keciput-wijen") => {
    const nextAnswers = [...answers, dishId];
    setAnswers(nextAnswers);

    if (currentStep < QUESTIONS.length - 1) {
      setCurrentStep((prev) => prev + 1);
    } else {
      const tally: Record<string, number> = { "sumpia-udang": 0, "kue-sagu-susu": 0, "keciput-wijen": 0 };
      nextAnswers.forEach((ans) => {
        tally[ans] = (tally[ans] || 0) + 1;
      });

      let winner: "sumpia-udang" | "kue-sagu-susu" | "keciput-wijen" = dishId;
      let maxCount = -1;
      Object.entries(tally).forEach(([k, count]) => {
        if (count > maxCount) {
          maxCount = count;
          winner = k as "sumpia-udang" | "kue-sagu-susu" | "keciput-wijen";
        }
      });

      setMatchedId(winner);
      unlockStamp("kuis-selesai");
      unlockStamp(winner);
    }
  };

  const handleReset = () => {
    setCurrentStep(0);
    setAnswers([]);
    setMatchedId(null);
  };

  const matchedDish = menuTiers.find((d) => d.id === matchedId) || menuTiers[0];
  const matchedPersona = matchedId ? PERSONAS[matchedId] : null;

  const handleExploreDish = () => {
    if (matchedId) {
      if (selectDishFromQuiz) {
        selectDishFromQuiz(matchedId);
      }
      const el = document.getElementById("hidangan");
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const question = QUESTIONS[currentStep];

  return (
    <section id="kuis-rasa" className="quiz">
      {/* Ornamen Alam */}
      <img className="quiz__plum blend" src={plumLeft} alt="" aria-hidden="true" />
      <img className="quiz__mtn blend" src={mtnB} alt="" aria-hidden="true" />

      <div className="container">
        <Reveal className="quiz__head">
          <span className="eyebrow">Panduan Kurasi &middot; Selera Tradisi</span>
          <h2 className="section-title">Kurasi Karakter Rasa Nusantara</h2>
          <p className="section-lead">
            Temukan sajian kudapan pusaka yang paling selaras dengan karakter personal dan filosofi
            hidup Anda melalui tiga pertanyaan panduan kurasi sederhana.
          </p>
        </Reveal>

        <Reveal delay={100} className="quiz__card">
          {!matchedPersona ? (
            <div>
              <div className="quiz__progress-wrap">
                <span className="quiz__step-indicator">Pertanyaan {currentStep + 1} dari 3</span>
                <span className="quiz__step-count">
                  {Math.round(((currentStep + 1) / QUESTIONS.length) * 100)}%
                </span>
              </div>
              <div className="quiz__progress-bar-track">
                <div
                  className="quiz__progress-bar-fill"
                  style={{ width: `${((currentStep + 1) / QUESTIONS.length) * 100}%` }}
                />
              </div>

              <h3 className="quiz__question-text">{question.question}</h3>

              <div className="quiz__options">
                {question.options.map((opt) => (
                  <button
                    key={opt.letter}
                    type="button"
                    className="quiz__option-btn"
                    onClick={() => handleSelectOption(opt.dishId)}
                  >
                    <span className="quiz__option-letter">{opt.letter}</span>
                    <span className="quiz__option-text">{opt.text}</span>
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div className="quiz-result">
              <div className="quiz-result__emblem">
                {renderPersonaIcon(matchedId as "sumpia-udang" | "kue-sagu-susu" | "keciput-wijen")}
              </div>
              <span className="quiz-result__badge">Hasil Kurasi Karakter</span>
              <h3 className="quiz-result__persona">{matchedPersona.persona}</h3>
              <p className="quiz-result__snack">&mdash; {matchedDish.dishTitle}</p>

              <div className="quiz-result__box">
                <div className="quiz-result__image-wrap">
                  <img
                    className="quiz-result__image"
                    src={matchedDish.image}
                    alt={matchedDish.name}
                  />
                </div>
                <div className="quiz-result__narrative">
                  <p className="quiz-result__lead">{matchedPersona.narrative}</p>
                  <span className="quiz-result__stamp-note">
                    Insignia &quot;{matchedDish.name}&quot; dan &quot;Kurasi Karakter&quot; kini tercatat di Buku Kurasi Pusaka Anda.
                  </span>
                </div>
              </div>

              <div className="quiz-result__actions">
                <button
                  type="button"
                  className="quiz-result__btn-explore"
                  onClick={handleExploreDish}
                >
                  Lihat Kudapan Saya di Menu <IconArrowRight />
                </button>
                <button
                  type="button"
                  className="quiz-result__btn-passport"
                  onClick={() => setIsPassportOpen(true)}
                >
                  <IconBook /> Buka Buku Kurasi
                </button>
                <button
                  type="button"
                  className="quiz-result__btn-retry"
                  onClick={handleReset}
                >
                  Ulangi Kurasi
                </button>
              </div>
            </div>
          )}
        </Reveal>
      </div>
    </section>
  );
}
