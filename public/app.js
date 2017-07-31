var catsArray = [
{ name: "name: Django", Favourite_food: "Favourite food: other cats!(sometimes human flesh!)", src: "http://cdn.acidcow.com/pics/20100607/ugly_cats_04.jpg"},
{ name: "name: super cat!", Favourite_food: "Favourite food: Kryponite Bitches!", src: "https://i.ytimg.com/vi/eH0_RQNnltc/maxresdefault.jpg"},
{ name: "Name: Boba", Favourite_food: "Favourite food: Sock fluff", src: "http://66.media.tumblr.com/d1f01bbe0150fda0c40d2151c5eaeac8/tumblr_odlqqskjj61v9cejwo1_400.jpg"},
{ name: "Name: Max", Favourite_food: "Favourite food: Whiskas Temptations", src: "http://66.media.tumblr.com/7c5784ea89369c780e782bf10c60315a/tumblr_npb0hlYwhV1u63jaco1_1280.jpg"},
{ name: "Name: Barnaby", Favourite_food: "Favourite food: Tuna", src: "https://68.media.tumblr.com/88d0fcf2b84a7b098dda839130597569/tumblr_okuo4teiql1uhevdso1_1280.jpg"}
];

var createcat = function(cat){
  
  var newCat = document.createElement("ul");
  newCat.classList.add("cat");
 
  var catName = document.createElement("li");
  catName.innerText = cat.name;
 
  var fav_food = document.createElement("li");
  fav_food.innerText = cat.Favourite_food;

  var catImage = document.createElement("li");
  var image = document.createElement("img");
  image.src = cat.src;
  image.width = 500;
  image.height = 350;
  
 catImage.appendChild(image);

  newCat.appendChild(catName);
  
  newCat.appendChild(fav_food);

  newCat.appendChild(catImage);

  var catsList = document.getElementById("cats");
  catsList.appendChild(newCat);
  
};

var app = function(){
  catsArray.forEach(createcat);
}

window.onload = app;