function menu() {
    if (document.getElementById("open").classList.contains('block')) { // On affiche le menu si l'icone hamburger est visible.
      document.getElementById("menumobile").classList.replace('hidden', 'block');
      document.getElementById("open").classList.replace('block', 'hidden');
      document.getElementById("close").classList.replace('hidden', 'block');
      document.querySelector('body').classList.add('overflow-y-hidden');
      document.getElementById("nav").classList.add('bg-bear');
      // document.getElementById("logo").classList.add('hidden');
  
    } else { // Si l'icone de croix est visible alors on cache le menu.
      document.getElementById("menumobile").classList.replace('block', 'hidden');
      document.getElementById("open").classList.replace('hidden', 'block');
      document.getElementById("close").classList.replace('block', 'hidden');
      document.querySelector('body').classList.remove('overflow-y-hidden');
      document.getElementById("nav").classList.remove('bg-bear');
      // document.getElementById("logo").classList.remove('hidden');
    }
  }
  
  document.getElementById('burgermenu').addEventListener('click', menu);
  
  document.querySelectorAll('#menumobile a').forEach(item => {
    item.addEventListener('click', menu);
  });
  
  function dropdown(item) {
    item.parentNode.addEventListener('mouseenter', (e) => {
      item.classList.replace('hidden', 'absolute');
    });
  
    item.parentNode.addEventListener('mouseleave', (e) => {
      item.classList.replace('absolute', 'hidden');
    });
  }
  
  document.querySelectorAll('#nav ul li div div').forEach(dropdown);
  
  document.addEventListener('scroll', function(){
    let percent = (document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight) * 100;
    if (percent !== 0) {
      document.getElementById('nav').classList.add('bg-sand');
    } else {
      document.getElementById('nav').classList.remove('bg-sand');
    }
  
    if (isScrolledIntoView(document.querySelector('footer'))) {
      // document.getElementById('nav').style.display = "none";
      document.getElementById('nav').style.visibility = "hidden";
    } else {
      // document.getElementById('nav').style.display = "block";
      document.getElementById('nav').style.visibility = "visible";
    }
  
  });
  
  function isScrolledIntoView(el) {
      return el.getBoundingClientRect().top < window.innerHeight && el.getBoundingClientRect().bottom >= 0;
  }
  