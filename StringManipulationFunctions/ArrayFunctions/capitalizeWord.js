function capitalizeWord(phrase) {
  return phrase
    .split(" ")
    .map((mot) => {
      let word = mot.charAt(0).toUpperCase() + mot.slice(1).toLowerCase();

      return word;
    })
    .join(" ");
}
var phrase = "bonjou monsieur comment tu vas ?";
alert(capitalizeWord(phrase));
console.log(capitalizeWord(phrase));
