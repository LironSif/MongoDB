
    const baseUrl = 'https://mongodb-first-app.onrender.com/api/v1';

    // User related functions
    function getAllUsers() {
        fetch(`${baseUrl}/users`)
            .then(response => response.json())
            .then(data => updateResponse(data))
            .catch(error => console.error('Error:', error));
    }

    function getUserById() {
        alert(`ID should look like this 659569378610accc79658e7c , Dont!! use " " `)
        const userId = prompt("Enter User ID:");
        fetch(`${baseUrl}/users/${userId}`)
            .then(response => response.json())
            .then(data => updateResponse(data))
            .catch(error => console.error('Error:', error));
    }

    function createNewUser() {
    const userName = prompt("Enter User Name:");
    const userAddress = prompt("Enter User Address:");
    const userEmail = prompt("Enter User Email:");
    fetch(`${baseUrl}/users`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: userName, address: userAddress, email: userEmail })
    })
    .then(response => response.json())
    .then(data => updateResponse(data))
    .catch(error => console.error('Error:', error));
}


    function updateUser() {
        const userId = prompt("Enter User ID to Update:");
        const userName = prompt("Enter New User Name:");
        const userEmail = prompt("Enter New User Email:");
        fetch(`${baseUrl}/users/${userId}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name: userName, email: userEmail })
        })
        .then(response => response.json())
        .then(data => updateResponse(data))
        .catch(error => console.error('Error:', error));
    }

    function deleteUser() {
        const userId = prompt("Enter User ID to Delete:");
        fetch(`${baseUrl}/users/${userId}`, {
            method: 'DELETE'
        })
        .then(response => response.json())
        .then(data => updateResponse(data))
        .catch(error => console.error('Error:', error));
    }

    // Post related functions
    function getAllPosts() {
        fetch(`${baseUrl}/posts`)
            .then(response => response.json())
            .then(data => updateResponse(data))
            .catch(error => console.error('Error:', error));
    }

    function getPostById() {
        alert(`ID should look like this 659569378610accc79658e7c , Dont!! use " " `)
        const postId = prompt("Enter Post ID:");
        fetch(`${baseUrl}/posts/${postId}`)
            .then(response => response.json())
            .then(data => updateResponse(data))
            .catch(error => console.error('Error: make sure format is for example 65954f7e87ac4d6443260ee4', error));
    }

    function createNewPost() {
        const postTitle = prompt("Enter Post Title:");
        const postContent = prompt("Enter Post Content:");
        const postAuthor = prompt("Enter Author ID:");
        fetch(`${baseUrl}/posts`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ title: postTitle, content: postContent, author: postAuthor })
        })
        .then(response => response.json())
        .then(data => updateResponse(data))
        .catch(error => console.error('Error:', error));
    }

    function updatePost() {
        const postId = prompt("Enter Post ID to Update:");
        const postTitle = prompt("Enter New Post Title:");
        const postContent = prompt("Enter New Post Content:");
        fetch(`${baseUrl}/posts/${postId}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ title: postTitle, content: postContent })
        })
        .then(response => response.json())
        .then(data => updateResponse(data))
        .catch(error => console.error('Error:', error));
    }

    function deletePost() {
        const postId = prompt("Enter Post ID to Delete:");
        fetch(`${baseUrl}/posts/${postId}`, {
            method: 'DELETE'
        })
        .then(response => response.json())
        .then(data => updateResponse(data))
        .catch(error => console.error('Error:', error));
    }

    // Comment related functions
    function getAllComments() {
        alert(`ID should look like this 659569378610accc79658e7c , Dont!! use " " `)
        const postId = prompt("Enter Post ID for comments:");
        fetch(`${baseUrl}/posts/${postId}/comments`)
            .then(response => response.json())
            .then(data => updateResponse(data))
            .catch(error => console.error('Error:', error));
    }

    function getCommentById() {
        alert("MongoDB does not support this function!");

    }

    function createNewComment() {
        const postId = prompt("Enter Post ID for the new comment:");
        const commentText = prompt("Enter Comment Text:");
        const commentAuthor = prompt("Enter Author ID:");
        fetch(`${baseUrl}/posts/${postId}/comments`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ text: commentText, author: commentAuthor })
        })
        .then(response => response.json())
        .then(data => updateResponse(data))
        .catch(error => console.error('Error:', error));
    }

    function updateComment() {
        const commentId = prompt("Enter Comment ID to Update:");
        const commentText = prompt("Enter New Comment Text:");
        fetch(`${baseUrl}/comments/${commentId}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ text: commentText })
        })
        .then(response => response.json())
        .then(data => updateResponse(data))
        .catch(error => console.error('Error:', error));
    }

    function deleteComment() {
        const commentId = prompt("Enter Comment ID to Delete:");
        fetch(`${baseUrl}/comments/${commentId}`, {
            method: 'DELETE'
        })
        .then(response => response.json())
        .then(data => updateResponse(data))
        .catch(error => console.error('Error:', error));
    }

    function updateResponse(data) {
        document.getElementById('response').innerText = JSON.stringify(data, null, 2);
    }

    function updateResponse(data) {
        document.getElementById('response').innerText = JSON.stringify(data, null, 2);
    }

    function displayPosts(posts) {
        const postContainer = document.getElementById('post-content');
        postContainer.innerHTML = ''; 

        posts.forEach(post => {
            const postElement = document.createElement('div');
            postElement.className = 'post-container';
            postElement.innerHTML = `
                <h3>${post.title}</h3>
                <p>${post.content}</p>
            `;
            postContainer.appendChild(postElement);
        });
    }
