//const draggable_list = document.getElementById('draggable-list');
//const check = document.getElementById('check');


addEventListeners();

let dragStartIndex;
let replace_li;

function dragStart() {
  //console.log('Event: ', 'dragstart');
  dragStartIndex = +this.closest('li').getAttribute('data-index');
  //text = dragStartIndex.toString();
  //replace_li = document.querySelector('[data-index = text]');

  replace_li = document.getElementById(dragStartIndex);
  //console.log("start : ",dragStartIndex);
}

function dragOver(e) {
   //console.log('Event: ', 'dragover');
  e.preventDefault();
}

function dragDrop() {
  //console.log('Event: ', 'drop');
  const dragEndIndex = +this.closest('li').getAttribute('data-index');

  //console.log( "text : " , dragStartIndex);
  
  const to_replace = document.getElementById(dragEndIndex);
  console.log("Number ",dragStartIndex," ",dragEndIndex);
  //dragEndIndex.appendChild(dragStartIndex);
  //replace_li.parentElement.removeChild();
  
  var span = document.createElement("span");
  span.setAttribute("class","caret");
  var ul_list = document.createElement("ul");
  ul_list.setAttribute("class","nested");

 // console.log("end : ",dragEndIndex);
 // to_replace.parentElement.parentElement.appendChild(span);
  //to_replace.appendChild(ul_list);
  //ul_list.appendChild(replace_li);

  to_replace.parentElement.appendChild(replace_li);
  
}



function addEventListeners() {
  const draggables = document.querySelectorAll('.li');
  const dragListItems = document.querySelectorAll('.myUL li');

  draggables.forEach(draggable => {
    draggable.addEventListener('dragstart', dragStart);
  });

  dragListItems.forEach(item => {
    item.addEventListener('dragover', dragOver);
    item.addEventListener('drop', dragDrop);
  });
}

