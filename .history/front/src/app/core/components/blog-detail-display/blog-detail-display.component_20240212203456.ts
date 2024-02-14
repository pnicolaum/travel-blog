import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  url = "http://localhost:80/uploads/";
  extension = ".jpg";

  // variables sections
  sections: any[] = [];
  sectionBlogid: number = 0;
  sectionKeyword: any[] = [];

  sectionImageUrls: any[] = [];
  sectionImageUrl = ""
  sectionUrl = "http://localhost:80/uploads/";
  sectionExtension = ".jpg";

  constructor(
    private route: ActivatedRoute,
    private sectionService: SectionService
  ) { }

  ngOnInit(): void {
    this.route.data.subscribe((data) => {
      this.keyword = this.route.snapshot.params['keyword'];

      this.blog = data['blog'];

      this.id = this.blog[0].id;
      this.title = this.blog[0].title;
      this.description = this.blog[0].description;

      this.sectionBlogid = this.id;

      const imageName = this.keyword;
      const encodedImageName = encodeURIComponent(imageName);
      this.imageUrl = this.url + encodedImageName + this.extension;

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
