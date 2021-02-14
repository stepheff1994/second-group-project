async function editComment(event) {
    event.preventDefault();

    const comment = document.querySelector('#comment').value.trim();
    const id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ];
    const response = await fetch(`/api/comment/${id}`, {
        method: 'PUT',
        body: JSON.stringify({
            comemnt
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (response.ok) {
        document.location.replace('/my-canvas/');
    } else {
        alert(response.statusText);
    }
}

document.querySelector('.edit-comment-form').addEventListener('submit', editComment);