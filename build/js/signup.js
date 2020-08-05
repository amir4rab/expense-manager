class Ui{
    constructor(){
        this.uiList = [
            {
                id: "signUpSelectLang",
                inputs: [
                    "langEnRadioBtn",
                    "langDeRadioBtn",
                    "langFaRadioBtn"
                ],
                index: 0
            },
            {
                id: "signUpSelectName",
                inputs: [
                    "nameInput"
                ],
                index: 1
            },
            {
                id: "signUpSelectIncome",
                inputs: [
                    "incomeInput",
                    "incomeCurrencySelection",
                ],
                index: 2
            },
            {
                id: "signUpSelectExpensesMethod",
                inputs: [
                    "simpleExpensesMethodRadioBtn",
                    "advanceExpensesMethodRadioBtn"
                ],
                index: 3
            },
            {
                id: "signUpSelectSimpleExpensesMethod",
                inputs: [
                    "dailyExpensesInput",
                    "monthlyExpensesInput",
                    "yearlyExpensesInput"
                ],
                index: 4
            }
        ];
        this.activeIndex = 0;
        this.indexMax = this.uiList.length;
        this.uiList.forEach(page =>{
            page.inputs.forEach(input=>{
                if(input.includes("Input")){
                    document.getElementById(input).addEventListener("keyup",this.inputKeydown.bind(this));
                }else if(input.includes("RadioBtn")){
                    document.getElementById(input).addEventListener("click",this.radioKeydown.bind(this));
                }
            })
        });
    }
    BtnEventListener(fn){
        fn === "next" ? fn++: fn--
        const el = document.getElementById(id);
        el.addEventListener
    }
    validateInput(input){
        const regexp = input === "num" ? new RegExp("^(0|[1-9][0-9]*)$") : new RegExp("^(0|[1-9][0-9]*)$");
        return regexp.test(input);
    }
    radioKeydown(e){
        console.log(e.target.value);
    }
    inputKeydown(e){
        console.log(e.target.value);
    }
}






class App{
    constructor(){
        new Ui();
    }
}
new App();

// document.getElementsByClassName("progres-bar")[0].children[0].style = "width:100%";
