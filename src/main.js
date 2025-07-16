
// -------------------------------- GLOBAL VARS/VARIABLES

const isHome = document.querySelector('body')?.dataset.page === 'home';

if (isHome) 
{
   const home = await import("./pages/home");

  home.runHome();
}


