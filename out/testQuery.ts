/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: testQuery
// ====================================================

export interface testQuery_characters_results_origin {
  __typename: "Origin";
  id: string | null;
  name: string | null;
}

export interface testQuery_characters_results {
  __typename: "Character";
  id: string | null;
  name: string | null;
  gender: string | null;
  image: string | null;
  origin: testQuery_characters_results_origin | null;
}

export interface testQuery_characters {
  __typename: "CharacterList";
  results: (testQuery_characters_results | null)[] | null;
}

export interface testQuery {
  characters: testQuery_characters | null;
}
