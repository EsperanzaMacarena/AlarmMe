export class LoginDto {
    
    constructor(public username: string, public password: string) {
    }

    toJSON(){
        return { 
            username: this.username, 
            password: this.password
        };
    }
}