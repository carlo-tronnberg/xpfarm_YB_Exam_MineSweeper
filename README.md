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

The exercise involves developing a Mine Sweeper game strictly adhering to the TDD, ATDD rules.

## Mine Sweeper - Game Rules:

You are presented with a board of squares. Some squares contain mines (bombs), others don't. If you step
on a square containing a bomb, you lose. If you manage to clear all the squares (without clicking on any
bombs) you win.

Clearing a square which doesn't have a bomb reveals the number of neighbouring squares containing bombs.
If you guess a square contains a bomb mark it with a flag.

A squares "neighbours" are the squares adjacent above, below, left, right, and all 4 diagonals. Squares on the
sides of the board or in a corner have fewer neighbors. The board does not wrap around the edges. If you
clear a square with 0 neighboring bombs, all its neighbors will automatically open; recursively.

The first square you open could be a bomb.

You don't have to mark all the bombs to win; you just need to open all non-bomb squares.

## UAT Scenarios:

### 1 – Game Board Creation phase:

```
+-+-+-+
| | | |
+-+-+-+
| | | |
+-+-+-+
| | | |
+-+-+-+

[Sandbox 3x3] Game created
```

### 2 – Game Over - Step on a bomb on 1;1

```
+-+-+-+
| | | |
+-+-+-+
| |X| |
+-+-+-+
| | | |
+-+-+-+

[Sandbox 3x3] BOOM! – Game Over.
```

### 3 – Clean square 0;0 and get the number of bombs around

```
+-+-+-+
| | | |
+-+-+-+
| | | |
+-+-+-+
|3| | |
+-+-+-+

[Sandbox 3x3] 3 bombs around your square.
```

### 4 – Mark the bombs around – What I expect after I marked the 3 squares as bombs [1;0 + 1;1 + 0;1]. +-+-+-+

```
| | | |
+-+-+-+
|_|_| |
+-+-+-+
|3|*| |
+-+-+-+

[Sandbox 3x3] Square flagged as bomb.
```

### 5 – Game Victory – After I cleared the all the squares [2;0 + 2;1 + 2;2 + 1;2 + 1;2]

```
+-+-+-+
|2|2|1|
+-+-+-+
|_|_|2|
+-+-+-+
|3|*|2|
+-+-+-+

[Sandbox 3x3] the land is cleared! GOOD JOB!
```

### 6 – Massive cleaning and victory clicking on 0;0

```
+-+-+-+
|_|1| |
+-+-+-+
|_|1|1|
+-+-+-+
|_|_|_|
+-+-+-+

[Sandbox 3x3] the land is cleared! GOOD JOB!
```

# Kata Objective:

The game runs in BOT mode to print on the screen all the moves until we got a victory or game over. The test
suite can simulate the game without having an executable. In that case the test suite will print on console
the scenario; or in a log file with a clean test report [red/green style].

## Scoring system:

```
1.  The kata must be stored in GitHub. (IBM or public)
2.  The first push must be an empty directory and it will start the graduation
3.  The graduation MUST BE DONE in a 2 hours timebox (4 pomodori)
4.  The code must be done in Solo mode (no pair, no mob)
5.  The code must be written during the graduation test (no copy & paste from past attempt)
6.  The repo must contain a NOTES.md: pair programming notes for every pomodoro
7.  The code must be 100% test covered
8.  Simple design & emerging architecture approach is a must
9.  Refactoring pillars [white & yellow belts]:
    o test suite as a book (DDD vocabulary)
    o code and test wording with a DDD vocabulary
    o code as a book (hidden complexity)
    o code and test complexity under 4 cyclomatic
    o no linter or check style errors
    o no code smells
10. The code must have a continuous build pipeline (CB) [TravisCI, Jenkins, CircleCI, etc.]
11. The CB on the last commit must be green (the test must be all green)
12. The code must be analyzed from the following tools:
    o Linter (git quality gate) o Check style (git quality gate)
    o SonarQube/SonarCloud.io
    o [Optional] CodeScene.io
13. The commit in GitHub must following a “Conventional Commits” approach blocking you to push on
    GitHub otherwise.
```

## KATA - Setup phase:

The kata can be done with all the automation you believe could be a helper to remove manual setup. For this
reason, you’re authorized to have initialization script/s that let you start code on a “boilerplate” in one click.
The boiler plate can initialize your development environment and project. The boilerplate CAN’T inject code
snippets relevant to solve your kata. The unique snippet you can inject into the boilerplate is to create a
src/dummy that expose a dummy and a test/dummy that has the unit test framework initialized to fail the
test with the dummy.

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
