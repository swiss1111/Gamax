import axios from 'axios';
import {SearchParams, SearchResult, UserParams, UserResult} from "../interfaces/stackExchangeInterface";

const BASE_URL = 'https://api.stackexchange.com/2.3';

export async function search(
  query: string,
): Promise<SearchResult> {
  const params: SearchParams = {
    page: 1,
    pagesize: 10,
    order: "desc",
    sort: "relevance",
    intitle: query,
    site: "stackoverflow"
  };

  const response = await axios.get<SearchResult>(`${BASE_URL}/search`, { params });

  return response.data;
}

export async function user(
  ids: number,
): Promise<UserResult> {
  const params: UserParams = {
    order: "desc",
    sort: "reputation",
    site: "stackoverflow"
  };

  const response = await axios.get<UserResult>(`${BASE_URL}/users/${ids}`, { params });

  return response.data;
}
