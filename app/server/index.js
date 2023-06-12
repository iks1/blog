import {request,gql} from 'graphql-request'

const graphqlAPI= process.env.GRAPHQL_API

export const getPosts=async()=>{
    const query=gql`
    query MyQuery {
        PostsConnection{
            edges{
                node{
                    author{
                        bio
                        name
                        id
                        photo{
                            url
                        }
                    }
                    createdAt
                    slug
                    title
                    excerted
                    featuredImage{
                        url
                    }
                    categories{
                        name
                        slug
                    }

                }
            }
        }
    }`
    const data= await (request(graphqlAPI,query))
    }
