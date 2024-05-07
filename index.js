fetch("https://zenquotes.io/api/random")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    // console.log(data);
    const getQuote = data[0].q;
    const getname = data[0].a;

    console.log(getQuote);
    document.getElementById("quote").innerHTML =
      "<p>" + getQuote + "<br><br> by " + getname + "</p>";
  });
