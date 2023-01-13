export default function handler(req, res) {
  res.status(200).json([
    {
      char_id: 3,
      name: "Skyler White",
      birthday: "08-11-1970",
      occupation: ["House wife", "Book Keeper", "Car Wash Manager", "Taxi Dispatcher"],
      img: "https://web.archive.org/web/20220811172853/https://s-i.huffpost.com/gen/1317262/images/o-ANNA-GUNN-facebook.jpg",
      status: "Alive",
      nickname: "Sky",
      appearance: [1, 2, 3, 4, 5],
      portrayed: "Anna Gunn",
      category: "Breaking Bad",
      better_call_saul_appearance: [],
    },
  ]);
}
