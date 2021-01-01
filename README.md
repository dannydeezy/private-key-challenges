## Helper Tools for Private Key Challenges!

Follow [@dannydiekroeger](https://twitter.com/dannydiekroeger) on twitter to get notified about the next challenge

#### Installation
```
npm i
```

### Challenge 1:
[Find typo in private key](https://twitter.com/dannydiekroeger/status/1344898855997825035?s=20)

The `check-prv.js` script will brute force check every character and try replacing it with
all the other valid Base-58 characters. Once it finds a valid WIF-encoded private key, it prints
out the answer.

Usage:

```
node check-prv.js 5Jhacv9gEyp7yosCeq1zgRRQSitGZZ3Z2NbgKG9BFXHW16iYU4z
```
