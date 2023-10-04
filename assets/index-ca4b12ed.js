(function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))e(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&e(r)}).observe(document,{childList:!0,subtree:!0});function s(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function e(t){if(t.ep)return;t.ep=!0;const o=s(t);fetch(t.href,o)}})();const n=(()=>{const d=[[2,4],[3,6,7],[1,5],[1,6,8],[2,5,7,8],[3,4,8],[3,5],[1,4,7],[2,6]],c=[1,2,3,4,5,6,7,8,9],s=[0,0,0,0,0,0,0,0,0],e=[0,0,0,0,0,0,0,0,0];return{updateNumbers:(u,g)=>{},updateBoard:u=>{let g=c.indexOf(u);g>-1&&c.splice(g,1)},updateCounts:(u,g)=>{const f=d[g-1];for(let m=0;m<f.length;m++)u=="Player"?s[f[m]]++:e[f[m]]++},playerWon:()=>s.some(u=>u>=3),computerWon:()=>e.some(u=>u>=3),getCpCount:()=>e,getPgCount:()=>s,getBoard:()=>c,getOccupied:()=>d}})(),i=(()=>{const d=["Player","Computer"];let c=d[0];return{getPlayerHasWon:()=>n.playerWon(),getComputerHasWon:()=>n.computerWon(),getActivePlayer:()=>c,switchActivePlayer:()=>{c=c==d[0]?d[1]:d[0]},getGameIsOver:()=>n.playerWon()||n.computerWon(),addToPlayer:(a,p)=>{n.updateBoard(p),n.updateCounts(a,p)}}})(),h=(()=>({smartChoice:()=>{const s=n.getOccupied();for(let e=0;e<n.getBoard().length;e++){const t=n.getBoard()[e];for(let o=0;o<s[t-1].length;o++)if(n.getCpCount()[s[t-1][o]]==2)return e}for(let e=0;e<n.getBoard().length;e++){let t=n.getBoard()[e];for(let o=0;o<s[t-1].length;o++)if(n.getPgCount()[s[t-1][o]==2])return e}for(let e=0;e<n.getBoard().length;e++){const t=n.getBoard()[e];for(let o=0;o<s[t-1].length;o++){const r=s[t-1][o];if(n.getCpCount()[r]==1&&n.getPgCount()[r]==0)return e}}for(let e=0;e<n.getBoard().length;e++)if(n.getBoard()[e]==5)return e;for(let e=0;e<n.getBoard().length;e++)if(n.getBoard()[e]%2==0)return e;return Math.floor(Math.random(0,n.getBoard().length))},randomMoves:()=>{const s=n.getBoard().length;return Math.floor(Math.random()*s)}}))(),P=(()=>{const d=()=>{const r=document.querySelector(".boardOptions");for(let l=1;l<10;l++){const a=document.createElement("span");a.classList.add("number","selectable"),a.addEventListener("click",c),a.textContent=l.toString(),a.dataset.n=l,r.appendChild(a)}},c=()=>{const r=i.getActivePlayer();if(!i.getGameIsOver()){event.target.removeEventListener("click",c);const l=Number(event.target.dataset.n);i.addToPlayer(r,l),s(r,event.target),i.switchActivePlayer(),t(),setTimeout(e,2e3)}},s=(r,l)=>{const a=document.querySelector(".boardOptions").removeChild(l);r=="Player"?document.querySelector(".playerPicks").appendChild(a):document.querySelector(".aiPicks").appendChild(a)},e=()=>{const r=document.querySelectorAll(".selectable");let l=h.smartChoice(),a=Array.from(r)[l];console.log("Computer chose index",l,"Which is element",a.dataset.n);const p=i.getActivePlayer();if(!i.getGameIsOver()){a.removeEventListener("click",c),a.classList.remove("selectable");const y=Number(a.dataset.n);i.addToPlayer(p,y),s(p,a),i.switchActivePlayer(),t()}},t=()=>{const r=document.querySelector(".status");i.getGameIsOver()&&i.getPlayerHasWon()?r.textContent="Status: You win":i.getGameIsOver()&&i.getComputerHasWon()?r.textContent="Status: You Lose":i.getActivePlayer()=="Player"&&!i.getGameIsOver()?r.textContent="Status: Your turn":i.getActivePlayer()=="Computer"&&!i.getGameIsOver()?r.textContent="Status: Computers turn":r.textContent="Status: It's a draw"};return{init:()=>{d(),t()}}})(),v=document.querySelector("#app");v.innerHTML=`
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
`;v.addEventListener("load",P.init());
