import {GraphQLInt, GraphQLNonNull, GraphQLObjectType} from "graphql";

export class GraphQLInventoryType {
    type = new GraphQLObjectType({
        name: 'Inventory',
        description: 'Inventory of a book',
        fields: () => ({
            quantity: { type: GraphQLNonNull(GraphQLInt) },
        })
    });
}