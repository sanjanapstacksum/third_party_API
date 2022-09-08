fetch('https://jsonplaceholder.typicode.com/posts')
    .then(function (response) {
        return response.json();
    })

    .then(function (products) {
        let output = document.querySelector(".blog-wrap");
        out=""
        products.forEach(product => {
            product.image = 'images/blog/3.jpg'
        });

       
      
       let chunkSize = 2;
        for (let i = 0; i < products.length; i += chunkSize) {
           
            var splitArray = products.slice(i, i + chunkSize);
        // console.log(splitArray)
           

            for(let j = 0 ; j < splitArray.length; j++) {
               
                if(j==0) {
                   
                    out += '<div class="container"><div class="row">'
                } 
                out += `<div class="col-lg-6 col-md-6 mb-5">
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

                if(j === splitArray.length- 1 )  {

                   
                    out += `</div></div>`;
                }
                
                output.innerHTML = out;
            
    }}
    })
        


