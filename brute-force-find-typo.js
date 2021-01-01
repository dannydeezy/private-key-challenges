/**
 * Finds a single typo in a WIF-encoded private key but brute-force swapping
 * out each valid character until it finds a valid checksum.
 * 
 * Usage:
 * 
 * npm i
 * node brute-force-find-typo.js 5Jhacv9gEyp7yosCeq1zgRRQSitGZZ3Z2NbgKG9BFXHW16iYU4z
 */

const bitcoin = require('bitcoinjs-lib')

// Read in the private key from the command line
const keyWithTypo = process.argv[2]

// Define the valid Base58 characters.
const BASE_58_CHARACTERS = [
    'A', 'a', 'B', 'b', 'C', 'c', 'D', 'd',
    'E', 'e', 'F', 'f', 'G', 'g', 'H', 'h',
    'I', 'i', 'J', 'j', 'K', 'k', 'L', 'l',
    'M', 'm', 'N', 'n', 'O', 'o', 'P', 'p',
    'Q', 'q', 'R', 'r', 'S', 's', 'T', 't',
    'U', 'u', 'V', 'v', 'W', 'w', 'X', 'x',
    'Y', 'y', 'Z', 'z', '1', '2', '3', '4', '6', '7', '8', '9'  ]

// Helper function to replace a single character. Returns an edited copy of the string.
function replaceAt(str, index, replacement) {
    return str.substr(0, index) + replacement + str.substr(index + replacement.length);
}

// For each position in the private key (starting at the second), we replace the character
// with every valid Base58 character until we find a valid private key.
for (let index = 1; index < keyWithTypo.length; index++) {    
    for (const character of BASE_58_CHARACTERS) {
        try {
            let keyWithTypoCopy = keyWithTypo
            let modifiedKey = replaceAt(keyWithTypoCopy, index, character)
            // The following line with throw an error if the modifiedKey has an invalid checksum.
            const keypair = bitcoin.ECPair.fromWIF(modifiedKey)
            // If we get this far, then we've found a key with a valid checksum, so we print it out.
            console.log(`\nFound valid WIF private key: ${modifiedKey}`)
            console.log(`by replacing '${keyWithTypo[index]}' with '${character}' at position ${index}`)
            const addressObject = bitcoin.payments.p2pkh({ pubkey: keypair.publicKey })
            console.log(`Address: ${addressObject.address}\n`)
        } catch(err) {
            // If there's an error then we do nothing and let the looping continue.
        }
    }
}
