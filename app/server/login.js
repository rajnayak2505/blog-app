 'use server'
 import { signIn } from '@/auth'

//  const credentialsLogin = async (formData) => {
 const credentialsLogin = async (email, password) => {
    try {
      await signIn("credentials", {
        email,
        password,
        redirect: true,
        redirectTo: "/"
      });

    } catch (error) {
      console.error("Auth error:", error);
    //   throw error;
      return error.cause;
    }

  };

  export default credentialsLogin;