export default function handler(req, res) {
  res.status(200).json([
    {
      char_id: 28,
      name: "Gonzo",
      birthday: "Unknown",
      occupation: ["Tuco's Bodyguard"],
      img: "https://web.archive.org/web/20220811172853/https://vignette.wikia.nocookie.net/breakingbad/images/d/d6/Gonzo.JPG/revision/latest?cb=20100415212944",
      status: "Deceased",
      nickname: "Gonzo",
      appearance: [1, 2],
      portrayed: "Jesus, Payan, Jr.",
      category: "Breaking Bad",
      better_call_saul_appearance: [],
    },
  ]);
}
