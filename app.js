let first1 = document.querySelector(".first1");
let drag1 = document.querySelector(".right4121");
let close1 = document.querySelector(".close");
let element = document.querySelector(".firstleft41a");
drag1.addEventListener('click',function(){display(first1)});
close1.addEventListener('click',function(){display(first1)});


let textarea = document.querySelector(".textarea");
let save = document.querySelector(".save");

save.addEventListener('click',function(){savefun()});

function savefun(){
    let saveelement = document.createElement("div");
    saveelement.innerHTML = element.innerHTML;
    saveelement.classList.contains("B").innerHTML = textarea.innerHTML;
    document.querySelector(".firstleft4").appendChild("div");
}

const draggables = document.querySelectorAll(".right4121");
const droppables = document.querySelectorAll(".right412");

const dropa = document.querySelector(".right4121a")
const counter = document.querySelector(".number");

let count=0;

/*dropa.forEach((task1) => {
    count++;
});
*/
counter.innerHTML = count;


draggables.forEach((task) => {
    task.addEventListener("dragstart", () => {
      task.classList.add("is-dragging");
    });
    task.addEventListener("dragend", () => {
      task.classList.remove("is-dragging");
    });
  });

droppables.forEach((zone) => {
    zone.addEventListener("dragover", (e) => {
      e.preventDefault();
  
      const bottomTask = insertAboveTask(zone, e.clientY);
      const curTask = document.querySelector(".is-dragging");
  
      if (!bottomTask) {
        zone.appendChild(curTask);
      } else {
        zone.insertBefore(curTask, bottomTask);
      }
    });
  });

const insertAboveTask = (zone, mouseY) => {
    const els = zone.querySelectorAll(".right4121:not(.is-dragging)");
  
    let closestTask = null;
    let closestOffset = Number.NEGATIVE_INFINITY;
  
    els.forEach((task) => {
      const { top } = task.getBoundingClientRect();
  
      const offset = mouseY - top;
  
      if (offset < 0 && offset > closestOffset) {
        closestOffset = offset;
        closestTask = task;
      }
    });
  
    return closestTask;
  };
const ans = document.querySelector(".answer")
const tobedisplayed = document.querySelector(".firstright31")

let opt1 = document.querySelector(".opt1")
let opt2 = document.querySelector(".opt2")
let opt3 = document.querySelector(".opt3")
let opt4 = document.querySelector(".opt4")

ans.addEventListener('click',function(){display(tobedisplayed)})
opt1.addEventListener('click',function(){replace(opt1,tobedisplayed,ans)})
opt2.addEventListener('click',function(){replace(opt2,tobedisplayed,ans)})
opt3.addEventListener('click',function(){replace(opt3,tobedisplayed,ans)})
opt4.addEventListener('click',function(){replace(opt4,tobedisplayed,ans)})

function display(content){
    const display = content.style.display;
    if(display === 'none'){
        content.style.display = 'block';
    }
    else{
        content.style.display = 'none';
    }
}
const ans1 = document.querySelector(".ans1")


const tobedisplayeda = document.querySelector(".firstright31a")
const unassigned = document.querySelector(".unassigned");
let opt1a = document.querySelector(".opt1a")
let opt2b = document.querySelector(".opt2b")
let opt3c = document.querySelector(".opt3c")

unassigned.addEventListener('click',function(){display(tobedisplayeda)})
opt1a.addEventListener('click',function(){replace(opt1a,tobedisplayeda,ans1)})
opt2b.addEventListener('click',function(){replace(opt2b,tobedisplayeda,ans1)})
opt3c.addEventListener('click',function(){replace(opt3c,tobedisplayeda,ans1)})

const ans2 = document.querySelector(".ans2")
const tobedisplayedb = document.querySelector(".firstright31b")
const unassigned1 = document.querySelector(".unassigned1");
let opt1d = document.querySelector(".opt1d")
let opt2e = document.querySelector(".opt2e")
let opt3f = document.querySelector(".opt3f")

unassigned1.addEventListener('click',function(){display(tobedisplayedb)})
opt1d.addEventListener('click',function(){replace(opt1d,tobedisplayedb,ans2)})
opt2e.addEventListener('click',function(){replace(opt2e,tobedisplayedb,ans2)})
opt3f.addEventListener('click',function(){replace(opt3f,tobedisplayedb,ans2)})

const ans3 = document.querySelector(".ans3")
const tobedisplayedc = document.querySelector(".firstright31c")
const unassigned2 = document.querySelector(".unassigned2");
let opt1g = document.querySelector(".opt1g")
let opt2h = document.querySelector(".opt2h")
let opt3i = document.querySelector(".opt3i")
let opt4j = document.querySelector(".opt4j")
let opt5k = document.querySelector(".opt5k")

unassigned2.addEventListener('click',function(){display(tobedisplayedc)})
opt1g.addEventListener('click',function(){replace(opt1g,tobedisplayedc,ans3)})
opt2h.addEventListener('click',function(){replace(opt2h,tobedisplayedc,ans3)})
opt3i.addEventListener('click',function(){replace(opt3i,tobedisplayedc,ans3)})
opt4j.addEventListener('click',function(){replace(opt4j,tobedisplayedc,ans3)})
opt5k.addEventListener('click',function(){replace(opt5k,tobedisplayedc,ans3)})

function replace(replac,content,ans){
    ans.innerHTML = replac.innerHTML;
    ans.className = replac.className;
    content.style.display = 'none';
}

let hours = document.querySelector(".hours");
let esthours = document.querySelector(".esthours");
let Width = document.querySelector(".firstright721");
function changehours(inp1){
    esthours.innerHTML = inp1.value+"h estimated";
}

function calcwidth(hours){
    if(hours.value<=12){
        hours = 100;
    }
    else{
        hours = (12/hours.value)*100;
    }
    Width.style.width = hours+'%';
}
