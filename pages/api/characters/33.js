export default function handler(req, res) {
  res.status(200).json([
    {
      char_id: 33,
      name: "No-Doze",
      birthday: "Unknown",
      occupation: ["Juarez Cartel Lieutenant"],
      img: "https://web.archive.org/web/20220811172853/https://vignette.wikia.nocookie.net/breakingbad/images/c/ca/No_Doze_2.png/revision/latest?cb=20131014073210",
      status: "Deceased",
      nickname: "No-Doze",
      appearance: [1, 2],
      portrayed: "Cesar Garcia",
      category: "Breaking Bad",
      better_call_saul_appearance: [],
    },
  ]);
}
