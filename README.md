# rock-paper-scissors

Learning Typescript by building a Rock, Paper, Scissors game based on FreeCodeCamp's Rock Paper Scissors 

## Setup

Typescript and Nodemon installed globally converting to Javascript OOTB.

## Goals

1. Get a better understanding of the difference between Typescript and Javascript without getting too deep into a rabbit hole
2. Make something aesthetically interesting

## TODO

### Basic functionality

- [x] Build function to get a random computer result
- [x] Build function to return true if player wins
- [x] Get the Round results of randomComputerResult() and playerHasWon()
  - [x] If player has won, add to their playerScore
  - [x] If computer has won, add to computerScore
- [X] Display results
  - [X] After 3 rounds display player or computer wins
  - [X] player choice
  - [X] computer choice
  - [X] Update player score
  - [X] Update computer score
~~  - [ ] Display illustrations~~
- [X] Reset game

### Getting fancy

- [ ] Find a more acceptable way to DOM manipulate rather than .innerText everywhere
- [X] Choose number of rounds
- [X] Display number of rounds, player won/computer won/tied round
- [X] BUG: If user starts with a "First to (3)", plays until player or computer gets 2 or <3 (like Player: 2, Computer: 3), then changes the "First to" input to (1), and keeps playing, both player and computer keep getting points counted towards and nobody wins.
- [ ] Display illustrations

### Nice to have: Illustrations

- [ ] Rock beats scissors
- [ ] Scissors beats Paper
- [ ] Paper beats Rock
