const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");
const simpleColor = document.querySelector(".simple-color");

// Simple color generator
btn.addEventListener("click", () => {
  const a = [1, 1, 1];
  const colorRandom = a.map((el) => {
    return el * Math.floor(Math.random() * 255);
  });

  document.body.style.backgroundColor = `rgba(${colorRandom})`;
  color.textContent = `rgba(${colorRandom})`;
});

// Get the modal
const modal = document.getElementById("myModal");

// Get the button that opens the modal
const btn2 = document.getElementById("myBtn");

// Get the <span> element that closes the modal
const span = document.querySelector(".close");

// When the user clicks the button, open the modal
btn2.onclick = function (e) {
  e.stopPropagation();
  modal.style.display = "block";
  btn.classList.add('hide')
};

// When the user clicks on <span> (x), close the modal
span.onclick = function (e) {
  modal.style.display = "none";
  btn.classList.remove("hide");
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
    btn.classList.remove("hide");
  }
};

