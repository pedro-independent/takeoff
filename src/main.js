
// -------------------------------- GLOBAL VARS/VARIABLES


// async function start() {
switch (document.querySelector('body')?.dataset.page) 
{
  case 'home': {
    import('./pages/home.js')
      .then(home => home.runHome())
      .catch(err => console.error('Failed to load home module:', err));


      
    break;
  }

  case 'destino': {
    import('./pages/destino.js')
      .then(destino => destino.runDestino())
      .catch(err => console.error('Failed to load destino module:', err));

       setTimeout(function() {
        console.log(' ')
    document.querySelector('.page-container .od-zona')?.click();
  }, 2000);

    break;
  }

  case 'destinos': {
    import('./pages/destinos.js')
      .then(destinos => destinos.runDestinos())
      .catch(err => console.error('Failed to load destinos module:', err));
    break;
  }

  case 'experiencias': {
    import('./pages/experiencias.js')
      .then(experiencias => experiencias.runExperiencias())
      .catch(err => console.error('Failed to load experiencias module:', err));
    break;
  }

  case 'ofertas': {
    import('./pages/ofertas.js')
      .then(ofertas => ofertas.runOfertas())
      .catch(err => console.error('Failed to load ofertas module:', err));
    break;
  }

  case 'pesquisa': {
    import('./pages/pesquisa.js')
      .then(pesquisa => pesquisa.runPesquisa())
      .catch(err => console.error('Failed to load pesquisa module:', err));
    break;
  }

  case 'politicas': {
    import('./pages/politicas.js')
      .then(politicas => politicas.runPoliticas())
      .catch(err => console.error('Failed to load politicas module:', err));
    break;
  }

  case 'produto': {
    import('./pages/produto.js')
      .then(produto => produto.runProduto())
      .catch(err => console.error('Failed to load produto module:', err));
      
      document.querySelectorAll('.pop-form-expand').forEach(el => {
  // Check if it has a child with class 'pop-expand-content'
  const content = el.querySelector('.pop-expand-content');
  if (content && content.querySelector('#pop-dest-radios')) {
    // Apply top padding if conditions are met
    el.style.paddingTop = '20rem';
  }
});


  // Wait 3 seconds before running autoplay logic
  setTimeout(() => {
    const videos = document.querySelectorAll("video");

    videos.forEach(video => {
      // Make sure Safari accepts autoplay
      video.setAttribute("muted", "");
      video.muted = true;
      video.setAttribute("playsinline", "");
      video.setAttribute("autoplay", "");
      video.setAttribute("loop", "");
      video.setAttribute("preload", "auto");

      // Try to play the video
      video.play();
      // const playPromise = video.play();
      // if (playPromise !== undefined) {
      //   playPromise.catch(err => {
          
      //     console.log("Autoplay blocked by Safari, retrying after user interaction:", err);
      //     console.warn("Autoplay blocked by Safari, retrying after user interaction:", err);
      //     // Fallback: play after first user interaction
      //     const resumePlayback = () => {
      //       video.play().catch(() => {});
      //       document.removeEventListener("click", resumePlayback);
      //       document.removeEventListener("touchstart", resumePlayback);
      //     };
      //     document.addEventListener("click", resumePlayback);
      //     document.addEventListener("touchstart", resumePlayback);
      //   });
      // }
    });

    
  }, 3000); // 3-second delay

    break;
  }

  case 'sobreNos': {
    import('./pages/sobreNos.js')
      .then(sobreNos => sobreNos.runSobreNos())
      .catch(err => console.error('Failed to load sobreNos module:', err));
    break;
  }

  case 'surfTrips': {
    import('./pages/surfTrips.js')
      .then(surfTrips => surfTrips.runSurfTrips())
      .catch(err => console.error('Failed to load surfTrips module:', err));
    break;
  }

  default:
    console.log('Code not defined!')
    
}
// }

// start();
