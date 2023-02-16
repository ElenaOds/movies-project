window.addEventListener('load', () => {
    if (localStorage.getItem('add-to-watched') === null) {
      return;
    }
    const libraryList = document.querySelector('.library-list');
    libraryList.innerHTML = JSON.parse(localStorage.getItem('add-to-watched'));
  
    document.querySelector('.vote_count').style.display = 'none';
    document.querySelector('.vote_average').style.display = 'none';
    document.querySelector('.popularity').style.display = 'none';
    document.querySelector('.genres').style.display = 'none';
    document.querySelector('.overview').style.display = 'none';
    document.querySelector('.original_title').style.display = 'none';
  });
  
  import { team } from './js/team';