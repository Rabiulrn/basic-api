function loadPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => displayPosts(data))
}
loadPosts();

function displayPosts(posts) {
    const postContainer = document.getElementById('posts');//1.akta faka div...jar moddhe post rakhbo
                                                           //2.then aro akta div toiri kor... vitore innerHTML like child
                                                           //hisebe append korbo
                                                           //3.proti div a akta kore class add kore dibo.....css add korar jonno
    for (const post of posts) {
        const div = document.createElement('div');
        div.classList.add('post');
        div.innerHTML = `
        <h3>${post.title}</h3>
        <p>${post.body}</p>
        `;
        postContainer.appendChild(div);
        console.log(post)
    }
}

function addAPost2() {
    fetch('https://jsonplaceholder.typicode.com/pusts', {    
        method: 'POST',
        body: JSON.stringify({  
            title: 'My new post',
            body: 'This is my posts',
            userId: 1
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        }
    })
        .then(res => res.json())  
        .then(data => console.log(data))
}

function addAPost() {
    fetch('https://jsonplaceholder.typicode.com/posts', {   //fetch er vitore body ar headers object dite hobe and method:POST
        method: 'POST',
        body: JSON.stringify({   //data ke json akare pathate hobe
            title: 'My new post',
            body: 'This is my posts',
            userId: 1
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        }
    })
        .then(res => res.json())            //post hoye thikmoto response astese kina?
        .then(data => console.log(data))      //and ata console log kore dekhano
}