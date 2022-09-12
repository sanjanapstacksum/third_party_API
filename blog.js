fetch("https://jsonplaceholder.typicode.com/posts")
  .then(function (response) {
    return response.json();
  })
  .then(function (products) {
    products.forEach((product) => {
      product.image = "images/blog/3.jpg";
    });

    let output = document.querySelector(".blog-wrap");
    out = "";
    let myobject = {
      body: "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut",
      id: 101,
      image: "images/blog/4.jpg",
      title: "qui est esse",
      userId: 10,
    };
    products.push(myobject);

    console.log("products ----", products);
    let lcldata = JSON.stringify(products);
    localStorage.setItem("data", lcldata);

    let lclgetdata = JSON.parse(localStorage.getItem("data"));
    let content = JSON.stringify(lclgetdata);
    console.log(content, "updte");
    localStorage.setItem("data", content);
    let chunkSize = 3;
    for (let i = 0; i < products.length; i += chunkSize) {
      var splitArray = products.slice(i, i + chunkSize);
      // console.log(splitArray)

      for (let j = 0; j < splitArray.length; j++) {
        if (j == 0) {
          out += '<div class="container"> <div class="row">   ';
        }
        out += `<div class="col-lg-4 col-md-4 mb-5">
                <div class="blog-item">
                    <img src="${splitArray[j].image}" alt="" class="img-fluid rounded" />

                    <div class="blog-item-content bg-white p-5">
                        <div class="blog-item-meta bg-gray py-1 px-2">
                            <span class="text-muted text-capitalize mr-3"><i class="ti-pencil-alt mr-2"></i>${splitArray[j].userId}</span>
                            <span class="text-muted text-capitalize mr-3"><i class="ti-comment mr-2"></i>${splitArray[j].id}</span>
                            
                        </div>  
        
                        <h3 class="mt-3 mb-3">${splitArray[j].title}</a></h3>
                        <p class="mb-4">${splitArray[j].body}</p>
        
                        <a href="blog-single.html" class="btn btn-small btn-main btn-round-full">Learn More</a>
                    </div>
                </div>
                </div>
                `;

        if (j === splitArray.length - 1) {
          out += `</div></div>`;
        }
        output.innerHTML = out;
      }
    }
  });
