const postProformBtn = document.querySelector("#postProformBtn");
postProformBtn.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("postProformBtn here");
  fetch("/api/proforms/", {
    method: "post",
  }).then((result) => console.log("result: ", result));
});
