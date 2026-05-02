const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6InVzci1hZG1pbiIsInVzZXJuYW1lIjoiYWRtaW4iLCJyb2xlcyI6WyJTVVBFUkFETUlOIl0sInNpZCI6ImIzYjEzYjY5LWUwNjQtNDY3Ny1hYjU0LTEyYmRhYjUyZDIwYSIsImlzQXV0aG9yaXplZCI6ZmFsc2UsImlhdCI6MTc3NzcxMDcyNSwiZXhwIjoxNzc3NzExNjI1fQ.JcCemum1EVmNYhj1G-et46UXynja9TVHDFmHyY18xDo";

fetch('http://localhost:3000/api/v1/students', {
  method: 'GET',
  headers: {
    'Authorization': `Bearer ${token}`
  }
})
.then(r => r.json())
.then(data => console.log(JSON.stringify(data, null, 2)));
