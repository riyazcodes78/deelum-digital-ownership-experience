
const A="assets/";
const app=document.getElementById("app");
const counter=document.getElementById("counter");
const navCenter=document.getElementById("navCenter");
const transition=document.getElementById("transition");
const concierge=document.getElementById("concierge");
const answer=document.getElementById("conciergeAnswer");
const toast=document.getElementById("toast");

let step=0;
let intent="Lifestyle";
let selected="Casa Nalu";

const imgs={
 hero:"hero.jpg", world:"2.jpg", pool:"6.jpg", villa:"4.jpg",
 lifestyle:"7b.jpg", jungle:"8.jpg", coast:"5.jpg", roof:"3.jpg"
};

const navLabels=[
 "OWNERSHIP, BEYOND THE PROPERTY",
 "DISCOVER THE WORLD",
 "EXPLORE OWNERSHIP",
 "UNDERSTAND THE OPPORTUNITY",
 "COMPARE WHAT MATTERS",
 "PERSONALIZE THE JOURNEY",
 "FROM BUYER TO OWNER",
 "MY DEELUM",
 "LIVE THE OWNERSHIP",
 "THE RELATIONSHIP CONTINUES"
];

const screens=[
()=>`
<section class="screen hero">
  <div class="media" style="background-image:url('${A+imgs.hero}')"></div><div class="shade"></div>
  <div class="content">
    <div class="hero-kicker"><i></i> A DIGITAL OWNERSHIP EXPERIENCE</div>
    <h1>Ownership,<br><em>beyond</em><br>the property.</h1>
    <p class="lead">A conceptual digital environment for Deelum — connecting discovery, comparison, purchase, ownership, services and lifestyle into one continuous relationship.</p>
    <div class="actions"><button class="primary" onclick="go(1)">Enter Deelum ↗</button><button class="ghost" onclick="openConcierge()">Speak with concierge</button></div>
    <div class="meta-row"><span>LOCATION <b>Mexico</b></span><span>MODEL <b>Private ownership</b></span><span>EXPERIENCE <b>Connected</b></span></div>
  </div>
  <div class="floating-note"><div class="micro">THE IDEA</div><strong>One relationship.</strong><p>From the first discovery to years of ownership, the digital environment evolves with the person.</p></div>
</section>`,

()=>`
<section class="screen">
  <div class="media" style="background-image:url('${A+imgs.world}')"></div><div class="shade"></div>
  <div class="content">
    <div class="two-col"><div class="copy-panel">
      <div class="micro">01 / DISCOVER</div><h2>First, let them discover the world.</h2>
      <p>Before asking someone to buy, Deelum can introduce the place, philosophy and lifestyle behind ownership. The experience begins with desire — not a property grid.</p>
      <div class="story-line"><i></i> PLACE · PHILOSOPHY · LIFESTYLE</div>
      <div class="actions"><button class="primary" onclick="go(2)">Explore ownership ↗</button></div>
    </div></div>
  </div>
</section>`,

()=>`
<section class="screen">
  <div class="media" style="background-image:url('${A+imgs.villa}')"></div><div class="shade"></div>
  <div class="content">
    <div class="copy-panel">
      <div class="micro">02 / EXPLORE</div><h2>Not a listing.<br>A place to imagine.</h2>
      <p>Each opportunity becomes an immersive story — architecture, setting, rooms, pool, ownership context and the lifestyle around it.</p>
      <div class="property-grid">
        <button class="property-card" onclick="selected='Casa Nalu';go(3)"><img src="${A+imgs.villa}"><div class="card-copy"><span class="pill">FEATURED</span><div class="name">Casa Nalu</div><div class="facts">3 BEDROOMS · PRIVATE POOL · JUNGLE EDGE</div></div></button>
        <button class="property-card" onclick="selected='Casa Selva';go(3)"><img src="${A+imgs.pool}"><div class="card-copy"><span class="pill">PRIVATE COLLECTION</span><div class="name">Casa Selva</div><div class="facts">4 BEDROOMS · POOL · TROPICAL GARDEN</div></div></button>
      </div>
    </div>
  </div>
</section>`,

()=>`
<section class="screen">
  <div class="media" style="background-image:url('${A+imgs.pool}')"></div><div class="shade"></div>
  <div class="content">
    <div class="property-detail">
      <div class="detail-visual"><img src="${A+imgs.villa}" alt=""></div>
      <div class="copy-panel">
        <div class="micro">03 / UNDERSTAND · ${selected.toUpperCase()}</div>
        <h2>Make the opportunity feel real.</h2>
        <p>Move from inspiration into confidence. A buyer can understand what matters, save a property, explore the ownership context and move naturally toward a private conversation.</p>
        <div class="facts-grid">
          <div class="fact"><small>Configuration</small><strong>${selected==="Casa Nalu"?"3 BR":"4 BR"}</strong><span>Private residence</span></div>
          <div class="fact"><small>Setting</small><strong>Jungle Edge</strong><span>Quiet tropical environment</span></div>
          <div class="fact"><small>Experience</small><strong>Private</strong><span>Designed around the owner</span></div>
          <div class="fact"><small>Next step</small><strong>Private Call</strong><span>Deelum team conversation</span></div>
        </div>
        <div class="actions"><button class="primary" onclick="go(4)">Compare what matters ↗</button></div>
      </div>
    </div>
  </div>
</section>`,

()=>`
<section class="screen">
  <div class="media" style="background-image:url('${A+imgs.jungle}')"></div><div class="shade"></div>
  <div class="content">
    <div class="copy-panel">
      <div class="micro">04 / COMPARE</div><h2>Confidence comes from clarity.</h2>
      <p>Instead of making a buyer hunt through pages, the experience brings the important differences together and helps them build a shortlist.</p>
      <div class="compare-shell">
        <div class="compare-head"><span>PROPERTY</span><span>CASA NALU</span><span>CASA SELVA</span></div>
        <div class="compare-row"><strong>Bedrooms</strong><span>3</span><span>4</span></div>
        <div class="compare-row"><strong>Setting</strong><span>Jungle edge</span><span>Tropical garden</span></div>
        <div class="compare-row"><strong>Experience</strong><span>Private pool</span><span>Private pool</span></div>
        <div class="compare-row"><strong>Next step</strong><span>Private presentation</span><span>Private presentation</span></div>
      </div>
      <div class="actions"><button class="primary" onclick="go(5)">Personalize my journey ↗</button></div>
    </div>
  </div>
</section>`,

()=>`
<section class="screen">
  <div class="media" style="background-image:url('${A+imgs.jungle}')"></div><div class="shade"></div>
  <div class="content">
    <div class="copy-panel">
      <div class="micro">05 / PERSONALIZE</div><h2>What are you really looking for?</h2>
      <p>The experience can adapt around why someone is considering ownership — creating a more relevant buyer journey and giving the Deelum team better context before the conversation.</p>
      <div class="selector">
        ${["Lifestyle","Investment","Second home","A mix of both"].map(x=>`<button class="${intent===x?'active':''}" onclick="setIntent('${x}')">${x}</button>`).join("")}
      </div>
      <div class="recommendation" id="recommendation"><b>For ${intent.toLowerCase()}:</b> surface the properties, ownership information and experiences most relevant to this buyer profile.</div>
      <div class="actions"><button class="primary" onclick="go(6)">See the ownership journey ↗</button></div>
    </div>
  </div>
</section>`,

()=>`
<section class="screen">
  <div class="media" style="background-image:url('${A+imgs.coast}')"></div><div class="shade"></div>
  <div class="content">
    <div class="bridge">
      <div class="micro">06 / THE OWNERSHIP JOURNEY</div>
      <h2>The relationship changes after the purchase.</h2>
      <p class="lead">The same digital environment that helped someone discover Deelum can evolve with them — from buyer, to owner, to returning owner.</p>
      <div class="journey-rail">
        <div class="journey-node"><small>01</small><strong>Discover</strong></div>
        <div class="journey-node"><small>02</small><strong>Compare</strong></div>
        <div class="journey-node"><small>03</small><strong>Purchase</strong></div>
        <div class="journey-node"><small>04</small><strong>Onboard</strong></div>
        <div class="journey-node"><small>05</small><strong>Own</strong></div>
        <div class="journey-node"><small>06</small><strong>Live</strong></div>
      </div>
      <div class="actions"><button class="primary" onclick="go(7)">Enter My Deelum ↗</button></div>
    </div>
  </div>
</section>`,

()=>`
<section class="screen">
  <div class="media" style="background-image:url('${A+imgs.hero}')"></div><div class="shade"></div>
  <div class="content">
    <div class="micro">07 / MY DEELUM · PRIVATE OWNER SPACE</div>
    <div class="owner-shell">
      <div class="owner-top"><div><div class="micro">MY DEELUM</div><h3>Welcome home.</h3></div><p>OWNER · ${selected.toUpperCase()}</p></div>
      <div class="owner-grid">
        <div class="owner-card"><div class="ico">⌂</div><strong>My Property</strong><span>Documents, details & ownership updates</span></div>
        <div class="owner-card"><div class="ico">↗</div><strong>Performance</strong><span>Rental, occupancy & reporting</span></div>
        <div class="owner-card"><div class="ico">+</div><strong>Services</strong><span>Maintenance, requests & support</span></div>
        <div class="owner-card"><div class="ico">✦</div><strong>Concierge</strong><span>Stay, dining & experiences</span></div>
      </div>
      <div class="owner-strip">
        <div><div class="micro">NEXT STAY</div><strong>Prepare my villa →</strong></div>
        <div><div class="micro">NEW FOR YOU</div><strong>Explore this month's experiences →</strong></div>
      </div>
    </div>
    <div class="actions"><button class="primary" onclick="go(8)">Live the ownership ↗</button></div>
  </div>
</section>`,

()=>`
<section class="screen">
  <div class="media" style="background-image:url('${A+imgs.lifestyle}')"></div><div class="shade"></div>
  <div class="content">
    <div class="copy-panel">
      <div class="micro">08 / LIVE THE OWNERSHIP</div>
      <h2>Your property is only one part of the relationship.</h2>
      <p>Deelum can continue creating value through concierge, wellness, dining, local experiences, property services and reasons to return.</p>
      <div class="experience-grid">
        <div class="experience-card big"><img src="${A+imgs.lifestyle}"><div class="experience-copy"><small>EXPERIENCE</small><h3>Live the place.</h3><p>Moments, services and experiences that make ownership feel personal.</p></div></div>
        <div>
          <div class="experience-card"><img src="${A+imgs.pool}"><div class="experience-copy"><small>CONCIERGE</small><h3>Everything prepared.</h3></div></div>
          <div class="experience-card" style="margin-top:9px"><img src="${A+imgs.coast}"><div class="experience-copy"><small>RETURN</small><h3>Come back differently.</h3></div></div>
        </div>
      </div>
      <div class="actions"><button class="primary" onclick="go(9)">See the bigger relationship ↗</button></div>
    </div>
  </div>
</section>`,

()=>`
<section class="screen final">
  <div class="media" style="background-image:url('${A+imgs.roof}')"></div><div class="shade"></div>
  <div class="content">
    <div class="micro" style="color:var(--gold)">09 / THE LONG-TERM RELATIONSHIP</div>
    <h2>Ownership doesn't end at the purchase.</h2>
    <p class="lead">The digital environment becomes a bridge between discovery, ownership and lifestyle — helping Deelum build a relationship that continues long after the sale.</p>
    <div class="story-line"><i></i> DISCOVER · BUY · OWN · MANAGE · EXPERIENCE · RETURN</div>
    <div class="actions"><button class="primary" onclick="openConcierge()">Start a private conversation ↗</button><button class="ghost" onclick="go(0)">Experience again ↺</button></div>
  </div>
  <div class="signature">DEELUM / DIGITAL OWNERSHIP <b>Concept by Atelier North</b></div>
</section>`
];

