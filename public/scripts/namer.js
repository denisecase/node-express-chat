/**
* @desc Create random name
* @return string - name
*/
export const createName = () => {
  const possibleCon = 'bcdghjklmnprstv'
  const possibleVowel = 'aeiou'
  let text = ''
  text += possibleCon.charAt(Math.floor(Math.random() * possibleCon.length)).toUpperCase()
  text += possibleVowel.charAt(Math.floor(Math.random() * possibleVowel.length))
  text += possibleCon.charAt(Math.floor(Math.random() * possibleCon.length))
  text += possibleVowel.charAt(Math.floor(Math.random() * possibleVowel.length))
  text += possibleCon.charAt(Math.floor(Math.random() * possibleCon.length))
  return text
}