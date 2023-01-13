export default function handler(req, res) {
  res.status(200).json([
    {
      char_id: 42,
      name: "Clovis",
      birthday: "Unknown",
      occupation: ["Mechanic"],
      img: "https://web.archive.org/web/20220811172853/https://vignette.wikia.nocookie.net/breakingbad/images/0/0f/Clovis.JPG/revision/latest?cb=20100415221013",
      status: "Alive",
      nickname: "Clovis",
      appearance: [2, 3],
      portrayed: "Tom Kiesche",
      category: "Breaking Bad",
      better_call_saul_appearance: [],
    },
  ]);
}
