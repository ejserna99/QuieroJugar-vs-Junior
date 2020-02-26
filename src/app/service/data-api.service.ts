import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AngularFireStorage } from '@angular/fire/storage';
import { finalize } from 'rxjs/operators';

export interface Item { ID_usuario: number; texto_publi: string; tiempo_publi: string; tipo_publi: string; }

@Injectable({
  providedIn: 'root'
})

export class DataApiService {
  private itemDoc: AngularFirestoreDocument<Item>;
  private itemsCollection: AngularFirestoreCollection<Item>;
  items: Observable<Item[]>;
  uploadPercent: Observable<number>;
  urlImage: Observable<string>;

  constructor(private afs: AngularFirestore, private storage: AngularFireStorage) { }

  addItem(collection: string, item: Item) {
    this.itemsCollection = this.afs.collection<Item>(collection);
    this.itemsCollection.add(item);
  }

  deleteItem(collection: string, item: string) {
    this.itemDoc = this.afs.doc<Item>(`${collection}/${item}`);
    this.itemDoc.delete();
  }

  getCollection(collection: string) {
    this.itemsCollection = this.afs.collection<Item>(collection);
    this.items = this.itemsCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Item;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
    return this.items;
  }

  addImage(file: any) {
    const id = Math.random().toString(36).substring(2);
    const filePath = `upload/imagenes/usuario_${id}`;
    const ref = this.storage.ref(filePath);
    const task = this.storage.upload(filePath, file);

    this.uploadPercent = task.percentageChanges();
    task.snapshotChanges().pipe(finalize(() => this.urlImage = ref.getDownloadURL())).subscribe();

    return { porcentaje: this.uploadPercent, urlImage: this.urlImage};
  }
}
