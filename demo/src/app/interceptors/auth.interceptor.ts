import { SailsRequestOptions, SailsResponse, SailsInterceptorInterface, SailsInterceptorHandlerInterface } from "ng-sails";
import { Router } from "@angular/router";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Injectable()
export class AuthInterceptor implements SailsInterceptorInterface {

    constructor(private router: Router) {
    }

    intercept(request: SailsRequestOptions, next: SailsInterceptorHandlerInterface): Observable<SailsResponse> {
        request.clone({
            headers: request.headers.set("Authorization", localStorage.getItem("token"))
        });
        const response = next.handle(request);

        return response.pipe(map((res: SailsResponse) => {
            if (res.getStatusCode() === 401) {
                this.router.navigateByUrl("login");
            }
            return res;
        }));
    }
}
