
  function addElement(num){
    console.log("num = ${num}");
    var divNode=document.createElement("div");
    divNode.innerHTML="div" + num;
    divNode.style.border="1px solid #foo";
    document.body.appendChild(divNode)

  }
  for (let i = 0; i<50;i++){
    setTimeout(addElement, 100* i, i_+1);
  }