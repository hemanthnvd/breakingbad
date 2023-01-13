export default function handler(req, res) {
  res.status(200).json([
    {
      char_id: 36,
      name: "Wendy S.",
      birthday: "Unknown",
      occupation: ["Prostitute"],
      img: "https://web.archive.org/web/20220811172853/https://vignette.wikia.nocookie.net/breakingbad/images/c/cc/Wendy.jpg/revision/latest?cb=20170721162715",
      status: "Alive",
      nickname: "Wendy",
      appearance: [1, 2, 3],
      portrayed: "Julie Minesci",
      category: "Breaking Bad",
      better_call_saul_appearance: [],
    },
  ]);
}
