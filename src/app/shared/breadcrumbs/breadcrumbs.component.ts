import { Component } from '@angular/core';
import { ActivationEnd, Router } from '@angular/router';
import { filter, map } from 'rxjs';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrl: './breadcrumbs.component.css'
})
export class BreadcrumbsComponent {

  public titulo: string = '';

  constructor(private router: Router) {

    this.getTituloRuta();
  }

  getTituloRuta() {

    // * Se suscribe a los eventos del router para obtener el título de la página actual
    this.router.events
      .pipe(
        filter((event): event is ActivationEnd => event instanceof ActivationEnd),
        filter((event: ActivationEnd) => event.snapshot.firstChild === null),
        map((event: ActivationEnd) => event.snapshot.data)
      ).subscribe(data => {
        this.titulo = data['titulo'];
      });
  }
}


