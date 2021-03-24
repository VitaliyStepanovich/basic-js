const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {

  alphabetArr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  square = [];  

  constructor(direct = true) {
    this.direct = direct;
  }
  
  creatSqrVigenere(alphabetArr) {
    for (var i = 0; i < alphabetArr.length; i++) {
      this.square[i] = alphabetArr.slice(i).concat(alphabetArr.slice(0, i));
    }
  }

  reverse (arr) {
    return arr.reverse();
  }

  encrypt(message, key) {   
    let encryptLetters = [];
    let encryptMessage = '';
    let coll = 0;
    let row = 0;
    let keyCount = 0;

    this.creatSqrVigenere(this.alphabetArr);
    message = message.toUpperCase();
    key = key.toUpperCase(); 

    if (!message || !key) return false;
    
    for (let i = 0; i < message.length; i++) {      
      coll = this.alphabetArr.indexOf(message[i]);
      row = this.alphabetArr.indexOf(key[keyCount]);
            
      if (coll !== -1 && row !== -1) {
        encryptLetters[i] = this.square[coll][row];
        keyCount = keyCount < key.length - 1 ? keyCount + 1 : 0;
      }
      else {
        encryptLetters[i] =  message[i];
      }

    }
    
    encryptLetters = this.direct == true ? encryptLetters : this.reverse(encryptLetters);
    encryptMessage = encryptLetters.join('');

    return encryptMessage;
  }    
  
  decrypt(cipher, key) {
    this.creatSqrVigenere(this.alphabetArr);
    cipher = cipher.toUpperCase();
    key = key.toUpperCase();    
    
    let decryptLetters = [];
    let decryptMessage = '';
    let coll = 0;
    let row = 0;
    let keyCount = 0;

    if (!cipher || !key) return false;

    for (let i = 0; i < cipher.length; i++) {
      row = this.alphabetArr.indexOf(key[keyCount]);
      coll = this.square[row].indexOf(cipher[i]);

      if (coll !== -1 && row !== -1) {
        decryptLetters[i] = this.alphabetArr[coll];        
        keyCount = keyCount < key.length - 1 ? keyCount + 1 : 0;
      }
      else {
        decryptLetters[i] = cipher[i];
      }

    }
    
    decryptLetters = this.direct == true ? decryptLetters : this.reverse(decryptLetters);
    decryptMessage = decryptLetters.join('');
    
    return decryptMessage;    
  }
}

module.exports = VigenereCipheringMachine;
