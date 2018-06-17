var Jimp = require("jimp");
console.log("Something is happening!");

// //  example with local image
// Jimp.read("./doggo.jpeg").then(function (image) {
//     console.log("jimp might be doing something now!");
//     return image.resize(256, 256)     // resize
//          .quality(60)                 // set JPEG quality
//          .greyscale()                 // set greyscale
//          .write("newdoggo.jpeg");     // save
// }).catch(function (err) {
//     // handle an exception
//     console.log(err);
// });

// // example with URL
// Jimp.read("https://i.imgur.com/HG8W2EB.jpg").then(function (image) {
//     console.log("jimp might be doing something now!");
//     return image.resize(Jimp.AUTO, 250)     // resize
//          .quality(60)                 // set JPEG quality
//          .greyscale()                 // set greyscale
//          .write("newdoggo_urlversion.jpeg");     // save
// }).catch(function (err) {
//     // handle an exception
//     console.log(err);
// });

// writing text and color manip
Jimp.read("./newdoggo_urlversion.jpeg").then(function (image) {
    
    console.log("jimp might be doing something now!");

    Jimp.loadFont(Jimp.FONT_SANS_16_WHITE).then(function (font) {
        image.resize(250, Jimp.AUTO)
        image.brightness(-0.5)
        image.print(font, 20, 20, "Adopt Sam! Click to learn more.", 230)
        .write("newdoggo_withall8.jpeg");
    });

}).catch(function (err) {
    // handle an exception
    console.log(err);
});