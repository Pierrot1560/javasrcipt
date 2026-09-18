const API_URL = 'https://jsonplaceholder.typicode.com/posts';

function fetchPost(id) {
  return fetch(`${API_URL}/${id}`).then(response => {
    if (!response.ok) {
      throw new Error(`Пост #${id}: HTTP ${response.status}`);
    }
    return response.json();
  });
}

function renderPost(post) {
  console.log(`#${post.id} — ${post.title}`);
}


function loadAndRender(idsToLoad, renderOrder) {

  const promises = idsToLoad.map(id => fetchPost(id));

  return Promise.all(promises)
    .then(posts => {

      const postsById = new Map(posts.map(p => [p.id, p]));

      
      return renderOrder.reduce((chain, id) => {
        return chain.then(() => {
          const post = postsById.get(id);
          if (!post) throw new Error(`Пост #${id} не найден`);
          renderPost(post);
        });
      }, Promise.resolve());
    })
    .catch(err => {
      console.error('Ошибка:', err.message);
    });
}

loadAndRender([3, 7, 15, 23], [15, 23, 7, 3]);


// const API_URL = 'https://jsonplaceholder.typicode.com/posts';

// async function fetchPost(id) {
//   const response = await fetch(`${API_URL}/${id}`);
//   if (!response.ok) {
//     throw new Error(`Пост #${id}: HTTP ${response.status}`);
//   }
//   return response.json();
// }

// function renderPost(post) {
//   console.log(`#${post.id} — ${post.title}`);
// }

// async function loadAndRender(idsToLoad, renderOrder) {
//   try {
//     const posts = await Promise.all(idsToLoad.map(id => fetchPost(id)));

//
//     const postsById = new Map(posts.map(p => [p.id, p]));


//     for (const id of renderOrder) {
//       const post = postsById.get(id);
//       if (!post) throw new Error(`Пост #${id} не найден`);
//       renderPost(post);
//     }
//   } catch (err) {
//     console.error('Ошибка:', err.message);
//   }
// }

// loadAndRender([3, 7, 15, 23], [15, 23, 7, 3]);