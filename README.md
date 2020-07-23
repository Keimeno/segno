# segno - deno validation library

segno (Segnosaurus). Validation library for Deno 🦕. Enforcing a high security standard.

## Notice

This library is partially ported from [validator.js](https://github.com/validatorjs/validator.js), please check their [license](https://github.com/validatorjs/validator.js/tree/master/LICENSE).

## Example

```ts
import { segno, isIP } from 'https://deno.land/x/segno/mod.ts';

console.log(segno.isEmail('foo@example.org')); // true
console.log(isIP('127.0.0.1')); // true
```

## Documentation

A detailed documentation will follow. For now please visit the [validator.js docs](https://github.com/validatorjs/validator.js#validators). However, keep in mind that EVERYTHING was converted to camelCase. Meaning all options must be written in camelCase. Also; not all functions may be exactly implemented as described there.
