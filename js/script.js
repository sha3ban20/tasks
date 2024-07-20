fetch('https://fakestoreapi.com/products')
    .then(response => response.json())
    .then(posts => posts.forEach(data => {
        var apiContainer = document.getElementById('api');

        var post = document.createElement('div');
        post.classList.add('post', 'col-md-6');
        post.innerHTML = `
      
           <h2>${data.title}</h2>
           <p>${data.description}</p>


        `;
        apiContainer.appendChild(post);
    }));