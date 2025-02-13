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

let kaják = [
  {
    foodname: "Pains au Lait eper lekvárral",
    descreption: "",
    nutrition: "",
    ingredients: "Pains au Lait, epre lekvár",
    rating: {
      egyszeruseg: 9,
      íz: 8,
      spawnRate: 6.5,
      állag: 7,
    },
    numOfRatings: 1,
    user: "",
    userId: "",
  },
  {
    foodname: "győri háztartási keksz",
    descreption: "",
    nutrition: "",
    ingredients: "bolt",
    rating: {
      egyszeruseg: 10,
      íz: 5,
      spawnRate: 8,
      állag: 4,
    },
    numOfRatings: 1,
    user: "",
    userId: "",
  },
  {
    foodname: "Otthoni hotdog",
    descreption: "",
    nutrition: "",
    ingredients: "kifli, virsli, ketchup, mustár",
    rating: {
      egyszeruseg: 7,
      íz: 8,
      spawnRate: 6,
      állag: 5,
    },
    numOfRatings: 1,
    user: "",
    userId: "",
  },
  {
    foodname: "mcnuggets",
    descreption: "",
    nutrition: "",
    ingredients: "McDonalds",
    rating: {
      egyszeruseg: 8,
      íz: 9,
      spawnRate: 0,
      állag: 10,
    },
    numOfRatings: 1,
    user: "",
    userId: "",
  },
  {
    foodname: "mekis fagyi (m&ms)",
    descreption: "",
    nutrition: "",
    ingredients: "",
    rating: {
      egyszeruseg: 8,
      íz: 8,
      spawnRate: 0,
      állag: 8,
    },
    numOfRatings: 1,
    user: "",
    userId: "",
  },
  {
    foodname: "paula copy",
    descreption: "amugy ezekhez kene egy website",
    nutrition: "",
    ingredients: "",
    rating: {
      egyszeruseg: 10,
      íz: 7,
      spawnRate: 7,
      állag: 8,
    },
    numOfRatings: 1,
    user: "",
    userId: "",
  },
  {
    foodname: "bögrés süti",
    descreption: "",
    nutrition: "",
    ingredients: "liszt, sötőpor, cukor, tej, tojás, kakaópor, olaj",
    rating: {
      egyszeruseg: 5,
      íz: 9,
      spawnRate: 9,
      állag: 8,
    },
    numOfRatings: 1,
    user: "",
    userId: "",
  },
  {
    foodname: "melegszendvics",
    descreption: "",
    nutrition: "",
    ingredients: "",
    rating: {
      egyszeruseg: 6,
      íz: 8,
      spawnRate: 7,
      állag: 10,
    },
    numOfRatings: 1,
    user: "",
    userId: "",
  },
  {
    foodname: "krumplifőzelék virslivel",
    descreption: "",
    nutrition: "",
    ingredients: "",
    rating: {
      egyszeruseg: 6,
      íz: 8,
      spawnRate: 7,
      állag: 7,
    },
    numOfRatings: 1,
    user: "",
    userId: "",
  },
  {
    foodname: "Banánkenyér",
    descreption: "",
    nutrition: "",
    ingredients: "",
    rating: {
      egyszeruseg: 0,
      íz: 9.5,
      spawnRate: 1,
      állag: 10,
    },
    numOfRatings: 1,
    user: "",
    userId: "",
  },
  {
    foodname: "Gesztenyepüré",
    descreption: "",
    nutrition: "",
    ingredients: "",
    rating: {
      egyszeruseg: 5,
      íz: 9,
      spawnRate: 2,
      állag: 8,
    },
    numOfRatings: 1,
    user: "",
    userId: "",
  },
];
