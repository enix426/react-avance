axios
  .get("/cars")
  .then((response) => console.log(response.data))
  .catch((error) => console.error(error));

axios
  .put("/cars/1", {
    make: "Toyota",
    model: "Camry",
    year: 2023,
  })
  .then((response) => console.log(response.data))
  .catch((error) => console.error(error));

axios
  .delete("/cars/1")
  .then((response) => console.log(response.data))
  .catch((error) => console.error(error));

axios.interceptors.request.use(
  (config) => {
    config.headers.Authorization = `Bearer ${localStorage.getItem("token")}`;
    return config;
  },
  (error) => Promise.reject(error)
);

axios
  .get("/cars")
  .then((response) => console.log(response.data))
  .catch((error) => {
    if (error.response) {
      // Erreur avec réponse HTTP
      console.error("Erreur:", error.response.data);
    } else if (error.request) {
      // Aucune réponse du serveur
      console.error("Aucune réponse:", error.request);
    } else {
      // Erreur autre
      console.error("Erreur:", error.message);
    }
  });

const controller = new AbortController();
axios
  .get("/cars", { signal: controller.signal })
  .then((response) => console.log(response.data))
  .catch((error) => console.error(error));

// Annuler la requête
controller.abort();
