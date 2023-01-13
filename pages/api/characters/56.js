export default function handler(req, res) {
  res.status(200).json([
    {
      char_id: 56,
      name: "Officer Saxton",
      birthday: "Unknown",
      occupation: ["APD Officer"],
      img: "https://web.archive.org/web/20220811172853/https://vignette.wikia.nocookie.net/breakingbad/images/f/f3/Officer_Saxton_-_I.F.T..png/revision/latest?cb=20131025090606",
      status: "Alive",
      nickname: "Saxton",
      appearance: [3],
      portrayed: "Stoney Westmoreland",
      category: "Breaking Bad",
      better_call_saul_appearance: [],
    },
  ]);
}