function render(){
  app.innerHTML=screens[step]();
  counter.textContent=`${String(step+1).padStart(2,"0")} / 10`;
  navCenter.textContent=navLabels[step];
  requestAnimationFrame(()=>document.querySelector(".screen")?.classList.add("ready"));
}

function go(next){
  if(next===step)return;
  transition.classList.remove("on");
  void transition.offsetWidth;
  transition.classList.add("on");
  setTimeout(()=>{step=next;render()},520);
  setTimeout(()=>transition.classList.remove("on"),1120);
}

function setIntent(value){
  intent=value;
  render();
  showToast(`Journey adapted for ${value.toLowerCase()}`);
}

function openConcierge(){
  concierge.classList.add("open");
}
function closeConcierge(){
  concierge.classList.remove("open");
}
function showToast(message){
  toast.textContent=message;
  toast.classList.add("show");
  clearTimeout(showToast.t);
  showToast.t=setTimeout(()=>toast.classList.remove("show"),1900);
}

document.getElementById("conciergeOpen").onclick=openConcierge;
document.getElementById("conciergeClose").onclick=closeConcierge;

document.querySelectorAll("[data-intent]").forEach(btn=>{
  btn.addEventListener("click",()=>{
    intent=btn.dataset.intent;
    answer.innerHTML=`<b>${intent}</b> — the experience could prioritize the properties, information and services most relevant to this journey.`;
    showToast("Concierge profile updated");
  });
});

render();
