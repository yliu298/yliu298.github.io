/* Add any JavaScript you need to this file. */
window.onload = function() {
  filterSelection('all');
};

function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName('filterDiv');
  if (c === 'all') {
    c = '';
  }
  for (i = 0; i < x.length; i++) {
    hideClass(x[i], 'show');
    if (x[i].className.indexOf(c) > -1) {
      showClass(x[i], 'show');
    }
  }
}

function showClass(showName, condition) {
  var i, show1, show2;
  show1 = showName.className.split(' ');
  show2 = condition.split(' ');
  for (i = 0; i < show2.length; i++) {
    if (show1.indexOf(show2[i]) === -1) {
      showName.className += ' ' + show2[i];
    }
  }
}

function hideClass(hideName, condition) {
  var i, hide1, hide2;
  hide1 = hideName.className.split(' ');
  hide2 = condition.split(' ');
  for (i = 0; i < hide2.length; i++) {
    while (hide1.indexOf(hide2[i]) > -1) {
      hide1.splice(hide1.indexOf(hide2[i]), 1);
    }
  }
  hideName.className = hide1.join(' ');
}
function validateInput(){
  var input1 = document.form1.postalCode.value;
  var regEx = /^[ABCEGHJ-NPRSTVXY]\d[ABCEGHJ-NPRSTV-Z][ -]?\d[ABCEGHJ-NPRSTV-Z]\d$/i;
  if(!regEx.test(input1))
  {
    alert("Invalid Postal Code");
    return false;                                           
  }
  return true;
}
function isSelected(){
  if(document.getElementById("OrderProblem").checked){
    document.getElementById("orderNumber").style.display = 'block';
  }
  if(document.getElementById("Question").checked){
    document.getElementById("orderNumber").style.display = 'none';
  }
  if(document.getElementById("Comment").checked){
    document.getElementById("orderNumber").style.display = 'none';
  }
}
