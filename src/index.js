module.exports = function check(str, bracketsConfig) {
  const bracketPairs = { '[':']', '{':'}', '(':')' };                              
  const closingBrackets = new Set(Object.values(bracketPairs)); 
  function bracketsAreBalanced(str) {                                            
    const open = [] // stack of (closing) brackets that need to be closed                       
    for (char of str) {                                                        
        if (closingBrackets.has(char)) {                                        
            if (char === open[open.length-1]) open.pop()                        
            else return false;                                                  
        }                                                                       
        if (char in bracketPairs) open.push(bracketPairs[char])                 
    }                                                                           
    return open.length === 0                                                    
}    
if (bracketsAreBalanced(str) !== bracketsConfig) {
  return true;
};
return false;
}       