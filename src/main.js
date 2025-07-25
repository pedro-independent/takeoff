
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
