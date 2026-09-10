const points = document.getElementById("points")
let corrects = 0
let sporsmal = ["Hvordan lager man en lenke i HTML","Hvilken av disse er IKKE en CSS display-type","Hva brukes JavaScript for","Kan man bruke Java istedet for javascript i webutvikling","FERDIG"]
const questions = document.getElementById("spors")
let progress = 0
questions.textContent = sporsmal[progress]
const ans1 = document.getElementById("ans1")
const ans2 = document.getElementById("ans2")
const ans3 = document.getElementById("ans3")
const ans4 = document.getElementById("ans4")
ans1.textContent = "<l>"
ans2.textContent = "<a>"
ans3.textContent = "<h>"
ans4.textContent = "<b>"

function refresh(){
    if (progress == 1){
            ans1.textContent = "flexbox"
            ans2.textContent = "block"
            ans3.textContent = "inline-block"
            ans4.textContent = "widescreen"
        }

    if (progress == 2){
            ans1.textContent = "interaktivitet"
            ans2.textContent = "kommunikasjon"
            ans3.textContent = "design"
            ans4.textContent = "utforming"
        }
    
    if (progress == 3){
            ans1.textContent = "ja"
            ans2.textContent = "bare på fredager"
            ans3.textContent = "nei"
            ans4.textContent = "det spørs"
        }
}

function acheck(){
    
    if(progress == 2){
        corrects++
        points.textContent = corrects
    }
    progress++
    questions.textContent = sporsmal[progress]
    refresh()
    if (progress==4){
    alert("wow du er veldig god")
}
}

function bcheck(){
    if(progress == 0){
        corrects++
        points.textContent = corrects
    }
    progress++
    refresh()
        questions.textContent = sporsmal[progress]
    if (progress==4){
    alert("wow du er veldig god")
}
}

function ccheck(){
    if(progress == 3){
        corrects++
        points.textContent = corrects
    }
    progress++
    refresh()
    questions.textContent = sporsmal[progress]
    if (progress==4){
    alert("wow du er veldig god")
}
}

function dcheck(){
    if(progress == 1){
        corrects++
        points.textContent = corrects
    }
    progress++
    refresh()
        questions.textContent = sporsmal[progress]
    if (progress==4){
    alert("wow du er veldig god")
}
}

