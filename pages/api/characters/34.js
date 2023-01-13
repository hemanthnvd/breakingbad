export default function handler(req, res) {
  res.status(200).json([
    {
      char_id: 34,
      name: "Emilio Koyama",
      birthday: "Unknown",
      occupation: ["Low-level meth distributor"],
      img: "https://web.archive.org/web/20220811172853/https://vignette.wikia.nocookie.net/trbreakingbad/images/9/9c/Emilio.jpeg/revision/latest?cb=20161029192022",
      status: "Deceased",
      nickname: "Emilio",
      appearance: [1],
      portrayed: "John Koyama",
      category: "Breaking Bad",
      better_call_saul_appearance: [],
    },
  ]);
}
