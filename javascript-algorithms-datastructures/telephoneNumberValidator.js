function telephoneCheck(str) {

    let regex = /(^(1?)(\s?)([\s]?)((\(\d{3}\))|(\d{3}))([\s]?)([\s-]?)(\d{3})([\s-]?)(\d{4})+$)/;
  
    return regex.test(str);
  }
  
  telephoneCheck("(275)76227382"); // false