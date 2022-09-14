var blogArrIsExist = localStorage.getItem("blogs");
let blogArr = [];

if (blogArrIsExist == null || blogArrIsExist == undefined) {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      blogArr = data;
      blogArr.forEach((blog) => {
        blog.image = "images/blog/3.jpg";
        delete blog.userId;
      });
      localStorage.setItem("blogs", JSON.stringify(blogArr));
      displayBlogs(blogArr);
    });
} else {
  blogArr = JSON.parse(blogArrIsExist);
  displayBlogs(blogArr);
}
let i = 0;
function displayBlogs(blogArr) {
  let output = document.querySelector(".blog-wrap");
  out = "";
  let chunkSize = 3;

  for (let i = 0; i < blogArr.length; i += chunkSize) {
    var splitArray = blogArr.slice(i, i + chunkSize);
    for (let j = 0; j < splitArray.length; j++) {
      if (j == 0) {
        out += '<div class="container" > <div class="row">   ';
      }
      out += `<div class="col-lg-4 col-md-4 mb-5" id="blog_${splitArray[j].id}">`;
      out += `<div class="blog-item" id="secondDiv">`;
      out += `<img src="${splitArray[j].image}" alt="" class="img-fluid rounded" />`;
      out += `<div class="blog-item-content bg-white p-5">`;
      out += `<div class="blog-item-meta bg-gray py-1 px-2">`;
      out += `<span class="text-muted text-capitalize mr-3"><a onclick="deleteSelectedBlog(event,${splitArray[j].id})" href="javascript:;" id="deleteBlog${i}" data-id="${splitArray[j].id}"><i  class="ti-trash mr-2"></i></a></span></div>`;
      out += `<h3 class="mt-3 mb-3">${splitArray[j].title}</a></h3>`;
      out += `<p class="mb-4">${splitArray[j].body}</p>`;
      out += `</div></div> </div>`;
      output.innerHTML = out;

      if (j === splitArray.length - 1) {
        out += `</div></div>`;
      }
    }
  }
}
let deleteSelectedBlog = (event, blogId) => {
  swal({
    title: "Are you sure?",
    text: "Once deleted, you will not be able to recover your data!",
    icon: "warning",
    buttons: true,
    dangerMode: true,
  }).then((willDelete) => {
    if (willDelete) {
      for (var i = 0; i < blogArr.length; i++) {
        if (blogArr[i].id === blogId) {
          blogArr.splice(i, 1);
          const element = document.getElementById("blog_" + blogId);
          element.remove();
          localStorage.setItem("blogs", JSON.stringify(blogArr));
          swal(" Blog successfully deleted!", {
            icon: "success",
          });
        }
      }
    } else {
      swal("Your Blog is safe!");
    }
  });
};
