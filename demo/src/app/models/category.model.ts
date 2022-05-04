import { SailsModel, Property, Endpoint } from "ng-sails";

@Endpoint("category")
export class CategoryModel extends SailsModel {
    @Property()
    baseFee: number = null;
    @Property()
    cancellationFee: number = null;
    @Property()
    description: string = null;
    @Property()
    name: string = null;
}
