import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogCreationService } from '../../services/blog-creation/blog-creation.service';

@Component({
  selector: 'app-blog-detail-display',
  templateUrl: './blog-detail-display.component.html',
  styleUrls: ['./blog-detail-display.component.css']
})
export class BlogDetailDisplayComponent implements OnInit {
  // blog: any;
  // title = "";
  // keyword = "";
  // continent = "";
  // country = "";
  // description = "";
  // days: number = 0;
  // date = "";
  blog: {
    title: string;
    keyword: string;
    continent: string;
    country: string;
    description: string;
    days: number;
    date: string;
  };

  constructor(
    private route: ActivatedRoute,
    private blogCreationService: BlogCreationService,
  ) {
    this.blog = {
      title: '',
      keyword: '',
      continent: '',
      country: '',
      description: '',
      days: 0,
      date: ''
    };
  }

  ngOnInit(): void {
    this.route.data.subscribe((data) => {
      this.blog.keyword = this.route.snapshot.params['keyword'];
      console.log(this.blog.keyword);
      console.log("hola");
      console.log(data['blog']);
      this.blog = data['blog'];
    });

    this.blogCreationService.getBlogByKeyword(this.blog.keyword).subscribe(
      (response) => {
        console.log(response);
        this.blog.continent = response[0].continent;
        console.log(this.blog.continent);
        this.blog.country = response[0].country;
        this.blog.description = response[0].description;
        this.blog.days = response[0].days;
        this.blog.date = response[0].date;
        // console.log(response.description);
        // console.log(this.description);
        // console.log("hola");

        console.log('Respuesta del servidor:', response);
      },
      (error) => {
        console.log(this.blog.keyword);

        console.error('Error al obtener las imágenes:', error);
      }
    );


  }

  // ngOnInit(): void {
  //   this.title = this.route.snapshot.params['title'];
  // }
}
