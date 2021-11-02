function itsAGoodWord( word ) {
    if ( word.length > 4 ) {
        console.log(word)
        return word;
    } else {
        getRandomWord();
    }
}

async function getRandomWord() {
    let response = await fetch('https://palabras-aleatorias-public-api.herokuapp.com/random');
    let palabra = await response.json();
    palabra = palabra.body.Word;
    return itsAGoodWord( palabra );
}

export {getRandomWord}

