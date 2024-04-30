import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Event {
  id: number;
  title: string;
  date: Date;
};
import {IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone : true,
  imports : [IonicModule,CommonModule,FormsModule]
})
export class Tab2Page {
  selectedDate!: Date;
  eventTitle!: string;
  events: Event[] = [];
  addEvent() {
    if (this.selectedDate && this.eventTitle) {
      const newEvent: Event = {
        id: Date.now(),
        title: this.eventTitle,
        date: new Date(this.selectedDate),
      };
      this.events.push(newEvent);
      this.clearFields();
    }
  }
  editEvent(event: Event) {
    const newTitle = prompt('Edit Event Title:', event.title);
    if (newTitle) {
      event.title = newTitle;
    }
  }
  deleteEvent(event: Event) {
    const index = this.events.findIndex((e) => e.id === event.id);
    if (index > -1) {
      this.events.splice(index, 1);
    }
  }
  clearFields() {
    this.eventTitle = '';
  }
}
