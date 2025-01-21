import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { ThemeService } from '../services/theme.service';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  themeService=inject(ThemeService);
//para el typping effect
messages = ['Javier Prado','Desarrollador Back-end', 'Desarrollador Front-end', 'Desarrollador Mobile'];
typingSpeed = 150;
delayBetweenMessages = 2000;
textIndex = 0;
charIndex = 0;
currentMessage = signal('');
ngOnInit() {
  this.typeMessage();
}
typeMessage() {
  if (this.charIndex < this.messages[this.textIndex].length) {
    this.currentMessage.update(
      (value) => value + this.messages[this.textIndex].charAt(this.charIndex)
    );
    this.charIndex++;

    setTimeout(() => this.typeMessage(), this.typingSpeed);
  } else {
    setTimeout(() => this.deleteMessage(), this.delayBetweenMessages);
  }
}
deleteMessage() {
  if (this.charIndex > 0) {
    this.currentMessage.update((value) => value.slice(0, -1));
    this.charIndex--;
    setTimeout(() => this.deleteMessage(), this.typingSpeed / 2);
  } else {
    this.textIndex = (this.textIndex + 1) % this.messages.length;
    setTimeout(() => this.typeMessage(), this.typingSpeed);
  }
}
}
