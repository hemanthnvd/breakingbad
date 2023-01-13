export default function handler(req, res) {
  res.status(200).json([
    {
      char_id: 44,
      name: "Victor",
      birthday: "Unknown",
      occupation: ["Henchman of Gustavo Fring"],
      img: "https://web.archive.org/web/20220811172853/https://vignette.wikia.nocookie.net/breakingbad/images/4/48/Victor2.png/revision/latest?cb=20131009225027",
      status: "Deceased",
      nickname: "Victor",
      appearance: [2, 3, 4],
      portrayed: "Jeremiah Bitsui",
      category: "Breaking Bad",
      better_call_saul_appearance: [],
    },
  ]);
}
