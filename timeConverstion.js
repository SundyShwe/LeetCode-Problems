function timeConversion(s) {
  // Write your code here

  let day_time = s.slice(-2);
  let time = s.slice(0, s.length - 2);
  let hour = time.split(":");
  if (day_time === "AM") {
    if (Number(hour[0]) === 12) {
      hour[0] = "00";
      return hour.join(":");
    } else return time;
  } else {
    if (Number(hour[0]) === 12) {
      return time;
    } else {
      hour[0] = Number(hour[0]) + 12;
      return hour.join(":");
    }
  }
}
let s1 = "07:05:45PM";
let s2 = "12:40:22AM";
let s3 = "12:40:22PM";

const result = timeConversion(s3);
console.log(result);
