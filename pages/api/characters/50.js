export default function handler(req, res) {
  res.status(200).json([
    {
      char_id: 50,
      name: "Juan Bolsa",
      birthday: "Unknown",
      occupation: ["Mexican drug cartel boss"],
      img: "https://web.archive.org/web/20220811172853/https://vignette.wikia.nocookie.net/breakingbad/images/3/38/Bolsa.png/revision/latest?cb=20180825204033",
      status: "Deceased",
      nickname: "Don Juan",
      appearance: [3, 4],
      portrayed: "Javier Grajeda",
      category: "Breaking Bad",
      better_call_saul_appearance: [],
    },
  ]);
}
