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

  // makes call to php endpoint to get plant results
  public getPlants(id: number) {
    return this.http.post('http://144.13.22.48/WildFlowers/plant_results.php', {'id': id});
  }

  // makes call to php endpoint to get plant results based on family name
  public plantSearch(sciName: string, comName: string, familyName: number, flowerNum: number, plantNum: number, leafNum: number) {
    return this.http.post('http://144.13.22.48/WildFlowers/plant_search.php', {'sciName' : sciName, 'comName' : comName, 'familyName' : familyName, 'flowerNum' : flowerNum, 'plantNum' : plantNum, 'leafNum' : leafNum});
  }

  // makes call to php endpoint to get plant results based on only partially answered questions
  public mulitPlant(id: number) {
    return this.http.post('http://144.13.22.48/WildFlowers/current_results.php', {'id': id});
  }

  public getGlossary() {
    return this.http.post('http://144.13.22.48/WildFlowers/glossary_search.php', {});
  }

  // makes call to php endpoin to get plants for quiz
  public getQuizPlants(id: number) {
    return this.http.post('http://144.13.22.48/WildFlowers/get_quiz_plants.php', {'id': id});
  }
}
