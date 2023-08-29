
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



 // the string to match and log result
 const str = 'GrTy';
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