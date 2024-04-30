const names = [
  "กรกฤต",
  "ชวัทดา",
  "ชัชวิฐ",
  "ชาญสุวรรณ",
  "ณัฐวิชชช",
  "ณัฐวิชญา",
  "ณัฐวิชญิต",
  "ณัฐวิชยุทธ",
  "ณัฐวิชรัตน์",
  "ณัฐวิชวุฒิ",
];

const randomUserName = () => {
  const index = Math.floor(Math.random() * names.length);
  return names[index];
};

const Massages = [
  {
    id: "1",
    send: randomUserName(),
    recive: "Bob",
    detail: [
      {
        id: "1",
        message: "สวัสดี",
        sendby: randomUserName(),
        reciveby: "Bob",
        date: "2022-01-01",
      },
      {
        id: "2",
        message: "สวัสดี",
        sendby: "Bob",
        reciveby: randomUserName(),
        date: "2022-01-02",
      },
      {
        id: "3",
        name: randomUserName(),
        message: "สวัสดี",
        sendby: randomUserName(),
        reciveby: "Bob",
        date: "2022-01-03",
      },
      {
        id: "4",
        name: "Bob",
        message: "สวัสดี",
        sendby: randomUserName(),
        reciveby: "Bob",
        date: "2022-01-04",
      },
      {
        id: "5",
        name: randomUserName(),
        message: "สวัสดี",
        sendby: randomUserName(),
        reciveby: "Bob",
        date: "2022-01-04",
      },
    ].sort((a, b) => (a.id > b.id ? 1 : -1)),
  },
  {
    id: "2",
    send: randomUserName(),
    recive: "Bob",
    detail: [
      {
        id: "6",
        message: "สวัสดี",
        sendby: randomUserName(),
        reciveby: "Bob",
        date: "2022-01-05",
      },
      {
        id: "7",
        message: "สวัสดี",
        sendby: "Bob",
        reciveby: randomUserName(),
        date: "2022-01-06",
      },
      {
        id: "8",
        name: randomUserName(),
        message: "สวัสดี",
        sendby: randomUserName(),
        reciveby: "Bob",
        date: "2022-01-07",
      },
      {
        id: "9",
        name: "Bob",
        message: "สวัสดี",
        sendby: randomUserName(),
        reciveby: "Bob",
        date: "2022-01-08",
      },
      {
        id: "10",
        name: randomUserName(),
        message: "สวัสดี",
        sendby: randomUserName(),
        reciveby: "Bob",
        date: "2022-01-08",
      },
    ].sort((a, b) => (a.id > b.id ? 1 : -1)),
  },
];

export default Massages;
