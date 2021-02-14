 function getOtherDrawings() {
    

    const username = document.querySelector('.other-draws').this.textContent.valueOf();
    console.log(username)
    // const drawing_id = window.location.toString().split('/')[
    //     window.location.toString().split('/').length - 1
    // ];

    // if (comment) {
    //     const response = await fetch('/api/comments', {
    //         method: 'POST',
    //         body: JSON.stringify({
    //             drawing_id,
    //             comment
    //         }),
    //         headers: {
    //             'Content-Type': 'application/json'
    //         }
    //     });

    //     if (response.ok) {
    //         document.location.reload();
    //     } else {
    //         alert(response.statusText);
    //     }
    // }
}

document.querySelector('.other-draws').addEventListener('click', getOtherDrawings);