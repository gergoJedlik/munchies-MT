import { getDataFromURL, isNoShowPost, cardGen } from "./app"

let user = await fetch(`https://munchiesdb.vercel.app/api/users?userID=${getDataFromURL(window.location.href)}`);
let postdata = await fetch(`https://munchiesdb.vercel.app/api/posts?userID=${getDataFromURL(window.location.href)}`);
user = await user.json()
postdata = await posts.json()
const posts = getPosts()

fillWithData()

function fillWithData() {
    document.getElementById("name").innerText = user.name;
    const container = document.getElementById("posts");
    container.innerHTML = "";
    for (const element of posts) {
        if (isNoShowPost(element)) continue;

        const card = cardGen(element);
        container.innerHTML += card;
    }
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
      username: string
    }
 }[]}
 */
function getPosts() {
    const foods = postdata.map((post) => {
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