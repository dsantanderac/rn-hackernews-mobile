import moment from "moment";

export const dateFormat = (date: Date) => {
  const dateNow = moment();
  const dateDiff = moment.duration(dateNow.diff(date));
  const hours = dateDiff.asHours();
  var dateStr: string;
  switch (true) {
    case hours < 1:
      const minutes = Math.trunc(dateDiff.asMinutes());
      dateStr = `${minutes}m`;
      break;
    case hours >= 1 && hours < 24:
      dateStr = `${
        hours.toFixed(1).endsWith(".0") ? hours.toFixed() : hours.toFixed(1)
      }h`;
      break;
    case hours >= 24 && hours < 48:
      dateStr = "Yesterday";
      break;
    default:
      dateStr = moment(date).format("dd-MM-yy HH:mm").toString();
      break;
  }
  return dateStr;
};
