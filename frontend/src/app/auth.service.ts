import {Injectable} from '@angular/core';
import {User} from "./interfaces/user";

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    users: User[] = [{
        name: "Petia",
        dateOfBirth: "12-09-1953",
        sex: "Чоловіча",
        homeAddress: "NY, Manhattan, 22",
        email: "admin",
        phone: "+380001234567",
        password: "admin"
    }];

    constructor() {
    }

    checkUser(logInEmail, logInPassword) {
        let foundUser =
            this.users.filter(item => item.email === logInEmail.viewModel && item.password === logInPassword.viewModel)[0];

        return foundUser;
    }

    register(user: User){
        this.users.push(user);

        return user;
    }

}
