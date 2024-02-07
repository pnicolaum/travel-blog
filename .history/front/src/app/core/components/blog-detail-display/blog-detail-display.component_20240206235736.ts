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

  // variables blogs
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

  // variables sections
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
      console.log(this.blog);
      this.id = this.blog[0].id;
      this.sectionBlogid = this.id;

      this.title = this.blog[0].title;
      this.continent = this.blog[0].continent;
      this.country = this.blog[0].country;
      this.description = this.blog[0].description;
      this.days = this.blog[0].days;
      this.date = this.blog[0].date;

      // this.blogService.getBlogByKeyword(this.keyword).subscribe(
      //   (response) => {

      //     this.title = response[0].title;
      //     this.continent = response[0].continent;
      //     this.country = response[0].country;
      //     this.description = response[0].description;
      //     this.days = response[0].days;
      //     this.date = response[0].date;

      const imageName = this.keyword;
      const encodedImageName = encodeURIComponent(imageName);
      this.imageUrl = this.url + encodedImageName + this.extension;

      //   },
      //   (error) => {

      //     console.error('Error al obtener las imágenes:', error);
      //   }
      // );

      this.sectionService.getSectionByBlogid(this.sectionBlogid).subscribe(
        (response) => {
          for (const value of response) {
            this.sections.push(value);
          }
          this.sectionKeyword = this.sections.map(section => section.keyword);

          for (let i = 0; i < this.sectionKeyword.length; i++) {
            const imageName = this.sectionKeyword[i];
            const encodedImageName = encodeURIComponent(imageName);
            const imageUrl = this.url + encodedImageName + this.extension;

            this.sectionImageUrls.push(imageUrl);
          }
        },
        (error) => {
          console.error('Error al obtener las imágenes:', error);
        }
      );

    });
  };



}
