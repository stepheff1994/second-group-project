async function editFormHandler(event) {
    event.preventDefault();

    const title = document.querySelector('input[name="edit-drawing-title"]').value.trim();
    const id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ];
    const response = await fetch(`/api/drawing/${id}`, {
        method: 'PUT',
        body: JSON.stringify({
            title
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

document.querySelector('.edit-drawing-form').addEventListener('submit', editFormHandler);