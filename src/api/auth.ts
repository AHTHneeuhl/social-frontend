export interface TSignUpPayload {
  firstName: string;
  lastName: string;
  email: string;
  location: string;
  occupation: string;
  picture: string;
}

export interface TSignInPayload {
  email: string;
  password: string;
}

const auth = {
  signUp: async ({
    firstName,
    lastName,
    email,
    location,
    occupation,
    picture,
  }: TSignUpPayload) => {},
  signIn: async ({ email, password }: TSignInPayload) => {},
};

export default auth;
