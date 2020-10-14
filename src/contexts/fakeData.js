import uuid from 'uuid/v1';

export const s = [
  {
    id: uuid(),
    name: 'Ekaterina Tankova',
    sexe: 'M',
    phone: '304-428-3097'
  },
  {
    id: uuid(),
    name: 'Cao Yu',
    sexe: 'F',
    phone: '304-428-3097'
  },
  {
    id: uuid(),
    name: 'Alexa Richardson',
    sexe: 'M',
    phone: '304-428-3097'
  },
  {
    id: uuid(),
    name: 'Anje Keizer',
    sexe: 'M',
    phone: '304-428-3097'
  },
  {
    id: uuid(),
    name: 'Clarke Gillebert',
    sexe: 'M',
    phone: '304-428-3097'
  },
  {
    id: uuid(),
    name: 'Adam Denisov',
    sexe: 'M',
    phone: '304-428-3097'
  },
  {
    id: uuid(),
    name: 'Ava Gregoraci',
    sexe: 'F',
    phone: '304-428-3097'
  },
  {
    id: uuid(),
    name: 'Emilee Simchenko',
    sexe: 'M',
    phone: '304-428-3097'
  },
  {
    id: uuid(),
    name: 'Kwak Seong-Min',
    sexe: 'F',
    phone: '304-428-3097'
  },
  {
    id: uuid(),
    name: 'Merrile Burgett',
    sexe: 'M',
    phone: '304-428-3097',
    codeClasse: 'AA11',
    noStudent: 'AA111001'
  }
];

export const payments = [
  {
    id: uuid(),
    date: '07/08/2020',
    libelle: 'Acompte sur frais scolaire 2020-2021',
    debit: null,
    credit: 25
  },
  {
    id: uuid(),
    date: '20/08/2020',
    libelle: 'Acompte sur frais scolaire 2020-2021',
    debit: null,
    credit: 50
  },
  {
    id: uuid(),
    date: '24/08/2020',
    libelle: 'Acompte sur frais scolaire 2020-2021',
    debit: null,
    credit: 25
  },
  {
    id: uuid(),
    date: '27/08/2020',
    libelle: 'Acompte sur frais scolaire 2020-2021',
    debit: null,
    credit: 50
  }
];

