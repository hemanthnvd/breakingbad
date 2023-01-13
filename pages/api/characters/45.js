export default function handler(req, res) {
  res.status(200).json([
    {
      char_id: 45,
      name: "Tomás Cantillo",
      birthday: "Unknown",
      occupation: ["Kid", "Gang member for a rival dealer in ABQ"],
      img: "https://web.archive.org/web/20220811172853/https://vignette.wikia.nocookie.net/breakingbad/images/e/ec/Tomas.png/revision/latest?cb=20130131043014",
      status: "Deceased",
      nickname: "Andrea's brother",
      appearance: [2, 3],
      portrayed: "Angelo Martinez",
      category: "Breaking Bad",
      better_call_saul_appearance: [],
    },
  ]);
}
