import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Contact } from '../models/contacts.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  private api = 'http://localhost:3000/contacts'

  constructor(
    private http: HttpClient
  ) {
  }

  // writing crud operations now

  getAllContacts(): Observable<Contact[]> {
    return this.http.get<Contact[]>(this.api + '/all')
  }

  getContactsCount(): Observable<Number> {
    return this.http.get<Number>(this.api + '/count')
  }

  addContacts(contact: Contact): Observable<Contact> {
    return this.http.post<Contact>(this.api + '/add', contact)
  }

  editContact(contact: Contact, _id: string): Observable<Contact> {
    return this.http.put<Contact>(this.api + '/edit/' + _id, contact)
  }

  deleteContact(_id: String) {
    return this.http.delete(this.api + '/delete/' + _id)
  }

}
