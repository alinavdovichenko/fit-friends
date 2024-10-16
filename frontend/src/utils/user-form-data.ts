import { State } from '../types';

export function getRegisterData(state: State, avatar?: Blob): FormData {
  const { email, password, name, sex, dateOfBirth, role, location } =
    state.USER_FORM;
  const formData = new FormData();
  if (!email || !password || !name || !location || !avatar) {
    throw new Error('Not enough data for registration');
  }
  formData.append('email', email);
  formData.append('password', password);
  formData.append('name', name);
  formData.append('sex', sex);
  if (dateOfBirth.length) {
    formData.append('dateOfBirth', dateOfBirth);
  }
  formData.append('role', role);
  formData.append('location', location);
  formData.append('avatar', avatar);
  return formData;
}
