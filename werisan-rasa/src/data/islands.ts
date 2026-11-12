export interface IslandTrait {
  category: string;
  title: string;
  text: string;
}

export interface IslandData {
  id: string;
  name: string;
  tagline: string;
  accent: string;
  essence: string;
  spices: string;
  flavor: string;
  tradition: string;
  traits: IslandTrait[];
}

export const islands: IslandData[] = [
  {
    id: "sumatra",
    name: "Sumatra",
    tagline: "Pusaka Jalur Rempah & Ketegasan Rasa",
    accent: "#c4512f",
    essence:
      "Pintu gerbang sutra maritim yang melahirkan seni masak paling berani: santan kental pekat, cabai merah membara, dan puluhan rempah yang dimasak perlahan hingga sari bumbu meresap ke serat terdalam.",
    spices: "Andaliman, Asam Kandis, Pala, Kayu Manis",
    flavor: "Gurih Pekat, Pedas Hangat, Berkuah Tebal",
    tradition: "Makan Bajamba (Duduk Melingkar Setara)",
    traits: [
      {
        category: "Karakteristik & Alam",
        title: "Tanah Vulkanik Bukit Barisan",
        text: "Ketinggian tanah vulkanis menghasilkan rempah dengan minyak atsiri tajam: andaliman hutan, cengkeh pesisir, dan asam kandis yang menjadi fondasi bumbu utama.",
      },
      {
        category: "Budaya Jamuan",
        title: "Kesetaraan Meja Makan Bajamba",
        text: "Masyarakat berkumpul duduk bersila melingkari talam daun pisang, menyantap hidangan bersama sebagai lambang penghormatan dan kerukunan tanpa sekat sosial.",
      },
      {
        category: "Cerita & Cita Rasa",
        title: "Laku Sabar Memasak Rendang & Gulai",
        text: "Dedak hitam rendang lahir dari adukan berjam-jam di atas bara kecil. Rempah antiseptik alami membuat hidangan awet berminggu-minggu tanpa bahan pengawet.",
      },
    ],
  },
  {
    id: "jawa",
    name: "Jawa",
    tagline: "Harmoni Manis, Gurih, & Kehangatan Tungku",
    accent: "#d9962b",
    essence:
      "Lumbung pangan Nusantara yang merawat keselarasan rasa: manis legit gula kelapa murni, gurihnya kelapa sangrai dan petis, serta kehangatan kaldu kluwek hitam yang meneduhkan jiwa.",
    spices: "Biji Kluwek, Kencur, Temu Kunci, Bawang Merah",
    flavor: "Manis Legit Lembut, Gurih Aromatik",
    tradition: "Kenduri & Tumpengan Guyub Rukun",
    traits: [
      {
        category: "Karakteristik & Alam",
        title: "Persawahan Subur & Lereng Gunung",
        text: "Hamparan sawah padi pulen, kebun kedelai, dan kelapa tua lereng merapi membentuk bahan baku kuliner harian yang bersahaja dan menenangkan.",
      },
      {
        category: "Budaya Jamuan",
        title: "Doa Syukur Tradisi Kenduri",
        text: "Nasi tumpeng dan berkat dibagikan kepada kerabat dan tetangga sebagai ungkapan syukur kepada semesta serta perekat kerukunan antarsesama.",
      },
      {
        category: "Cerita & Cita Rasa",
        title: "Kehangatan Dapur Pawon Kayu Bakar",
        text: "Memasak di atas tungku tanah liat kayu bakar menghasilkan aroma asap lembut. Gudeg semalaman hingga rawon kluwek semakin sedap saat dihangatkan kembali.",
      },
    ],
  },
  {
    id: "kalimantan",
    name: "Kalimantan",
    tagline: "Aroma Rimba Tropis, Sungai Mahakam, & Asam Segar",
    accent: "#3b7482",
    essence:
      "Jantung khatulistiwa menyajikan kemurnian rasa alam: kesegaran rempah liar hutan hujan, keasaman buah rimba langka, dan teknik memanggang dalam ruas bambu yang bersahaja.",
    spices: "Kayu Manis, Kapulaga, Buah Asam Payang",
    flavor: "Segar Berkaldu Rempah, Gurih Bumbu Merah",
    tradition: "Pasar Terapung & Santap Rumah Panggung",
    traits: [
      {
        category: "Karakteristik & Alam",
        title: "Urat Nadi Sungai & Hutan Tropis",
        text: "Kekayaan ikan air tawar sungai besar, pucuk paku-pakuan rimba, dan tanaman hutan membentuk identitas masakan yang sangat harmonis dengan alam.",
      },
      {
        category: "Budaya Jamuan",
        title: "Kearifan Dayak & Dagang Pesisir Banjar",
        text: "Menghormati hutan dengan memanen secukupnya bersanding dengan tradisi pasar terapung sarapan di atas perahu kayu jukung sejak ratusan tahun lalu.",
      },
      {
        category: "Cerita & Cita Rasa",
        title: "Memasak dalam Bambu & Kuah Bening",
        text: "Memanggang dalam ruas bambu mengunci sari pati alami ikan. Kuah soto bening keemasan beraroma kayu manis dan jeruk limau kuit menyegarkan tubuh.",
      },
    ],
  },
  {
    id: "sulawesi",
    name: "Sulawesi",
    tagline: "Ledakan Cabai Rawit, Herba Aromatik, & Samudra",
    accent: "#df6845",
    essence:
      "Pertemuan jazirah pegunungan dan samudra melahirkan kuliner penuh gairah: sengatan cabai rawit segar, semerbak daun kemangi dan pandan wangi, serta kaldu rempah kacang tanah legendaris.",
    spices: "Cabai Rawit Merah, Daun Kunyit, Kemangi, Cengkeh",
    flavor: "Pedas Menyengat, Asam Segar, Kaldu Kental",
    tradition: "Jamuan Meja Pelaut & Pesisir Karang",
    traits: [
      {
        category: "Karakteristik & Alam",
        title: "Pesisir Karang & Dataran Tinggi",
        text: "Laut dalam kaya cakalang dan tuna berpadu dengan dataran tinggi penghasil cabai rawit pedas murni serta rempah pala dan cengkeh bermutu tinggi.",
      },
      {
        category: "Budaya Jamuan",
        title: "Jiwa Bahari & Makan Beramai-ramai",
        text: "Karakter pelaut Bugis dan Makassar terpancar di meja makan. Semangkuk coto panas atau ikan bakar dabu-dabu selalu dinikmati bersama diiringi tawa hangat.",
      },
      {
        category: "Cerita & Cita Rasa",
        title: "Pusaka 40 Rempah Ampah Patang Pulo",
        text: "Racikan 40 rempah herbal pada kuah kaldu sapi dan kacang tanah sangrai menjadi bekal stamina bagi para pelaut yang mengarungi samudra lepas.",
      },
    ],
  },
  {
    id: "papua",
    name: "Papua",
    tagline: "Kemurnian Sagu Hutan, Rempah Kuning, & Laut Lepas",
    accent: "#b8860b",
    essence:
      "Bumi timur yang setia menjaga kemurnian alam: kelembutan sagu murni hutan rimba, kuah kuning asam segar dari kunyit liar pesisir, serta kearifan memasak tertua di atas batu panas membara.",
    spices: "Kunyit Liar Pesisir, Serai Hutan, Jeruk Nipis",
    flavor: "Asam Segar Alami, Gurih Bersahaja",
    tradition: "Ritual Akbar Bakar Batu (Barapen)",
    traits: [
      {
        category: "Karakteristik & Alam",
        title: "Rawa Sagu Tropis & Samudra Pasifik",
        text: "Pohon sagu tumbuh alami sebagai pohon kehidupan, sementara perairan laut Pasifik menyediakan ikan laut segar terbaik tanpa perlu banyak rekayasa bumbu.",
      },
      {
        category: "Budaya Jamuan",
        title: "Barapen Lambang Persaudaraan",
        text: "Memasak bersama menggunakan batu kali yang dibakar membara di lubang tanah, menjadi lambang perdamaian antarsuku dan rasa syukur akbar kepada semesta.",
      },
      {
        category: "Cerita & Cita Rasa",
        title: "Filosofi Menghormati Alam Sebagai Ibu",
        text: "Hanya memanen bahan pangan secukupnya untuk keluarga hari itu. Papeda lembut disiram kuah ikan kuning asam kunyit menyajikan kemurnian rasa alam asli.",
      },
    ],
  },
];
