import { auth } from './firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import Swal from 'sweetalert2';

const register = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    Swal.fire('Success', 'Registration successful!', 'success');
    return userCredential.user;
  } catch (error) {
    Swal.fire('Error', error.message, 'error');
    throw error;
  }
};

export { register };
