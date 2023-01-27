import { Component, OnInit } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { Card } from 'src/app/models/card'
import { select, Store } from '@ngrx/store'
import { Observable } from 'rxjs'
import { addCard} from '../../store/actions/cards.actions'
import { selectCards } from '../../store/selectors/cards.selectors'
import { DiaryHomeState } from '../../store/state/diaryHome.state'

@Component({
    selector: 'app-diary-home',
    templateUrl: './diary-home.component.html',
    styleUrls: ['./diary-home.component.scss'],
})
export class DiaryHomeComponent implements OnInit {
    form = new FormGroup(
        {
            title: new FormControl('',Validators.required),
            description: new FormControl('',Validators.required),
        },
    )
    expanded: boolean = false
    public cards: Observable<Card[]> = this.store.pipe(select(selectCards))

    constructor(private store: Store<DiaryHomeState>) {}

    ngOnInit(): void {}

    handleSubmit() {
        if (this.form.valid) {
            const card = {
                title: this.form.value.title,
                description: this.form.value.description,
                subtitle: localStorage.getItem('Username'),
            }
            this.store.dispatch(addCard({ card }))
        } else {
            if (!this.form.controls.title.valid) console.log('Missing title')
            if (!this.form.controls.description.valid)
                console.log('Missing description')
        }

        this.form.reset()
        this.expanded = false
    }
}
