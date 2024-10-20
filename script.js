let form = document.getElementById("form");
let amountInput = document.getElementById("amnt");
let termInput  = document.getElementById("term");
let rateInput  = document.getElementById("rate");
let amntErr = document.getElementById("amnt_err");
let termErr = document.getElementById("term_err");
let rateErr = document.getElementById("rate_err");
let radioErr = document.getElementById("radio_err");
let result = document.querySelector(".result");
let empty = document.querySelector(".empty");
let monthRepay = document.getElementById("monthly-payments");
let totalRepay = document.getElementById("total-payments");
let erase = document.getElementById("clear");

form.addEventListener("submit", function(e){
    e.preventDefault();

    validateForm();
})

erase.addEventListener("click", function(){
    amountInput.value = ''
    rateInput.value = ''
    termInput.value = ''
    !x[i].checked
})

function validateForm(){
    let amountValue = amountInput.value.trim();
    let termValue = termInput.value.trim();
    let rateValue = rateInput.value.trim();

    if (amountValue === '' || amountValue == null){
        amntErr.innerHTML = "This field is required"
    }

    if (termValue === '' || termValue == null){
        termErr.innerHTML = "This field is required"
    }

    if (rateValue === '' || rateValue == null){
        rateErr.innerHTML = "This field is required"
    }

    const radioValidate = () => {
        var valid = false
        var x = document.myform.option
        
        for (var i = 0; i < x.length; i++){
            if (x[i].checked){
                valid = true
                break;
            }
        }

        if (valid !== true){
            radioErr.innerHTML = "This field is required"
        }

        if (amntErr.innerHTML === '' && termErr.innerHTML === '' && rateErr.innerHTML === '' && radioErr.innerHTML === ''){
            empty.style.display = "none"
            result.style.display = "flex"

            if (x[0].checked){
                let totalrpm = Number.parseFloat(amountInput.value) + Number.parseFloat(amountInput.value * rateInput.value / 100)
        
                totalRepay.innerHTML = Math.round(totalrpm)
                monthRepay.innerHTML = Math.round(totalrpm / Number.parseFloat(termInput.value) / 12)
            }else {
                let totalint = Number.parseFloat(amountInput.value * rateInput.value / 100)

                totalRepay.innerHTML = Math.round(totalint)
                monthRepay.innerHTML = Math.round(totalint / Number.parseFloat(termInput.value) / 12)
            }
        }
    }

    radioValidate();
}