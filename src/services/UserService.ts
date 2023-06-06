import API from '@/services/axios';

class UserService {
    getUsers() {
        return API.get("/users");
    }
    creatUser(data) {
        return API.post("/users", data);
    }
}

export default new UserService();