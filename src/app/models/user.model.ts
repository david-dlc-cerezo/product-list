export class User {
    id: number;
    username: string;
    password: string;
    firstName: string;
    lastName: string;
    
    fullName() {
        return firstName + ' ' + lastName;
    }
}
