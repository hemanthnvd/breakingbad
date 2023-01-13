export default function handler(req, res) {
  res.status(200).json([
    {
      char_id: 38,
      name: "Ken",
      birthday: "Unknown",
      occupation: ["Stock Broker"],
      img: "https://web.archive.org/web/20220811172853/https://vignette.wikia.nocookie.net/breakingbad/images/8/8c/Ken.png/revision/latest?cb=20170721163649",
      status: "Alive",
      nickname: "Ken Wins",
      appearance: [1],
      portrayed: "Kyle Bornheimer",
      category: "Breaking Bad",
      better_call_saul_appearance: [],
    },
  ]);
}
