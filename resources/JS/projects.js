const search = () => {
  const searchbox = document.getElementById("search-item").value.toUpperCase();
  const projects = document.getElementById("flex-grid");
  const eachproject = document.querySelectorAll(".col");
  const tags = projects.getElementsByTagName("h6");

  for (var i = 0; i < tags.length; i++) {
    let match = eachproject[i].getElementsByTagName("h6")[0];

    if (match) {
      let textvalue = match.textContent;

      if (textvalue.toUpperCase().indexOf(searchbox) > -1) {
        eachproject[i].style.display = "";
      } else {
        eachproject[i].style.display = "none";
      }
    }
  }
};

document.getElementById("fwd").addEventListener("click", function () {
  var text = document.getElementById("search-item");
  text.value = "Front-End Web Development";
  text.focus();
  text.click();
});

document.getElementById("lc").addEventListener("click", function () {
  var text = document.getElementById("search-item");
  text.value = "LeetCode";
  text.focus();
  text.click();
});

document.getElementById("gd").addEventListener("click", function () {
  var text = document.getElementById("search-item");
  text.value = "Game-Development";
  text.focus();
  text.click();
});

document.getElementById("js").addEventListener("click", function () {
  var text = document.getElementById("search-item");
  text.value = "JavaScript";
  text.focus();
  text.click();
});

document.getElementById("python").addEventListener("click", function () {
  var text = document.getElementById("search-item");
  text.value = "Python";
  text.focus();
  text.click();
});

document.getElementById("ios").addEventListener("click", function () {
  var text = document.getElementById("search-item");
  text.value = "IOS Development";
  text.focus();
  text.click();
});

document.getElementById("cs").addEventListener("click", function () {
  var text = document.getElementById("search-item");
  text.value = "Cool-Stuffs";
  text.focus();
  text.click();
});

document.getElementById("all").addEventListener("click", function () {
  var text = document.getElementById("search-item");
  text.value = "";
  text.click();
});

// document.getElementById("content").addEventListener("click", function () {
//   var text = document.getElementById("search-item");
//   text.focus();
// });
