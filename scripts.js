function generate() {
    const scriptInput = document.getElementById('movie_scripts');
    const summary = document.getElementById('summary');
    const characters = document.getElementById('characters');
    const data = {
        text: scriptInput.value
      };
    fetch('https://movie-scripts-summarizer.onrender.com',{
        method:'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
        summary.textContent=JSON.stringify(data.summary)
        characters.textContent=JSON.stringify(data.characters)
    })
    .catch(error => {
        console.error('Error:', error);
    });
  }