//  Get Students with Names and Top Notes.

const students = [
  { name: "John", notes: [3, 5, 4] },
  { name: "Max", notes: [1, 4, 6] },
  { name: "Zygmund", notes: [1, 2, 3] },
];

function getStudentsWithNamesAndTopNotes(obj) {
  let topNotes = obj.map((elem) => {
    elem.notes.sort((a, b) => b - a);
    return {
      name: elem.name,
      topNotes: elem.notes[0],
    };
  });
  console.log(topNotes);
}

getStudentsWithNamesAndTopNotes(students);
