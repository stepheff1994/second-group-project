async function deleteFormHandler(event) {
  event.preventDefault();
  const id = window.location.toString().split('/')[
      window.location.toString().split('/').length - 1
    ];

  const response = await fetch(`/api/drawing/${id}`, {
      method: 'DELETE',
      body: JSON.stringify({
        drawing_id:id
        
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    
    if (response.ok) {
      document.location.replace('/my-canvas/');
      console.log('drawing_id')
    } else {
      alert(response.statusText);
    }
  
}

document.querySelector('.delete-post-btn').addEventListener('click', deleteFormHandler);