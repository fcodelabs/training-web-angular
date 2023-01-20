import { Component, OnInit } from '@angular/core'
import { FormControl } from '@angular/forms'

@Component({
    selector: 'app-diary-home',
    templateUrl: './diary-home.component.html',
    styleUrls: ['./diary-home.component.scss'],
})
export class DiaryHomeComponent implements OnInit {
    title = new FormControl('')
    description = new FormControl('')
    expand = new FormControl('collapse')

    constructor() {}

    ngOnInit(): void {
        const handleClickOutside = (e: any) => {
            if (e.target.id === 'title' || e.target.id === 'description') return
            this.expand.setValue('collapse')
        }
        document.addEventListener('click', handleClickOutside)
    }

    handleSubmit() {
        console.log('Title : ' + this.title.value)
        console.log('Description : ' + this.description.value)

        this.title.setValue('')
        this.description.setValue('')
    }

    handleExpand() {
        this.expand.setValue('expand')
    }
}