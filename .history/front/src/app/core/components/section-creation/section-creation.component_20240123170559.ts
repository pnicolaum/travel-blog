import { Component } from '@angular/core';
import { BlogCreationService } from '../../services/blog-creation/blog-creation.service';
import { SectionCreationService } from '../../services/section-creation/section-creation.service';

@Component({
  selector: 'app-section-creation',
  templateUrl: './section-creation.component.html',
  styleUrls: ['./section-creation.component.css']
})
export class SectionCreationComponent {
  title = "";
  keyword = "";
  description = "";
  structure: number = 0;
  Blogkeyword = "";
  data: any;

  constructor(
    private sectionCreationService: SectionCreationService,
    private blogCreationService: BlogCreationService
  ) { }

  postSection() {
    const data = {
      title: this.title,
      keyword: this.keyword,
      description: this.description,
      structure: this.structure,
    };

    this.sectionCreationService.postSection(data)
      .subscribe(
        response => {
          this.data = response;
          console.log(response);
        },
        error => {
          console.log(error);
        });

  }

}
