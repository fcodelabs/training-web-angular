import { Component, OnInit } from '@angular/core'
import { FormControl, Validators } from '@angular/forms'
import { Card } from '../../components/diary-card/card'

@Component({
    selector: 'app-diary-home',
    templateUrl: './diary-home.component.html',
    styleUrls: ['./diary-home.component.scss'],
})
export class DiaryHomeComponent implements OnInit {
    title = new FormControl('', Validators.required)
    description = new FormControl('', Validators.required)
    expand = new FormControl('collapse')

    cards = new FormControl<Array<Card>>([])

    constructor() {}

    ngOnInit(): void {
        const handleClickOutside = (e: any) => {
            if (e.target.id === 'title' || e.target.id === 'description') return
            this.expand.setValue('collapse')
        }
        document.addEventListener('click', handleClickOutside)
    }

    handleSubmit() {
        if (this.title.valid && this.description.valid) {
            const card: Card = {
                title: this.title.value,
                description: this.description.value,
                subtitle: localStorage.getItem('Username'),
            }
            this.cards.value?.push(card)
        } else {
            if (!this.title.valid) console.log('Missing title')
            if (!this.description.valid) console.log('Missing description')
        }

        this.title.setValue('')
        this.description.setValue('')
    }

    handleExpand() {
        this.expand.setValue('expand')
    }
}
