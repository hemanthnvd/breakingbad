export default function handler(req, res) {
  res.status(200).json([
    {
      char_id: 15,
      name: "Todd Alquist",
      birthday: "Unknown",
      occupation: ["Lab Assistant", "Enforcer", "Meth Cook"],
      img: "https://web.archive.org/web/20220811172853/https://vignette.wikia.nocookie.net/breakingbad/images/9/95/Todd_brba5b.png/revision/latest?cb=20130717134303",
      status: "Deceased",
      nickname: "Ricky Hitler",
      appearance: [5],
      portrayed: "Jesse Plemons",
      category: "Breaking Bad",
      better_call_saul_appearance: [],
    },
  ]);
}
