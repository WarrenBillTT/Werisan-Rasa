import type { Region } from "../types";

export const regions: Region[] = [
  {
    id: "sumatra",
    city: "Sumatra",
    tagline: "Pusaka Rempah Tebal & Tradisi Lambat",
    accent: "#c4512f",
    intro:
      "Dari perbukitan Minang hingga pesisir Aceh, tanah Sumatra melahirkan hidangan dengan karakter tegas: santan pekat, cabai merah menyengat, serta racikan puluhan rempah aromatik yang dimasak perlahan hingga meresap sempurna.",
    dishes: [
      {
        name: "Rendang Daging",
        description:
          "Daging sapi pilihan yang direbus perlahan berjam-jam bersama santan kental dan rempah racikan pusaka hingga kuah mengering menjadi dedak hitam gurih nan harum.",
        tags: ["Ikonik", "Kaya Rempah", "Pedas Gurih"],
      },
      {
        name: "Mie Aceh Spesial",
        description:
          "Mi kuning tebal dengan kuah kari kental kaya kapulaga, jintan, dan cabai merah, disajikan dengan suwiran daging empuk, acar bawang renyah, dan emping melinjo.",
        tags: ["Kuah Kari", "Pedas Hangat", "Khas Aceh"],
      },
      {
        name: "Gulai Ikan Patin Asam Pedas",
        description:
          "Potongan ikan patin segar bertekstur lembut yang dimasak dalam kuah kuning asam pedas dengan aroma daun ruku-ruku, kecombrang, dan belimbing wuluh.",
        tags: ["Segar", "Asam Pedas", "Pesisir"],
      },
    ],
  },
  {
    id: "jawa",
    city: "Jawa",
    tagline: "Harmoni Manis, Gurih, & Kehangatan Tungku",
    accent: "#d9962b",
    intro:
      "Dapur pulau Jawa menjunjung tinggi kesabaran dan keseimbangan rasa: perpaduan manis legit gula aren, gurihnya kelapa sangrai dan petis, serta kuah hitam kluwek yang menenangkan jiwa.",
    dishes: [
      {
        name: "Rawon Daging Surabaya",
        description:
          "Sup daging sapi empuk dengan kuah hitam pekat aromatik dari biji kluwek pilihan, disempurnakan dengan tauge pendek renyah, sambal terasi, dan telur asin masir.",
        tags: ["Kluwek", "Kuah Gurih", "Jawa Timur"],
      },
      {
        name: "Gudeg Komplit Yogyakarta",
        description:
          "Nangka muda yang dimasak semalaman di atas tungku kayu bersama gula kelapa dan santan, disajikan bersama sambal krecek pedas, telur pindang, dan ayam opor kampung.",
        tags: ["Legit Manis", "Tradisional", "Yogyakarta"],
      },
      {
        name: "Soto Betawi Daging & Paru",
        description:
          "Racikan kuah kaldu sapi berpadu susu dan santan rempah yang gurih lembut, disajikan dengan daging sapi lembut, kentang goreng, tomat, dan emping melinjo.",
        tags: ["Santan Susu", "Gurih Lembut", "Betawi"],
      },
    ],
  },
  {
    id: "kalimantan",
    city: "Kalimantan",
    tagline: "Aroma Sungai, Rimba Tropis, & Asam Segar",
    accent: "#3b7482",
    intro:
      "Kekayaan alam Borneo mempertemukan hasil sungai, tanaman liar hutan hujan, dan rempah aromatik: kaldu ayam wangi kayu manis, ikan sungai bakar berlumur bumbu merah, hingga jajanan kukus bertekstur sutra.",
    dishes: [
      {
        name: "Soto Banjar Limau Kuit",
        description:
          "Soto ayam berkuah bening keemasan yang wangi dengan rempah kapulaga, cengkeh, dan kayu manis, disajikan bersama ketupat, perkedel singkong, dan perasan jeruk limau kuit.",
        tags: ["Aromatik", "Kuah Bening", "Kalimantan Selatan"],
      },
      {
        name: "Ayam Cincane Samarinda",
        description:
          "Ayam kampung panggang khas pesisir Mahakam yang dibaluri bumbu rempah merah jahe, terasi, dan kemiri, menghasilkan sensasi gurih pedas manis yang meresap.",
        tags: ["Panggang", "Pedas Gurih", "Kalimantan Timur"],
      },
      {
        name: "Chai Kue / Choipan Pontianak",
        description:
          "Kudapan kulit beras tipis kenyal berisi irisan bengkuang manis dan ebi, dikukus hangat lalu disiram minyak bawang putih renyah dan cocolan sambal asam pedas.",
        tags: ["Kukus", "Gurih Renyah", "Kalimantan Barat"],
      },
    ],
  },
  {
    id: "sulawesi",
    city: "Sulawesi",
    tagline: "Ledakan Cabai Rawit, Daun Aromatik, & Laut Dalam",
    accent: "#df6845",
    intro:
      "Dari jazirah utara hingga semenanjung selatan, kuliner Sulawesi terkenal dengan keberanian rasa: kepedasan cabai rawit segar, harum kemangi dan daun pandan, serta kaldu rempah pekat kacang tanah.",
    dishes: [
      {
        name: "Coto Makassar Asli",
        description:
          "Olahan daging sapi pilihan dalam kuah kaldu kental yang diracik dari 40 macam rempah 'Ampah Patang Pulo' dan kacang tanah sangrai, disajikan bersama ketupat daun pandan.",
        tags: ["Kuah Kental", "Kacang Sangrai", "Sulawesi Selatan"],
      },
      {
        name: "Ayam Woku Belanga Manado",
        description:
          "Ayam yang dimasak dalam panci tanah liat bersama bumbu kuning cabai rawit melimpah, daun kemangi segar, serai, daun jeruk, dan pandan yang semerbak.",
        tags: ["Sangat Pedas", "Herba Aromatik", "Sulawesi Utara"],
      },
      {
        name: "Sup Konro Bakar Makassar",
        description:
          "Iga sapi berukuran besar yang dibakar harum dengan lumuran bumbu kacang gurih pekat, disajikan berdampingan dengan semangkuk kuah sup rempah kluwek hangat.",
        tags: ["Iga Bakar", "Bumbu Kacang", "Ikonik"],
      },
    ],
  },
  {
    id: "papua",
    city: "Papua",
    tagline: "Kemurnian Sagu, Rempah Kuning, & Hasil Laut Lepas",
    accent: "#b8860b",
    intro:
      "Kuliner bumi Cendrawasih berpijak pada keselarasan dengan alam: sagu hutan yang diolah menjadi papeda lembut, ikan laut segar dalam kuah kuning kunyit asam yang murni, serta teknik bakar bersahaja.",
    dishes: [
      {
        name: "Papeda Ikan Kuah Kuning",
        description:
          "Bubur sagu murni bertekstur kenyal lembut yang disiram kuah ikan laut kuning beraroma kunyit segar, serai, daun kemangi, dan asam jeruk nipis yang menyegarkan.",
        tags: ["Sagu Alami", "Kuah Asam Segar", "Tradisi Papua"],
      },
      {
        name: "Ikan Bakar Manokwari",
        description:
          "Ikan tongkol atau kakap segar laut Pasifik yang dibakar dengan arang batok kelapa, disajikan dengan siraman sambal tumbuk kasar cabai rawit hijau yang pedas menggigit.",
        tags: ["Bakar Arang", "Sambal Rawit", "Papua Barat"],
      },
      {
        name: "Aunuve Habre",
        description:
          "Ikan cakalang segar yang dibalut daun talas lembut dan dikukus perlahan bersama parutan kelapa muda bergaram gurih, menyajikan rasa alami yang bersahaja dan kaya gizi.",
        tags: ["Kukus Tradisional", "Gurih Alami", "Bumi Cendrawasih"],
      },
    ],
  },
];
