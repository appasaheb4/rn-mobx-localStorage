import cryptoJS from 'crypto-js';
import 'react-native-get-random-values';

export const encrypt = (data: any, key: string) => {
  const ciphertext = cryptoJS.AES.encrypt(JSON.stringify(data), key);
  return ciphertext.toString();
};

export const decrypt = (ciphertext: any, key: string) => {
  try {
    var bytes = cryptoJS.AES.decrypt(ciphertext.toString(), key);
    var decryptedData = JSON.parse(bytes.toString(cryptoJS.enc.Utf8));
    return decryptedData;
  } catch (e) {
    return null;
  }
};

export const hash = (data: any) => cryptoJS.SHA512(data).toString();

export const generateKey = async () => {
  const randomBytes = await crypto.getRandomValues(new Uint8Array(16));
  return hash(randomBytes.toString());
};
