
// some of methods used with regular expressions

let re;
// Literal Characters
  re = /hello/;
  re = /hello/i;

  // Meta characters
  re = /^h/i;
  re = /h$/i;
  re = /^hello$/i;  // this implies the string must start + end with the regular expressions
  re = /h.llo/i; // matches any  one character
  re = /h*llo/i; // matches any one or more character
  re = /gre?a?y/i;  // optional characters
  re = /gre?a?y\?/i;  // Escape characters in this case escaping ?


  // Brackets[] - Character Sets
  re = /gr[ea]y/i;  // must be e or a
  re = /gr[^i]y/i;  // any thing except i works or matches
  re = /[A-Z]ry/;  // matches any uppercase letters
  re = /[A-Za-z]ry/;  // matches any  letters
  re = /[0-9]ry/;  // matches any digits from 0 to 9

  //  Braces{} - Quantifiers
  re = /hel{2}o/i;  // there must be two l's
  re = /hel{2,}o/i;  // there must be at least two l's
  re = /hel{2,4}o/i;  // there must be at least two and maz of 4 l's


 // the string to match and log result
 const str = 'Helo';
 const result = re.exec(str);
 console.log(result);

  function reTest(re, str) {
    if(re.test(str)) {
      console.log(`${str} matches ${re.source}`);
    } else {
      console.log(`${str} does not match ${re.source}`);
    }
  }

  reTest(re, str);