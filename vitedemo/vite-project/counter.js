export function setupCounter(element) {

  const setCounter = (count) => {
    console.log('im here')
  };
  element.addEventListener('click', () => setCounter())
}
