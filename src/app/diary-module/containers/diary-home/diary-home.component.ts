import { Component, OnInit } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'

@Component({
    selector: 'app-diary-home',
    templateUrl: './diary-home.component.html',
    styleUrls: ['./diary-home.component.scss'],
})
export class DiaryHomeComponent implements OnInit {
    form = new FormGroup({
        title: new FormControl('', Validators.required),
        description: new FormControl('', Validators.required),
    })
    expanded: boolean = false

    constructor() {}

    ngOnInit(): void {}

    handleSubmit() {
        console.log('Title : ' + this.form.value.title)
        console.log('Description : ' + this.form.value.description)
        this.form.reset()
        this.expanded = false
    }
}
