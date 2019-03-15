import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'userId'
})

export class userIdPipe implements PipeTransform {
    transform(users: Array<any>, id: string, index: any): Array<any> {
        return users.filter(user => {
            console.log(index);
            return user.id;
        });
    }
}



