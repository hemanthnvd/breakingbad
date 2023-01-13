export default function handler(req, res) {
  res.status(200).json([
    {
      char_id: 31,
      name: "Adam Pinkman",
      birthday: "Unknown",
      occupation: ["unknown"],
      img: "https://web.archive.org/web/20220811172853/https://vignette.wikia.nocookie.net/breakingbad/images/c/c9/AdamPinkman.png/revision/latest?cb=20141117180836&path-prefix=es",
      status: "Alive",
      nickname: "Jesse's dad",
      appearance: [1, 2, 3],
      portrayed: "Michael Bofshever",
      category: "Breaking Bad",
      better_call_saul_appearance: [],
    },
  ]);
}
