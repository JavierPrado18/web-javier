import { Component } from '@angular/core';
import { CardWorkComponent } from './card-work/card-work.component';
import { Work } from '../../models/work';

@Component({
  selector: 'app-resume',
  imports: [CardWorkComponent],
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.css'
})
export class ResumeComponent {
  works:Work[]= [
    {
      title: "Desarrollador Web",
      subTitle: "Presencial-IADATA Peru",
      description: `Formo parte del equipo de desarrollo, 
      donde desarrollamos sistemas completos desde el modelamiento 
      hasta la implementación. Manejamos las tecnologías de 
      Java (Spring Boot), JavaScript(Angular) y SQLServer.`,
      date: "septiembre 2024- actualmente"
    },
    {
      title: "Desarrollador mobile y web",
      subTitle: "Remoto-Freelance",
      description: "Fui parte del desarrollo de una aplicación web y móvil hecha en Flutter.\n" +
                  "La función principal del proyecto era llevar la logística de productos,\n" +
                  "para hacer pedidos desde la app móvil a la web.",
      date: "Septiembre 2024- octubre 2024"
    }
  ]
}
