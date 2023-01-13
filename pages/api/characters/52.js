export default function handler(req, res) {
  res.status(200).json([
    {
      char_id: 52,
      name: "Kaylee Ehrmantraut",
      birthday: "Unknown",
      occupation: ["Kid"],
      img: "https://web.archive.org/web/20220811172853/https://vignette.wikia.nocookie.net/breakingbad/images/c/cc/Kaylee.png/revision/latest?cb=20170810082843",
      status: "Alive",
      nickname: "Mike's Granddaughter",
      appearance: [3, 5],
      portrayed: "Kaija Rose Bales",
      category: "Breaking Bad",
      better_call_saul_appearance: [],
    },
  ]);
}
