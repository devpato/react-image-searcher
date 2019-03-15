import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID cbefb7b2ce25d1fdbf242be7fbf7f3cc482ee5628a19b4b6e4ad0b062892907f"
  }
});
