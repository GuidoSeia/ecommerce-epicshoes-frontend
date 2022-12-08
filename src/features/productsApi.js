import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import api from '../api'


const productsApi = createApi({
    reducerPath: "productsApi",

    baseQuery: fetchBaseQuery({
        baseUrl: api
    }),

    endpoints: (builder) => ({

        getAllProducts: builder.query({ query: () => `/products` }),

        getProduct: builder.query({
            query: (id) => '/products/' + id
        }),

        
        getNewProduct: builder.mutation ({
            query (product) {
                return {
                    url: "products/",
                    method: "POST",
                    body: product,
                };
            }
        }),

        getUpdateProduct: builder.mutation ({
            query ({id, ...body}) {
                return {
                    url: `products/${id}`,
                    method: "PATCH",
                    body: body,
                };
            }
        }),

        getUpdateProduct: builder.mutation ({
            query ({id, ...body}) {
                return {
                    url: `products/${id}`,
                    method: "PATCH",
                    body: body,
                };
            }
        }),

        getRemoveProduct: builder.mutation ({
            query (id) {
                return {
                    url: `products/${id}`,
                    method: "DELETE",
                };
            }
        }),



    })
})

export default productsApi

export const { useGetAllProductsQuery ,
     useGetNewProductMutation,
      useGetProductQuery,
      useGetRemoveProductMutation,
      useGetUpdateProductMutation, 
    } = productsApi