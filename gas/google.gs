/**
 * @param date YYYY/MM/DD
 * @param unit 1-5
 * @param subject DB25など
 * @param room 教室
 * @param comment その他大事なコメント群
 */
function doGet(e) {
  switch (e.parameter.method) {
    case "createEvent":
      return createEvent(e.parameter.date, e.parameter.unit, e.parameter.subject, e.parameter.room, e.parameter.comment)
    default:
      return json(log("メソッドが指定されていません", 500))
  }
}

/**
 *
 * @param date YYYY/MM/DD
 * @param unit
 * @param subject
 * @param room
 * @param comment
 */
function createEvent(date, unit, subject, room, comment) {

  if (date === undefined || unit === undefined || subject === undefined || room === undefined) {
    return json(log("引数が足りていません date unit subject room を全て指定してください", 500));
  }

  var description = "教室: " + room;
  if (comment !== undefined) {
    description += "\n" + comment;
  }
  var calendar = CalendarApp.getDefaultCalendar();
  Logger.log(calendar.getName());//test
  Logger.log("test"); //test
  // カレンダーオブジェクトの取得
  var calendar = CalendarApp.getDefaultCalendar();
  var time = _createUnit(date, unit);
  var option = {
    description: description,
    location: '〒530-0001 大阪府大阪市北区梅田３丁目３−１'
    // guests: 指定の仕方今度調べる
    // sendInvites: bool (招待の送信)
  }
  calendar.createEvent(subject, time.start, time.end, option);
  const result = {
    "result": log("追加処理が完了しました。",200),
    "subject": subject,
    "time": {
      "start": time.start,
      "end": time.end
    },
    "room": room
  }
  return json(result);
}

function _createUnit(date, unit) {
  var time = {};
  switch (unit) {
    case 1:
      time.start = '09:00:00';
      time.end = '10:30:00';
      break;
    case 2:
      time.start = '10:45:00';
      time.end = '12:15:00';
      break;
    case 3:
      time.start = '13:05:00';
      time.end = '14:35:00';
      break;
    case 4:
      time.start = '14:50:00';
      time.end = '16:20:00';
      break;
    case 5:
      time.start = '16:30:00';
      time.end = '18:00:00';
      break;
    default:
      time.start = '16:30:00';
      time.end = '18:00:00';
  }
  time.start = new Date(date + ' ' + time.start);
  time.end = new Date(date + ' ' + time.end);
  return time;
}

/**
 * 冗長なパラメータをjsonだけで変換する。
 * @param object Object(JSON)
 */
function json(object) {
  return ContentService.createTextOutput(JSON.stringify(object));
}

function log(message, code) {
  return { message: message, code: code };
}