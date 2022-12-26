import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const fakesApi = createApi({
  reducerPath: "fakesApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://apex.oracle.com/pls/apex/sergespace/",
  }),
  endpoints: (builder) => ({
    getFakes: builder.query({
      query: (name) => name,
    }),
  }),
});

export const { useGetFakesQuery } = fakesApi;
