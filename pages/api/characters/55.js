export default function handler(req, res) {
  res.status(200).json([
    {
      char_id: 55,
      name: "Stacey Ehrmantraut",
      birthday: "Unknown",
      occupation: ["Mother"],
      img: "https://web.archive.org/web/20220811172853/https://vignette.wikia.nocookie.net/breakingbad/images/b/b3/StaceyEhrmantraut.png/revision/latest?cb=20150310150049",
      status: "Alive",
      nickname: "Mike's daugter-in-law",
      appearance: [3],
      portrayed: "Kerry Condon",
      category: "Breaking Bad, Better Call Saul",
      better_call_saul_appearance: [1, 2, 3, 4, 5],
    },
  ]);
}
