document.addEventListener("DOMContentLoaded", () => {
  //TIMER
  let minutes = 0;
  let seconds = 0;
  let timeInterval;

  let timeBox = document.querySelector(".timeSpan");
  const startTimer = () => {
    timeInterval = setInterval(() => {
      seconds++;
      if (seconds > 60) {
        minutes++;
        seconds = 0;
      }
      timeBox.textContent = `${minutes < 10 ? "0" + minutes : minutes}:${
        seconds < 10 ? "0" + seconds : seconds
      }`;
    }, 1000);

    startTimer();
  };
  const boxList = [
    "fa-0",
    "fa-1",
    "fa-2",
    "fa-3",
    "fa-4",
    "fa-5",
    "fa-6",
    "fa-7",
    "fa-8",
    "fa-9",
    "fa-0",
    "fa-1",
    "fa-2",
    "fa-3",
    "fa-4",
    "fa-5",
    "fa-6",
    "fa-7",
    "fa-8",
    "fa-9",
    "fa-0",
    "fa-1",
    "fa-2",
    "fa-3",
    "fa-4",
    "fa-5",
    "fa-6",
    "fa-7",
    "fa-8",
    "fa-9",
    "fa-0",
    "fa-1",
    "fa-2",
    "fa-3",
    "fa-4",
    "fa-5",
  ];

  boxList.sort(() => 0.5 - Math.random());

  // VARIABLES FOR TRACKING GAME DATA
  let pickedBoxes = [];
  let pickedBoxesIds = [];
  let tries = 0;
  let foundPair = 0;

  // GRABBING HTML ELEMENTS
  const grid = document.querySelector(".game-grid");

  // CREATING THE BOARD
  const createBoard = () => {
    for (let i = 0; i < boxList.length; i++) {
      let icon = document.createElement("i");
      let box = document.createElement("div");
      box.appendChild(icon);
      icon.classList.add("fa-solid", "fa-9");
      box.setAttribute("data-id", i);
      icon.addEventListener("click", turnCard);
      grid.appendChild(box);
    }
  };

  // FLIPPING A BOX
  const turnCard = () => {
    if (pickedBoxes.length != 2) {
      let boxId = event.target.getAttribute("data-id");
      let boxicons = event.target.classList;
      if (boxicons != "") {
        pickedBoxes.push(boxList[boxId]);
        pickedBoxesIds.push(parseInt(boxId));
        event.target.classList.add();

        if (pickedBoxes.length == 2) {
          setTimeout(matching, 500);
        }
      }
    }
  };

  //CHECKING FOR A MATCH
  const matching = () => {
    let firstBoxId = pickedBoxesIds[0];
    let secondBoxId = pickedBoxesIds[1];
    let boxes = document.querySelectorAll("img");
    let firstBox = pickedBoxes[0];
    let secondBox = pickedBoxes[1];

    if (firstBox == secondBox) {
      foundPair++;
      tries++;

      boxes[firstBoxId].style.opacity = "0.5";
      boxes[secondBoxId].style.opacity = "0.5";
    } else {
      boxes[firstBoxId].src = "./assets/images/emojis/default.png";
      boxes[secondBoxId].src = "./assets/images/emojis/default.png";
      tries++;
    }
  };

  createBoard();
});
