const trimtimestr = (str) => str.split(/\./)[0];

const generaterandomstr_charset=(length,charsetcode)=>{let characters
	if(charsetcode==='base58') {characters='123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ'}
	else if (charsetcode==='numbers'){characters='0123456789'}
	else if (charsetcode==='lower'){characters='abcdefghijklmnopqrstuvwxyz'}
	else if (charsetcode==='hex')  {characters='abcdef0123456789ABCDEF0123456789'}
	else {characters='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'}
	var charactersLength = characters.length;let result=''
	for ( var i = 0; i < length; i++ ) {		 result += characters.charAt(Math.floor(Math.random() * charactersLength))	}
	return result
}
const generaterandomint=(min,max)=>{
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
const generaterandomnumber=(min,max)=>{
	return Math.random() * (max - min) + min;
	// return Math.floor(Math.random() * (max - min)) + min;
}

function timeByLocation(time) {
  time = time.replace("T", " ");
  const setLocTime = new Date(time);
  setLocTime.setHours(setLocTime.getHours() + 9);
  return setLocTime.toLocaleString();
}
function putCommaAtPrice(data) {
  let str;
  if (data !== null) {
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
const LOGGER=console.log
export { trimtimestr
	, generaterandomstr_charset
	, generaterandomint
	, generaterandomnumber
	, timeByLocation, putCommaAtPrice, strDot 
	, LOGGER
}
