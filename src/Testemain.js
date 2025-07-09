export const config = {
  isGreen: false
};

export function initCommonStuff() {
  if (config.isGreen) {
    console.log('Green mode activated');
  }
  else
  console.log('Green mode NOTTTT activated');
}