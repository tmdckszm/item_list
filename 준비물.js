var 아이템리스트 = [];

var 입력 = document.querySelector('#item');
var 버튼 = document.querySelector('#add');
var 언리스트 = document.querySelector('#unlist');

function 추가(){
    var 리스트 = document.createElement("li");
    var 스펜 = document.createElement("span");
    for(var i=0; i<아이템리스트.length; i++){
        리스트.textContent = 아이템리스트[i];
    }
    스펜.textContent = 'X';
    스펜.setAttribute("class", "num");
    언리스트.appendChild(리스트);
    리스트.appendChild(스펜);
    삭제();
}

function 삭제(){
    var attr = document.querySelectorAll(".num");
    for(var j=0; j<attr.length; j++){
    attr[j].addEventListener('click', function(){
        if(this.parentNode.parentNode){
            this.parentNode.parentNode.removeChild(this.parentNode)
        }
    })
}
};

버튼.addEventListener('click', function(){
    if(입력.value != null){
        아이템리스트.push(입력.value);
        입력.value = "";
        입력.focus();
    }
    추가();
});
