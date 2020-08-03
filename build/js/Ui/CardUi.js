export class CardUI{
    constructor(link){
        this.elemnt = this.getElemnt(link);
        this.addEventListners(this.elemnt);
        this.materialIconsUi();
    }
    getElemnt(link){
        const selector = link[0];
        if(selector === "."){
            return document.getElementsByClassName(link.slice(1));
        }else if(selector === "#"){
            
        }else{
            throw new Error("Selector is not Valid")
        }
    }
    addEventListners(element){
        if(typeof element === "object"){
            for(let i = 0;i < element.length; i++){
                for(let indx = 0;indx < element[i].lastElementChild.children.length; indx++){

                    const btn = element[i].lastElementChild.children[indx];
                    btn.addEventListener("click",(e)=>{
                        element[i].firstElementChild.style = `transform: translateX(-${element[i].clientWidth*indx}px)`;
                        for(let indx = 0;indx < element[i].lastElementChild.children.length; indx++){
                            const btn = element[i].lastElementChild.children[indx];
                            btn.classList.remove("active--indecator");
                        }
                        btn.classList.add("active--indecator");
                    });

                }
            }
        }else{
            console.log(typeof element);s
        }
    }
    materialIconsUi(){
        const materialIcons = document.getElementsByClassName("material-icons");

        if(window.innerWidth >= 1200 && window.innerHeight >=800 && window.innerHeight < 900){
            console.log(materialIcons);
            const icon = materialIcons[0];
            icon.classList.remove("md-48");
            icon.classList.add("md-36");
        }else{

        }
    }
}