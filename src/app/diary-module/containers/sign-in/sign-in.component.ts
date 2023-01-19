import { Component, OnInit } from '@angular/core'
import { FormControl, Validators } from '@angular/forms'

@Component({
    selector: 'app-sign-in',
    templateUrl: './sign-in.component.html',
    styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent implements OnInit {
    username = new FormControl('', Validators.required)

    constructor() {}

    ngOnInit(): void {}

    generateName(): void {
        const names = ['John', 'Anne', 'Henry', 'James', 'William', 'Merry']
        const randomName = names[Math.floor(Math.random() * names.length)]
        this.username.setValue(randomName)
    }
}
