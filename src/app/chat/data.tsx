const thaiWords = [
  "สวัสดี",
  "นี่คือ",
  "ฉันชื่อ",
  "แล้ว",
  "สวัสดีครับ",
  "คุณชื่ออะไร",
  "ยินดีต่อ",
  "เราเห็น",
  "บทเรียนที่",
  "อ่านหนังสือเรื่อง",
  "ดีที่ไหน",
  "เรื่อง",
  "ถ้า",
  "เราสามารถ",
  "ถ้าเรา",
  "สามารถ",
  "แล้วทำได้",
  "การเรียน",
  "อยากเรียน",
  "อยาก",
  "สอบ",
  "ถ้าเรา",
  "เรียน",
  "อย่าง",
  "ดี",
  "ง่าย",
  "ทำได้",
  "เรา",
  "สามารถ",
  "ทำได้",
  "เรียน",
  "อย่าง",
  "ดี",
  "สบาย",
  "เรา",
  "สามารถ",
  "ทำได้",
  "หาก",
  "เรา",
  "สามารถ",
  "ทำได้",
  "เรียน",
  "อย่าง",
  "ดี",
  "ง่าย",
  "ทำได้",
  "เรา",
  "สามารถ",
  "ทำได้",
  "เรียน",
  "อย่าง",
  "ดี",
  "ง่าย",
  "ทำได้",
];

const userNames = [
  "กว่าดุ",
  "กินงง",
  "กินงงแมว",
  "ต้นหนา",
  "ตะกร้า",
  "แมวเย็น",
  "แมวเย็นคนหนึ่ง",
  "แมวเย็นคนสอง",
  "แมวเย็นคนสาม",
  "แมวเย็นคนสี่",
];

const randomUserName = () => {
  const index = Math.floor(Math.random() * userNames.length);
  return userNames[index];
};

const randomThaiWord = () => {
  const index = Math.floor(Math.random() * thaiWords.length);
  return thaiWords[index];
};

const randomBobMessage = () => {
  const index = Math.floor(Math.random() * thaiWords.length);
  return `${thaiWords[index]} ${thaiWords[index]}`;
};

const Massages = Array.from({ length: 10 }, (_, i) => ({
  id: `${i + 1}`,
  send: randomUserName(),
  recive: "Bob",
  detail: Array.from({ length: Math.floor(Math.random() * 5) + 1 }, (_, j) => ({
    id: `${i + 1}-${j + 1}`,
    message:
      j % 2 === 0
        ? `${randomThaiWord()} ${randomThaiWord()}`
        : randomBobMessage(),
    sendby: randomUserName(),
    reciveby: "Bob",
    date: new Date(
      new Date().getTime() -
        Math.floor(Math.random() * 10) * 24 * 60 * 60 * 1000
    )
      .toISOString()
      .slice(0, 10),
  })).sort((a, b) => (a.id > b.id ? 1 : -1)),
})).map((message) => {
  message.detail = message.detail.map((detail) => {
    if (detail.sendby === "Bob") {
      detail.message = `อ่านหนังสือเรื่อง${detail.message}`;
    }
    return detail;
  });
  return message;
});

export default Massages;
