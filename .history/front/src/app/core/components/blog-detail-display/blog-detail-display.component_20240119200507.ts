import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogCreationService } from '../../services/blog-creation/blog-creation.service';

@Component({
  selector: 'app-blog-detail-display',
  templateUrl: './blog-detail-display.component.html',
  styleUrls: ['./blog-detail-display.component.css']
})
export class BlogDetailDisplayComponent implements OnInit {
  blog: any;
  title = "";
  imgString = "";
  continent = "";
  country = "";
  description = "";
  days: number = 0;
  date = "";

  constructor(
    private route: ActivatedRoute,
    private blogCreationService: BlogCreationService,
  ) { }

  ngOnInit(): void {
    this.route.data.subscribe((data) => {
      this.title = this.route.snapshot.params['title'];
      this.blog = data['blog'];
    });

    this.blogCreationService.getBlogByTitle(this.title).subscribe(
      (response) => {
        this.description = response.descripcion;
        console.log(response);
        console.log(response.description);
        console.log(this.description);
        if (response.continent) {
          this.continent = response.continent;
        } else {
          console.warn('La propiedad "continent" no está presente en la respuesta del servidor.');
        }
        console.log('Respuesta del servidor:', response);
      },
      (error) => {
        console.error('Error al obtener las imágenes:', error);
      }
    );


  }

  // ngOnInit(): void {
  //   this.title = this.route.snapshot.params['title'];
  // }
}
