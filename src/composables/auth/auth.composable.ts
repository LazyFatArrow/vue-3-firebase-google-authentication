import {
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
  Unsubscribe,
  User
} from 'firebase/auth'
import { Ref, ref } from 'vue'

const localUser: Ref<User | null> = ref(null)
let unwatchAuthState: Unsubscribe = () => {}

export const useAuth = () => {
  const isLoading = ref(false)
  const hasFailed = ref(false)
  const localError: Ref<unknown> = ref(null)

  const auth = getAuth()


  const watchAuthState = () => {
    unwatchAuthState()

    unwatchAuthState = onAuthStateChanged(auth, user => {
      if (user) {
        localUser.value = user
      } else {
        localUser.value = null
      }
    })
  }

  const loginInWithGoogle = async (): Promise<void> => {
    const provider = new GoogleAuthProvider()

    isLoading.value = true
    hasFailed.value = false
    localError.value = null

    try {
      const result = await signInWithPopup(auth, provider)

      localUser.value = result.user
    } catch(error) {
      hasFailed.value = true
      localError.value = error
    } finally {
      isLoading.value = false
    }
  }

  const logout = async () => {
    await signOut(auth)

    localUser.value = null
  }

  return {
    isLoading,
    hasFailed,
    logout,
    user: localUser,
    error: localError,
    watchAuthState,
    unwatchAuthState,
    loginInWithGoogle,
  }
}