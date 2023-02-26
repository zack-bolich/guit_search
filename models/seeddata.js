const guitars = [
  { make: "Fender", model: "Stratocaster", price: 1500, type: "electric" },
  { make: "Gibson", model: "Les Paul", price: 2000, type: "electric" },
  { make: "Taylor", model: "814ce", price: 3000, type: "acoustic" },
  { make: "Martin", model: "D-28", price: 2500, type: "acoustic" },
  { make: "Ibanez", model: "RG421", price: 700, type: "electric" },
  { make: "Epiphone", model: "Hummingbird", price: 400, type: "acoustic" },
  { make: "PRS", model: "SE Custom 24", price: 1000, type: "electric" },
  { make: "Yamaha", model: "FG800", price: 200, type: "acoustic" },
  { make: "Gretsch", model: "G5420T", price: 1200, type: "electric" },
  { make: "Alvarez", model: "AD60", price: 400, type: "acoustic" },
  { make: "Fender", model: "Stratocaster", price: 1500, type: "electric" },
  { make: "Gibson", model: "Les Paul", price: 2000, type: "electric" },
  { make: "Taylor", model: "814ce", price: 3000, type: "acoustic" },
  { make: "Martin", model: "D-28", price: 2500, type: "acoustic" },
  { make: "Ibanez", model: "RG421", price: 700, type: "electric" },
  { make: "Epiphone", model: "Hummingbird", price: 400, type: "acoustic" },
  { make: "PRS", model: "SE Custom 24", price: 1000, type: "electric" },
  { make: "Yamaha", model: "FG800", price: 200, type: "acoustic" },
  { make: "Gretsch", model: "G5420T", price: 1200, type: "electric" },
  { make: "Alvarez", model: "AD60", price: 400, type: "acoustic" },
  { make: "Schecter", model: "Omen Extreme-6", price: 550, type: "electric" },
  { make: "Seagull", model: "S6 Original", price: 400, type: "acoustic" },
  { make: "Jackson", model: "JS22-7 DKA HT", price: 300, type: "electric" },
  { make: "Guild", model: "D-240E", price: 500, type: "acoustic" },
  { make: "ESP", model: "LTD EC-1000", price: 900, type: "electric" },
  
  { make: "Epiphone", model: "SG Standard", price: 500, type: "electric" },
  { make: "Fender", model: "CD-60SCE", price: 350, type: "acoustic" },
  { make: "G&L", model: "Legacy", price: 1700, type: "electric" },
  { make: "Yamaha", model: "APX600", price: 300, type: "acoustic" },
  { make: "D'Angelico", model: "Premier SS", price: 1000, type: "electric" },

  { make: "Epiphone", model: "ES-339", price: 600, type: "electric" },
  { make: "Fender", model: "Stratocaster", price: 1500, type: "electric" },
  { make: "Gibson", model: "Les Paul", price: 2000, type: "electric" },
  { make: "Taylor", model: "814ce", price: 3000, type: "acoustic" },
  { make: "Martin", model: "D-28", price: 2500, type: "acoustic" },
  { make: "Ibanez", model: "RG421", price: 700, type: "electric" },
  { make: "Epiphone", model: "Hummingbird", price: 400, type: "acoustic" },
  { make: "PRS", model: "SE Custom 24", price: 1000, type: "electric" },
  { make: "Yamaha", model: "FG800", price: 200, type: "acoustic" },
  { make: "Gretsch", model: "G5420T", price: 1200, type: "electric" },
  { make: "Alvarez", model: "AD60", price: 400, type: "acoustic" },
  { make: "ESP", model: "LTD EC-1000", price: 900, type: "electric" },
  { make: "Seagull", model: "S6", price: 500, type: "acoustic" },
  { make: "Jackson", model: "JS32 Rhoads", price: 400, type: "electric" },
  { make: "Takamine", model: "EF341SC", price: 1500, type: "acoustic" },
  { make: "Schecter", model: "Omen Extreme-6", price: 500, type: "electric" },
  { make: "Ibanez", model: "AE245", price: 600, type: "acoustic" },
  { make: "Gibson", model: "SG Standard", price: 1500, type: "electric" },
  { make: "Taylor", model: "GS Mini", price: 600, type: "acoustic" },
  { make: "G&L", model: "ASAT Classic", price: 1300, type: "electric" },
  { make: "Fender", model: "CD-60S", price: 250, type: "acoustic" },
  { make: "Jackson", model: "JS22 Dinky", price: 200, type: "electric" },
  { make: "Yamaha", model: "APX600", price: 400, type: "acoustic" },
  { make: "Epiphone", model: "Les Paul Studio", price: 500, type: "electric" },
  { make: "Gibson", model: "Les Paul Standard", price: 2000, type: "electric" },
  { make: "Fender", model: "Stratocaster", price: 1700, type: "electric" },
  { make: "Martin", model: "D-28", price: 3000, type: "acoustic" },
  { make: "Ibanez", model: "RG450", price: 800, type: "electric" },
  { make: "Taylor", model: "814ce", price: 3500, type: "acoustic" },
  { make: "Epiphone", model: "ES-335 Pro", price: 700, type: "electric" },
  { make: "Gretsch", model: "G5420T", price: 1200, type: "electric" },
  { make: "Guild", model: "D-55", price: 3200, type: "acoustic" },
  { make: "PRS", model: "SE Custom 24", price: 1000, type: "electric" },
  { make: "Alvarez", model: "MD60C", price: 900, type: "acoustic" },
  { make: "Gibson", model: "ES-335", price: 2500, type: "electric" },
  { make: "Fender", model: "Telecaster", price: 1500, type: "electric" },
  { make: "Martin", model: "HD-28", price: 3500, type: "acoustic" },
  { make: "Ibanez", model: "Artcore AS73", price: 600, type: "electric" },
  { make: "Taylor", model: "310ce", price: 1700, type: "acoustic" },
  { make: "Epiphone", model: "Les Paul Classic", price: 800, type: "electric" },
  { make: "Gretsch", model: "G5422T", price: 1400, type: "electric" },
  { make: "Guild", model: "F-512", price: 4500, type: "acoustic" },
  { make: "PRS", model: "CE 24", price: 2000, type: "electric" },
  { make: "Alvarez", model: "AD60", price: 500, type: "acoustic" },
  { make: "Gibson", model: "Les Paul Custom", price: 3000, type: "electric" },

  { make: "Martin", model: "OM-28", price: 4000, type: "acoustic" },
  { make: "Ibanez", model: "SR500", price: 700, type: "electric" },
  { make: "Taylor", model: "524ce", price: 2800, type: "acoustic" },
  { make: "Epiphone", model: "Sheraton II Pro", price: 900, type: "electric" },
  { make: "Gretsch", model: "G6136T Falcon", price: 4000, type: "electric" },
  { make: "Guild", model: "M-20", price: 1200, type: "acoustic" },
  { make: "PRS", model: "S2 Custom 22", price: 1500, type: "electric" },

];

module.exports = guitars