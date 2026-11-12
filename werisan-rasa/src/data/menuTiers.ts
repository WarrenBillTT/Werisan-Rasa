import classicImg from "../assets/Classic.jpg";
import signatureImg from "../assets/Signature.jpg";
import royalGoldImg from "../assets/Royal Gold.jpg";

export interface MenuTrait {
  label: string;
  text: string;
}

export interface MenuSpecs {
  dimension: string;
  material: string;
  capacity: string;
}

export interface MenuTier {
  id: "classic" | "signature" | "royal-gold";
  name: string;
  badge: string;
  level: string;
  tagline: string;
  dishTitle: string;
  dishLead: string;
  image: string;
  imageAlt: string;
  specs: MenuSpecs;
  traits: MenuTrait[];
  note: string;
}

export const menuTiers: MenuTier[] = [
  {
    id: "classic",
    name: "Classic",
    level: "Resep Asli Leluhur",
    badge: "Koleksi Klasik",
    tagline: "Kehangatan Tradisi yang Terus Terjaga",
    dishTitle: "Hantaran Pusaka Klasik",
    dishLead:
      "Kudapan klasik bertekstur selembut sutra yang dipanggang perlahan di atas bara arang. Menghadirkan perpaduan sari perasan daun pandan suji kebun, gurih kelapa tua murni, dan lelehan gula aren organik. Disajikan dalam kotak seni penuh warna yang merayakan ragam pusaka arsitektur Nusantara.",
    image: classicImg,
    imageAlt: "Kotak Hantaran Wérisan Rasa Edisi Klasik Penuh Warna",
    specs: {
      dimension: "28 × 22 × 12 cm",
      material: "Kayu Pinus & Pengait Tembaga",
      capacity: "12 Kue Pusaka Segar",
    },
    traits: [
      {
        label: "Bahan Utama",
        text: "Tepung beras pulen pilihan, daun pandan suji kebun, santan kelapa murni, dan gula aren organik.",
      },
      {
        label: "Karakter Rasa",
        text: "Manis legit alami dengan gurih santan yang seimbang, aroma pandan semerbak, dan tekstur lumer di lidah.",
      },
      {
        label: "Kemasan & Seni",
        text: "Kotak hantaran bermotif lukisan cat air penuh warna Nusantara dengan kunci tembaga orisinil.",
      },
    ],
    note: "Dibuat Segar Setiap Hari · Resep Asli Turun-Temurun · Tanpa Bahan Pengawet",
  },
  {
    id: "signature",
    name: "Signature",
    level: "Seleksi Bahan Kurasi",
    badge: "Koleksi Istimewa",
    tagline: "Eksplorasi Rasa dengan Sentuhan Elegan",
    dishTitle: "Hantaran Pusaka Signature",
    dishLead:
      "Persembahan istimewa dari dapur Wérisan Rasa dengan seleksi rempah dan bahan kurasi terbaik dari perkebunan pegunungan. Dipanggang dengan teknik penguncian aroma kayu aromatik, dibalut dalam kemasan gaya etsa monokrom vintage beraksen ornamen sudut kuningan dan peta kepulauan berlapis emas.",
    image: signatureImg,
    imageAlt: "Kotak Hantaran Wérisan Rasa Edisi Signature Monokrom dengan Ornamen Sudut Emas",
    specs: {
      dimension: "28 × 22 × 12 cm",
      material: "Kayu Pinus, Sudut Kuningan & Peta Emas",
      capacity: "12 Kue Pusaka Kurasi",
    },
    traits: [
      {
        label: "Bahan Utama",
        text: "Gula aren organik pegunungan, sari kelapa tua perasan pertama, perasan suji pekat ganda, dan aroma kayu manis pilihan.",
      },
      {
        label: "Karakter Rasa",
        text: "Lapisan rasa lebih kaya dan berdimensi, aroma panggangan khas yang harum memikat, serta kelembutan paripurna.",
      },
      {
        label: "Kemasan & Seni",
        text: "Kotak kayu eksklusif gaya etsa monokrom dengan pelindung sudut tembaga antik dan aksen peta Nusantara emas.",
      },
    ],
    note: "Pilihan Kurasi Khusus · Dipanggang Terbatas Setiap Pagi · Sangat Ideal untuk Hantaran Rekan Istimewa",
  },
  {
    id: "royal-gold",
    name: "Royal Gold",
    level: "Mahakarya Premium",
    badge: "Edisi Mahakarya",
    tagline: "Puncak Kemewahan Cita Rasa Tradisi",
    dishTitle: "Hantaran Pusaka Royal Gold",
    dishLead:
      "Puncak keagungan cita rasa kuliner Nusantara. Dibuat hanya dari bahan-bahan paling murni dan langka dengan proses pembuatan cermat tanpa kompromi. Dihadirkan dalam kotak hantaran mahakarya bertatahkan logo emas 24 karat timbul dan sudut tembaga orisinil bernilai koleksi tinggi.",
    image: royalGoldImg,
    imageAlt: "Kotak Hantaran Wérisan Rasa Edisi Royal Gold Berlapis Stempel Emas 24K",
    specs: {
      dimension: "28 × 22 × 12 cm",
      material: "Kayu Pilihan, Foil Emas 24K & Kuningan",
      capacity: "12 Kue Pusaka Mahakarya",
    },
    traits: [
      {
        label: "Bahan Utama",
        text: "Pandan suji umur optimal, gula aren kristal organik khusus, santan kental ganda murni, serta sentuhan daun emas konsumsi murni.",
      },
      {
        label: "Karakter Rasa",
        text: "Kemewahan rasa paripurna—gurih lembut berpadu karamel aren elegan, meninggalkan aroma semerbak yang panjang di langit-langit mulut.",
      },
      {
        label: "Kemasan & Seni",
        text: "Kotak hantaran edisi terbatas bertatahkan stempel foil emas 24K timbul dengan ornamen kuningan seni tinggi.",
      },
    ],
    note: "Edisi Mahakarya Eksklusif · Dibuat Berdasarkan Pesanan Khusus (Made to Order) · Sertifikat Otentisitas",
  },
];
