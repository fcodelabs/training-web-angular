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

    public hasMore: boolean = false;
    public showMore:boolean=!this.hasMore;

    constructor() {   
    }

    ngOnInit(): void {
        this.hasMore=this.card.description.length > 100;
    }

    handleShowMore() {
        this.showMore=!this.showMore
    }
}
