import { Component, Input, OnInit } from '@angular/core'
import { FormControl } from '@angular/forms'
import { Card } from 'src/app/models/card'

@Component({
    selector: 'app-diary-card',
    templateUrl: './diary-card.component.html',
    styleUrls: ['./diary-card.component.scss'],
})
export class DiaryCardComponent implements OnInit {
    @Input()
    card!: Card

    text = new FormControl('')

    ngOnInit(): void {
        if (this.card.description.length < 100) {
            this.text.setValue(this.card.description)
        } else {
            const textTemp = this.card.description.substring(1, 100)
            this.text.setValue(textTemp + '...')
        }
    }

    handleShowMore() {
        if (this.text.value?.endsWith('...')) {
            this.text.setValue(this.card.description)
        } else {
            const textTemp = this.card.description.substring(1, 100)
            this.text.setValue(textTemp + '...')
        }
    }
}
