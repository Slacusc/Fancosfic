import { createUserWithEmailAndPassword }  from '../src/firebase/init.js';
import { registerNewUser } from '../src/firebase/auth.js';


jest.mock('../src/firebase/init.js', () => ({
  auth: jest.fn(),
  signInWithEmailAndPassword: jest.fn(),
  signOut: jest.fn(),
  GoogleAuthProvider: jest.fn(),
  getAuth: jest.fn(() => {
    console.log('llamamos al getAuth mockeado')
  }),
  initializeApp: jest.fn(),
  createUserWithEmailAndPassword: jest.fn(),
  provider: jest.fn(),
  signInWithPopup: jest.fn(),
  addDoc: jest.fn(),
  collection:jest.fn(),
  db:jest.fn(),
  Timestamp :jest.fn(),
  query: jest.fn(() => {
    console.log('llamamos al getAuth mockeado')
  }),
  onSnapshot: jest.fn()
}));

/**
 * @jest-environment jsdom
 */ 

describe('Test Auth', () => {
  const mail = "probando@gmail.com";
  const pass = "qwerty";
  it('try registerNewUser ', async () => {
    await registerNewUser(mail, pass);
    expect(createUserWithEmailAndPassword).toHaveBeenCalled()
    expect(createUserWithEmailAndPassword).toHaveBeenCalledTimes(1)
  });
});
