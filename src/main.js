
// -------------------------------- GLOBAL VARS/VARIABLES



switch (document.querySelector('body')?.dataset.page) 
{
  case 'home':{
       const home = await import("./pages/home");
        home.runHome();
        }
    break;

  case 'destino':{
      const destino = await import("./pages/destino");
        destino.runDestino();
        }
    break;

  case 'destinos':{
    const destinos = await import("./pages/destinos");
        destinos.runDestinos();
        }
    break;

  case 'experiencias':{
     const experiencias = await import("./pages/experiencias");
        experiencias.runExperiencias();
        }
    break;

  case 'ofertas':{
     const ofertas = await import("./pages/ofertas");
        ofertas.runOfertas();
        }
    break;

  case 'pesquisa':{
      const pesquisa = await import("./pages/pesquisa");
        pesquisa.runPesquisa();
        }
    break;

  case 'politicas':{
     const politicas = await import("./pages/politicas");
        politicas.runPoliticas();
    }
    break;
      
  case 'produto':{
     const produto = await import("./pages/produto");
        produto.runProduto();
    }
    break;

  case 'sobreNos':{
     const sobreNos = await import("./pages/sobreNos");
        sobreNos.runSobreNos();
    }
    break;

  case 'surfTrips':{
     const surTrips = await import("./pages/surfTrips");
        surTrips.runSurfTrips();
    }
    break;

  default:
    console.log('Code not defined!');
    
}