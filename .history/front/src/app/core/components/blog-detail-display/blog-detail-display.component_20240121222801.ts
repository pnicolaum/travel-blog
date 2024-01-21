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
  keyword = "";
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
      this.keyword = this.route.snapshot.params['keyword'];
      console.log(this.keyword);
      this.blog = data['blog'];
    });

    this.blogCreationService.getBlogByKeyword(this.keyword).subscribe(
      (response) => {
        this.continent = response[0].continent;
        this.country = response[0].country;
        this.description = response[0].description;
        this.days = response[0].days;
        this.date = response[0].date;
        console.log(response.description);
        console.log(this.description);
        console.log("hola");

        console.log('Respuesta del servidor:', response);
      },
      (error) => {
        console.log("hola");

        console.error('Error al obtener las imágenes:', error);
      }
    );


  }

  // ngOnInit(): void {
  //   this.title = this.route.snapshot.params['title'];
  // }
}
