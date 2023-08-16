(function () {
  let medals = [];

  getMedalLists()
  .then(data => {
    medals = data;
    let medalsSorted = sortBy(medals, "gold", 10);
    createGrid(medalsSorted);
    initializeButtons()
  })
  .catch((err) => console.log("rejected", err));

  async function getMedalLists() {
    const url = 'http://localhost:8080/medals';
    const response = await fetch(url)
    const data = await response.json();
    return data;
  }

  const items = document.querySelectorAll('div.button-container');
  const buttons = document.querySelectorAll('button');

  function initializeButtons() {
    $(`div[data-id="gold"]`).addClass('border');
    buttons.forEach(button => button.addEventListener('click', highlight, false));
  }

  function highlight(e) {
    const button = e.target;
    const id = button.dataset.id;
    items.forEach(item => item.classList.remove('border'));
    const div = document.querySelector(`div[data-id="${id}"]`);
    if (div) {
      div.classList.add('border');
    }
    let medalsSorted = sortBy(medals, id, 10);
     createGrid(medalsSorted);
  }

  function createGrid(data) {
    $("#container").empty();
    for (let i = 0; i < data.length; i++) {
      var divId = document.createElement("div");
      divId.className = "grid-item";
      divId.innerText = i + 1;
      $("#container").append(divId);

      var divFlag = document.createElement("div");
      divFlag.className = "grid-item";
      let imgPath = "http://localhost:8080/medals/"+data[i].code;
      divFlag.innerHTML = `<img src = ${imgPath}/>`;
      $("#container").append(divFlag);

      var divCode = document.createElement("div");
      divCode.className = "grid-item";
      divCode.innerText = data[i].code;
      $("#container").append(divCode);

      var divEmpty = document.createElement("div");
      divEmpty.className = "grid-item";
      $("#container").append(divEmpty);

      var divGold = document.createElement("div");
      divGold.className = "grid-item";
      divGold.innerText = data[i].gold;
      $("#container").append(divGold);

      var divSilver = document.createElement("div");
      divSilver.className = "grid-item";
      divSilver.innerText = data[i].silver;
      $("#container").append(divSilver);

      var divBronze = document.createElement("div");
      divBronze.className = "grid-item";
      divBronze.innerText = data[i].bronze;
      $("#container").append(divBronze);

      var divTotal = document.createElement("div");
      divTotal.className = "grid-item";
      divTotal.innerText = data[i].total;
      $("#container").append(divTotal);
    }

  }
})();
