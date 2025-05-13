//song list
let All_song = [
   {
     name: "500lbs",
     path: "music/Lil Tecca - 500lbs.mp3",
     img: "images/Lil Tecca.png",
     singer: "Lil tecca"
   },
   {
     name: "Lucid Dreams",
     path: "music/Lucid Dreams Juice wrld.mp3",
     img: "images/2.png",
     singer: "Juice Wrld"
   },
  
   {
     name: "Ransom",
     path: "music/ransom.mp3",
     img: "images/Lil Tecca.png",
     singer: "Lil Tecca"
   },
   {
     name: "Fe!n",
     path: "music/fein.mp3.",
     img: "images/travis scotty.png",
     singer: "Travis Scott"
   },
   {
    name: "Feel It ",
    path: "music/feel it.mp3",
    img: "images/feel it.png",
    singer: "D4vd"
   }
];
/*you can add more song & images from you computer*/


/*tracks*/
let tracks = document.querySelector('.tracks');

//creating a list or generating Html
for (let i = 0; i < All_song.length; i++) {

  let Html = ` <div class="song">
      <div class="img">
      <img src="${All_song[i].img}"/>
      </div>
      <div class="more">
      <audio src="${All_song[i].path}" id="music"></audio>
      <div class="song_info">
         <p id="title">${All_song[i].name}</p>
         <p>${All_song[i].singer}</p>
      </div>
      <button id="play_btn"><i class="fa fa-angle-right" aria-hidden="true"></i></button>
      </div>
    </div>`;

  tracks.insertAdjacentHTML("beforeend", Html);
};
