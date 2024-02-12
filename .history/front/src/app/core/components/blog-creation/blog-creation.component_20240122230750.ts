import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { BlogCreationService } from '../../services/blog-creation/blog-creation.service';


@Component({
  selector: 'app-blog-creation',
  templateUrl: './blog-creation.component.html',
  styleUrls: ['./blog-creation.component.css']
})
export class BlogCreationComponent {

  title = "";
  keyword = "";
  continent = "";
  country = "";
  description = "";
  days: number = 0;
  date = "";

  data: any;


  // blogForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private blogCreationService: BlogCreationService, // Reemplaza BlogService con el nombre de tu servicio
    private router: Router
  ) {
    // this.blogForm = this.formBuilder.group({
    //   title: ['', Validators.required], // Asegúrate de tener un campo 'title' en tu formulario
    // });
  }


  postBlog() {
    const data = {
      title: this.title,
      keyword: this.keyword,
      continent: this.continent,
      country: this.country,
      description: this.description,
      days: this.days,
      date: this.date
    };

    this.blogCreationService.postBlog(data)
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
