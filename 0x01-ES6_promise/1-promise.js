export default function getFullResponseFromAPI(success) {

  return new Promise((resolve, reject) => {
    obj = {
      status: 200,
      body: 'Success',
    };
    if (success) {
      resolve(obj);
    } else {
      reject(Error('The fake API is not working currently'));
    }
  });
};
