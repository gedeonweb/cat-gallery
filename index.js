const apiKey =
  "live_9SOylPWh4mJkMyLaqPaE7o5A9VBSOH1rt61GavVRaKHkFp7ghSyLez3TEWdRC1hr";
let cat = document.getElementById("cat");
let thumb = document.getElementById("thumb");
let btnPlus = document.getElementById("btnPlus");
let btnoins = document.getElementById("btnMoins");

fetch(
  `https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=beng&api_${apiKey}`
)
  .then((response) => response.json())
  .then((data) => {
    const imgCat0 = `${data[0].url}`;
    const imgCat1 = `${data[1].url}`;
    const imgCat2 = `${data[2].url}`;
    const imgCat3 = `${data[3].url}`;
    const imgCat4 = `${data[4].url}`;

    cat.innerHTML = `<img src="${imgCat0}" width="500px" class="imgCat" />`;

    thumb.innerHTML = `
    <img src="${imgCat0}" id="img0" class="thumbCat" />
    <img src="${imgCat1}" id="img1" class="thumbCat"/>
    <img src="${imgCat2}" id="img2" class="thumbCat" />
    <img src="${imgCat3}" id="img3" class="thumbCat" />
    <img src="${imgCat4}" id="img4" class="thumbCat" />`;

    let img0 = document.getElementById("img0");
    let img1 = document.getElementById("img1");
    let img2 = document.getElementById("img2");
    let img3 = document.getElementById("img3");
    let img4 = document.getElementById("img4");

    img0.addEventListener("click", (e) => {
      e.preventDefault();
      (cat.src = `${imgCat0}`)
        ? (cat.innerHTML = `<img src="${imgCat0}" width="500px" class="imgCat" />`)
        : "";
    });

    img1.addEventListener("click", (e) => {
      e.preventDefault();
      (cat.src = `${imgCat1}`)
        ? (cat.innerHTML = `<img src="${imgCat1}" width="500px" class="imgCat" />`)
        : "";
    });

    img2.addEventListener("click", (e) => {
      e.preventDefault();
      if ((cat.src = `${imgCat2}`)) {
        cat.innerHTML = `<img src="${imgCat2}" width="500px" class="imgCat" />`;
      } else {
      }
    });

    img3.addEventListener("click", (e) => {
      e.preventDefault();
      (cat.src = `${imgCat3}`)
        ? (cat.innerHTML = `<img src="${imgCat3}" width="500px" class="imgCat" />`)
        : "";
    });

    img4.addEventListener("click", (e) => {
      e.preventDefault();
      (cat.src = `${imgCat4}`)
        ? (cat.innerHTML = `<img src="${imgCat4}" width="500px" class="imgCat" />`)
        : "";
    });
  });
