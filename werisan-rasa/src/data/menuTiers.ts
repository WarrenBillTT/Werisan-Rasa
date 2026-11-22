import sumpiaImg from "../assets/Sumpia Udang.webp";
import saguSusuImg from "../assets/Kue Sagu Susu.webp";
import keciputImg from "../assets/Keciput Wijen.webp";

export interface MenuTrait {
  label: string;
  text: string;
}

export interface CulturalPoint {
  category: string;
  text: string;
}

export interface MenuSpecs {
  origin: string;
  texture: string;
  tradition: string;
}

export interface FlavorGauge {
  label: string;
  percentage: number;
}

export interface MenuTier {
  id: "sumpia-udang" | "kue-sagu-susu" | "keciput-wijen";
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
  culturalPoints: CulturalPoint[];
  gauges: FlavorGauge[];
  note: string;
}

export const menuTiers: MenuTier[] = [
  {
    id: "sumpia-udang",
    name: "Sumpia Udang",
    level: "Gurih Renyah Ebi",
    badge: "Pusaka Pesisir Cirebon",
    tagline: "Harmoni Renyah Kulit Keemasan dengan Kelezatan Gurih Ebi Pesisir",
    dishTitle: "Sumpia Udang Pesisir",
    dishLead:
      "Kudapan klasik berukuran mungil seukuran satu gigitan (bite-sized) yang memadukan renyahnya gulungan kulit lumpia keemasan dengan isian abon ebi pilihan berpadu rempah aromatik. Mengabadikan tradisi kuliner maritim yang gurih dan melegenda.",
    image: sumpiaImg,
    imageAlt: "Sumpia Udang kering mini isi abon ebi gurih renyah keemasan",
    specs: {
      origin: "Cirebon & Pesisir Jawa",
      texture: "Renyah Garing Bite-Sized",
      tradition: "Peranakan & Jamuan Lebaran",
    },
    gauges: [
      { label: "Kerenyahan Kulit", percentage: 96 },
      { label: "Gurih Umami Ebi", percentage: 94 },
      { label: "Aroma Rempah Laut", percentage: 88 },
      { label: "Manis Samar Aren", percentage: 42 },
    ],
    culturalPoints: [
      {
        category: "Asal Muasal & Akulturasi",
        text: "Lahir dari keharmonisan budaya Tionghoa peranakan dengan masyarakat pesisir Cirebon dan Semarang. Berakar dari kata Hokkien serumpun 'lumpia' (lun-pia) yang diinovasi menjadi versi kering mini tanpa bahan pengawet agar tahan lama sebagai bekal pelayaran saudagar Nusantara.",
      },
      {
        category: "Bahan-Bahan Alami",
        text: "Lembaran tipis kulit gandum garing, abon udang ebi laut super yang ditumbuk halus bersama bawang Brebes, ketumbar sangrai, daun jeruk wangi, dan garam laut alami yang digoreng pada suhu presisi.",
      },
      {
        category: "Filosofi & Tradisi Jamuan",
        text: "Udang menyimbolkan tawa dan sukacita ('ha'), sementara bentuk gulungan rapatnya melambangkan simpanan rezeki emas. Kudapan kehormatan yang selalu hadir di toples ruang tamu saat Imlek maupun Idul Fitri.",
      },
    ],
    traits: [
      {
        label: "Asal Muasal & Sejarah",
        text: "Lahir dari akulturasi harmonis kebudayaan Tionghoa peranakan di pelabuhan tua pesisir utara Jawa.",
      },
      {
        label: "Cita Rasa & Tekstur",
        text: "Sensasi kriuk renyah gurih disusul kelezatan abon ebi dengan karakter umami yang panjang.",
      },
      {
        label: "Bahan-Bahan Alami",
        text: "Kulit gandum tipis istimewa, abon ebi laut kualitas super, rempah Brebes, dan daun jeruk wangi.",
      },
      {
        label: "Wawasan Budaya & Filosofi",
        text: "Simbol kemakmuran, tawa sukacita, dan ikatan silaturahmi perayaan hari besar keluarga.",
      },
    ],
    note: "Kudapan Pusaka Pesisir · Udang Ebi Pilihan Tanpa Pengawet · Dibuat Segar & Renyah Alami",
  },
  {
    id: "kue-sagu-susu",
    name: "Kue Sagu Susu",
    level: "Lumer Manis Susu",
    badge: "Warisan Pati Sagu Nusantara",
    tagline: "Sensasi Lumer di Lidah dari Kebaikan Pati Sagu Purba Berpadu Harum Manis Susu",
    dishTitle: "Kue Sagu Susu Pandan",
    dishLead:
      "Kue kering pusaka berbentuk kuncup bunga semprit klasik yang menghadirkan keajaiban sensasi tekstur: kokoh saat disentuh, namun seketika lumer selembut sutra saat bersentuhan dengan lidah, berpadu manis harum daun pandan sangrai.",
    image: saguSusuImg,
    imageAlt: "Kue Sagu Susu semprit bunga tradisional bertekstur lumer lembut",
    specs: {
      origin: "Tradisi Melayu & Betawi-Jawa",
      texture: "Melt-in-the-Mouth (Lumer)",
      tradition: "Sajian Silaturahmi Hari Raya",
    },
    gauges: [
      { label: "Kelembutan Lumer", percentage: 98 },
      { label: "Manis Susu Gurih", percentage: 90 },
      { label: "Harum Pandan Alami", percentage: 92 },
      { label: "Kerenyahan Luar", percentage: 72 },
    ],
    culturalPoints: [
      {
        category: "Asal Muasal & Sejarah",
        text: "Memadukan tanaman pangan purba endemik sagu Nusantara dengan seni pembuatan biskuit semprit era kolonial (Indisch pastry) abad ke-19, menghasilkan kudapan manis bertekstur lekas lumer yang dicintai lintas generasi.",
      },
      {
        category: "Bahan-Bahan Alami",
        text: "Tepung pati sagu aren murni yang disangrai perlahan bersama irisan daun pandan segar hingga berbobot ringan, dipadu susu murni, mentega bermutu tinggi, kuning telur ayam segar, dan vanila alami.",
      },
      {
        category: "Filosofi & Tradisi Jamuan",
        text: "Tekstur lekas lumer di lidah menyimbolkan keikhlasan hati dan kelapangan dada untuk saling memaafkan pada hari raya, sekaligus lambang ketulusan serta kelembutan budi pekerti tuan rumah.",
      },
    ],
    traits: [
      {
        label: "Asal Muasal & Sejarah",
        text: "Perpaduan kearifan pati sagu Nusantara dengan teknik biskuit semprit era kolonial abad ke-19.",
      },
      {
        label: "Cita Rasa & Tekstur",
        text: "Manis gurih lembut dengan sensasi melt-in-the-mouth yang langsung lumer di mulut.",
      },
      {
        label: "Bahan-Bahan Alami",
        text: "Pati sagu aren murni, daun pandan segar sangrai, susu murni, mentega, dan vanila alami.",
      },
      {
        label: "Wawasan Budaya & Filosofi",
        text: "Simbol keikhlasan hati dan kelapangan dada untuk saling memaafkan dalam jamuan hari raya.",
      },
    ],
    note: "Kudapan Warisan Nusantara · Menggunakan Pati Sagu Alami & Pandan Segar · Resep Tradisi Turun-Temurun",
  },
  {
    id: "keciput-wijen",
    name: "Keciput Wijen",
    level: "Kriuk Gurih Wijen",
    badge: "Pusaka Pesisir Jawa Tengah",
    tagline: "Kriuk Gurih Bertabur Butiran Wijen Lambang Keakraban dan Rezeki Berlimpah",
    dishTitle: "Keciput Wijen Pusaka",
    dishLead:
      "Kudapan pusaka berbentuk bulatan mini bertabur rapat biji wijen keemasan. Bertekstur padat garing dan tidak kempis, menghadirkan letupan gurih wijen sangrai berpadu gurih santan kelapa yang tak lekang oleh zaman.",
    image: keciputImg,
    imageAlt: "Kue Keciput Wijen renyah garing bertabur biji wijen utuh",
    specs: {
      origin: "Kudus & Pesisir Jawa",
      texture: "Kriuk Renyah Padat Garing",
      tradition: "Hajatan Pernikahan & Lebaran",
    },
    gauges: [
      { label: "Kriuk Renyah Padat", percentage: 95 },
      { label: "Gurih Wijen Panggang", percentage: 96 },
      { label: "Gurih Santan Kelapa", percentage: 86 },
      { label: "Manis Legit Seimbang", percentage: 65 },
    ],
    culturalPoints: [
      {
        category: "Asal Muasal & Sejarah",
        text: "Kearifan pesisir utara Jawa Tengah (Kudus & Jepara). Adaptasi cerdas dari onde-onde Majapahit yang dibuat mini tanpa isian basah agar tahan lama berminggu-minggu sebagai bekal perjalanan maritim dan upacara adat.",
      },
      {
        category: "Bahan-Bahan Alami",
        text: "Tepung ketan putih pilihan, santan kelapa tua kental segar, telur ayam, gula tebu, sedikit garam laut untuk mengangkat aroma gurih, serta limpahan biji wijen putih berkualitas super tanpa pemutih.",
      },
      {
        category: "Filosofi & Tradisi Jamuan",
        text: "Butiran wijen yang melekat erat melambangkan falsafah 'guyub rukun' (kebersamaan yang tak terpisahkan) serta rezeki melimpah. Menjadi sajian kehormatan hantaran pernikahan adat dan hari raya.",
      },
    ],
    traits: [
      {
        label: "Asal Muasal & Sejarah",
        text: "Adaptasi onde-onde era Majapahit menjadi kudapan mini kering khas Kudus dan pesisir Jawa.",
      },
      {
        label: "Cita Rasa & Tekstur",
        text: "Padat garing dengan aroma nutty wijen sangrai berpadu santan gurih dan manis seimbang.",
      },
      {
        label: "Bahan-Bahan Alami",
        text: "Tepung ketan putih, santan kelapa kental, gula tebu murni, dan limpahan biji wijen pilihan.",
      },
      {
        label: "Wawasan Budaya & Filosofi",
        text: "Lambang keharmonisan guyub rukun, kesuburan, dan rezeki tak terputus.",
      },
    ],
    note: "Kudapan Tradisi Jawa Pesisir · Wijen Alami Pilihan Berkualitas · Renyah Alami Tahan Lama",
  },
];
