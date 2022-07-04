"use strict"

let navBarWrapper:HTMLElement = document.createElement("div")
document.body.appendChild(navBarWrapper)
navBarWrapper.id = "nav-bar-wrapper"
navBarWrapper.classList.add("wrapper")

let logoDiv:HTMLElement = document.createElement("div")
document.getElementById("nav-bar-wrapper")?.appendChild(logoDiv)

let navLinks:HTMLElement = document.createElement("div")
document.getElementById("nav-bar-wrapper")?.appendChild(navLinks)

let navIcons:HTMLElement = document.createElement("div")
document.getElementById("nav-bar-wrapper")?.appendChild(navIcons)



// class Car {
//     //properties
//     name:string=""
//     price:number=0
//     color:string=""
//     mileage:number=0

//     constructor(name:string,price:number,color:string,mileage:number) {
//         this.name=name
//         this.price=price
//         this.color=color
//         this.mileage=mileage
//     }
// }





// let theCars:Car[]= []

// theCars = JSON.parse(localStorage.getItem("cars")!)
// if (theCars==null){
//     theCars=[]
//     theCars.push({name:"Ford", price:6000, color:"Blue",mileage:60000})
//     theCars.push({name:"Lamborghini", mileage:1000, color:"White", price:8000})
//     theCars.push({name:"Toyota",mileage:987462,color:"Red",price:982162})
//     theCars.push({name:"Audi",price:15000,color:"Silver",mileage:45000})
//     theCars.push({name:"Porsche",price:25000,color:"Black",mileage:25000})
//     theCars.push({name:"Ferrari",price:125000,color:"Silver",mileage:35000})
    
// }

// // theCars.push (new Car("Ford", 57849, "orange", 60000))

// render()
// // theCars.sort((a, b)=>b.price - a.price)

// // console.log(theCars)

// let save = document.getElementById("save")
// save!.addEventListener("click",addCar)


// function addCar(){
//     let name=(<HTMLInputElement>document.getElementById("name")).value
//     let mileage=parseInt((<HTMLInputElement>document.getElementById("mileage")).value)
//     let price=parseInt((<HTMLInputElement>document.getElementById("price")).value)
//     let color=(<HTMLInputElement>document.getElementById("color")).value

//  let car={name:name, mileage:mileage, price:price, color:color}
//    theCars.push(car)

//     render()

//     saveCars()
// }

// function render(){
//     holder.innerHTML=""
//     let i = 0

//     while(i<theCars.length){
        
//         let card = document.createElement("div")
//         holder.appendChild(card)
//         card.classList.add("card")

//         let head = document.createElement("h1")
//         card.appendChild(head)
//         head.innerHTML = `Brand:${theCars[i].name}`

//         let paragraph = document.createElement("p")
//         card.appendChild(paragraph)
//         paragraph.innerHTML = `Price:${theCars[i].price}`
        
//         let paragraph1 = document.createElement("p")
//         card.appendChild(paragraph1)
//         paragraph1.innerHTML = `Color: ${theCars[i].color}`
        
//         let paragraph2 = document.createElement("p")
//         card.appendChild(paragraph2)
//         paragraph2.innerHTML = `Mileage: ${theCars[i].mileage}`
        
//         // let deleteButton = document.createElement("button")
//         // deleteButton.dataset.index = i
//         // card.appendChild(deleteButton)
//         // deleteButton.innerHTML = "Delete"
//         // deleteButton.addEventListener("click", deleteCar)

//         i++
//     }
// }

// // function deleteCar() {
// //     Car.remove() 
// // }

// function saveCars(){
//     localStorage.setItem("cars",JSON.stringify(theCars))
//     //permanently save so user can close browser and come back to it
//     // let carString=JSON.stringify(cars)
// }







