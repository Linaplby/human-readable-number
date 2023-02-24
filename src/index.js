module.exports = function toReadable(num) {
    let result = "";

    const number = ["", " one", " two", " three", " four", " five", " six", " seven", " eight", " nine", " ten", " eleven",
        " twelve", " thirteen", " fourteen", " fifteen", " sixteen", " seventeen", " eighteen", " nineteen", ];
    const score = [ "",  "",  " twenty", " thirty", " forty", " fifty", " sixty", " seventy", " eighty", " ninety",];

    const hund = " hundred";
    const numToString = num.toString();
    if (num === 0) {
        return (result = "zero");
    }
    if (num >= 1 && num < 20) {
        result = number[num];
    } else if (num >= 20 && num <= 99) {
        if (numToString.length == 2) {
            result += score[parseInt(numToString.charAt(0))];
            result += number[parseInt(numToString.charAt(1))];
        }
    } else if (numToString.length == 3) {
        result = number[parseInt(numToString.charAt(0))] + hund;
        if (parseInt(numToString.charAt(1)) < 2) {
            result +=
                number[parseInt(numToString.charAt(1) + numToString.charAt(2))];
        } else {
            result += score[parseInt(numToString.charAt(1))];
            result += number[parseInt(numToString.charAt(2))];
        }
    }
    return result.slice(1);
};
   
