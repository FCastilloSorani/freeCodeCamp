function convertToRoman(num) {

    function decompose(num) {
        if (num <= 0) {
            return false;
        }
        return num.toString()
            .split('')
            .map(function (e, i, a) {
                return e * Math.pow(10, a.length - i - 1);
            })
            .filter(e => e != 0);
    }

    function getLength(num) {
        return num.toString().length;
    }

    let TENS = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];
    let HUNDREDS = ["X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
    let THOUSANDS = ["C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM", "M"];

    let res = [];
    let decomposed = decompose(num);

    for (let i = 0; i < decomposed.length; i++) {
        switch (getLength(decomposed[i])) {
            case 1:
                res.push(TENS[decomposed[i] - 1]);
                break;
            case 2:
                res.push(HUNDREDS[(decomposed[i] / 10) - 1]);
                break;
            case 3:
                res.push(THOUSANDS[(decomposed[i] / 100) - 1]);
                break;
            default:
                let stop = decomposed[i] / 1000;
                for (let j = 0; j < stop; j++) {
                    res.push("M");
                }
                break;
        }
    }

    return res.join('');
}

convertToRoman(5000);