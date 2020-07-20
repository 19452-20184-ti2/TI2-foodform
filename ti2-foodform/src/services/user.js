import { apiRequest } from "../configs/apiMiddleware";

export default {
    getUser: id => apiRequest("GET",`/users/${id}`)
}