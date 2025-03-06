function newPost() {
    
    let window = document.getElementById("post-window")
    let postmenu = document.getElementById("postmenu")
    if (window.classList.contains("footnote-open")) {
        window.classList.remove("footnote-open")
        postmenu.classList.remove("shown")
        return
    }
    window.classList.add("footnote-open")
    postmenu.classList.add("shown")
    postmenu.classList.add("overflow-on")
}

function setProgress(value) {
    if (value < 1 || value > 10) return;
    const progressBar = document.querySelector('.progress-barar');
    const progressText = document.querySelector('.progress-textar');
    
    const percentage = (value / 10) * 100;
    progressBar.style.width = percentage + "%";
    progressText.textContent = `${value}/10`;
}

setProgress(5);

function setProgressall (value) {
    if (value < 1 || value > 40) return;
    const progressBar = document.querySelector('.progress-barall');
    const progressText = document.querySelector('.progress-textall');
    
    const percentage = (value / 40) * 100;
    progressBar.style.width = percentage + "%";
    progressText.textContent = `${value}/40`;
}

setProgressall(10);
{
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
    ingredients: "Pains au Lait, epre lekvár",
    rating: {
      egyszeruseg: 9,
      íz: 8,
      nutrition: "",
      spawnRate: 6.5,
      állag: 7,
      price: 0,
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
      nutrition: "",
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
      nutrition: "",
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
      nutrition: "",
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
      nutrition: "",
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
      nutrition: "",
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
      nutrition: "",
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
      nutrition: "",
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
      nutrition: "",
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
      nutrition: "",
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
      nutrition: "",
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
      nutrition: "2",
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
  }
];
