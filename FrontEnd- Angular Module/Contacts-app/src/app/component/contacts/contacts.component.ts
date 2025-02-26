import {CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { Contact } from '../../models/contacts.model';
import { ContactsService } from '../../services/contacts.service';


@Component({
  selector: 'app-root',
  standalone:true,
  imports: [FormsModule,CommonModule],
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.css'
})
export class ContactsComponent implements OnInit {
contacts: Contact[]=[]; //empty array to hold contact details
private contactService=inject(ContactsService) //to use methods from service component

ngOnInit(): void{
  this.getContacts();
}
getContacts(){
this.contactService.getAllContacts().subscribe({
  next:(data) =>(this.contacts=data),
  error:(err) => console.log("Error fetching contacts :"+err.message)
})
}

deleteContact(id:String){
this.contactService.deleteContact(id).subscribe({
  next:()=>{
    this.contacts=this.contacts.filter((contact)=>contact._id!==id)
  },
  error:(err)=>console.log("Error deleting contact: "+err)
})
}


}
