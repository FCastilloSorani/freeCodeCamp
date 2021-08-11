function rot13(str) {

    /*
    A B C D E F G H I J K L M
    | | | | | | | | | | | | | 
    N O P Q R S T U V W X Y Z
    */
  
    const AM = "ABCDEFGHIJKLM".split('');
    const NZ = "NOPQRSTUVWXYZ".split('');
  
    let char = str.split('');
    let res = [];
    let regex = /\W/;
  
    for (let i = 0; i < char.length; i++) {
      if(regex.test(char[i])) {
        res.push(char[i])
      }
      if(AM.indexOf(char[i]) != -1) {
        res.push(NZ[AM.indexOf(char[i])])
      }
      if(NZ.indexOf(char[i]) != -1) {
        res.push(AM[NZ.indexOf(char[i])])
      }
    }
  
    return res.join('');
  }
  
  rot13("SERR YBIR?"); // FREE LOVE?