

function newPost() {
  let window = document.getElementById("post-window");
  let postmenu = document.getElementById("postmenu");
  if (window.classList.contains("footnote-open")) {
    window.classList.remove("footnote-open");
    postmenu.classList.remove("shown");
    return;
  }
  window.classList.add("footnote-open");
  postmenu.classList.add("shown");
  postmenu.classList.add("overflow-on");
}

function setProgress(score, index) {
  document.getElementById("progbar" + index).style.width =
    score * (index == 5 ? 2.5 : 10) + "%";
  document.getElementById("score" + index).innerHTML =
    score + (index == 5 ? "/40" : "/10");
}

// setProgressall(10);

function cardGen(index, element) {
  return `<div class='w-80 h-120 border-black border-2 rounded-md shadow-[5px_5px_0px_rgba(11,46,71,1)] food-card'><a href='postui.html?postindex=${index}' class='block cursor-pointer' ><article class='w-full h-full'><figure class='w-full h-1/2 border-black border-b-2'><img src='resources/first.jpg' alt='Food pic' class='w-full h-60 object-cover'/></figure><div class='px-6 py-5 text-left h-full'><h2 class='text-[32px] mb-4 food-name'>${element.foodname}</h2><p class='text-xs mb-4 line-clamp-4 food-desc'>${element.descreption}</p></div></article></a></div>`
}

function fillCardContainer() {
  const container = document.getElementById("cards")

  for (let index = 0; index < kaják.length; index++) {
    const element = kaják[index];
    const card = cardGen(index, element)
    container.innerHTML += card
  }
}

function fillWithData(index) {
  document.getElementById("foodname").innerHTML = kaják[index].foodname;
  let rating = kaják[index].rating;
  setProgress(rating.íz, 1);
  setProgress(rating.egyszeruseg, 2);
  setProgress(rating.nutrition, 3);
  setProgress(rating.price, 4);
  let össz = rating.íz + rating.egyszeruseg + rating.nutrition + rating.price;
  setProgress(össz, 5);
}

function getDataFromURL(url) {
  let splitted = url.split("=");
  return splitted[1];
}

fetch("http://localhost:3000/posts")



let kaják = [
  {
    foodname: "Pains au Lait with strawberry jam",
    descreption: "",
    ingredients: "Pains au Lait, epre lekvár",
    rating: {
      egyszeruseg: 9,
      íz: 8,
      nutrition: 1,
      spawnRate: 6.5,
      állag: 7,
      price: 7,
    },
    numOfRatings: 1,
    user: "",
    userId: "",
  },
  {
    foodname: "Arrabona Plain Cracker",
    descreption: "",
    ingredients: "bolt",
    rating: {
      egyszeruseg: 10,
      íz: 5,
      nutrition: 0,
      spawnRate: 8,
      állag: 4,
      price: 0,
    },
    numOfRatings: 1,
    user: "",
    userId: "",
  },
  {
    foodname: "Homemade hotdog",
    descreption: "",
    ingredients: "kifli, virsli, ketchup, mustar",
    rating: {
      egyszeruseg: 7,
      íz: 8,
      nutrition: 0,
      spawnRate: 6,
      állag: 5,
      price: 0,
    },
    numOfRatings: 1,
    user: "",
    userId: "",
  },
  {
    foodname: "McNuggets",
    descreption: "",
    ingredients: "McDonald's",
    rating: {
      egyszeruseg: 8,
      íz: 9,
      nutrition: 0,
      spawnRate: 0,
      állag: 10,
      price: 0,
    },
    numOfRatings: 1,
    user: "",
    userId: "",
  },
  {
    foodname: "M'n'M McFlurry",
    descreption: "",
    ingredients: "",
    rating: {
      egyszeruseg: 8,
      íz: 8,
      nutrition: 0,
      spawnRate: 0,
      állag: 8,
      price: 0,
    },
    numOfRatings: 1,
    user: "",
    userId: "",
  },
  {
    foodname: "paula copy",
    descreption: "amugy ezekhez kene egy website",
    ingredients: "",
    rating: {
      egyszeruseg: 10,
      íz: 7,
      nutrition: 0,
      spawnRate: 7,
      állag: 8,
      price: 0,
    },
    numOfRatings: 1,
    user: "",
    userId: "",
  },
  {
    foodname: "Mug Cake",
    descreption: "",
    ingredients: "liszt, sötőpor, cukor, tej, tojás, kakaópor, olaj",
    rating: {
      egyszeruseg: 5,
      íz: 9,
      nutrition: 0,
      spawnRate: 9,
      állag: 8,
      price: 0,
    },
    numOfRatings: 1,
    user: "",
    userId: "",
  },
  {
    foodname: "Toasted Sandwich",
    descreption: "",
    ingredients: "",
    rating: {
      egyszeruseg: 6,
      íz: 8,
      nutrition: 0,
      spawnRate: 7,
      állag: 10,
      price: 0,
    },
    numOfRatings: 1,
    user: "",
    userId: "",
  },
  {
    foodname: "Hungarian style potato stew with vienna sausages",
    descreption: "",
    ingredients: "",
    rating: {
      egyszeruseg: 6,
      íz: 8,
      nutrition: 0,
      spawnRate: 7,
      állag: 7,
      price: 0,
    },
    numOfRatings: 1,
    user: "",
    userId: "",
  },
  {
    foodname: "Bananabread",
    descreption: "",
    ingredients: "",
    rating: {
      egyszeruseg: 0,
      íz: 9.5,
      nutrition: 0,
      spawnRate: 1,
      állag: 10,
      price: 0,
    },
    numOfRatings: 1,
    user: "",
    userId: "",
  },
  {
    foodname: "Chestnut puree",
    descreption: "",
    ingredients: "",
    rating: {
      egyszeruseg: 5,
      íz: 9,
      nutrition: 0,
      spawnRate: 2,
      állag: 8,
      price: 0,
    },
    numOfRatings: 1,
    user: "",
    userId: "",
  },
  {
    foodname: "Emily in Paris Tartalettes by Duc De Coeur",
    descreption: "",
    ingredients: "",
    rating: {
      egyszeruseg: 0,
      íz: 7,
      nutrition: 2,
      spawnRate: 0,
      állag: 6,
      price: 6,
    },
    numOfRatings: 3,
    user: "",
    userId: "",
  },
  {
    foodname: "Homemade Chocolatte Cookie",
    descreption: "",
    ingredients: "",
    rating: {
      egyszeruseg: 3,
      íz: 10,
      nutrition: 7,
      spawnRate: 2,
      állag: 9,
      price: 0,
    },
    numOfRatings: 1,
    user: "",
    userId: "",
  },
];
