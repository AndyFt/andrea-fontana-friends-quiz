document.addEventListener('DOMContentLoaded', () => {

// show it on the <ol> element
let highScoresList = document.getElementById("high-scores");
const highScores = JSON.parse(localStorage.getItem("highScores")) || [];
const clearBtn = document.getElementById("clear");



if (highScoresList && clearBtn) {
  // Your logic here
  clearBtn.addEventListener("click", function(e) {
  localStorage.clear();
  highScores.length = 0; //clear the existing array content
  highScoresList.textContent = "";
  })

  highScoresList.innerHTML = ""; // clear the existing content

  // loop it and create <li> elements
  highScores.forEach((individualScore, index) => {
    const listItem = document.createElement("li");
    listItem.textContent = `${index + 1}. ${individualScore.initials} - ${individualScore.score}`;
    highScoresList.appendChild(listItem);
  });

} else {
  console.error("Error: One or both elements not found");
}

});