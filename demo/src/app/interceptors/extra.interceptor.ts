import { SailsResponse, SailsInterceptorInterface, SailsRequestOptions, SailsInterceptorHandlerInterface } from "ng-sails";
import { Router } from "@angular/router";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";

@Injectable()
export class ExtraInterceptor implements SailsInterceptorInterface {

    constructor(private router: Router) {
    }

    intercept(request: SailsRequestOptions, next: SailsInterceptorHandlerInterface): Observable<SailsResponse> {
        console.log("Extra: ", request);
        request.clone({
            headers: request.headers.set("Content-type", "text/plain")
        });
        return next.handle(request);
    }
}
