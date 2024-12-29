// URL API backend
const apiUrl = "http://localhost:8080/api/users";

// Fungsi untuk mengambil data dari API
async function fetchUsers() {
  try {
    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json(); // Parse JSON dari backend
    console.log("Fetched data:", data); // Debugging: lihat struktur data
    populateTable(data); // Kirim respons ke fungsi populateTable
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

// Fungsi untuk menampilkan data di tabel
function populateTable(usersResponse) {
  const tableBody = document.getElementById("userTableBody");

  // Akses properti "data" dari respons
  const users = usersResponse.data;

  // Pastikan "data" adalah sebuah array
  if (!Array.isArray(users)) {
    console.error("Data is not an array:", users);
    return;
  }

  // Iterasi setiap user dalam array
  users.forEach((user, index) => {
    const row = document.createElement("tr");

    row.innerHTML = `
      <td>${index + 1}</td>
      <td>${user.email}</td>
      <td>${user.username}</td>
    `;

    tableBody.appendChild(row);
  });
}

// Panggil fungsi fetchUsers saat halaman dimuat
document.addEventListener("DOMContentLoaded", fetchUsers);
