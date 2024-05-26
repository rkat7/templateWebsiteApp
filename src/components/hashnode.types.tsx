export type Json =
    | string
    | number
    | boolean
    | null
    | { [key: string]: Json }
    | Json[]

export interface Hashnode {
    public: {
        Tables: {
            blog: {
                Row: {
                    title: string | null
                    coverImage: string | null
                    brief: string | null
                    slug: string | null
                    imageUrl: string | null
                }
                Relationships: []
            },
        }
        Views: {
            [_ in never]: never
        }
        Functions: {
            [_ in never]: never
        }
        Enums: {
            [_ in never]: never
        }
        CompositeTypes: {
            [_ in never]: never
        }
    }
}
