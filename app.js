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

function getDataFromURL(url)
{
  let splitted = url.split("=");
  return splitted[1];
}

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
    foodname: "Győri háztartási keksz",
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
    foodname: "Otthoni hotdog",
    descreption: "",
    ingredients: "kifli, virsli, ketchup, mustár",
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
    foodname: "mcnuggets",
    descreption: "",
    ingredients: "McDonalds",
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
    foodname: "mekis fagyi (m&ms)",
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
    foodname: "bögrés süti",
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
    foodname: "melegszendvics",
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
    foodname: "krumplifőzelék virslivel",
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
    foodname: "Banánkenyér",
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
    foodname: "Gesztenyepüré",
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
    foodname: "Házikészítésű túrófánk",
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
