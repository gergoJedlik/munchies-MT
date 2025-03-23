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

function cardGen(element) {
  return `<div class='w-80 h-130 border-black border-2 rounded-md shadow-[5px_5px_0px_rgba(11,46,71,1)] food-card'><a href='postui.html?postid=${element.postID}' class='block cursor-pointer h-full' ><article class='w-full h-full'><figure class='w-full h-[45%] border-black border-b-2'><img src=${element.Image ? element.Image : './resources/default.jpg'} alt='Food pic' class='w-full h-full object-cover'/></figure><div class='px-6 py-5 text-left h-[55%]'><h2 class='text-[32px] mb-4 food-name break-words leading-none line-clamp-3'>${element.FoodName}</h2><p>rated: ${element.rating.overall} out of 40</p><p class='text-xs mb-4 line-clamp-4 food-desc'>${element.Desc}</p><footer class="flex justify-end bottom-0"><span class="italic">- ${element.user.username}</span></footer></div></article></a></div>`;
}

export function fillCardContainer() {
  const container = document.getElementById("cards");
  container.innerHTML = "";
  for (let index = 0; index < kaják.length; index++) {
    if (isNoShowPost(kaják[index])) continue;

    const element = kaják[index];
    const card = cardGen(element);
    container.innerHTML += card;
  }
}

export async function fillWithData(id) {
  let kaja = await GetSpecPost(id);
  console.log(kaja)
  document.getElementById("foodname").innerHTML = kaja.FoodName;
  document.getElementById("author").innerText = kaja.User.name;
  let time = kaja.createdAt.split("T")
  document.getElementById("time").innerText = `${time[0]} ${time[1].split(".")[0]}`;
  if (kaja.Image) document.getElementById("food-photo").src = kaja.Image;
  let rating = kaja.rating;
  setProgress(rating.taste, 1);
  setProgress(rating.simplicity, 2);
  setProgress(rating.nutrition, 3);
  setProgress(rating.price, 4);
  let össz = rating.taste + rating.simplicity + rating.nutrition + rating.price;
  setProgress(össz, 5);
  document.getElementById("desc").innerHTML = kaja.Desc
  if (kaja.Ingredients != null) {
    document.getElementById("ingredients").innerHTML = kaja.Ingredients;
  }
}

export function getDataFromURL(url) {
  let splitted = url.split("=");
  return splitted[1];
}

function isNoShowPost(post) {
  return post.Desc.includes("--noshow");
}

export async function createPost() {
  const userID = localStorage.getItem("userID")

  if (!userID) return "Please log in";
  if (!document.getElementById("foodname-input").validity.valid) return "Please enter a name";
  if (!(document.getElementById("taste-rating").validity.valid && document.getElementById("simplicity-rating").validity.valid && document.getElementById("nurition-rating").validity.valid && document.getElementById("price-rating").validity.valid)) return "Please enter valid ratings (1-10) for all categories";


  const post = {
    foodname: document.getElementById("foodname-input").value,
    description: document.getElementById("desc-input").value,
    ingredients: document.getElementById("ingredients-input").value,
    calories: parseInt(document.getElementById("nutrition-input").value),
    imgLink: document.getElementById("link-input").value,
    user: userID,
    rating: {
      taste: parseInt(document.getElementById("taste-rating").value),
      simplicity: parseInt(document.getElementById("simplicity-rating").value),
      nutrition: parseInt(document.getElementById("nurition-rating").value),
      price: parseInt(document.getElementById("price-rating").value)
    }
  }
  try {
    await fetch("https://munchiesdb.vercel.app/api/posts", {
      method: "POST",
      body: JSON.stringify(post)
    })
  } catch (error) {
    console.log(error)
    return error
  }

  for (const element of document.querySelectorAll(".postfield-element")) {
    element.innerHTML = "";
    element.value = "";
  }

  newPost()
  location = window.location.href;
  return "Post Created"
}


/**
 * 
 * @returns {{
    FoodName: string,
    postID: string,
    Desc: string,
    Nutri: int | null,
    Ingredients: string,
    Image: string,
    rating: {
      taste: int,
      price: int,
      texture: int,
      nutrition: int,
      simplicity: int,
      abundancy: int,
      overall: int
    }
    user: {
      userID: string,
      name: string
    }
 }[]}
 */
async function GetAllPosts(sortMode) {
  const res = await fetch(`https://munchiesdb.vercel.app/api/posts?sort=${sortMode}`);
  const { data } = await res.json();
  const foods = data.map((post) => {
    let [taste, price, texture, simplicity, nutrition, abundancy] = [
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
    taste = taste / len;
    price = price / len;
    texture = texture / len;
    abundancy = abundancy / len;
    simplicity = simplicity / len;
    nutrition = nutrition / len;
    let overall = taste + price + simplicity + nutrition;

    const username = post.User.name
    const userID = post.userID;
    return {
      ...post,
      rating: { taste, price, texture, abundancy, simplicity, nutrition, overall },
      user: { userID, username }
    };
  });

  return foods;
}

async function GetSpecPost(id) {
  const res = await fetch(`https://munchiesdb.vercel.app/api/posts?postID=${id}`);
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
  if (sortMode == "rating") {
    kaják = kaják.sort((a, b) => b.rating.overall - a.rating.overall);
  }
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