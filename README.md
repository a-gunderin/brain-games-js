# Brain-games

[![Maintainability](https://api.codeclimate.com/v1/badges/201f9e92620b93c9565f/maintainability)](https://codeclimate.com/github/a-gunderin/frontend-project-lvl1/maintainability) 
&nbsp;
[![Node CI](https://github.com/a-gunderin/frontend-project-lvl1/workflows/Node%20CI/badge.svg?branch=master)](https://github.com/a-gunderin/frontend-project-lvl1/actions)

"Brain Games" is a set of five console games, built on the principle of popular mobile brain training applications. Each game asks questions that need to be answered correctly. After three correct answers, the game is considered to be completed. Wrong answers end the game and suggest replaying it.

Games: 

* Calculator. Arithmetic expressions to be evaluated.
* Progression. Find missing numbers in a sequence of numbers.
* Find an even number.
* Find the greatest common factor.
* Find a prime number.

## Requirements

Node.js version 13 or higher

## Setup for Linux / macOS systems

```sh
$ make install
```

<a href="https://asciinema.org/a/381792" target="_blank"><img src="https://asciinema.org/a/381792.svg" /></a>

## Run games on Linux / macOS systems

```sh
$ make brain-calc
```
```sh
$ make brain-even
```
```sh
$ make brain-gcd
```
```sh
$ make brain-prime
```
```sh
$ make brain-progression
```

<a href="https://asciinema.org/a/381795" target="_blank"><img src="https://asciinema.org/a/381795.svg" /></a>

## Setup for Windows

```sh
$ npm ci
```

<a href="https://asciinema.org/a/381797" target="_blank"><img src="https://asciinema.org/a/381797.svg" /></a>

## Run games on Windows

```sh
$ node bin/brain-calc.js
```
```sh
$ node bin/brain-even.js
```
```sh
$ node bin/brain-gcd.js
```
```sh
$ node bin/brain-prime.js
```
```sh
$ node bin/brain-progression.js
```

<a href="https://asciinema.org/a/381798" target="_blank"><img src="https://asciinema.org/a/381798.svg" /></a>
