import { Component, OnInit } from '@angular/core'
import { FormControl, Validators } from '@angular/forms'
import { ActivatedRoute, Router } from '@angular/router'

@Component({
    selector: 'app-sign-in',
    templateUrl: './sign-in.component.html',
    styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent implements OnInit {
    username = new FormControl('', Validators.required)
    constructor(private route: Router) {}

    ngOnInit(): void {}

    generateName(): void {
        const names = [
            'John',
            'Nick',
            'Anne',
            'Henry',
            'James',
            'Robert',
            'William',
            'Merry',
        ]
        const randomName = names[Math.floor(Math.random() * names.length)]
        this.username.setValue(randomName)
    }

    handleContinue() {
        if (this.username.value != null) {
            localStorage.setItem('Username', this.username.value)
            this.route.navigateByUrl('/home')
        }
    }
}
