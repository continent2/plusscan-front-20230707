const trimtimestr = (str) => str.split(/\./)[0];

function timeByLocation(time) {
  time = time.replace("T", " ");
  const setLocTime = new Date(time);
  setLocTime.setHours(setLocTime.getHours() + 9);
  return setLocTime.toLocaleString();
}

function putCommaAtPrice(data) {
  let str;

  if (data) {
    data = Number(data);

    // if (data < 1000)
    //   return data.toFixed(3);

    str = data.toString().split(".");

    str[0] = `${str[0]}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return str.join(".");
  }
}

const strDot = (str, startNum, endNum) =>
  `${str.substr(0, startNum)}...${str.substr(str.length - endNum)}`;

export { trimtimestr, timeByLocation, putCommaAtPrice, strDot };
