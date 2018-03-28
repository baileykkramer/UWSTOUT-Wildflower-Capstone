import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Question } from './question';

@Injectable()
export class PHPService {
  // question table names needed for the sql call
  sets = ['firstset', 'secondset', 'thirdset', 'fourthset', 'fifthset'];

  constructor(private http: Http) { }

  // makes call to php endpoint to get the question sets based on id
  public getQuestions(id: number, setNum: number) {
    return this.http.post('http://144.13.22.48/WildFlowers/select_question.php', {'id': id, 'set': this.sets[setNum]});
  }

  // makes call to php endpoint to get plant results (the id is a temp hardcode until resultIds are no longer 999999)
  public getPlants(id: number) {
    return this.http.post('http://144.13.22.48/WildFlowers/plant_results.php', {'id': 17601});
  }

  // makes call to php endpoint to get plant results based on family name
  public plantSearch(name: number) {
    return this.http.post('http://144.13.22.48/WildFlowers/plant_search.php', {'name': name});
  }
}
