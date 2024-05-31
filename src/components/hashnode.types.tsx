// export type Json =
//     | string
//     | number
//     | boolean
//     | null
//     | { [key: string]: Json }
//     | Json[]

// export interface Hashnode {
//     public: {
//         Tables: {
//             blog: {
//                 Row: {
//                     title: string | null
//                     coverImage: { [key: string]: Json } | null
//                     brief: string | null
//                     slug: string | null
//                 }
//                 Relationships: []
//             },
//         }
//         Views: {
//             [_ in never]: never
//         }
//         Functions: {
//             [_ in never]: never
//         }
//         Enums: {
//             [_ in never]: never
//         }
//         CompositeTypes: {
//             [_ in never]: never
//         }
//     }
// }


export type Json =
    | string
    | number
    | boolean
    | null
    | { [key: string]: Json }
    | Json[]

// CoverImage interface
export interface CoverImage {
    url: string;
}

// Node interface
export interface Node {
    slug: string | null;
    title: string | null;
    brief: string | null;
    url: string | null;
    coverImage: CoverImage | null;
}

// Edge interface
export interface Edge {
    node: Node;
}

// Posts interface
export interface Posts {
    edges: Edge[];
}

// Publication interface
export interface Publication {
    title: string | null;
    posts: Posts;
}

// Root interface representing the entire query response
export interface QueryResponse {
    publication: Publication;
}

// Hashnode type updated to match the query model
export interface Hashnode {
    public: {
        Tables: {
            blog: {
                Row: {
                    title: string | null;
                    coverImage: CoverImage | null;
                    brief: string | null;
                    slug: string | null;
                    url: string | null;
                };
                Relationships: [];
            };
        };
        Views: {
            [_ in never]: never;
        };
        Functions: {
            [_ in never]: never;
        };
        Enums: {
            [_ in never]: never;
        };
        CompositeTypes: {
            [_ in never]: never;
        };
    };
}
