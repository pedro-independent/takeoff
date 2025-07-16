
// -------------------------------- GLOBAL VARS/VARIABLES

const isHome = document.querySelector('body')?.dataset.page === 'home';

// import home from "./pages/home/home";

if (isHome) 
{
   const home = await import("./pages/home/home");

  home.runhome();
}


