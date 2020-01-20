import axios from "axios";
import { config } from "@/config.js";
export default {
  fb(code) {
    return new Promise((resolve, reject) => {
      axios
        .get(`${config.apiUrl}/auth/fb?code=${code}`)
        .then(res => {
          resolve(res);
        })
        .catch(err => {
          reject(err);
        });
    });
  },
  me() {
    return new Promise((resolve, reject) => {
      axios
        .get(`${config.apiUrl}/me`)
        .then(res => {
          resolve(res);
        })
        .catch(err => {
          reject(err);
        });
    });
  },
  status() {
    return new Promise((resolve, reject) => {
      axios
        .get(`${config.apiUrl}/me/status`)
        .then(res => {
          resolve(res);
        })
        .catch(err => {
          reject(err);
        });
    });
  },

  pages() {
    return new Promise((resolve, reject) => {
      axios
        .get(`${config.apiUrl}/me/pages`)
        .then(res => {
          resolve(res);
        })
        .catch(err => {
          reject(err);
        });
    });
  }
};
