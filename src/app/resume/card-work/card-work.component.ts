import { Component, Input } from '@angular/core';
import { Work } from '../../../models/work';

@Component({
  selector: 'app-card-work',
  imports: [],
  templateUrl: './card-work.component.html',
  styleUrl: './card-work.component.css'
})
export class CardWorkComponent {
@Input({required:true})work!: Work;
}
