import {GraphQLInt, GraphQLList, GraphQLObjectType} from "graphql";
import {GraphQLBookType} from "./GraphQLBookType";
import {ServiceData, ServiceType} from "./ServiceData";

const bookType = new GraphQLBookType();

export class GraphQLBooksQuery {

    private serviceData = new ServiceData();
    query= new GraphQLObjectType({
        name: 'Query',
        description: 'Root Query',
        fields: () => ({
            book: {
                type: bookType.type,
                description: 'query of a single a book',
                args: {
                    id: { type: GraphQLInt }
                },
                resolve: async (parent, args) => {
                    let data = await this.serviceData.fetch(ServiceType.BOOK_SERVICE);
                    return data.books.find(book => book.id === args.id);
                }

            },
            books: {
                type: new GraphQLList(bookType.type),
                description: 'query of  a list of books',
                resolve: async () => {
                    let data = await this.serviceData.fetch(ServiceType.BOOK_SERVICE);
                    return data.books;
                }
            }
        })
    });

}