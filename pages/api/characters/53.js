export default function handler(req, res) {
  res.status(200).json([
    {
      char_id: 53,
      name: "Pamela",
      birthday: "Unknown",
      occupation: ["Attorney"],
      img: "https://web.archive.org/web/20220811172853/https://res.cloudinary.com/dwvrok1le/image/upload/v1539373707/bbb6muek0tcmbc3g2sog.jpg",
      status: "Alive",
      nickname: "Skyler's attorney",
      appearance: [3],
      portrayed: "Julie Dretzin",
      category: "Breaking Bad",
      better_call_saul_appearance: [],
    },
  ]);
}
