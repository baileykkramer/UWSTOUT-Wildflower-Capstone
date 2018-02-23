import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Question } from './question';

@Injectable()
export class PHPService {

  constructor(private http: Http) { }

  public getQuestions(id: number): Observable<Question> {
    return this.http.post('http://144.13.22.48/WildFlowers/select_question.php', {'id': id}).map(res => res.json());
  }

}
