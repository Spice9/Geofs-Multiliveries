console.log("Loading...");

//Add new liveries by copying the format of the other liveries.

let livObj = { "aircraft": [
  {
  "name": "Boeing 737 Max 8 (Jet Airways)",
  "livery": "1",
  "mptx": "https://www.geo-fs.com/backend/aircraft/repository/EL%20AL%20737-900_427352_2769/texture_1.jpg"
  },

  {
  "name": "Boeing 737 Max 8 (FlyDubai)",
  "livery": "2",
  "mptx": "https://www.geo-fs.com/backend/aircraft/repository/EL%20AL%20737-900_427352_2769/texture_2.jpg"
  },

  {
  "name": "Boeing 737 Max 8 (Aerolineas Argentinas)",
  "livery": "3",
  "mptx": "https://www.geo-fs.com/backend/aircraft/repository/EL%20AL%20737-900_427352_2769/texture_3.jpg"
  },
  
  {
  "name": "Boeing 737 Max 8 (Alaska Airlines)",
  "livery": "4",
  "mptx": "https://www.geo-fs.com/backend/aircraft/repository/EL%20AL%20737-900_427352_2769/texture_4.jpg"
  },
  
  {
  "name": "Boeing 737 Max 8 (Turkish Airlines)",
  "livery": "5",
  "mptx": "https://www.geo-fs.com/backend/aircraft/repository/EL%20AL%20737-900_427352_2769/texture_5.jpg"
  },

  {
  "name": "Boeing 737 Max 8 (Smartwings)",
  "livery": "6.1",
  "mptx": "https://www.geo-fs.com/backend/aircraft/repository/EL%20AL%20737-900_427352_2769/texture_6.1.jpg"
  },

  {
  "name": "Boeing 737 Max 8 (United)",
  "livery": "7",
  "mptx": "https://www.geo-fs.com/backend/aircraft/repository/EL%20AL%20737-900_427352_2769/texture_7.jpg"
  },

  {
  "name": "Boeing 737 Max 8 (Malaysia Airlines)",
  "livery": "8",
  "mptx": "https://www.geo-fs.com/backend/aircraft/repository/EL%20AL%20737-900_427352_2769/texture_8.jpg"
  },

  {
  "name": "Boeing 737 Max 8 (Vietjet)",
  "livery": "9",
  "mptx": "https://www.geo-fs.com/backend/aircraft/repository/EL%20AL%20737-900_427352_2769/texture_9.jpg"
  },

  {
  "name": "Boeing 737 Max 8 (RyanAir)",
  "livery": "10",
  "mptx": "https://www.geo-fs.com/backend/aircraft/repository/EL%20AL%20737-900_427352_2769/texture_10.jpg"
  },

  {
  "name": "Boeing 737 Max 8 (Ethiopian)",
  "livery": "11",
  "mptx": "https://www.geo-fs.com/backend/aircraft/repository/EL%20AL%20737-900_427352_2769/texture_11.jpg"
  },

  {
  "name": "Boeing 737 Max 8 (Iceland Air)",
  "livery": "12",
  "mptx": "https://www.geo-fs.com/backend/aircraft/repository/EL%20AL%20737-900_427352_2769/texture_12.jpg"
  },

  {
  "name": "Boeing 737 Max 8 (Royal Air Maroc)",
  "livery": "13",
  "mptx": "https://www.geo-fs.com/backend/aircraft/repository/EL%20AL%20737-900_427352_2769/texture_13.jpg"
  },

  {
  "name": "Boeing 737 Max 8 (Oman Air)",
  "livery": "14",
  "mptx": "https://www.geo-fs.com/backend/aircraft/repository/EL%20AL%20737-900_427352_2769/texture_14.jpg"
  },

  {
  "name": "Boeing 737 Max 8 (Flair)",
  "livery": "15",
  "mptx": "https://www.geo-fs.com/backend/aircraft/repository/EL%20AL%20737-900_427352_2769/texture_15.jpg"
  },

  {
  "name": "Boeing 737 Max 8 (Garuda Indonesia)",
  "livery": "16",
  "mptx": "https://www.geo-fs.com/backend/aircraft/repository/EL%20AL%20737-900_427352_2769/texture_16.jpg"
  },

  {
  "name": "Boeing 737 Max 8 (WestJet) by Github user 589",
  "livery": "17.2",
  "mptx": "https://www.geo-fs.com/backend/aircraft/repository/EL%20AL%20737-900_427352_2769/texture_17.2.jpg"
  },

  {
  "name": "Boeing 737 Max 8 (Com Air) by IUH Airways",
  "livery": "18",
  "mptx": "https://www.geo-fs.com/backend/aircraft/repository/EL%20AL%20737-900_427352_2769/texture_18.jpg"
  },

  {
  "name": "Boeing 737 Max 8 (Air Canada) by Github user 589",
  "livery": "19.1",
  "mptx": "https://www.geo-fs.com/backend/aircraft/repository/EL%20AL%20737-900_427352_2769/texture_19.1.jpg"
  },

  {
  "name": "Boeing 737 Max 8 (American Airlines) by Github user 589",
  "livery": "20",
  "mptx": "https://www.geo-fs.com/backend/aircraft/repository/EL%20AL%20737-900_427352_2769/texture_20.jpg"
  },

  {
  "name": "Boeing 737 Max 8 (Australian Airlines) by Lachy your local Aussie",
  "livery": "21",
  "mptx": "https://www.geo-fs.com/backend/aircraft/repository/EL%20AL%20737-900_427352_2769/texture_21.1.jpg"
  },

  {
  "name": "Boeing 737 Max 8 (Ukraine Intl Airlines) by IUH Airways",
  "livery": "22",
  "mptx": "https://www.geo-fs.com/backend/aircraft/repository/EL%20AL%20737-900_427352_2769/texture_22.jpg"
  },

  {
  "name": "US Navy Boeing P8 Poseidon",
  "livery": "1.1",
  "mptx": "https://www.geo-fs.com/backend/aircraft/repository/Boeing%20p8I%20Neptune_427352_3292/texture_1.1.jpg"
  },

  {
  "name": "RAAF Boeing P8A Poseidon",
  "livery": "2",
  "mptx": "https://www.geo-fs.com/backend/aircraft/repository/Boeing%20p8I%20Neptune_427352_3292/texture_2.jpg"
  },

  {
  "name": "Airbus a320neo (Indigo)",
  "livery": "1",
  "mptx": "https://138772948-227015667470610340.preview.editmysite.com/uploads/1/3/8/7/138772948/image.jpg"
  },

  {
  "name": "Airbus a320neo (Vistara)",
  "livery": "2.1",
  "mptx": "https://138772948-227015667470610340.preview.editmysite.com/uploads/1/3/8/7/138772948/image__1_.jpg"
  },

  {
  "name": "Airbus a320neo (Air Asia)",
  "livery": "3",
  "mptx": "https://138772948-227015667470610340.preview.editmysite.com/uploads/1/3/8/7/138772948/image__2_.jpg"
  },

  {
  "name": "Airbus a320neo (Gulf Air)",
  "livery": "1.2",
  "mptx": "https://138772948-227015667470610340.preview.editmysite.com/uploads/1/3/8/7/138772948/image__3_.jpg"
  },

  {
  "name": "Airbus a320neo (Kuwait Airways)",
  "livery": "2.2",
  "mptx": "https://138772948-227015667470610340.preview.editmysite.com/uploads/1/3/8/7/138772948/image__4_.jpg"
  },

  {
  "name": "Airbus a320neo (Egypt Air)",
  "livery": "3.4",
  "mptx": "https://138772948-227015667470610340.preview.editmysite.com/uploads/1/3/8/7/138772948/image__5_.jpg"
  },

  {
  "name": "Airbus a320neo (Qatar Airways)",
  "livery": "4.1",
  "mptx": "https://138772948-227015667470610340.preview.editmysite.com/uploads/1/3/8/7/138772948/image__6_.jpg"
  },

  {
  "name": "Airbus a320neo (Spice 9)",
  "livery": "3.3",
  "mptx": "https://138772948-227015667470610340.preview.editmysite.com/uploads/1/3/8/7/138772948/image__7_.jpg"
  },

  {
  "name": "Airbus a320neo (Scoot)",
  "livery": "4.2",
  "mptx": "https://138772948-227015667470610340.preview.editmysite.com/uploads/1/3/8/7/138772948/image__8_.jpg"
  },

  {
  "name": "Airbus a320neo (Agean)",
  "livery": "5",
  "mptx": "https://138772948-227015667470610340.preview.editmysite.com/uploads/1/3/8/7/138772948/image__9_.jpg"
  },

  {
  "name": "Airbus a320neo (WIZZ)",
  "livery": "6.2",
  "mptx": "https://138772948-227015667470610340.preview.editmysite.com/uploads/1/3/8/7/138772948/image__10_.jpg"
  },

  {
  "name": "Airbus a320neo (Azul)",
  "livery": "7.1",
  "mptx": "https://138772948-227015667470610340.preview.editmysite.com/uploads/1/3/8/7/138772948/image__11_.jpg"
  },

  {
  "name": "Airbus a320neo (Airbus house)",
  "livery": "9",
  "mptx": "https://138772948-227015667470610340.preview.editmysite.com/uploads/1/3/8/7/138772948/image__12_.jpg"
  },

  {
  "name": "Airbus a320neo (Air Astana)",
  "livery": "10",
  "mptx": "https://138772948-227015667470610340.preview.editmysite.com/uploads/1/3/8/7/138772948/image__13_.jpg"
  },

  {
  "name": "Airbus a320neo (Iberia)",
  "livery": "11",
  "mptx": "https://138772948-227015667470610340.preview.editmysite.com/uploads/1/3/8/7/138772948/image__14_.jpg"
  },

  {
  "name": "Airbus a320neo (Air Seychelles)",
  "livery": "12.1",
  "mptx": "https://138772948-227015667470610340.preview.editmysite.com/uploads/1/3/8/7/138772948/image__15_.jpg"
  },

  {
  "name": "Airbus a320neo (VIVA)",
  "livery": "13.1",
  "mptx": "https://138772948-227015667470610340.preview.editmysite.com/uploads/1/3/8/7/138772948/image__16_.jpg"
  },

  {
  "name": "Airbus a320neo (Cebu Pacific)",
  "livery": "14",
  "mptx": "https://138772948-227015667470610340.preview.editmysite.com/uploads/1/3/8/7/138772948/image__17_.jpg"
  },

  {
  "name": "Airbus a320neo (Latam)",
  "livery": "15",
  "mptx": "https://138772948-227015667470610340.preview.editmysite.com/uploads/1/3/8/7/138772948/a.jpg"
  },

  {
  "name": "Airbus a320neo (Plain)",
  "livery": "16",
  "mptx": "https://138772948-227015667470610340.preview.editmysite.com/uploads/1/3/8/7/138772948/b.jpg"
  },

  {
  "name": "Airbus a320neo (SAS)",
  "livery": "17",
  "mptx": "https://138772948-227015667470610340.preview.editmysite.com/uploads/1/3/8/7/138772948/c.jpg"
  },

  {
  "name": "Airbus a320neo (JetStar)",
  "livery": "18",
  "mptx": "https://138772948-227015667470610340.preview.editmysite.com/uploads/1/3/8/7/138772948/image__18_.jpg"
  },

  {
  "name": "Airbus a320neo (Spirit)",
  "livery": "21.1",
  "mptx": "https://138772948-227015667470610340.preview.editmysite.com/uploads/1/3/8/7/138772948/image__19_.jpg"
  },

  {
  "name": "Airbus a320neo (Air cote d'ivoire)",
  "livery": "24",
  "mptx": "https://138772948-227015667470610340.preview.editmysite.com/uploads/1/3/8/7/138772948/image__20_.jpg"
  },

  {
  "name": "Airbus a320neo (TAP) by Github 	User 589",
  "livery": "25.1",
  "mptx": "https://138772948-227015667470610340.preview.editmysite.com/uploads/1/3/8/7/138772948/image__21_.jpg"
  },

  {
  "name": "Airbus a320neo (Lufthansa) by IUH Airways",
  "livery": "26.2",
  "mptx": "https://138772948-227015667470610340.preview.editmysite.com/uploads/1/3/8/7/138772948/d.jpg"
  },

  {
  "name": "Airbus a320neo (Easyjet) by IUH Airways",
  "livery": "27.2",
  "mptx": "https://138772948-227015667470610340.preview.editmysite.com/uploads/1/3/8/7/138772948/e.jpg"
  },

  {
  "name": "Airbus a320neo (SWISS) by Github User 589",
  "livery": "28",
  "mptx": "https://138772948-227015667470610340.preview.editmysite.com/uploads/1/3/8/7/138772948/f.jpg"
  },

  {
  "name": "Airbus a320neo (British Airways) by Github User 589",
  "livery": "29",
  "mptx": "https://138772948-227015667470610340.preview.editmysite.com/uploads/1/3/8/7/138772948/g.jpg"
  },

  {
  "name": "Airbus a320neo (Eurowings) by IUH Airways",
  "livery": "30",
  "mptx": "null"
  },

  {
  "name": "Airbus a320neo (WOW) by Github User 589",
  "livery": "31",
  "mptx": "null"
  },

  {
  "name": "Airbus a320neo (Sri Lanakan Airlines)",
  "livery": "19",
  "mptx": "null"
  },

  {
  "name": "Airbus a320neo(Vueling) by IUH Airways",
  "livery": "34",
  "mptx": "null"
  },

  {
  "name": "Airbus a320neo(North European Airlines) by IUH Airways",
  "livery": "35",
  "mptx": "null"
  },

  {
  "name": "Airbus a320neo(ITA) by Luke",
  "livery": "36.1",
  "mptx": "null"
  },

  {
  "name": "Airbus a320neo(Lufthansa Old) by Github User 589",
  "livery": "37",
  "mptx": "null"
  },

  {
  "name": "Airbus a320neo(China Eastern) by GT",
  "livery": "39",
  "mptx": "null"
  },

  {
  "name": "Airbus a320neo(Frontier) by Github User 589",
  "livery": "40.1",
  "mptx": "null"
  }
  ]}

