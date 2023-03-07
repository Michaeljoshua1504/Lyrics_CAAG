
Date.prototype.formateMMDDYYYY=function(){
    return(this.getMonth()+1)+ "/"+this.getDaye()+"/"+this.getFullYear();
}
var day=document.getElementById('today_date');
curr.toLocaleDateString('en-US');
day.innerHTML=curr;
function toggleText(id, filePath) {
    var textWrapper = document.getElementById(id);
    var allTextWrappers = document.querySelectorAll('.text-wrapper');

    allTextWrappers.forEach(function(wrapper) {
        if (wrapper === textWrapper) {
            wrapper.classList.toggle('active');
            if (wrapper.classList.contains('active')) {
                fetch(filePath)
                    .then(response => response.text())
                    .then(text => {
                        wrapper.innerHTML = "<pre>" + text + "</pre>";
                    })
                    .catch(error => console.log(error));
            } else {
                wrapper.innerHTML = "";
            }
        } else {
            wrapper.classList.remove('active');
            wrapper.innerHTML = "";
        }
    });
}