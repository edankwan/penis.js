![Penis.JS](https://raw.githubusercontent.com/edankwan/penis.js/master/assets/logo.png)

Comparing variables has never been that easy and clear like using **penis.js**. You can use it in your websites or in your node application.

This library also has ReactJS bindings with the [CondomJS](https://github.com/nipatiitti/condomjs) wrapper component.

Usage
---
Traditional comparing:
```js
var a = 'foo';
var b = 'bar';
if(a === b) alert('true')
```

penis.js comparing:
```js
penis.setBalls('foo');
penis.setHead('bar');
if(B===D) alert('true');
```

Soft or hard penis comparing:
```js
penis.setBalls('0');
penis.setHead(0);

var softPenisCompareResult = B==D; // true
var hardPenisCompareResult = B===D; // false

// or...
var continent = B===D ? 'Africa' : 'Asia';
```

Penis is compatible with AMD, commonjs, or can be just included as a script tag in a browser.

You can install penis as a node module with:
```
npm install edankwan/penis.js
```

You can then use it by requiring it:

```js
var penis = require('penis');
```

[Bower](http://bower.io/) is also supported:
```
bower install penis.js
```

If your browser supports [Object.defineProperty](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty#Browser_compatibility), you can use the `balls` and `head` properties to set these properties instead:

```js
penis.balls = '1';
penis.head = 1;

B==D; // true
B===D; // false
```

When you've finished with your current penis, you can reset to get your global `B` and `D` back:

```js
D = 'dick';

penis.setHead('Crabapple');

penis.reset();

D == 'dick' // true;
```

Caution
---
penis.js uses the global variables "B" and "D" such that you can use the awesome command "B==D" to compare 2 variables everywhere.

Testing
---
run `npm test` or `testling` to run the test suite.

License
---
penis.js is currently under [**Giant Penis License (GPL)**](http://giant-penis-license.org) which is a deformed MIT License including penis text art.
