const API = "https://gorest.co.in/public-api/users?_format=json&access-token=PJV72RKKWWAE2Z8KTztcaVLH_oRQSnjYuuEF"
export const getUsers = () => fetch(API)
  .then(response => response.json());