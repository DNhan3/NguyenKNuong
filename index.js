function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

function show() {
    document.getElementById('close').style.display = "block";
    document.getElementById('popcover').style.display = "block";
    document.getElementById('close').style.position = "fixed";
    document.getElementById('popcover').style.position = "fixed";
}

function hide() {
    document.getElementById('popcover')
        .style.display = "none";
    document.getElementById('close')
        .style.display = "none";
}

function docshow(){
    document.getElementById('part1').style.animation = "fadeout 2s linear forwards";
    
    document.getElementById('part2').style.animation = "faded 2s 2s linear forwards ";
    document.getElementById('part2').style.display = "block";
}

function dochidden(){
    document.getElementById('part2').style.display = "none";
    document.getElementById('part1').style.display = "block";
    document.getElementById('part1').style.animation = "fade 2s linear forwards";
}