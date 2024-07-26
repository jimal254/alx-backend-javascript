export default function getResponseFromAPI() {
  const promise = new Promise((resolve) => {
    resolve('hi, how are you');
  });

  return promise;
}