export const studentClasses = [
  {
    id: uuid(),
    codeClasse: 'AA11',
    noClasse: 1000,
    classe: 'MATERNELLE 3ANS A',
    fees: 230
  },
  {
    id: uuid(),
    codeClasse: 'AA21',
    noClasse: 1000,
    classe: 'MATERNELLE 4ANS A',
    fees: 230
  },
  {
    id: uuid(),
    codeClasse: 'AA31',
    noClasse: 1000,
    classe: 'MATERNELLE 5ANS A',
    fees: 230
  },
  {
    id: uuid(),
    codeClasse: 'BA11',
    noClasse: 1000,
    classe: 'PRIMAIRE CLASSE 1ere A',
    fees: 210
  },
  {
    id: uuid(),
    codeClasse: 'BA21',
    noClasse: 1000,
    classe: 'PRIMAIRE CLASSE 2e A',
    fees: 210
  },
  {
    id: uuid(),
    codeClasse: 'BA31',
    noClasse: 1000,
    classe: 'PRIMAIRE CLASSE 3e A',
    fees: 210
  },
  {
    id: uuid(),
    codeClasse: 'BA41',
    noClasse: 1000,
    classe: 'PRIMAIRE CLASSE 4e A',
    fees: 210
  },
  {
    id: uuid(),
    codeClasse: 'BA51',
    noClasse: 1000,
    classe: 'PRIMAIRE CLASSE 5e A',
    fees: 210
  },
  {
    id: uuid(),
    codeClasse: 'BA61',
    noClasse: 1000,
    classe: 'PRIMAIRE CLASSE 6e A',
    fees: 210
  },
  {
    id: uuid(),
    codeClasse: 'BA71',
    noClasse: 1000,
    classe: 'PRIMAIRE CLASSE 7e A',
    fees: 230
  },
  {
    id: uuid(),
    codeClasse: 'BA81',
    noClasse: 1000,
    classe: 'PRIMAIRE CLASSE 8e A',
    fees: 230
  },
  {
    id: uuid(),
    codeClasse: 'CA11',
    noClasse: 1000,
    classe: 'HUMANITES CC CLASSE 3e A',
    fees: 270
  },
  {
    id: uuid(),
    codeClasse: 'CA21',
    noClasse: 1000,
    classe: 'HUMANITES CC CLASSE 4e A',
    fees: 270
  },
  {
    id: uuid(),
    codeClasse: 'CA31',
    noClasse: 1000,
    classe: 'HUMANITES CC CLASSE 5e A',
    fees: 270
  },
  {
    id: uuid(),
    codeClasse: 'CA41',
    noClasse: 1000,
    classe: 'HUMANITES CC CLASSE 6e A',
    fees: 400
  },
  {
    id: uuid(),
    codeClasse: 'CB11',
    noClasse: 1000,
    classe: 'HUMANITES SC CLASSE 3e A',
    fees: 245
  },
  {
    id: uuid(),
    codeClasse: 'CB21',
    noClasse: 1000,
    classe: 'HUMANITES SC CLASSE 4e A',
    fees: 245
  },
  {
    id: uuid(),
    codeClasse: 'CB31',
    noClasse: 1000,
    classe: 'HUMANITES SC CLASSE 5e A',
    fees: 245
  },
  {
    id: uuid(),
    codeClasse: 'CB41',
    noClasse: 1000,
    classe: 'HUMANITES SC CLASSE 6e A',
    fees: 370
  },
  {
    id: uuid(),
    codeClasse: 'CC11',
    noClasse: 1000,
    classe: 'HUMANITES HP CLASSE 3e A',
    fees: 245
  },
  {
    id: uuid(),
    codeClasse: 'CC21',
    noClasse: 1000,
    classe: 'HUMANITES HP CLASSE 4e A',
    fees: 245
  },
  {
    id: uuid(),
    codeClasse: 'CC31',
    noClasse: 1000,
    classe: 'HUMANITES HP CLASSE 5e A',
    fees: 245
  },
  {
    id: uuid(),
    codeClasse: 'CC41',
    noClasse: 1000,
    classe: 'HUMANITES HP CLASSE 6e A',
    fees: 370
  },
  {
    id: uuid(),
    codeClasse: 'CD11',
    noClasse: 1000,
    classe: 'HUMANITES COMM. GEST CLASSE 3e A',
    fees: 270
  },
  {
    id: uuid(),
    codeClasse: 'CD21',
    noClasse: 1000,
    classe: 'HUMANITES COMM. GEST CLASSE 4e A',
    fees: 270
  },
  {
    id: uuid(),
    codeClasse: 'CD31',
    noClasse: 1000,
    classe: 'HUMANITES COMM. GEST CLASSE 5e A',
    fees: 270
  },
  {
    id: uuid(),
    codeClasse: 'CD41',
    noClasse: 1000,
    classe: 'HUMANITES COMM. GEST CLASSE 6e A',
    fees: 400
  },
  {
    id: uuid(),
    codeClasse: 'CE11',
    noClasse: 1000,
    classe: 'HUMANITES LITT CLASSE 3e A',
    fees: 245
  },
  {
    id: uuid(),
    codeClasse: 'CE21',
    noClasse: 1000,
    classe: 'HUMANITES LITT CLASSE 4e A',
    fees: 245
  },
  {
    id: uuid(),
    codeClasse: 'CE31',
    noClasse: 1000,
    classe: 'HUMANITES LITT CLASSE 5e A',
    fees: 245
  },
  {
    id: uuid(),
    codeClasse: 'CE41',
    noClasse: 1000,
    classe: 'HUMANITES LITT CLASSE 6e A',
    fees: 370
  }
];

studentClasses.forEach(student => {
  let students = [];
});

export const students = getGeratedStudent();

function getGeratedStudent() {
  let students = [];
  studentClasses.forEach(student => {
    students = [
      ...students,
      ...studentsGenerator(student.codeClasse, student.classe)
    ];
  });
  return students;
}

function studentsGenerator(codeClasse, classes, studentNb = 10) {
  return Array(studentNb)
    .fill(null)
    .map((val, idx) => ({
      id: uuid(),
      name: `JOHN DOE ${classes}`,
      sexe: 'M',
      phone: '304-428-3097',
      codeClasse,
      noStudent: `${codeClasse}${1000 + idx + 1}`
    }));
}
