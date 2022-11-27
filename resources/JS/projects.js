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
        product[i].getElementsByClassName.display = "";
      } else {
        product[i].style.display = "none";
      }
    }
  }
};
