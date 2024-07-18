import { auth } from './firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { signInWithEmailAndPassword } from 'firebase/auth';
import Swal from 'sweetalert2';
import { sendPasswordResetEmail } from 'firebase/auth';
//  ================= SIGN UP AUTHENTICATION ===============================
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

//  ================= SIGN IN AUTHENTICATION ===============================

const login = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    Swal.fire('Success', 'Login successful!', 'success');
    return userCredential.user;
  } catch (error) {
    Swal.fire('Error', error.message, 'error');
    throw error;
  }
};

export { login };

//  ================= SEND RESET EMAIL  AUTHENTICATION ===============================

const sendResetEmail = async (email) => {
  try {
    await sendPasswordResetEmail(auth, email);
    Swal.fire('Success', 'Password reset email sent!', 'success');
  } catch (error) {
    Swal.fire('Error', error.message, 'error');
    throw error;
  }
};
export { sendResetEmail};
