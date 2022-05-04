import { Endpoint, SailsModel, Property } from "ng-sails";


@Endpoint("customer")
export class CustomerModel extends SailsModel {
    @Property()
    firstname: string = null;
    @Property()
    lastname: string = null;
    @Property()
    email: string = null;
    @Property()
    callingCode: number = null;
    @Property()
    phone: number = null;
    @Property()
    status: string = null;
    @Property()
    fullname: string = null;
}
