import { Component, OnInit } from '@angular/core'
import { FormControl, Validators } from '@angular/forms'
import { select, Store } from '@ngrx/store'
import { Observable } from 'rxjs'
import { dispatch } from 'rxjs/internal/observable/pairs'
import { Card } from '../../components/diary-card/card'
import { addCard, addCardSuccess, getCards } from '../../store/actions/cards.actions'
import { selectCards } from '../../store/selectors/cards.selectors'
import { DiaryHomeState } from '../../store/state/diaryHome.state'

@Component({
    selector: 'app-diary-home',
    templateUrl: './diary-home.component.html',
    styleUrls: ['./diary-home.component.scss'],
})
export class DiaryHomeComponent implements OnInit {
    title = new FormControl('', Validators.required)
    description = new FormControl('', Validators.required)
    expand = new FormControl('collapse')

    public cards: Observable<Card[]> = this.store.pipe(select(selectCards))

    constructor(private store: Store<DiaryHomeState>) {}

    ngOnInit(): void {
        const handleClickOutside = (e: any) => {
            if (e.target.id === 'title' || e.target.id === 'description') return
            this.expand.setValue('collapse')
        }
        document.addEventListener('click', handleClickOutside)
        this.store.dispatch(getCards())
    }

    handleSubmit() {
        if (this.title.valid && this.description.valid) {
            const card: Card = {
                title: this.title.value,
                description: this.description.value,
                subtitle: localStorage.getItem('Username'),
            }
            this.store.dispatch(addCard({ card }))
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
