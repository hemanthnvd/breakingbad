export default function handler(req, res) {
  res.status(200).json([
    {
      char_id: 19,
      name: "Huell Babineaux",
      birthday: "Unknown",
      occupation: ["Bodyguard"],
      img: "https://web.archive.org/web/20220811172853/https://vignette.wikia.nocookie.net/breakingbad/images/c/c1/4x11_-_Huell.png/revision/latest?cb=20130913100459&path-prefix=es",
      status: "Alive",
      nickname: "Huell",
      appearance: [4, 5],
      portrayed: "Lavell Crawford",
      category: "Breaking Bad",
      better_call_saul_appearance: [],
    },
  ]);
}
