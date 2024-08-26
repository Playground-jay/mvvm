import { ref } from "vue";
import api from "../model/api";
import { UserData } from "../types/user";

export default function useUserViewModel() {
  const userData = ref<UserData | null>(null);
  const loading = ref<boolean>(false);
  const error = ref<string | null>(null);

  const loadUserData = async (): Promise<void> => {
    loading.value = true;
    error.value = null;
    try {
      // trigger the api
      const data: UserData = await api.fetchUserData();
      // update the userData ref
      userData.value = data;
    } catch (err) {
      if (err instanceof Error) {
        error.value = err.message;
      } else {
        // err가 Error 객체가 아닌 경우를 처리합니다.
        error.value = String(err);
      }
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
