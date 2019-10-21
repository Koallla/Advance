'use strict';

(async function() {
  try {
    const result = await fetch('https://api.github.com/users/octocat');

    if (result.status === 403) throw new Error(result.statusText);
    const data = await result.json();

    const image = document.createElement('img');
    image.src = data.avatar_url;

    document.body.appendChild(image);
  } catch (error) {
    console.log(111111111);
    console.dir(error);
  }
})();
