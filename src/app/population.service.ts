import { Injectable } from '@angular/core';
import { ApiURL } from "../app/api-url";
import { CommonApiService } from "../app/services/common-api.service"
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class PopulationService {
	clientDetailsURL: string;
	constructor(private commonAPI: CommonApiService) { }

	getPopulationDetails(): Observable<any> {
		  return this.commonAPI.get(ApiURL.population);
	}
}