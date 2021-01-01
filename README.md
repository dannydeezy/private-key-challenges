## Helper Tools for Private Key Challenges!

Follow [@dannydiekroeger](https://twitter.com/dannydiekroeger) on twitter to get notified about the next challenge

### Installation
Requires [NodeJS](https://nodejs.org/en/)

Open your terminal and enter the following:
```
git clone https://github.com/dannydeezy/private-key-challenges.git
cd private-key-challenges
npm i
```

### Challenge 1 Solution:
[Find typo in private key](https://twitter.com/dannydiekroeger/status/1344898855997825035?s=20)

The `brute-force-find-typo.js` script will brute force check every character and try replacing it with
all the other valid Base-58 characters. Once it finds a valid WIF-encoded private key, it prints
out the answer.

Usage:

```
node brute-force-find-typo.js 5Jhacv9gEyp7yosCeq1zgRRQSitGZZ3Z2NbgKG9BFXHW16iYU4z
```

Once you find the valid WIF private key, you can [import it into a wallet like Electrum](https://bitcoinelectrum.com/importing-your-private-keys-into-electrum/#:~:text=Just%20select%20%E2%80%9CImport%20bitcoin%20addresses,Wallet%20Import%20Format%20(WIF).)
