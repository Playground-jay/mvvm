export default {
  async fetchUserData() {
    try {
      const response = await fetch(
        // Fetch a random user from the JSONPlaceholder API
        "https://jsonplaceholder.typicode.com/users/" +
          Math.floor(Math.random() * 10 + 1)
      );
      if (!response.ok) {
        throw new Error("Failed to fetch user data.");
      }
      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error("Failed to fetch user data.");
    }
  },
};
