import {GraphQLInt, GraphQLNonNull, GraphQLObjectType, GraphQLString} from "graphql";

export class GraphQLAuthorType {
     type = new GraphQLObjectType({
        name: 'Author',
        description: 'Author of a book',
        fields: () => ({
            id: { type: GraphQLNonNull(GraphQLInt) },
            name: { type: GraphQLNonNull(GraphQLString) },
        })
    });
}