import { db } from "./firebase.js";
import {
  collection,
  getDocs
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const departmentSelect = document.getElementById("department");
const semesterSelect = document.getElementById("semester");
const subjectSelect = document.getElementById("subject");
const materialsDiv = document.getElementById("materials");

// Load Departments
async function loadDepartments() {
  const snapshot = await getDocs(collection(db, "departments"));
  snapshot.forEach(doc => {
    departmentSelect.innerHTML += `<option value="${doc.id}">${doc.id}</option>`;
  });
}

departmentSelect.addEventListener("change", async () => {
  semesterSelect.innerHTML = `<option value="">Select Semester</option>`;
  subjectSelect.innerHTML = `<option value="">Select Subject</option>`;
  materialsDiv.innerHTML = "";

  const semSnap = await getDocs(
    collection(db, "departments", departmentSelect.value, "semesters")
  );

  semSnap.forEach(doc => {
    semesterSelect.innerHTML += `<option value="${doc.id}">${doc.id}</option>`;
  });
});

semesterSelect.addEventListener("change", async () => {
  subjectSelect.innerHTML = `<option value="">Select Subject</option>`;
  materialsDiv.innerHTML = "";

  const subSnap = await getDocs(
    collection(
      db,
      "departments",
      departmentSelect.value,
      "semesters",
      semesterSelect.value,
      "subjects"
    )
  );

  subSnap.forEach(doc => {
    subjectSelect.innerHTML += `<option value="${doc.id}">${doc.id}</option>`;
  });
});

subjectSelect.addEventListener("change", async () => {
  materialsDiv.innerHTML = "";

  const matSnap = await getDocs(
    collection(
      db,
      "departments",
      departmentSelect.value,
      "semesters",
      semesterSelect.value,
      "subjects",
      subjectSelect.value,
      "materials"
    )
  );

  matSnap.forEach(doc => {
    const data = doc.data();
    materialsDiv.innerHTML += `
      <div class="card">
        <h3>${data.title}</h3>
        <a href="${data.url}" target="_blank">Download</a>
      </div>
    `;
  });
});

loadDepartments();
