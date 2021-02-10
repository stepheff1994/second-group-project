async function newFormHandler(event) {
    event.preventDefault();

    // const title = document.querySelector('input[name="drawing-title"]').value;
    const draw_DataURL = document.querySelector('input[name="draw_DataURL"]').value;

    const response = await fetch(`/api/drawing`, {
        method: 'POST',
        body: JSON.stringify({
            image
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (response.ok) {
        document.location.replace('/dashboard');
    } else {
        alert(response.statusText);
    }
}

document.querySelector('.new-post-form').addEventListener('submit', newFormHandler);