const initialState = {
  name: "Guest",
  number: 0,
  progress: false,
  messageState: {
    open: false,
    message: ""
  },
  culender: {
    subject: "XX99",
    // DATE
    date: "YYYY/MM/DD",
    // 教室
    room: "121",
    // 単元
    unit: 1,
    // その他コメント
    comment: ""
  }
};

export default initialState;
