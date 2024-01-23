import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogCreationService } from '../../services/blog-creation/blog-creation.service';
import { SectionCreationService } from '../../services/section-creation/section-creation.service';

@Component({
  selector: 'app-blog-detail-display',
  templateUrl: './blog-detail-display.component.html',
  styleUrls: ['./blog-detail-display.component.css']
})
export class BlogDetailDisplayComponent implements OnInit {
  blog: any = {};

  // parametros blogs
  id: number = 0;
  title = "";
  keyword = "";
  continent = "";
  country = "";
  description = "";
  days: number = 0;
  date = "";
  imageUrl = ""
  url = "http://localhost:3000/uploads/";
  extension = ".jpg";

  // parametros sections
  sectionBlogid: number = 0;
  sectionId: number = 0;
  sectionTitle = "";
  sectionKeyword = "";
  sectionDescription = "";
  sectionStructure: number = 0;

  constructor(
    private route: ActivatedRoute,
    private blogCreationService: BlogCreationService,
    private sectionCreationService: SectionCreationService
  ) { }

  ngOnInit(): void {
    this.route.data.subscribe((data) => {
      console.log(data['blog']);
      this.keyword = this.route.snapshot.params['keyword'];

      this.blog = data['blog'];
      this.id = this.blog[0].id;
      this.sectionBlogid = this.id;

      // obtener datos blog
      this.blogCreationService.getBlogByKeyword(this.keyword).subscribe(
        (response) => {
          this.title = response[0].title;
          this.continent = response[0].continent;
          this.country = response[0].country;
          this.description = response[0].description;
          this.days = response[0].days;
          this.date = response[0].date;

          const imageName = this.keyword; // nombre del titulo
          const encodedImageName = encodeURIComponent(imageName);
          this.imageUrl = this.url + encodedImageName + this.extension;

          console.log('Respuesta del servidor:', response);
        },
        (error) => {
          console.log(this.keyword);

          console.error('Error al obtener las imágenes:', error);
        }
      );

      // obtener datos section

      this.sectionCreationService.getSectionByBlogid(this.sectionBlogid).subscribe(
        (response) => {


          console.log('Respuesta del servidor:', response);
        },
        (error) => {
          console.error('Error al obtener las imágenes:', error);
        }
      );

    });
  }

  // ngOnInit(): void {
  //   this.title = this.route.snapshot.params['title'];
  // }
}
