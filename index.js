const cars = [
    {
      id: 1,
      title: "Red Lamborghni",
      color: "Red",
      price: 159900,
      img: "./images/car1.jpeg",
      desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
    },
    {
      id: 2,
      title: "Ford",
      color: "Yellow",
      price: 139900,
      img: "./images/car2.jpeg",
      desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
    },
    {
      id: 3,
      title: "red racing car",
      color: "Red",
      price: 6990000,
      img: "./images/car3.jpeg",
      desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
    },
    {
      id: 4,
      title: "White Mercedes",
      color: "White",
      price: 209900,
      img: "./images/car4.jpeg",
      desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
    },
    {
      id: 5,
      title: "Silver car",
      color: "Silver",
      price: 229900,
      img: "./images/car5.jpeg",
      desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
    },
    {
      id: 6,
      title: "Papel de parede",
      color: "Purple",
      price: 189900,
      img: "./images/car6.jpeg",
      desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
    },
    {
      id: 7,
      title: "Zenvo",
      color: "Red",
      price: 8990000,
      img: "./images/car7.jpeg",
      desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
    },
    {
      id: 8,
      title: "yellow car",
      color: "Yellow",
      price: 120000,
      img: "./images/car8.jpeg",
      desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
    },
    {
      id: 9,
      title: "purple car",
      color: "Purple",
      price: 169900,
      img: "./images/car9.jpeg",
      desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
    {
      id: 10,
      title: "orange car",
      color: "orange",
      price: 229900,
      img: "./images/car10.jpeg",
      desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
  ];


  const sectionCenter = document.querySelector(".section-center");
  const filterBtns = document.querySelectorAll(".filter-btn");
  const filterBtn = document.querySelector(".filter-btn");

  window.addEventListener("DOMContentLoaded", function(){
    displayCarItems(cars);
  })

  filterBtns.forEach(function(btn) {
    btn.addEventListener("click", function(e){
        const color = e.currentTarget.dataset.id;
        const carColor = cars.filter(function(carItem){
          // console.log(carItem.color)
            if(carItem.color === color){
              return carItem
            }
        })
        if(color === "All"){
          displayCarItems(cars);
        } else {
          displayCarItems(carColor);
        }
    })
  })

  
    // filterBtn.addEventListener("click", function(e){
    //   if(e.target.classList.contains("filter-btn")){
    //    btn.querySelector(".active").classList.remove("active");
    //    e.target.classList.add("active");
    //    const filterValue = e.target.getAttribute("data-id");
    //      if(filterBtn.classList.contains(filterValue) || filterValue === "All"){
    //       displayCarItems(filterValue)
    //       filterBtn.classList.add("show")
    //       filterBtn.classList.remove("hide");
    //     } else {
    //       filterBtn.classList.add("hide")
    //     }
    //   }
    // })
    
    

  function displayCarItems(carItems){
    let displayCar = carItems.map(function(car){
        //console.log(item);
        return  ` <article class="car-item">
        <img src=${car.img} class="photo" alt=${car.title}/>
    <div class="item-info">
        <header>
            <h4>${car.title}</h4>
            <h4 class="price">$${car.price}</h4>
        </header>
    <p class="item-text">
       ${car.desc}
    </p>
    </div>
    </article>`
    });
    displayCar = displayCar.join('');
    console.log(displayCar);
    sectionCenter.innerHTML = displayCar;
  }
