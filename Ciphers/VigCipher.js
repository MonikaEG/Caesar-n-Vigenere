const alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

function rot3(str) { // Tager en string og konverterer til en ny string med ændrede pladser.

    let accumulator = ""; // Laver en accumulator, som starter som et empty string, men bliver gradvist fyldt op.

    // Loop gennem strengen
    for (let i = 0; i < str.length; i++) {
        const char = str[i]; // Current character

        // Tjekker, om den valgte character er inkluderet i alfabetet, og derfor kan bekræfte, om det er et bogstav.
        const isLetter = alphabet.includes(char);

        if (isLetter === false) {
            accumulator += char; // Tilføj character til accumulator, hvis char ikke er et bogstav.
        } else {
            // Hvis det ER et bogstav...
            const charIndex = alphabet.findIndex((c) => c === char); // Finder index position af en given char. Fx A = 0 og B = 1

            // Jeg bruger Vigenère cipheren MON, så der skal roteres 12, 14 og 13 pladser.
            // VIRKER IKKE: Rykker alle med 13 :'(
            accumulator += alphabet[charIndex + 12, charIndex + 14, charIndex + 13] || // Eller...
                alphabet[charIndex - 12, charIndex - 14, charIndex - 13];
        }
      
    }
    return accumulator;
}
console.log(rot3('MONIKA'));

