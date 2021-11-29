[![Run Tests](https://github.com/carlo-tronnberg/carlo_t_yb_MineSweep_Exam/actions/workflows/main.yml/badge.svg)](https://github.com/carlo-tronnberg/carlo_t_yb_MineSweep_Exam/actions/workflows/main.yml/badge.svg)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=carlo-tronnberg_carlo_t_yb_MineSweep_Exam&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=carlo-tronnberg_carlo_t_yb_MineSweep_Exam)
[![Bugs](https://sonarcloud.io/api/project_badges/measure?project=carlo-tronnberg_carlo_t_yb_MineSweep_Exam&metric=bugs)](https://sonarcloud.io/summary/new_code?id=carlo-tronnberg_carlo_t_yb_MineSweep_Exam)
[![Code Smells](https://sonarcloud.io/api/project_badges/measure?project=carlo-tronnberg_carlo_t_yb_MineSweep_Exam&metric=code_smells)](https://sonarcloud.io/summary/new_code?id=carlo-tronnberg_carlo_t_yb_MineSweep_Exam)
[![Lines of Code](https://sonarcloud.io/api/project_badges/measure?project=carlo-tronnberg_carlo_t_yb_MineSweep_Exam&metric=ncloc)](https://sonarcloud.io/summary/new_code?id=carlo-tronnberg_carlo_t_yb_MineSweep_Exam)
[![Technical Debt](https://sonarcloud.io/api/project_badges/measure?project=carlo-tronnberg_carlo_t_yb_MineSweep_Exam&metric=sqale_index)](https://sonarcloud.io/summary/new_code?id=carlo-tronnberg_carlo_t_yb_MineSweep_Exam)
[![Vulnerabilities](https://sonarcloud.io/api/project_badges/measure?project=carlo-tronnberg_carlo_t_yb_MineSweep_Exam&metric=vulnerabilities)](https://sonarcloud.io/summary/new_code?id=carlo-tronnberg_carlo_t_yb_MineSweep_Exam)
[![Maintainability Rating](https://sonarcloud.io/api/project_badges/measure?project=carlo-tronnberg_carlo_t_yb_MineSweep_Exam&metric=sqale_rating)](https://sonarcloud.io/summary/new_code?id=carlo-tronnberg_carlo_t_yb_MineSweep_Exam)
[![Reliability Rating](https://sonarcloud.io/api/project_badges/measure?project=carlo-tronnberg_carlo_t_yb_MineSweep_Exam&metric=reliability_rating)](https://sonarcloud.io/summary/new_code?id=carlo-tronnberg_carlo_t_yb_MineSweep_Exam)
[![Security Rating](https://sonarcloud.io/api/project_badges/measure?project=carlo-tronnberg_carlo_t_yb_MineSweep_Exam&metric=security_rating)](https://sonarcloud.io/summary/new_code?id=carlo-tronnberg_carlo_t_yb_MineSweep_Exam)
[![Open Issues](https://img.shields.io/github/issues/carlo-tronnberg/badge.svg)](https://github.com/carlo-tronnberg/carlo_t_yb_MineSweep_Exam/issues)

[![Build Status](coverage/badge-branches.svg)](coverage/badge-branches.svg)
[![Build Status](coverage/badge-functions.svg)](coverage/badge-functions.svg)
[![Build Status](coverage/badge-lines.svg)](coverage/badge-lines.svg)
[![Build Status](coverage/badge-statements.svg)](coverage/badge-statements.svg)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

[Metrics report](metrics.md) -
[Complexity report](complexity-report.md)

# MineSweeper - yellow belt XPFarm Exam (Carlo Trönnberg)

carlo_t_yb_MineSweep_Exam

---

## Installation

To set up the project, you need node installed.

To install dependencies, run the following:

```sh
npm install
```

## Run the tests

To run the tests, there is a script in the project root called `test`. It calculates code coverage, incorporates
watch mode, and prints in verbose mode, so all test file's test report will be visible. Alternatively, you
can achieve the same with the command the script contains:

```sh
npm test -- --watchAll --collect-coverage --verbose
```

# Stories with few scenarios

## UAT Scenario

As a gamer, I want to play a game of Mine Sweeper where I'll win if I clear the board without stepping on a bomb.

### User story #1 - Game Board Creation

```
As a gamer
I want to get a board of squares with hidden mines
So that I play the game
```

#### Scenario #1

```
  Given a Game Board width and height
  When starting the game
  Then I want to create the empty Game Board

Game Board dimensions to test with:
  1x1
  2x1
  1x2
  2x2
  3x3
```

#### Scenario #2

```
  Given a Game Board width and height
  When starting the game
  Then I want to create the empty Game Board and get it back as a string

    3x2
    +-+-+-+
    | | | |
    +-+-+-+
    | | | |
    +-+-+-+

    3x3
    +-+-+-+
    | | | |
    +-+-+-+
    | | | |
    +-+-+-+
    | | | |
    +-+-+-+
```

#### Scenario #3

```
  Given a Game Board
  When starting the game
  Then I want to create the hidden Bombs Board, matching the Game Board dimension

```

#### Scenario #4

```
  Given a Game Board,
  When trying to create a Bomb Board with a different dimension,
  Then the bomb board will not be saved
```

### User story #2 - Allow stepping into a square

```
As a gamer
I want to be able to step into a virgin square
So that I can make a step
```

#### Scenario #1

```
  Given the Game Board
  When stepping on a square
  Then the game should know whether I am allowed to do so
```

#### Scenario #2

```
  Given the Game Board
  When trying to step into an already set square
  Then the game should track it and stop further attempts
```

### User story #3 - Game Over - Lose the game by stepping on a bomb

```
As a gamer
I want to lose the game if I step on a bomb
So that I can try again with a new game
```

#### Scenario #1

```
  Given the Game Board
  When stepping on a square
  Then the game should know whether I am allowed to do so
```

#### Scenario #2

```
  Given the Game Board
  When stepping on a square without a bomb
  Then the game with continue
```

#### Scenario #3

```
  Given the Game Board
  When stepping on a square having a bomb
  Then it will be Game Over
```

### User story #4 - Get the number of neighbouring bombs when stepping on a clean square

```
As a gamer
I want to know how many bombs are around me
So that I can try to avoid them
```

#### Scenarios #1-5

```
  Given the Game Board
  When stepping on a square without a bomb but having neighboring bomb(s)
  Then I want to see a count of neighboring bombs in the square

    Bombs:
    [
      [0, 0, 0, 0],
      [1, 1, 0, 0],
      [1, 1, 0, 0],
      [0, 1, 0, 1],
    ]

    - 1. Step on (0,0) -> 3 neighbours
    - 2. Step on (0,3) -> 2 neighbours
    - 3. Step on (2,1) -> 4 neighbours
    - 4. Step on (2,3) -> 1 neighbour
    - 5. Step on (3,3) -> 0 neighbours (but stored as '_')
```

### User story #5 - Mark the bombs around

```
As a gamer
I want to be able to mark the potential bombs on the board
So that I can work on my winning moves
```

#### Scenario #1

```
  Given the Game Board
  When identifying a potential bomb square
  Then I want to be able to mark it with a '*'
```

#### Scenario #2

```
  Given the Game Board
  When changing my mind about a potential bomb square
  Then I want to be able to unmark a marked square
```

### User story #6 - Game Victory

```
As a gamer
I want to win the game when all squares without bombs have been cleared
So that I can feel proud of my achievement
```

#### Scenario #1

```
  Given the Game Board
  When stepping on the last bomb-free square
  Then I want to win the Game
```

### User story #7 - Massive cleaning and victory

```
As a gamer
I want to clear all the neighboring empty squares until a neighboring bomb is found when stepping on an empty square
So that I can avoid trivial and tedious steps and complete the game quicker
```

#### Scenario #1

```
  Given the Game Board
  When stepping on a clear square with no neighboring bombs
  Then all neighboring squares with no bombs shall be cleared
```
