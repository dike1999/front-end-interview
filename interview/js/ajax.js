function ajax(url, method, body, headers) {
  return new Promise((resolve, reject) => {
    let req = new XMLHttpRequest();
    req.open(methods, url);
    for (let key in headers) {
      req.setRequestHeader(key, headers[key]);
    }

    req.onreadystatechange(() => {
      if (req.readystate == 4) {
        if (req.status >= '200' && req.status <= 300) {
          resolve(req.responeText);
        } else {
          reject(req);
        }
      }
    });
    req.send(body);
  });
}
