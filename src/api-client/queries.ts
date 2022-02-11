import { useQuery } from "react-query";
import { request, gql } from "graphql-request";
import { Filter, GetCharactersResponse } from "types";

const endpoint = "https://rickandmortyapi.com/graphql";

const defaultFilters: Filter = {
  name: "",
  gender: "",
  species: "",
  status: "",
  type: "",
};

export function useGetCharacters(page = 1, filter: Filter = defaultFilters) {
  return useQuery(["characters", page, filter], async () => {
    const response = await request<GetCharactersResponse>(
      endpoint,
      gql`
        query getCharacters($page: Int, $filter: FilterCharacter) {
          characters(page: $page, filter: $filter) {
            info {
              pages
              count
              next
              prev
            }
            results {
              name
              status
              species
              type
              gender
              id
              image
              origin {
                name
              }
              location {
                name
              }
              episode {
                name
                air_date
                episode
              }
            }
          }
        }
      `,
      {
        page,
        filter,
      }
    );

    return response.characters;
  });
}
