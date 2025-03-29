import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "../../utils/baseUrl";

interface ILyricsResponse {
  data: {
    lyrics: string;
    artist: string;
    track: string;
  }[];
}

interface IGetLyricsPayload {
  q: string;
  text_only?: boolean;
  limit?: number;
}

export const lyricsApi = createApi({
  reducerPath: "lyricsApi",
  baseQuery: fetchBaseQuery({
    baseUrl,
    prepareHeaders: (headers) => {
      headers.set("Authorization", "Bearer YOUR_KSOFT_API_KEY");
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getLyrics: builder.query<ILyricsResponse, IGetLyricsPayload>({
      query: ({ q, text_only = false, limit = 10 }) =>
        `/lyrics/search?q=${encodeURIComponent(
          q
        )}&text_only=${text_only}&limit=${limit}`,
    }),
  }),
});

export const { useGetLyricsQuery } = lyricsApi;
