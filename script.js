// script.js





// Search departments
function searchDepartment() {
  const input = document.getElementById('searchDept').value.toLowerCase();
  const cards = document.getElementsByClassName('dept-card');

  for (let i = 0; i < cards.length; i++) {
    const title = cards[i].getElementsByTagName('h3')[0].innerText.toLowerCase();
    if (title.includes(input)) {
      cards[i].style.display = '';
    } else {
      cards[i].style.display = 'none';
    }
  }
}


// Add this to your existing script.js and report section

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("issueForm");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      document.getElementById("responseMsg").textContent =
        "✅ Your issue has been submitted successfully!";
      this.reset(); // Clear form after submit
    });
  }
});


// Admin login system
document.getElementById("adminLoginForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const username = document.getElementById("username").value.trim();
  console.log(username);
  const password = document.getElementById("password").value.trim();
  console.log(password);
  const message = document.getElementById("adminLoginMsg");

  if (username === "admin" && password === "blw@2025") {
    message.style.color = "green";
    message.textContent = "✅ Login successful! Redirecting...";
    setTimeout(() => {
      window.location.href = "admin_dashboard.html"; // protected page
    }, 1500);
  } else {
    message.style.color = "red";
    message.textContent = "❌ Invalid username or password.";
  }
});


// Sample issue data to simulate real database 
// ADMIN DASHBOARD
const issues = [
  {
    name: "Amit",
    dept: "Engine",
    message: "Engine noise at startup"
  },
  {
    name: "Priya",
    dept: "HR",
    message: "Requesting transfer details"
  },
  {
    name: "Vikram",
    dept: "Production",
    message: "Shortage of materials"
  }
];

function viewIssues() {
  const issueDiv = document.getElementById("issueReports");
  if (!issueDiv) return;

  issueDiv.innerHTML = "<h3>User Reported Issues</h3><ul>";

  issues.forEach(issue => {
    issueDiv.innerHTML += `
      <li><strong>${issue.name}</strong> (${issue.dept}) - ${issue.message}</li>
    `;
  });

  issueDiv.innerHTML += "</ul>";
}


// Engine Part Management - Admin Engine
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('enginePartForm');
  const list = document.getElementById('enginePartsList');

  // Load parts from localStorage
  const parts = JSON.parse(localStorage.getItem('engineParts')) || [];

  const renderParts = () => {
    list.innerHTML = '';
    parts.forEach(part => {
      list.innerHTML += `
        <div class="card">
          <h3>${part.name}</h3>
          <img src="${part.image}" alt="${part.name}" />
          <p><strong>Type:</strong> ${part.type}</p>
          <p>${part.desc}</p>
        </div>
      `;
    });
  };

  form?.addEventListener('submit', e => {
    e.preventDefault();
    const name = document.getElementById('partName').value;
    const type = document.getElementById('partType').value;
    const image = document.getElementById('partImage').value;
    const desc = document.getElementById('partDesc').value;

    const newPart = { name, type, image, desc };
    parts.push(newPart);
    localStorage.setItem('engineParts', JSON.stringify(parts));

    form.reset();
    renderParts();
  });

  renderParts();
});


function viewIssues() {
  const container = document.getElementById('issueReports');
  container.innerHTML = '';

  const issues = JSON.parse(localStorage.getItem('issueReports')) || [];

  if (issues.length === 0) {
    container.innerHTML = "<p style='text-align:center;'>No issues reported yet.</p>";
    return;
  }

  let html = `
    <table border="1" cellpadding="10" cellspacing="0">
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Department</th>
          <th>Type</th>
          <th>Message</th>
          <th>Time</th>
        </tr>
      </thead>
      <tbody>
  `;

  issues.forEach(issue => {
    html += `
      <tr>
        <td>${issue.name}</td>
        <td>${issue.email}</td>
        <td>${issue.department}</td>
        <td>${issue.issueType}</td>
        <td>${issue.message}</td>
        <td>${issue.time}</td>
      </tr>
    `;
  });

  html += '</tbody></table>';
  container.innerHTML = html;
}





