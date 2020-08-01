export class CardUI{
    constructor(link){
        this.elemnt = this.getElemnt(link);
        this.addEventListners(this.elemnt);
    }
    getElemnt(link){
        const selector = link[0];
        if(selector === "."){
            console.log(document.getElementsByClassName(link.slice(1)));
            console.log(link.slice(1));
            return document.getElementsByClassName(link.slice(1));
        }else if(selector === "#"){
            
        }else{
            throw new Error("Selector is not Valid")
        }
    }
    addEventListners(element){
        if(typeof element === "object"){
            console.log(element.length);
            for(let i = 0;i < element.length; i++){
                for(let indx = 0;indx < element[i].lastElementChild.children.length; indx++){
                    const btn = element[i].lastElementChild.children[indx];
                    console.log(btn);
                    btn.addEventListener("click",(e)=>{
                        element[i].firstElementChild.style = `transform: translateX(-${element[i].clientWidth*indx}px)`;
                        for(let indx = 0;indx < element[i].lastElementChild.children.length; indx++){
                            const btn = element[i].lastElementChild.children[indx];
                            btn.classList.remove("active--indecator");
                        }
                        btn.classList.add("active--indecator");
                    })
                }
            }
        }else{
            console.log(typeof element);
        }
    }
}