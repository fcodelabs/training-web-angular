import { Injectable } from '@angular/core'
import {
    addDoc,
    collection,
    onSnapshot,
    CollectionReference,
    DocumentData,
    Firestore,
    orderBy,
    query,
} from '@angular/fire/firestore'
import { Observable } from 'rxjs'
import { Card } from 'src/app/models/card'

@Injectable({ providedIn: 'root' })
export class DiaryHomeService {
    cards: Card[] = []
    cardCollection: CollectionReference<DocumentData>

    constructor(firestore: Firestore) {
        this.cardCollection = collection(firestore, 'Post')
    }

    getCards(): Observable<Card[]> {
        return new Observable((observer) => {
            const qry = query(this.cardCollection, orderBy('created', 'desc'))
            onSnapshot(qry, (snapshot) => {
                const cards: any[] = snapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                }))
                observer.next(cards)
            })
        })
    }

    addCard(card: Card) {
        const date = new Date()
        return new Observable((observer) => {
            addDoc(this.cardCollection, {
                ...card,
                created: date,
            })
            observer.next()
        })
    }
}
