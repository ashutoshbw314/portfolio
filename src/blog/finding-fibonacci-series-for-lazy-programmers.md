---
title: Finding fibonacci series for lazy programmers
date: 2021-05-03 17:51:00
tags:
  - JavaScript
  - problem solving
  - lazy coding
---

Are you finding a super short solution to find the fibonacci series? Then read on. 

Three months ago, on one lazy afternoon, I said to myself, let's write the program to find the fibonacci series lazily, I mean with as less code as I can think of. Here is what I've figured out:

```javascript
const fibSeries = n =>  n < 2n ? [[0n], [0n, 1n]][n] : (s => [...s, s.pop() + s.pop()])(fibSeries(n - 1n));
console.log(fibSeries(500n).join("\n"));
```

Isn't that fascinating? Is it the shortest possible way to find fibonacci series in JavaScript? Who knows? If anyone knows any solution shorter than this, I would love to know about it.
