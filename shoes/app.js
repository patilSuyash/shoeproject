const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
    {
      id: 1,
      title: "Air Force",
      price: 3500,
      colors: [
        {
          code: "gray",
          img: "ai.webp",
        },
        {
          code: "black",
          img: "ai1.png",
        },
      ],
    },
    {
      id: 2,
      title: "Air Jordan",
      price: 4000,
      colors: [
        {
          code: "yellow",
          img: "JORDANS.png",
        },
        {
          code: "whitesmoke",
          img: "JORDANS1.webp",
        },
      ],
    },
    {
      id: 3,
      title: "Dunk Low",
      price: 2500,
      colors: [
        {
          code: "skyblue",
          img: "dll.webp",
        },
        {
          code: "darkblue",
          img: "dll1.webp",
        },
      ],
    },
    {
      id: 4,
      title: "Sports",
      price: 3000,
      colors: [
        {
          code: "red",
          img: "spo.png",
        },
        {
          code: "whitesmoke",
          img: "spo1.webp",
        },
      ],
    },
    {
      id: 5,
      title: "Hippie",
      price: 4000,
      colors: [
        {
          code: "lightgreen",
          img: "hip.webp",
        },
        {
          code: "gray",
          img: "hip1.webp",
        },
      ],
    },
  ];
  

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    //change the current slide
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    //change the choosen product
    choosenProduct = products[index];

    //change texts of currentProduct
    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = "₹" + choosenProduct.price;
    currentProductImg.src = choosenProduct.colors[0].img;

    //assing new colors
    currentProductColors.forEach((color, index) => {
      color.style.backgroundColor = choosenProduct.colors[index].code;
    });
  });
}); 

currentProductColors.forEach((color, index) => {
  color.addEventListener("click", () => {
      currentProductImg.src = choosenProduct.colors[index].img;
  });
});

currentProductSizes.forEach((size, index) =>{
  size.addEventListener("click",() => {
    currentProductSizes.forEach(size =>{
      size.style.backgroundColor= "white"
      size.style.color="red"
    });
    size.style.backgroundColor= "red"
    size.style.color="white"
  });
}); 

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});

