import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from '../../services/blog/blog.service';
import { SectionService } from '../../services/section/section.service';

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
  sections: any[] = [];
  sectionBlogid: number = 0;
  sectionKeyword: any[] = [];

  sectionImageUrls: any[] = [];
  sectionImageUrl = ""
  sectionUrl = "http://localhost:3000/uploads/";
  sectionExtension = ".jpg";

  constructor(
    private route: ActivatedRoute,
    private blogService: BlogService,
    private sectionService: SectionService
  ) { }

  ngOnInit(): void {
    this.route.data.subscribe((data) => {
      this.keyword = this.route.snapshot.params['keyword'];

      this.blog = data['blog'];
      this.id = this.blog[0].id;
      this.sectionBlogid = this.id;

      // obtener datos blog
      this.blogService.getBlogByKeyword(this.keyword).subscribe(
        (response) => {

          this.title = response[0].title;
          this.continent = response[0].continent;
          this.country = response[0].country;
          this.description = response[0].description;
          console.log(this.description);
          this.days = response[0].days;
          this.date = response[0].date;

          const imageName = this.keyword; // nombre del titulo
          const encodedImageName = encodeURIComponent(imageName);
          this.imageUrl = this.url + encodedImageName + this.extension;

        },
        (error) => {

          console.error('Error al obtener las imágenes:', error);
        }
      );

      // obtener datos section
      this.sectionService.getSectionByBlogid(this.sectionBlogid).subscribe(
        (response) => {
          for (const value of response) {
            this.sections.push(value);
          }



          this.sectionKeyword = this.sections.map(section => section.keyword);

          for (let i = 0; i < this.sectionKeyword.length; i++) {
            const imageName = this.sectionKeyword[i]; // Utiliza el valor actual de sectionKeyword
            const encodedImageName = encodeURIComponent(imageName);
            const imageUrl = this.url + encodedImageName + this.extension;

            // Almacena la URL en el array sectionImageUrls
            this.sectionImageUrls.push(imageUrl);
          }
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
