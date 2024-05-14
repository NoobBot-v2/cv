// script.js

document.addEventListener('DOMContentLoaded', function () {
    const resumeData = [
      { section: 'Education', details: 'B.S. in Computer Science, XYZ University' },
      { section: 'Experience', details: 'Software Developer at ABC Inc.' },
      { section: 'Skills', details: 'JavaScript, HTML/CSS, React, Node.js' },
      { section: 'Projects', details: 'Project 1: Description...<br>Project 2: Description...' }
    ];
  
    function populateTable(data) {
      const tableBody = document.getElementById('tblResume');
      tableBody.innerHTML = '';
      data.forEach(item => {
        const row = tableBody.insertRow();
        const cell1 = row.insertCell(0);
        const cell2 = row.insertCell(1);
        cell1.textContent = item.section;
        cell2.innerHTML = item.details;
      });
    }

    populateTable(resumeData);
  });

  function btnHome(){
    alert('homebutton clicked');
  }

  function btnStrange(){
    alert('strange button clicked');
  }