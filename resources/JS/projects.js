const search = () => {
  const searchbox = document.getElementById("search-item").value.toUpperCase();
  const storeitems = document.getElementById("flex-grid");
  const product = document.querySelectorAll(".col");
  const pname = storeitems.getElementsByTagName("h6");

  for (var i = 0; i < pname.length; i++) {
    let match = product[i].getElementsByTagName("h6")[0];

    if (match) {
      let textvalue = match.textContent;

      if (textvalue.toUpperCase().indexOf(searchbox) > -1) {
        product[i].style.display = "";
      } else {
        product[i].style.display = "none";
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
  text.value = "See-All";
  text.click();
});

if (window.innerWidth < 750) {
  document.getElementById("fwd").addEventListener("click", function () {
    var text = document.getElementById("search-item");
    text.value = "Front-End Web Development";
    text.click();
  });

  document.getElementById("lc").addEventListener("click", function () {
    var text = document.getElementById("search-item");
    text.value = "LeetCode";
    text.click();
  });

  document.getElementById("gd").addEventListener("click", function () {
    var text = document.getElementById("search-item");
    text.value = "Game-Development";
    text.click();
  });

  document.getElementById("js").addEventListener("click", function () {
    var text = document.getElementById("search-item");
    text.value = "JavaScript";
    text.click();
  });

  document.getElementById("python").addEventListener("click", function () {
    var text = document.getElementById("search-item");
    text.value = "Python";
    text.click();
  });

  document.getElementById("ios").addEventListener("click", function () {
    var text = document.getElementById("search-item");
    text.value = "IOS Development";
    text.click();
  });

  document.getElementById("cs").addEventListener("click", function () {
    var text = document.getElementById("search-item");
    text.value = "Cool-Stuffs";
    text.click();
  });

  document.getElementById("all").addEventListener("click", function () {
    var text = document.getElementById("search-item");
    text.value = "See-All";
    text.click();
  });
}
