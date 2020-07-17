import { apiRequest } from "../configs/apiMiddleware";

export default {
    register: body => apiRequest("POST", "/users/register", body),
    login: body => apiRequest("POST", "/users/login", body)
};