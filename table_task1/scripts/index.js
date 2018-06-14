"use strict";

const button = document.getElementById("create_table");
const parentElement = document.getElementById("parent__table");

button.addEventListener("click", () => {
  const rank = document.getElementById("input_rank").value;

  if (rank < 3 || rank < 21) {
    let matrix = new SpiralMatrix(rank).getSpiralMatrix();
    createTable(rank, matrix, parentElement);
  } else {
    alert("Rank table from 3 to 20");
  }
});

function createTable(coll, matrix, parentElement) {
  let strHtmlTable = "<table><tbody>";

  for (let i = 0; i < coll; i++) {
    strHtmlTable += "<tr>";

    for (let j = 0; j < coll; j++) {
      strHtmlTable += "<td>" + matrix[i][j] + "</td>";
    }

    strHtmlTable += "</tr>";
  }

  strHtmlTable += "</tbody></table>";
  parentElement.innerHTML = strHtmlTable;
}

class SpiralMatrix {
  constructor(rank) {
    this.step = 0;
    this.rank = rank - 1;
    this.endNum = Math.pow(rank, 2);
    this.round = 0;
    this.i = 0;
    this.j = 0;
    this.number = 1;
    this.matrixNums = [];
  }

  createMatrix() {
    let arr = [];

    for (let i = 0; i <= this.rank; i++) {
      arr[i] = [];
    }

    return arr;
  }

  __getNextStep() {
    if (this.i === this.round && this.j === this.round) {
      this.step = 0;
      this.round++;
      this.rank--;
      this.i = this.j = this.round;
    }
  }

  __defineDirection() {
    if (this.i === this.round && this.j < this.rank) this.j++;
    else if (this.i < this.rank && this.j === this.rank) this.i++;
    else if (this.i === this.rank && this.j > this.round) this.j--;
    else if (this.i > this.round && this.j === this.round) this.i--;
  }

  __fillMatrix() {
    this.matrixNums[this.i][this.j] = this.number;
    console.log("num", this.number);
    this.number++;
    this.step++;
  }

  getSpiralMatrix() {
    if (this.matrixNums.length === 0) {
      this.matrixNums = this.createMatrix(this.rank);
    }

    while (this.number <= this.endNum) {
      this.__fillMatrix();
      this.__defineDirection();
      this.__getNextStep();
    }

    return this.matrixNums;
  }
}
