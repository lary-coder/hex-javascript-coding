interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: "Andy",
  lastName: "Reis",
  age: 20,
  location: "New York"
}

const student2: Student = {
  firstName: "Jon",
  lastName: "Jhons",
  age: 20,
  location: "New York"
}

const studentsList: Array<Student> = [student1, student2];

const table: HTMLTableElement = document.createElement('table');
const tbody: HTMLTableSectionElement = table.createTBody();
const thead: HTMLTableSectionElement = table.createTHead();

studentsList.forEach((student) => {
  let row: HTMLTableRowElement = tbody.insertRow();
  for (let [key, value] of (<any>Object).entries(student)) {
    if (key === 'firstName' || key === 'location'){
      let cell: HTMLTableCellElement = row.insertCell();
      let text = document.createTextNode(value);
      cell.appendChild(text);
    }
  }
})

document.body.appendChild(table);