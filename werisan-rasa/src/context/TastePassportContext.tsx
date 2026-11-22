import { createContext, useContext, useState, useEffect, type ReactNode } from "react";

export type StampIconType = "prawn" | "sagu" | "sesame" | "spices" | "temple" | "scroll";

export interface Stamp {
  id: string;
  category: "hidangan" | "daerah" | "kuis";
  title: string;
  subtitle: string;
  iconType: StampIconType;
  hint: string;
}

export const ALL_STAMPS: Stamp[] = [
  {
    id: "sumpia-udang",
    category: "hidangan",
    title: "Sumpia Udang",
    subtitle: "Pesisir Cirebon",
    iconType: "prawn",
    hint: "Pilih hidangan Sumpia Udang pada daftar hidangan pilihan",
  },
  {
    id: "kue-sagu-susu",
    category: "hidangan",
    title: "Kue Sagu Susu",
    subtitle: "Pusaka Melayu-Jawa",
    iconType: "sagu",
    hint: "Pilih hidangan Kue Sagu Susu pada daftar hidangan pilihan",
  },
  {
    id: "keciput-wijen",
    category: "hidangan",
    title: "Keciput Wijen",
    subtitle: "Pesisir Kudus",
    iconType: "sesame",
    hint: "Pilih hidangan Keciput Wijen pada daftar hidangan pilihan",
  },
  {
    id: "sumatra",
    category: "daerah",
    title: "Tanah Sumatra",
    subtitle: "Jalur Rempah",
    iconType: "spices",
    hint: "Jelajahi pulau Sumatra pada Jelajah Nusantara",
  },
  {
    id: "jawa",
    category: "daerah",
    title: "Tanah Jawa",
    subtitle: "Keraton & Pesisir",
    iconType: "temple",
    hint: "Jelajahi pulau Jawa pada Jelajah Nusantara",
  },
  {
    id: "kuis-selesai",
    category: "kuis",
    title: "Kurasi Karakter",
    subtitle: "Keselarasan Rasa",
    iconType: "scroll",
    hint: "Selesaikan panduan Kurasi Karakter Rasa Nusantara",
  },
];

interface ToastInfo {
  stamp: Stamp;
  timestamp: number;
}

interface TastePassportContextType {
  unlockedStamps: string[];
  unlockStamp: (stampId: string) => void;
  isPassportOpen: boolean;
  setIsPassportOpen: (open: boolean) => void;
  activeToast: ToastInfo | null;
  selectDishFromQuiz?: (dishId: string) => void;
  setSelectDishFromQuizHandler: (handler: (dishId: string) => void) => void;
  soundEnabled: boolean;
  toggleSound: () => void;
}

const STORAGE_KEY = "werisan_rasa_passport_stamps";
const SOUND_KEY = "werisan_rasa_sound_enabled";

const TastePassportContext = createContext<TastePassportContextType | undefined>(undefined);

// Synthesized audio chime via Web Audio API (gentle warm acoustic tone)
function playGentleChime() {
  try {
    const AudioContextClass =
      window.AudioContext ||
      (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (!AudioContextClass) return;
    const ctx = new AudioContextClass();

    const notes = [440.0, 554.37, 659.25];
    notes.forEach((freq, i) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = "sine";
      osc.frequency.value = freq;

      const startTime = ctx.currentTime + i * 0.12;
      const duration = 0.55;

      gain.gain.setValueAtTime(0, startTime);
      gain.gain.linearRampToValueAtTime(0.08, startTime + 0.03);
      gain.gain.exponentialRampToValueAtTime(0.001, startTime + duration);

      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(startTime);
      osc.stop(startTime + duration);
    });
  } catch {
    // Graceful fallback
  }
}

export function TastePassportProvider({ children }: { children: ReactNode }) {
  const [unlockedStamps, setUnlockedStamps] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved) : ["sumpia-udang"];
    } catch {
      return ["sumpia-udang"];
    }
  });

  const [soundEnabled, setSoundEnabled] = useState<boolean>(() => {
    try {
      const saved = localStorage.getItem(SOUND_KEY);
      return saved !== null ? JSON.parse(saved) : true;
    } catch {
      return true;
    }
  });

  const [isPassportOpen, setIsPassportOpen] = useState(false);
  const [activeToast, setActiveToast] = useState<ToastInfo | null>(null);
  const [dishSelectHandler, setDishSelectHandler] = useState<((dishId: string) => void) | null>(null);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(unlockedStamps));
    } catch {
      // storage error fallback
    }
  }, [unlockedStamps]);

  useEffect(() => {
    try {
      localStorage.setItem(SOUND_KEY, JSON.stringify(soundEnabled));
    } catch {
      // storage error fallback
    }
  }, [soundEnabled]);

  const toggleSound = () => {
    setSoundEnabled((prev) => !prev);
  };

  const unlockStamp = (stampId: string) => {
    const stampObj = ALL_STAMPS.find((s) => s.id === stampId);
    if (!stampObj) return;

    setUnlockedStamps((prev) => {
      if (prev.includes(stampId)) return prev;

      if (soundEnabled) {
        playGentleChime();
      }
      setActiveToast({ stamp: stampObj, timestamp: Date.now() });
      setTimeout(() => {
        setActiveToast((curr) => (curr?.stamp.id === stampId ? null : curr));
      }, 4000);

      return [...prev, stampId];
    });
  };

  const setSelectDishFromQuizHandler = (handler: (dishId: string) => void) => {
    setDishSelectHandler(() => handler);
  };

  const selectDishFromQuiz = (dishId: string) => {
    if (dishSelectHandler) {
      dishSelectHandler(dishId);
    }
  };

  return (
    <TastePassportContext.Provider
      value={{
        unlockedStamps,
        unlockStamp,
        isPassportOpen,
        setIsPassportOpen,
        activeToast,
        selectDishFromQuiz,
        setSelectDishFromQuizHandler,
        soundEnabled,
        toggleSound,
      }}
    >
      {children}
    </TastePassportContext.Provider>
  );
}

export function useTastePassport() {
  const context = useContext(TastePassportContext);
  if (!context) {
    throw new Error("useTastePassport must be used within a TastePassportProvider");
  }
  return context;
}
