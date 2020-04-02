import {GraphQLInt, GraphQLNonNull, GraphQLObjectType, GraphQLString} from "graphql";
import {GraphQLAuthorType} from "./GraphQLAuthorType";
import {GraphQLInventoryType} from "./GraphQLInventoryType";
import {ServiceData, ServiceType} from "./ServiceData";

export class GraphQLBookType {

    private authorType = new GraphQLAuthorType();
    private inventoryType = new GraphQLInventoryType();
    private serviceData = new ServiceData();

    type = new GraphQLObjectType({
        name: 'Book',
        description: 'This represents a book written by an author',
        fields: () => ({
            id: { type: GraphQLNonNull(GraphQLInt) },
            name: { type: GraphQLNonNull(GraphQLString) },
            authorId: { type: GraphQLNonNull(GraphQLInt) },
            author: {
                type: this.authorType.type,
                resolve: async (book) => {
                    let data = await  this.serviceData.fetch(ServiceType.AUTHOR_SERVICE);
                    return data.books.find(author => author.id === book.authorId);
                }
            },
            inventory: {
                type: this.inventoryType.type,
                resolve: async (book) => {
                    let data = await  this.serviceData.fetch(ServiceType.INVENTORY_SERVICE);
                    return data.books.find(inventory => inventory.bookId === book.id);
                }
            }
        })
    });
}


