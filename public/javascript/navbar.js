document.getElementById('nav').innerHTML = `
<ul>
    <li><a href="/">Home</a></li>
    <li><a href="/donate">Donate</a></li>
    <li class="logo"><a href="#">RSG Logo</a></li>
    <li><a href="/discord">Discord</a></li>
    <li><a href="/cbch">Custom bot</a></li>
</ul>
<style>
  @keyframes ticker {
    0% { transform: translate3d(0, 0, 0); }
    100% { transform: translate3d(-100%, 0, 0); }
  }
  .tcontainer{
    width: 100%;
    overflow: hidden;
  }
  .ticker-wrap {
    background-color: black;
    padding: 5px;
    padding-left: 100%;
    width: 100%;
  }
  .ticker-move {
    display: inline-block;
    white-space: nowrap;
    padding-right: 100%;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
    animation-name: ticker;
    animation-duration: 15s;
  }
  .ticker-move:hover{
    animation-play-state: paused;
  }
  .ticker-item{
    display: inline-block;
    padding: 0 2rem;
  }
  @media only screen and (max-width: 800px) {
  .ticker-move { animation-duration: 20s; }
  }
  @media only screen and (max-width: 700px) {
  .ticker-move { animation-duration: 15s; }
  }
  @media only screen and (max-width: 600px) {
  .ticker-move { animation-duration: 10s; }
  }
  @media only screen and (max-width: 400px) {
  .ticker-move { animation-duration: 8s; }
  }
  @media only screen and (max-width: 300) {
  .ticker-move { animation-duration: 6s; }
  }
</style>
<div class="tcontainer">
    <div class="ticker-wrap">
      <div class="ticker-move">
        <div class="ticker-item"><a href="https://shortrsg.cf/youtube">Subscribe to me on youtube</a></div>
        <div class="ticker-item"><a href="https://shortrsg.cf/discord">Join my official discord server</a></div>
      </div>
    </div>
  </div>
`;
