class Ui{
    constructor(){
        this.uiList = [
            {
                id: "signUpSelectLang",
                inputs: [
                    "langEn",
                    "langDe",
                    "langFa"
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
                    "incomeCurrencyInput",
                ],
                index: 2
            },
            {
                id: "signUpSelectExpensesMethod",
                inputs: [
                    "simpleExpensesMethod",
                    "advanceExpensesMethod"
                ],
                index: 3
            },
            {
                id: "signUpSelectSimpleExpensesMethod",
                inputs: [
                    "dailyExpenses",
                    "monthlyExpenses",
                    "yearlyExpenses"
                ],
                index: 4
            }
        ];
        this.activeIndex = 0;
        this.indexMax = this.uiList.length;
        this.validateInput();
    }
    BtnEventListener(fn){
        fn === "next" ? fn++: fn--
        const el = document.getElementById(id);
        el.addEventListener
    }
    validateInput(input){
        const regexp = new RegExp("^(0|[1-9][0-9]*)$");
        console.log(regexp.test("0asd"));
    }
}






class App{
    constructor(){
        new Ui();
    }
}
new App();

// document.getElementsByClassName("progres-bar")[0].children[0].style = "width:100%";
