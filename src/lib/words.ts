import { WORDS } from '../constants/wordlist'
import { VALIDGUESSES } from '../constants/validGuesses'
import { DEFS } from '../constants/definitionlist'

export const isWordInWordList = (word: string) => {
  return WORDS.includes(word) || VALIDGUESSES.includes(word)
}

export const isWinningWord = (word: string) => {
  return solution === word
}

export const getWordOfDay = () => {
  // January 1, 2022 Game Epoch
  const epochMs = new Date('January 1, 2022 00:00:00').valueOf()
  const now = Date.now()
  const msInDay = 86400000
  const index = Math.floor((now - epochMs) / msInDay)
  const nextday = (index + 1) * msInDay + epochMs

    return {
      //
    solution: WORDS[index % WORDS.length],
    solutionIndex: index,
    tomorrow: nextday,
    solutionDefinition: DEFS[index % WORDS.length],
    wordLength: WORDS[index % WORDS.length].length,
  }
}

export const getClosestWord = (word: string) => {


    var sortedWords = WORDS.sort((n1, n2) => {

        if (n1.length != wordLength) {
            return 999
        }
        else if (n2.length != wordLength) {
            return -999
        }

        return levenshtein(word, n1) - levenshtein(word, n2);
    
    })
    return sortedWords[0]
}

export const { solution, solutionIndex, tomorrow, solutionDefinition, wordLength } = getWordOfDay()

function levenshtein(a: string, b: string) {
    if (a.length == 0) return b.length;
    if (b.length == 0) return a.length;

    if (a.length > b.length) {
        var tmp = a;
        a = b;
        b = tmp;
    }

    var row = [];

    for (var i = 0; i <= a.length; i++) {
        row[i] = i;
    }

    for (var i = 1; i <= b.length; i++) {
        var prev = i;
        for (var j = 1; j <= a.length; j++) {
            var val;
            if (b.charAt(i - 1) == a.charAt(j - 1)) {
                val = row[j - 1];
            } else {
                val = Math.min(row[j - 1] + 1,
                    prev + 1,    
                    row[j] + 1); 
            }
            row[j - 1] = prev;
            prev = val;
        }
        row[a.length] = prev;
    }
    return row[a.length];
}