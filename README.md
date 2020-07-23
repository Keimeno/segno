# segno - deno validation library

segno (Segnosaurus). Validation library for Deno 🦕. Enforcing a high security standard.

## Example

```ts
import { segno, isIP } from 'https://deno.land/x/segno/mod.ts';

console.log(segno.isEmail('foo@example.org')); // true
console.log(isIP('127.0.0.1')); // true
```

## Documentation

A documentation is currently still WIP. But please check our website https://segno.js.org for now.

## License

[![License](https://img.shields.io/:license-MIT-blue.svg)](http://badges.mit-license.org)

- **[MIT license](https://github.com/Keimeno/segno/blob/master/LICENSE)**
- Copyright 2020 © Constantin Metz
- Copyright 2018 © Chris O'Hara <cohara87@gmail.com>
