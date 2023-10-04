import Ui from "./ui";

const app = document.querySelector('#app');

app.innerHTML = `
  <div>
    <h1 class="title">Player against Computer</h1>
    <p class="instructions">
        Player goes first: click on a number. First to have a
        a set of 3 adding to 15 wins. Reload for new game.
    </p>    
    <p class="status"></p>
    <section class="aiSection">
        <p class="aiTitle">Computer</p>
        <div class="aiPicks"></div>
    </section>
    <hr/>
    <section class="boardSection">
        <p class="boardTitle">Board</p>
        <div class="boardOptions"></div>
    </section>
    <hr/>
    <section class="playerSection">
        <p class="playerTitle">Player</p>
        <div class="playerPicks"></div>
    </section>
    <hr/>
  </div>
`;

app.addEventListener("load", Ui.init());




