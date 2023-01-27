import { Component, OnInit } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { Card } from 'src/app/models/card'

@Component({
    selector: 'app-diary-home',
    templateUrl: './diary-home.component.html',
    styleUrls: ['./diary-home.component.scss'],
})
export class DiaryHomeComponent implements OnInit {
    form = new FormGroup(
        {
            title: new FormControl('', Validators.required),
            description: new FormControl('', Validators.required),
        },
        Validators.required
    )
    expanded: boolean = false
    cards: Card[] = []

    constructor() {}

    ngOnInit(): void {}

    handleSubmit() {
        const validTitle = this.form.controls.title.valid
        const validDescription = this.form.controls.description.valid

        if (validTitle && validDescription) {
            const card = {
                title: this.form.value.title,
                description: this.form.value.description,
                subtitle: localStorage.getItem('Username'),
            } as Card
            this.cards?.push(card)
        } else {
            if (!validTitle) console.log('Missing title')
            if (!validDescription) console.log('Missing description')
        }

        this.form.reset()
        this.expanded = false
    }
}