livObj.aircraft.forEach(function(e){
  var dropdown = document.createElement('li');
  dropdown.innerHTML = e.name;
  document.getElementsByClassName("geofs-aircraft-list")[0].appendChild(dropdown);
  dropdown.setAttribute("onclick", 'geofs.aircraft.instance.loadLivery(' + e.livery + ')');

})

  function updateMultiplayer(){
  Object.values(multiplayer.visibleUsers).forEach(function(e){
    a = e;
    livObj.aircraft.forEach(function(e){
      if (a.currentLivery == parseInt(e.livery)) {   geofs.api.Model.prototype.changeTexture(e.mptx, 0, multiplayer.visibleUsers[a.id].model);
      }
    })
  })
}

 mpRefresh = setInterval(function(){
   
updateMultiplayer();
}, 5000)

console.log("Loaded!");


//Add contributors here:
let contributors = ["Spice9","Github User 589","IUH Ariways","GT","Luke"];
let message = ""
setTimeout(function(){
  console.log("Code by Spice9 and AriakimTaiyo, livery contributions by:");
contributors.forEach(function(e){
  if (message === "") {
    message = message + e
  }
  else {
    if (contributors[contributors.length - 1] === e) {
      message = message + ", and " + e;
    }
    else {
      message = message + ", " + e
    }
  }
})
console.log(message)
}, 1000)
