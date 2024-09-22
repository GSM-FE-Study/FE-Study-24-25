function solution(letter) {
    var answer = '';
    let morse = [ 
        '.-','-...','-.-.','-..','.','..-.',
        '--.','....','..','.---','-.-','.-..',
        '--','-.','---','.--.','--.-','.-.',
        '...','-','..-','...-','.--','-..-',
        '-.--','--..'
    ]
    const splitedLetter = letter.split(" ");
    let i = 0;
    while(i < splitedLetter.length){
        if(morse.includes(splitedLetter[i])){
                answer += String.fromCharCode(morse.indexOf(splitedLetter[i]) + 97)
        }
        i++;
    }
    return answer;
}