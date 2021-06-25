/*
You're given two lists -
list1: [[a,b],[c,d],[e,f]...]  ==> each tuple represents competing teams
list2: [0,1,0,1...] ==> who's the winner in each team. 0 indicates second team won, 1 indicates first team

Write a program that takes these two lists and return the winner.

Note: Each win earns 3 points.

E.g
list1 = [
  ["HTML", "C#"],
  ["C#", "Python"],
  ["Python", "HTML"],
];
list2 = [0, 0, 1];

Output: Python

 */

function tournamentWinner(competitions, results) {
  let teams = {};

  for (let i = 0; i < results.length; i++) {
    const [a, b] = competitions[i];
    if (results[i]) {
      if (a in teams) {
        teams[a] += 3;
      } else {
        teams[a] = 3;
      }
      if (!(b in teams)) {
        teams[b] = 0;
      }
    } else {
      if (b in teams) {
        teams[b] += 3;
      } else {
        teams[b] = 3;
      }
      if (!(a in teams)) {
        teams[a] = 0;
      }
    }
  }
  let largest = -1;
  let winner = "";

  for (let team in teams) {
    if (teams[team] > largest) {
      largest = teams[team];
      winner = team;
    }
  }

  return winner;
}

const competitions = [
  ["HTML", "C#"],
  ["C#", "Python"],
  ["Python", "HTML"],
];
const results = [0, 0, 1];

console.log(tournamentWinner(competitions, results));
