export default function handler(req, res) {
  res.status(200).json([
    {
      char_id: 51,
      name: "Group Leader",
      birthday: "Unknown",
      occupation: ["Drug & Alcohol Rehabilitation Counselor"],
      img: "https://web.archive.org/web/20220811172853/https://vignette.wikia.nocookie.net/breakingbad/images/8/81/Group_Leader_Brown_Shirt_-_Kafkaesque.png/revision/latest?cb=20131025095333",
      status: "Alive",
      nickname: "Counselor",
      appearance: [3, 4],
      portrayed: "Jere Burns",
      category: "Breaking Bad",
      better_call_saul_appearance: [],
    },
  ]);
}
