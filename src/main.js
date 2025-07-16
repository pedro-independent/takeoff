
// -------------------------------- GLOBAL VARS/VARIABLES


// async function start() {
switch (document.querySelector('body')?.dataset.page) 
{
  case 'home':{
       const home =  import("./pages/home");
        home.runHome();
        }
    break;

  case 'destino':{
      const destino =  import("./pages/destino");
        destino.runDestino();
        }
    break;

  case 'destinos':{
    const destinos =  import("./pages/destinos"); 
        destinos.runDestinos();
        }
    break;

  case 'experiencias':{
     const experiencias =  import("./pages/experiencias");
        experiencias.runExperiencias();
        }
    break;

  case 'ofertas':{
     const ofertas =  import("./pages/ofertas");
        ofertas.runOfertas();
        }
    break;

  case 'pesquisa':{
      const pesquisa =  import("./pages/pesquisa");
        pesquisa.runPesquisa();
        }
    break;

  case 'politicas':{
     const politicas =  import("./pages/politicas");
        politicas.runPoliticas();
    }
    break;
      
  case 'produto':{
     const produto =  import("./pages/produto");
        produto.runProduto();
    }
    break;

  case 'sobreNos':{
     const sobreNos =  import("./pages/sobreNos");
        sobreNos.runSobreNos();
    }
    break;

  case 'surfTrips':{
     const surTrips =  import("./pages/surfTrips");
        surTrips.runSurfTrips();
    }
    break;

  default:
    console.log('Code not defined!');
    
}
// }

// start();