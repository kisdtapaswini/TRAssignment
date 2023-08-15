(function () {
  
  let medals = [];
  getMedalLists()
  .then(data => {
    medals = data;
    sortBy(medals, "gold", 10);
    createGrid(medals);
    initializeButtons()
  })
  .catch((err) => console.log("rejected", err));
  // window.addEventListener('load', function () {

  // });

  async function getMedalLists() {
    const url = 'http://localhost:8080/medals';
    const response = await fetch(url)
    const data = await response.json();
    return data;
  }

  const items = document.querySelectorAll('div.button-container');
  const buttons = document.querySelectorAll('button');

  function initializeButtons() {
    document.querySelector(`div[data-id="gold"]`).classList.add('border');
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
    sortBy(medals, id, 10);
    createGrid(medals);
  }

  function createGrid(data) {
    document.getElementById("container").innerHTML = "";
    for (let i = 0; i < medals.length; i++) {
      var divId = document.createElement("div");
      divId.className = "grid-item";
      divId.innerText = i + 1;
      document.getElementById("container").appendChild(divId);

      var divFlag = document.createElement("div");
      divFlag.className = "grid-item";
      let imgPath = "http://localhost:8080/medals/"+data[i].code;
      divFlag.innerHTML = `<img src = ${imgPath}/>`;
      document.getElementById("container").appendChild(divFlag);

      var divCode = document.createElement("div");
      divCode.className = "grid-item";
      divCode.innerText = data[i].code;
      document.getElementById("container").appendChild(divCode);

      var divEmpty = document.createElement("div");
      divEmpty.className = "grid-item";
      document.getElementById("container").appendChild(divEmpty);

      var divGold = document.createElement("div");
      divGold.className = "grid-item";
      divGold.innerText = data[i].gold;
      document.getElementById("container").appendChild(divGold);

      var divSilver = document.createElement("div");
      divSilver.className = "grid-item";
      divSilver.innerText = data[i].silver;
      document.getElementById("container").appendChild(divSilver);

      var divBronze = document.createElement("div");
      divBronze.className = "grid-item";
      divBronze.innerText = data[i].bronze;
      document.getElementById("container").appendChild(divBronze);

      var divTotal = document.createElement("div");
      divTotal.className = "grid-item";
      divTotal.innerText = data[i].total;
      document.getElementById("container").appendChild(divTotal);
    }

  }
})();
