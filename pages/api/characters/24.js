export default function handler(req, res) {
  res.status(200).json([
    {
      char_id: 24,
      name: "Brock Cantillo",
      birthday: "Unknown",
      occupation: ["Kid"],
      img: "https://web.archive.org/web/20220811172853/https://vignette.wikia.nocookie.net/breakingbad/images/9/97/Brock.png/revision/latest?cb=20170725193144",
      status: "Alive",
      nickname: "Brock",
      appearance: [3, 4, 5],
      portrayed: "Ian Posada",
      category: "Breaking Bad",
      better_call_saul_appearance: [],
    },
  ]);
}
