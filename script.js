const scenes = ["entrance","palace","familyScene","blessings","invitation"];
const $ = id => document.getElementById(id);
let current = 0, timers = [], started = false, audioCtx = null, soundOn = false;
const progress = $("progress").querySelector("span");
function clearTimers(){timers.forEach(clearTimeout);timers=[]}
function showScene(index){
  current = index;
  scenes.forEach((id,i)=>$(id).classList.toggle("active",i===index));
  progress.style.width = `${(index/(scenes.length-1))*100}%`;
  $("skipButton").style.display = index===4 ? "none" : "block";
  $("top-mark").style.opacity = index===0 ? "1" : ".7";
}
function schedule(fn,ms){timers.push(setTimeout(fn,ms))}
function startExperience(){
  if(started) return;
  started = true;
  $("entrance").classList.add("opening");
  $("enterButton").disabled = true;
  schedule(()=>showScene(1),8000);
  schedule(()=>showScene(2),16000);
  schedule(()=>showScene(3),24000);
  schedule(()=>showScene(4),32000);
}
function skipExperience(){clearTimers();$("entrance").classList.remove("opening");showScene(4);started=true}
function replay(){clearTimers();started=false;$("entrance").classList.remove("opening");$("enterButton").disabled=false;showScene(0);progress.style.width="0%"}
function toggleSound(){
  soundOn=!soundOn;
  $("soundToggle").innerHTML = soundOn ? "♫ <span>Sound on</span>" : "♫ <span>Sound off</span>";
  $("audioNote").textContent = soundOn ? "Sound ambience enabled." : "Sound is off. Add your chosen soundtrack to /public/assets and connect it in script.js.";
  // No fabricated music is played. This is a clear control placeholder for a licensed soundtrack.
}
$("enterButton").addEventListener("click",startExperience);
$("skipButton").addEventListener("click",skipExperience);
$("replayButton").addEventListener("click",replay);
$("soundToggle").addEventListener("click",toggleSound);
showScene(0);
