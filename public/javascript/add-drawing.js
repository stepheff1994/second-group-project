
async function newFormHandler(event) {
    event.preventDefault();

    const title = document.querySelector('input[name="drawing-title"]').value;
    const image = canvas.toDataURL();

    const response = await fetch(`/api/drawing`, {
        method: 'POST',
        body: JSON.stringify({
            image,
            title
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (response.ok) {
        document.location.replace('/');
    } else {
        alert(response.statusText);
    }
}
document.querySelector('.new-post-form').addEventListener('submit', newFormHandler);