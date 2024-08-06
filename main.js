fetch("http://127.0.0.1:5500/data.html").then((res) => {
  console.log("res", res);
  res.json().then((data) => {
    console.log("data", data);
  });
});
