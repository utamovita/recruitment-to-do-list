import axios from "axios";

export const todosApi = {
  fetch: async () => {
    const response = await axios.get("https://jsonplaceholder.typicode.com/todos");

    return response
  },
}