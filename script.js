function showSecondPopup(choice) {
    document.getElementsByClassName('popup')[0].style.display = 'none';
    document.getElementById('secondPopup').style.display = 'block';

    if (choice === 'yes') {
      document.getElementById('secondPopup').innerHTML = "<p>Great! &#128522;</p><button onclick='showThirdPopup()'>Next</button>";
    } else {
      document.getElementById('secondPopup').innerHTML = "<p>Oops! &#128542;</p><button onclick='showThirdPopup()'>Next</button>";
    }
  }

  function showThirdPopup() {
    document.getElementById('secondPopup').style.display = 'none';
    // Add more code here to display the next pop-up and update the HTML content
  }

  document.getElementsByClassName('popup')[0].style.display = 'block';
