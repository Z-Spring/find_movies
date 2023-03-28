async function getRecommendations(username) {
  const response = await fetch(`http://localhost:8080/api/recommendations?username=${username}`);
  if (response.ok) {
    const data = await response.json();
    console.log(data);
    return data;
  } else {
    throw new Error(`Error fetching recommendations: ${response.statusText}`);
  }
}

