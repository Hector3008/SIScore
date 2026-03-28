      const postProformBtn = document.querySelector("#postProformBtn");
      
      const body = {
        texto1: "texto",
        texto2: "texto2"
      }
      
      postProformBtn.addEventListener("click", (e) => {
        e.preventDefault()
        console.log("postProformBtn here")
        fetch("/api/proforms/", {
          method: "post",
          body: JSON.stringify(body),
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((res) => {
            console.log("res.status here: ", res.status);
            return res.text();
          })
          .then((data) => console.log("data here: ",data));
      })

