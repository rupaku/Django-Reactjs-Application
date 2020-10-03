import { API } from "../../backend"

export const getProducts = () => {
  return fetch(`${API}product`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "*",
    },
  })
    .then((response) => {
      return response.json()
    })
    .catch((err) => console.log(err))
}
