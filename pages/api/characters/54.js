export default function handler(req, res) {
  res.status(200).json([
    {
      char_id: 54,
      name: "Duane Chow",
      birthday: "Unknown",
      occupation: ["Owner of Golden Moth Chemical"],
      img: "https://web.archive.org/web/20220811172853/https://res.cloudinary.com/dwvrok1le/image/upload/v1539373871/ssk1t4hvo9tmhvdt5hcn.jpg",
      status: "Deceased",
      nickname: "Chow",
      appearance: [3, 5],
      portrayed: "James Ning",
      category: "Breaking Bad",
      better_call_saul_appearance: [],
    },
  ]);
}
