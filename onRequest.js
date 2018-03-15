export default (request, response) => {
  const vault = require('vault');

  let paramsObject = request.params;

  return vault.get('myToken').then((token) => {
    if (paramsObject.token === token) {
      response.status = 200;
      return response.send();
    } else {
      response.status = 400;
    return response.send();
    }
  }).catch((err) => {
    console.error(err);
    response.status = 500;
    return response.send();
  });
};
