export default function handler(req, res) {
  res.status(200).json([
    {
      char_id: 116,
      name: "Eduardo Salamanca",
      birthday: "Unknown",
      occupation: ["Cartel Member"],
      img: "https://web.archive.org/web/20220811172853/https://vignette.wikia.nocookie.net/breakingbad/images/8/85/LaloProfileBCS.png/revision/latest?cb=20180925050152",
      status: "Alive",
      nickname: "Lalo",
      appearance: [],
      portrayed: "Tony Dalton",
      category: "Better Call Saul",
      better_call_saul_appearance: [4, 5],
    },
  ]);
}
