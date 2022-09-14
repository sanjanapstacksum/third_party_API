var regexx = document.querySelectorAll(".alleve");

regexx.forEach((e) => {
  e.addEventListener("keyup", (e) => {
    var title = document.getElementById("title").value;
    var regex = /^[a-zA-Z ]{2,30}$/;
    if (e.target.id == "title" && !title.match(regex)) {
      document.getElementById("fnameval").style.display = "block";
      document.getElementById("firstnameIconStatus").style.display = "none";
    } else {
      document.getElementById("fnameval").style.display = "none";
      document.getElementById("firstnameIconStatus").style.display = "none";
    }

    var body = document.getElementById("body1").value;
    var regex = /^[a-zA-Z ]{5,100}$/;
    if (e.target.id == "body1" && !body.match(regex)) {
      document.getElementById("fullnameval").style.display = "block";
      document.getElementById("fstatus").style.display = "none";
    } else {
      document.getElementById("fullnameval").style.display = "none";
      document.getElementById("fstatus").style.display = "none";
    }
  });
});

var alleve = document.querySelectorAll(".alleve");

alleve.forEach((element) => {
  element.addEventListener("blur", (e) => {
    if (
      e.target.id == "title" &&
      document.getElementById("title").value == ""
    ) {
      document.getElementById("firstnameIconStatus").style.display = "block";
    } else {
      document.getElementById("firstnameIconStatus").style.display = "none";
    }

    if (
      e.target.id == "body1" &&
      document.getElementById("body1").value == ""
    ) {
      document.getElementById("fstatus").style.display = "block";
    } else {
      document.getElementById("fstatus").style.display = "none";
    }

    if (
      e.target.id == "image" &&
      document.getElementById("image").value == ""
    ) {
      document.getElementById("mobfun").style.display = "block";
    } else {
      document.getElementById("mobfun").style.display = "none";
    }
  });
});

var submit = document.getElementById("btns");
submit.addEventListener("click", subfunc);

function subfunc(e) {
  var val = true;
  var title = document.getElementById("title").value;
  var body = document.getElementById("body1").value;
  var image = document.getElementById("image").value;

  var image = document.getElementById("image").value;
  if (title == "") {
    document.getElementById("firstnameIconStatus").style.display = "block";
    val = false;
  }
  if (body == "") {
    document.getElementById("fstatus").style.display = "block";
    val = false;
  }

  if (image == "") {
    document.getElementById("mobfun").style.display = "block";
    val = false;
  }

  if (val == false) {
    return false;
  } else {
    val = true;

    var blogArr = JSON.parse(localStorage.getItem("blogs"));
    var blogId = blogArr.length + 1;

    let blogObj = {
      id: blogId,
      title: document.getElementById("title").value,
      body: document.getElementById("body1").value,
      image: document.getElementById("image").value,
    };

    blogArr.push(blogObj);
    localStorage.setItem("blogs", JSON.stringify(blogArr));
  }
}
