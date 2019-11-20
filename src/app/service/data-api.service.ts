import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Item { ID_usuario: number; texto_publi: string; tiempo_publi: string; tipo_publi: string; }

@Injectable({
  providedIn: 'root'
})

export class DataApiService {

  private itemDoc: AngularFirestoreDocument<Item>;
  private itemsCollection: AngularFirestoreCollection<Item>;
  items: Observable<Item[]>;

  constructor(private afs: AngularFirestore) {
    this.itemsCollection = afs.collection<Item>('publicacion');
    this.items = this.itemsCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Item;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );

  }

  addItem(item: Item) {
    this.itemsCollection.add(item);
  }

  eliminarItem(item: string) {
    this.itemDoc = this.afs.doc<Item>(`publicacion/${item}`);
    this.itemDoc.delete();
  }

  publicaciones() {
    return this.items;
  }
}
