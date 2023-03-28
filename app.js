document.getElementById("user-form").addEventListener("submit", async (event) => {
  event.preventDefault();
  const username = document.getElementById("username").value;
  showLoader();
  try {
    const recommendations = await getRecommendations(username);
    displayRecommendations(recommendations);
  } catch (error) {
    console.error(error);
  } finally {
    hideLoader();
  }
});

function showLoader() {
  document.getElementById("loader").style.display = "block";
}

function hideLoader() {
  document.getElementById("loader").style.display = "none";
}
// console.log(recommendations)

function displayRecommendations(recommendations) {
  if (recommendations) {
    document.getElementById("recommendations").style.display = "block";
    const movieList = document.getElementById("movie-list");
    movieList.innerHTML = "";

    for (const rec of recommendations) {
      const listItem = document.createElement("li");
      listItem.classList.add("recommendation");

      const poster = document.createElement("div");
      poster.classList.add("poster");
      poster.style.backgroundImage = `url(${rec.poster})`;
      listItem.appendChild(poster);

      const info = document.createElement("div");
      info.classList.add("info");

      const title = document.createElement("div");
      title.classList.add("title");
      title.textContent = rec.title;
      info.appendChild(title);

      const rate = document.createElement("div");
      rate.classList.add("rate");
      rate.textContent = `评分: ${rec.rate}`;
      info.appendChild(rate);

      const time = document.createElement("div");
      time.classList.add("time");
      time.textContent = `时间: ${rec.time}`;
      info.appendChild(time);

      const desc = document.createElement("div");
      desc.classList.add("desc");
      desc.textContent = rec.info;
      info.appendChild(desc);

      listItem.appendChild(info);
      movieList.appendChild(listItem);
    }
  }
}

