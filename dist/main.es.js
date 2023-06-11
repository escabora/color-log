const colors = {
  Reset: "\x1B[0m",
  Bright: "\x1B[1m",
  Dim: "\x1B[2m",
  Underscore: "\x1B[4m",
  Blink: "\x1B[5m",
  Reverse: "\x1B[7m",
  Hidden: "\x1B[8m",
  FgBlack: "\x1B[30m",
  FgRed: "\x1B[31m",
  FgGreen: "\x1B[32m",
  FgYellow: "\x1B[33m",
  FgBlue: "\x1B[34m",
  FgMagenta: "\x1B[35m",
  FgCyan: "\x1B[36m",
  FgWhite: "\x1B[37m",
  FgGray: "\x1B[90m",
  BgBlack: "\x1B[40m",
  BgRed: "\x1B[41m",
  BgGreen: "\x1B[42m",
  BgYellow: "\x1B[43m",
  BgBlue: "\x1B[44m",
  BgMagenta: "\x1B[45m",
  BgCyan: "\x1B[46m",
  BgWhite: "\x1B[47m",
  BgGray: "\x1B[100m",
  error: "\x1B[1m\x1B[41m\x1B[37m",
  success: "\x1B[1m\x1B[42m",
  warning: "\x1B[1m\x1B[43m\x1B[37m"
};
const infoDefault = ["success", "warning", "error"];
const capitalize = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};
function log(info, data, types) {
  const lowerCaseInfo = info.toLowerCase();
  const capitalizeInfo = capitalize(info);
  if (infoDefault.includes(lowerCaseInfo)) {
    const typeLog = [lowerCaseInfo];
    console.log(`${typeLog.map((type) => colors[type]).join("")}${capitalizeInfo}\x1B[0m`, data);
  } else {
    console.log(`${types.map((type) => colors[type]).join("")}${info}\x1B[0m`, data);
  }
}
export { log as default };
