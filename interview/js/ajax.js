function ajax(url, method, data) {
  return new Promise((resolve, reject) => {
    let xhr = new XMLHttpRequest();
    if (method === "get" || (method === "GET" && data)) {
      url = url + "?" + data;
      xhr.open("get", url);
      xhr.send(null);
    } else if (method === "get" || method === "GET") {
      xhr.open("get", url);
      xhr.send(null);
    } else {
      xhr.open("post", url);
      xhr.send(data);
    }
    xhr.onreadystatechange = () => {
      if (xhr.status === 200 && xhr.readyState === 4) {
        resolve(JSON.parse(xhr.responseText));
      } else if (xhr !== 400 && xhr.readyState === 4) {
        reject(xhr.status);
      }
    };
  });
}
