import { ref } from "vue";
import api from "../model/api";

export default function useUserViewModel() {
  const userData = ref(null);
  const loading = ref(false);
  const error = ref(null);

  const loadUserData = async () => {
    loading.value = true;
    error.value = null;
    try {
      // trigger the api
      const data = await api.fetchUserData();
      // update the userData ref
      userData.value = data;
    } catch (err) {
      error.value = err.message;
    } finally {
      loading.value = false;
    }
  };

  // return the data and methods
  return {
    userData,
    loading,
    error,
    loadUserData,
  };
}
