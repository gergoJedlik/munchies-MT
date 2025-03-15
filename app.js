export function newPost() {
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

export function setProgress(score, index) {
  document.getElementById("progbar" + index).style.width =
    score * (index == 5 ? 2.5 : 10) + "%";
  document.getElementById("score" + index).innerHTML =
    score + (index == 5 ? "/40" : "/10");
}

// setProgressall(10);

function cardGen(index, element) {
  return `<div class='w-80 h-120 border-black border-2 rounded-md shadow-[5px_5px_0px_rgba(11,46,71,1)] food-card'><a href='postui.html?postid=${element.postID}' class='block cursor-pointer' ><article class='w-full h-full'><figure class='w-full h-1/2 border-black border-b-2'><img src='resources/first.jpg' alt='Food pic' class='w-full h-60 object-cover'/></figure><div class='px-6 py-5 text-left h-full'><h2 class='text-[32px] mb-4 food-name'>${element.FoodName}</h2><p class='text-xs mb-4 line-clamp-4 food-desc'>${element.Desc}</p></div></article></a></div>`;
}

export function fillCardContainer() {
  const container = document.getElementById("cards");
  container.innerHTML = "";
  for (let index = 0; index < kaják.length; index++) {
    if (isNoShowPost(kaják[index])) continue;

    const element = kaják[index];
    const card = cardGen(index, element);
    container.innerHTML += card;
  }
}

export async function fillWithData(id) {
  let kaja = await GetSpecPost(id)
  console.log(kaja)
  document.getElementById("foodname").innerHTML = kaja.FoodName;
  let rating = kaja.rating;
  setProgress(rating.taste, 1);
  setProgress(rating.simplicity, 2);
  setProgress(rating.nutrition, 3);
  setProgress(rating.price, 4);
  let össz = rating.taste + rating.simplicity + rating.nutrition + rating.price;
  setProgress(össz, 5);
}

export function getDataFromURL(url) {
  let splitted = url.split("=");
  return splitted[1];
}

function isNoShowPost(post) {
  return post.Desc == "--noshow";
}


/**
 * 
 * @returns {{
    FoodName: string,
    postID: string,
    Desc: string,
    Nutri: int | null,
    Ingredients: string,
    userID: string,
    rating: {
      taste: int,
      price: int,
      texture: int,
      nutrition: int,
      simplicity: int,
      abundancy: int,
      overall: int
    }
 }[]}
 */
async function GetAllPosts(sortMode) {
  const res = await fetch(`http://localhost:3000/api/posts?sort=${sortMode}`);
  const { data } = await res.json();
  const foods = data.map((post) => {
    let [taste, price, texture, simplicity, nutrition, abundancy, overall] = [
      0, 0, 0, 0, 0, 0, 0
    ];
    for (const rating of post.Ratings) {
      taste += rating.taste;
      price += rating.price;
      texture += rating.texture;
      simplicity += rating.simplicity;
      nutrition += rating.nutrition;
      abundancy += rating.abundancy;
    }
    const len = post.Ratings.length;
    overall = taste + abundancy + simplicity + nutrition;
    taste = taste / len;
    price = price / len;
    texture = texture / len;
    abundancy = abundancy / len;
    simplicity = simplicity / len;
    nutrition = nutrition / len;
    return {
      ...post,
      rating: { taste, price, texture, abundancy, simplicity, nutrition, overall },
    };
  });

  return foods;
}

async function GetSpecPost(id) {
  const res = await fetch(`http://localhost:3000/api/posts?postID=${id}`);
  const { data } = await res.json();
  let [taste, price, texture, simplicity, nutrition, abundancy] = [0, 0, 0, 0, 0, 0];
  for (const rating of data.Ratings) {
    taste += rating.taste;
    price += rating.price
    texture += rating.texture
    simplicity += rating.simplicity
    nutrition += rating.nutrition
    abundancy += rating.abundancy
  }
  const len = data.Ratings.length
  taste = taste / len
  price = price / len
  texture = texture / len
  simplicity = simplicity / len
  nutrition = nutrition / len
  abundancy = abundancy / len
  data.rating = {
    taste: taste,
    price: price,
    texture: texture,
    simplicity: simplicity,
    nutrition: nutrition,
    abundancy: abundancy,
  }
  return data;
}

export async function setSort(value) {
  console.log(`Sort : ${value}`)
  sortMode = value;
  kaják = await GetAllPosts(sortMode);
  fillCardContainer();
}

// -------MAIN CODE--------

let sortMode = "newest";

export let kaják = await GetAllPosts(sortMode);
// make it refresh every 5 sec
/*setInterval(async () => {
  kaják = await GetAllPosts(sortMode);
}, 5000);*/

/*
[
  {
    FoodName: string,
    Desc: string,
    Nutri: int | null,
    Ingredients: string,
    userID: string,
    rating: {
      taste: int,
      price: int,
      texture: int,
      nutrition: int,
      simplicity: int,
      abundancy: int
    }
  }
]
*/

// let kaják = [
//   {
//     foodname: "Pains au Lait with strawberry jam",
//     descreption: "",
//     ingredients: "Pains au Lait, epre lekvár",
//     rating: {
//       egyszeruseg: 9,
//       íz: 8,
//       nutrition: 1,
//       spawnRate: 6.5,
//       állag: 7,
//       price: 7,
//     },
//     numOfRatings: 1,
//     user: "",
//     userId: "",
//   },
//   {
//     foodname: "Arrabona Plain Cracker",
//     descreption: "",
//     ingredients: "bolt",
//     rating: {
//       egyszeruseg: 10,
//       íz: 5,
//       nutrition: 0,
//       spawnRate: 8,
//       állag: 4,
//       price: 0,
//     },
//     numOfRatings: 1,
//     user: "",
//     userId: "",
//   },
//   {
//     foodname: "Homemade hotdog",
//     descreption: "",
//     ingredients: "kifli, virsli, ketchup, mustar",
//     rating: {
//       egyszeruseg: 7,
//       íz: 8,
//       nutrition: 0,
//       spawnRate: 6,
//       állag: 5,
//       price: 0,
//     },
//     numOfRatings: 1,
//     user: "",
//     userId: "",
//   },
//   {
//     foodname: "McNuggets",
//     descreption: "",
//     ingredients: "McDonald's",
//     rating: {
//       egyszeruseg: 8,
//       íz: 9,
//       nutrition: 0,
//       spawnRate: 0,
//       állag: 10,
//       price: 0,
//     },
//     numOfRatings: 1,
//     user: "",
//     userId: "",
//   },
//   {
//     foodname: "M'n'M McFlurry",
//     descreption: "",
//     ingredients: "",
//     rating: {
//       egyszeruseg: 8,
//       íz: 8,
//       nutrition: 0,
//       spawnRate: 0,
//       állag: 8,
//       price: 0,
//     },
//     numOfRatings: 1,
//     user: "",
//     userId: "",
//   },
//   {
//     foodname: "paula copy",
//     descreption: "amugy ezekhez kene egy website",
//     ingredients: "",
//     rating: {
//       egyszeruseg: 10,
//       íz: 7,
//       nutrition: 0,
//       spawnRate: 7,
//       állag: 8,
//       price: 0,
//     },
//     numOfRatings: 1,
//     user: "",
//     userId: "",
//   },
//   {
//     foodname: "Mug Cake",
//     descreption: "",
//     ingredients: "liszt, sötőpor, cukor, tej, tojás, kakaópor, olaj",
//     rating: {
//       egyszeruseg: 5,
//       íz: 9,
//       nutrition: 0,
//       spawnRate: 9,
//       állag: 8,
//       price: 0,
//     },
//     numOfRatings: 1,
//     user: "",
//     userId: "",
//   },
//   {
//     foodname: "Toasted Sandwich",
//     descreption: "",
//     ingredients: "",
//     rating: {
//       egyszeruseg: 6,
//       íz: 8,
//       nutrition: 0,
//       spawnRate: 7,
//       állag: 10,
//       price: 0,
//     },
//     numOfRatings: 1,
//     user: "",
//     userId: "",
//   },
//   {
//     foodname: "Hungarian style potato stew with vienna sausages",
//     descreption: "",
//     ingredients: "",
//     rating: {
//       egyszeruseg: 6,
//       íz: 8,
//       nutrition: 0,
//       spawnRate: 7,
//       állag: 7,
//       price: 0,
//     },
//     numOfRatings: 1,
//     user: "",
//     userId: "",
//   },
//   {
//     foodname: "Bananabread",
//     descreption: "",
//     ingredients: "",
//     rating: {
//       egyszeruseg: 0,
//       íz: 9.5,
//       nutrition: 0,
//       spawnRate: 1,
//       állag: 10,
//       price: 0,
//     },
//     numOfRatings: 1,
//     user: "",
//     userId: "",
//   },
//   {
//     foodname: "Chestnut puree",
//     descreption: "",
//     ingredients: "",
//     rating: {
//       egyszeruseg: 5,
//       íz: 9,
//       nutrition: 0,
//       spawnRate: 2,
//       állag: 8,
//       price: 0,
//     },
//     numOfRatings: 1,
//     user: "",
//     userId: "",
//   },
//   {
//     foodname: "Emily in Paris Tartalettes by Duc De Coeur",
//     descreption: "",
//     ingredients: "",
//     rating: {
//       egyszeruseg: 0,
//       íz: 7,
//       nutrition: 2,
//       spawnRate: 0,
//       állag: 6,
//       price: 6,
//     },
//     numOfRatings: 3,
//     user: "",
//     userId: "",
//   },
//   {
//     foodname: "Homemade Chocolatte Cookie",
//     descreption: "",
//     ingredients: "",
//     rating: {
//       egyszeruseg: 3,
//       íz: 10,
//       nutrition: 7,
//       spawnRate: 2,
//       állag: 9,
//       price: 0,
//     },
//     numOfRatings: 1,
//     user: "",
//     userId: "",
//   },
// ];
