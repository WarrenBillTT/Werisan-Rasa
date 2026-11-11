import type { Region } from "../types";
import monas from "../assets/monas.webp";
import jamGadang from "../assets/jam-gadang.webp";
import lawangSewu from "../assets/lawang-sewu.webp";
import gedungSate from "../assets/gedung-sate.webp";
import borobudur from "../assets/borobudur.webp";

export const regions: Region[] = [
  {
    id: "jakarta",
    city: "Jakarta",
    province: "DKI Jakarta",
    landmark: "Monumen Nasional",
    image: monas,
    accent: "#d9962b",
    intro:
      "Ibu kota adalah pertemuan banyak dapur. Rasa Betawi tumbuh dari pelabuhan, pasar, dan meja keluarga yang selalu terbuka bagi pendatang.",
    dishes: [
      {
        name: "Soto Betawi",
        description:
          "Kuah santan dan susu yang gurih dengan potongan daging sapi, disajikan bersama emping, acar, dan sambal.",
        tags: ["Gurih", "Berkuah"],
      },
      {
        name: "Kerak Telor",
        description:
          "Omelet ketan yang dipanggang di atas bara, ditaburi kelapa sangrai dan ebi hingga harum.",
        tags: ["Gurih", "Jajanan"],
      },
      {
        name: "Gado-Gado",
        description:
          "Sayuran rebus, lontong, tahu, dan telur yang disiram saus kacang kental dengan sentuhan asam manis.",
        tags: ["Segar", "Nabati"],
      },
    ],
  },
  {
    id: "bukittinggi",
    city: "Bukittinggi",
    province: "Sumatra Barat",
    landmark: "Jam Gadang",
    image: jamGadang,
    accent: "#c4512f",
    intro:
      "Di tanah Minang, rasa dibangun dengan kesabaran: santan, cabai, dan rempah dimasak perlahan sampai menyatu dan tahan lama.",
    dishes: [
      {
        name: "Rendang",
        description:
          "Daging yang dimasak lama dalam santan dan bumbu hingga pekat, kering, dan dalam rasanya.",
        tags: ["Pedas", "Kaya Rempah"],
      },
      {
        name: "Sate Padang",
        description:
          "Sate daging dengan kuah kental berwarna kuning yang hangat, pedas, dan beraroma rempah.",
        tags: ["Pedas", "Bakar"],
      },
      {
        name: "Nasi Kapau",
        description:
          "Nasi dengan aneka gulai dan lauk yang ditata bertingkat, khas pasar Bukittinggi.",
        tags: ["Gulai", "Hidangan Utama"],
      },
    ],
  },
  {
    id: "semarang",
    city: "Semarang",
    province: "Jawa Tengah",
    landmark: "Lawang Sewu",
    image: lawangSewu,
    accent: "#d9803f",
    intro:
      "Kota pelabuhan tempat budaya Jawa, Tionghoa, dan Eropa bertemu, menghasilkan rasa yang manis, gurih, dan penuh kejutan.",
    dishes: [
      {
        name: "Lumpia Semarang",
        description:
          "Gulungan berisi rebung, ayam, atau udang yang renyah di luar, disantap dengan saus manis dan acar.",
        tags: ["Renyah", "Jajanan"],
      },
      {
        name: "Tahu Gimbal",
        description:
          "Tahu goreng, lontong, dan gimbal udang dengan siraman bumbu kacang petis yang khas.",
        tags: ["Gurih", "Kacang"],
      },
      {
        name: "Nasi Ayam",
        description:
          "Nasi gurih dengan suwiran ayam, opor, telur pindang, dan sambal goreng labu siam.",
        tags: ["Gurih", "Hidangan Utama"],
      },
    ],
  },
  {
    id: "bandung",
    city: "Bandung",
    province: "Jawa Barat",
    landmark: "Gedung Sate",
    image: gedungSate,
    accent: "#b86a3a",
    intro:
      "Tanah Pasundan dengan udara sejuk dan dapur yang kreatif, dari kudapan hangat di sore hari hingga mi yang menenangkan.",
    dishes: [
      {
        name: "Batagor",
        description:
          "Bakso tahu goreng yang renyah, disiram bumbu kacang dan kecap, ditambah perasan jeruk limau.",
        tags: ["Renyah", "Kacang"],
      },
      {
        name: "Mie Kocok",
        description:
          "Mi kuning dalam kuah kaldu sapi yang bening, bersama kikil, tauge, dan bawang goreng.",
        tags: ["Hangat", "Berkuah"],
      },
      {
        name: "Surabi",
        description:
          "Pancake tepung beras dan santan yang dimasak di atas tungku tanah liat, dengan kuah kinca atau oncom.",
        tags: ["Manis", "Jajanan"],
      },
    ],
  },
  {
    id: "borobudur",
    city: "Magelang",
    province: "Jawa Tengah",
    landmark: "Candi Borobudur",
    image: borobudur,
    accent: "#4a8294",
    intro:
      "Di kaki stupa tertua dan terbesar, rasa Jawa tampil tenang: manis yang lembut, santan yang pelan, dan kesederhanaan yang disengaja.",
    dishes: [
      {
        name: "Gudeg",
        description:
          "Nangka muda yang dimasak berjam-jam dengan santan dan gula kelapa, ditemani ayam, telur, dan krecek.",
        tags: ["Manis", "Santan"],
      },
      {
        name: "Getuk Magelang",
        description:
          "Singkong rebus yang ditumbuk lembut dengan gula dan kelapa parut, warna-warni dan legit.",
        tags: ["Manis", "Jajanan"],
      },
      {
        name: "Kupat Tahu",
        description:
          "Ketupat dan tahu goreng dengan bumbu kacang yang lembut dan taburan bawang goreng.",
        tags: ["Gurih", "Kacang"],
      },
    ],
  },
];
