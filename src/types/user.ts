import { ref } from "vue";

export interface UserData {
  id: number;
  name: string;
  email: string;
}

const userData = ref<UserData | null>(null);
const error = ref<string | null>(null);
const loading = ref<boolean>(false);

async function fetchUserData(userId: number): Promise<void> {
  loading.value = true;
  try {
    const response = await fetch(`/api/users/${userId}`);
    const data: UserData = await response.json();
    userData.value = data;
  } catch (err) {
    if (err instanceof Error) {
      error.value = err.message;
    } else {
      error.value = String(err);
    }
  } finally {
    loading.value = false;
  }
}
