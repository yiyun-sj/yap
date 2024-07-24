export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  graphql_public: {
    Tables: {
      [_ in never]: never
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      graphql: {
        Args: {
          operationName?: string
          query?: string
          variables?: Json
          extensions?: Json
        }
        Returns: Json
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
  public: {
    Tables: {
      blocks: {
        Row: {
          blocked_id: string
          created_at: string
          id: number
          user_id: string
        }
        Insert: {
          blocked_id: string
          created_at?: string
          id?: number
          user_id?: string
        }
        Update: {
          blocked_id?: string
          created_at?: string
          id?: number
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: 'public_blocks_blocked_id_fkey'
            columns: ['blocked_id']
            isOneToOne: false
            referencedRelation: 'feed_collection_items'
            referencedColumns: ['user_id']
          },
          {
            foreignKeyName: 'public_blocks_blocked_id_fkey'
            columns: ['blocked_id']
            isOneToOne: false
            referencedRelation: 'feed_collections'
            referencedColumns: ['user_id']
          },
          {
            foreignKeyName: 'public_blocks_blocked_id_fkey'
            columns: ['blocked_id']
            isOneToOne: false
            referencedRelation: 'feed_comments'
            referencedColumns: ['user_id']
          },
          {
            foreignKeyName: 'public_blocks_blocked_id_fkey'
            columns: ['blocked_id']
            isOneToOne: false
            referencedRelation: 'feed_moments'
            referencedColumns: ['user_id']
          },
          {
            foreignKeyName: 'public_blocks_blocked_id_fkey'
            columns: ['blocked_id']
            isOneToOne: false
            referencedRelation: 'feed_notifications'
            referencedColumns: ['user_id']
          },
          {
            foreignKeyName: 'public_blocks_blocked_id_fkey'
            columns: ['blocked_id']
            isOneToOne: false
            referencedRelation: 'profile_collection_items'
            referencedColumns: ['user_id']
          },
          {
            foreignKeyName: 'public_blocks_blocked_id_fkey'
            columns: ['blocked_id']
            isOneToOne: false
            referencedRelation: 'profile_moments'
            referencedColumns: ['user_id']
          },
          {
            foreignKeyName: 'public_blocks_blocked_id_fkey'
            columns: ['blocked_id']
            isOneToOne: false
            referencedRelation: 'profiles'
            referencedColumns: ['user_id']
          },
          {
            foreignKeyName: 'public_blocks_user_id_fkey'
            columns: ['user_id']
            isOneToOne: false
            referencedRelation: 'feed_collection_items'
            referencedColumns: ['user_id']
          },
          {
            foreignKeyName: 'public_blocks_user_id_fkey'
            columns: ['user_id']
            isOneToOne: false
            referencedRelation: 'feed_collections'
            referencedColumns: ['user_id']
          },
          {
            foreignKeyName: 'public_blocks_user_id_fkey'
            columns: ['user_id']
            isOneToOne: false
            referencedRelation: 'feed_comments'
            referencedColumns: ['user_id']
          },
          {
            foreignKeyName: 'public_blocks_user_id_fkey'
            columns: ['user_id']
            isOneToOne: false
            referencedRelation: 'feed_moments'
            referencedColumns: ['user_id']
          },
          {
            foreignKeyName: 'public_blocks_user_id_fkey'
            columns: ['user_id']
            isOneToOne: false
            referencedRelation: 'feed_notifications'
            referencedColumns: ['user_id']
          },
          {
            foreignKeyName: 'public_blocks_user_id_fkey'
            columns: ['user_id']
            isOneToOne: false
            referencedRelation: 'profile_collection_items'
            referencedColumns: ['user_id']
          },
          {
            foreignKeyName: 'public_blocks_user_id_fkey'
            columns: ['user_id']
            isOneToOne: false
            referencedRelation: 'profile_moments'
            referencedColumns: ['user_id']
          },
          {
            foreignKeyName: 'public_blocks_user_id_fkey'
            columns: ['user_id']
            isOneToOne: false
            referencedRelation: 'profiles'
            referencedColumns: ['user_id']
          }
        ]
      }
      collection_items: {
        Row: {
          c_i_id: string
          created_at: string
          creator_id: string
          description: string
          fts: unknown | null
          parent_id: string
          title: string
        }
        Insert: {
          c_i_id?: string
          created_at?: string
          creator_id?: string
          description?: string
          fts?: unknown | null
          parent_id: string
          title: string
        }
        Update: {
          c_i_id?: string
          created_at?: string
          creator_id?: string
          description?: string
          fts?: unknown | null
          parent_id?: string
          title?: string
        }
        Relationships: [
          {
            foreignKeyName: 'public_collection_items_creator_id_fkey'
            columns: ['creator_id']
            isOneToOne: false
            referencedRelation: 'feed_collection_items'
            referencedColumns: ['user_id']
          },
          {
            foreignKeyName: 'public_collection_items_creator_id_fkey'
            columns: ['creator_id']
            isOneToOne: false
            referencedRelation: 'feed_collections'
            referencedColumns: ['user_id']
          },
          {
            foreignKeyName: 'public_collection_items_creator_id_fkey'
            columns: ['creator_id']
            isOneToOne: false
            referencedRelation: 'feed_comments'
            referencedColumns: ['user_id']
          },
          {
            foreignKeyName: 'public_collection_items_creator_id_fkey'
            columns: ['creator_id']
            isOneToOne: false
            referencedRelation: 'feed_moments'
            referencedColumns: ['user_id']
          },
          {
            foreignKeyName: 'public_collection_items_creator_id_fkey'
            columns: ['creator_id']
            isOneToOne: false
            referencedRelation: 'feed_notifications'
            referencedColumns: ['user_id']
          },
          {
            foreignKeyName: 'public_collection_items_creator_id_fkey'
            columns: ['creator_id']
            isOneToOne: false
            referencedRelation: 'profile_collection_items'
            referencedColumns: ['user_id']
          },
          {
            foreignKeyName: 'public_collection_items_creator_id_fkey'
            columns: ['creator_id']
            isOneToOne: false
            referencedRelation: 'profile_moments'
            referencedColumns: ['user_id']
          },
          {
            foreignKeyName: 'public_collection_items_creator_id_fkey'
            columns: ['creator_id']
            isOneToOne: false
            referencedRelation: 'profiles'
            referencedColumns: ['user_id']
          },
          {
            foreignKeyName: 'public_collection_items_parent_id_fkey'
            columns: ['parent_id']
            isOneToOne: false
            referencedRelation: 'collections'
            referencedColumns: ['c_id']
          },
          {
            foreignKeyName: 'public_collection_items_parent_id_fkey'
            columns: ['parent_id']
            isOneToOne: false
            referencedRelation: 'feed_collections'
            referencedColumns: ['c_id']
          }
        ]
      }
      collections: {
        Row: {
          c_id: string
          category: string
          created_at: string
          description: string
          fts: unknown | null
          owner_id: string
          private_edit: boolean
          private_view: boolean
          title: string
        }
        Insert: {
          c_id?: string
          category: string
          created_at?: string
          description?: string
          fts?: unknown | null
          owner_id?: string
          private_edit: boolean
          private_view: boolean
          title: string
        }
        Update: {
          c_id?: string
          category?: string
          created_at?: string
          description?: string
          fts?: unknown | null
          owner_id?: string
          private_edit?: boolean
          private_view?: boolean
          title?: string
        }
        Relationships: [
          {
            foreignKeyName: 'public_collections_owner_id_fkey'
            columns: ['owner_id']
            isOneToOne: false
            referencedRelation: 'feed_collection_items'
            referencedColumns: ['user_id']
          },
          {
            foreignKeyName: 'public_collections_owner_id_fkey'
            columns: ['owner_id']
            isOneToOne: false
            referencedRelation: 'feed_collections'
            referencedColumns: ['user_id']
          },
          {
            foreignKeyName: 'public_collections_owner_id_fkey'
            columns: ['owner_id']
            isOneToOne: false
            referencedRelation: 'feed_comments'
            referencedColumns: ['user_id']
          },
          {
            foreignKeyName: 'public_collections_owner_id_fkey'
            columns: ['owner_id']
            isOneToOne: false
            referencedRelation: 'feed_moments'
            referencedColumns: ['user_id']
          },
          {
            foreignKeyName: 'public_collections_owner_id_fkey'
            columns: ['owner_id']
            isOneToOne: false
            referencedRelation: 'feed_notifications'
            referencedColumns: ['user_id']
          },
          {
            foreignKeyName: 'public_collections_owner_id_fkey'
            columns: ['owner_id']
            isOneToOne: false
            referencedRelation: 'profile_collection_items'
            referencedColumns: ['user_id']
          },
          {
            foreignKeyName: 'public_collections_owner_id_fkey'
            columns: ['owner_id']
            isOneToOne: false
            referencedRelation: 'profile_moments'
            referencedColumns: ['user_id']
          },
          {
            foreignKeyName: 'public_collections_owner_id_fkey'
            columns: ['owner_id']
            isOneToOne: false
            referencedRelation: 'profiles'
            referencedColumns: ['user_id']
          }
        ]
      }
      comments: {
        Row: {
          c_i_ref: string | null
          comment: string
          created_at: string
          id: number
          m_ref: string | null
          user_ref: string
        }
        Insert: {
          c_i_ref?: string | null
          comment: string
          created_at?: string
          id?: number
          m_ref?: string | null
          user_ref?: string
        }
        Update: {
          c_i_ref?: string | null
          comment?: string
          created_at?: string
          id?: number
          m_ref?: string | null
          user_ref?: string
        }
        Relationships: [
          {
            foreignKeyName: 'public_comments_c_i_ref_fkey'
            columns: ['c_i_ref']
            isOneToOne: false
            referencedRelation: 'collection_items'
            referencedColumns: ['c_i_id']
          },
          {
            foreignKeyName: 'public_comments_c_i_ref_fkey'
            columns: ['c_i_ref']
            isOneToOne: false
            referencedRelation: 'feed_collection_items'
            referencedColumns: ['c_i_id']
          },
          {
            foreignKeyName: 'public_comments_c_i_ref_fkey'
            columns: ['c_i_ref']
            isOneToOne: false
            referencedRelation: 'profile_collection_items'
            referencedColumns: ['c_i_id']
          },
          {
            foreignKeyName: 'public_comments_m_ref_fkey'
            columns: ['m_ref']
            isOneToOne: false
            referencedRelation: 'feed_moments'
            referencedColumns: ['m_id']
          },
          {
            foreignKeyName: 'public_comments_m_ref_fkey'
            columns: ['m_ref']
            isOneToOne: false
            referencedRelation: 'moments'
            referencedColumns: ['m_id']
          },
          {
            foreignKeyName: 'public_comments_m_ref_fkey'
            columns: ['m_ref']
            isOneToOne: false
            referencedRelation: 'profile_moments'
            referencedColumns: ['m_id']
          },
          {
            foreignKeyName: 'public_comments_user_ref_fkey'
            columns: ['user_ref']
            isOneToOne: false
            referencedRelation: 'feed_collection_items'
            referencedColumns: ['user_id']
          },
          {
            foreignKeyName: 'public_comments_user_ref_fkey'
            columns: ['user_ref']
            isOneToOne: false
            referencedRelation: 'feed_collections'
            referencedColumns: ['user_id']
          },
          {
            foreignKeyName: 'public_comments_user_ref_fkey'
            columns: ['user_ref']
            isOneToOne: false
            referencedRelation: 'feed_comments'
            referencedColumns: ['user_id']
          },
          {
            foreignKeyName: 'public_comments_user_ref_fkey'
            columns: ['user_ref']
            isOneToOne: false
            referencedRelation: 'feed_moments'
            referencedColumns: ['user_id']
          },
          {
            foreignKeyName: 'public_comments_user_ref_fkey'
            columns: ['user_ref']
            isOneToOne: false
            referencedRelation: 'feed_notifications'
            referencedColumns: ['user_id']
          },
          {
            foreignKeyName: 'public_comments_user_ref_fkey'
            columns: ['user_ref']
            isOneToOne: false
            referencedRelation: 'profile_collection_items'
            referencedColumns: ['user_id']
          },
          {
            foreignKeyName: 'public_comments_user_ref_fkey'
            columns: ['user_ref']
            isOneToOne: false
            referencedRelation: 'profile_moments'
            referencedColumns: ['user_id']
          },
          {
            foreignKeyName: 'public_comments_user_ref_fkey'
            columns: ['user_ref']
            isOneToOne: false
            referencedRelation: 'profiles'
            referencedColumns: ['user_id']
          }
        ]
      }
      feedbacks: {
        Row: {
          created_at: string
          feedback: string
          id: number
          user_id: string
        }
        Insert: {
          created_at?: string
          feedback: string
          id?: number
          user_id?: string
        }
        Update: {
          created_at?: string
          feedback?: string
          id?: number
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: 'public_feedback_user_id_fkey'
            columns: ['user_id']
            isOneToOne: false
            referencedRelation: 'feed_collection_items'
            referencedColumns: ['user_id']
          },
          {
            foreignKeyName: 'public_feedback_user_id_fkey'
            columns: ['user_id']
            isOneToOne: false
            referencedRelation: 'feed_collections'
            referencedColumns: ['user_id']
          },
          {
            foreignKeyName: 'public_feedback_user_id_fkey'
            columns: ['user_id']
            isOneToOne: false
            referencedRelation: 'feed_comments'
            referencedColumns: ['user_id']
          },
          {
            foreignKeyName: 'public_feedback_user_id_fkey'
            columns: ['user_id']
            isOneToOne: false
            referencedRelation: 'feed_moments'
            referencedColumns: ['user_id']
          },
          {
            foreignKeyName: 'public_feedback_user_id_fkey'
            columns: ['user_id']
            isOneToOne: false
            referencedRelation: 'feed_notifications'
            referencedColumns: ['user_id']
          },
          {
            foreignKeyName: 'public_feedback_user_id_fkey'
            columns: ['user_id']
            isOneToOne: false
            referencedRelation: 'profile_collection_items'
            referencedColumns: ['user_id']
          },
          {
            foreignKeyName: 'public_feedback_user_id_fkey'
            columns: ['user_id']
            isOneToOne: false
            referencedRelation: 'profile_moments'
            referencedColumns: ['user_id']
          },
          {
            foreignKeyName: 'public_feedback_user_id_fkey'
            columns: ['user_id']
            isOneToOne: false
            referencedRelation: 'profiles'
            referencedColumns: ['user_id']
          }
        ]
      }
      follows: {
        Row: {
          created_at: string
          from_id: string
          id: number
          to_id: string
        }
        Insert: {
          created_at?: string
          from_id?: string
          id?: number
          to_id: string
        }
        Update: {
          created_at?: string
          from_id?: string
          id?: number
          to_id?: string
        }
        Relationships: [
          {
            foreignKeyName: 'public_follows_from_id_fkey'
            columns: ['from_id']
            isOneToOne: false
            referencedRelation: 'feed_collection_items'
            referencedColumns: ['user_id']
          },
          {
            foreignKeyName: 'public_follows_from_id_fkey'
            columns: ['from_id']
            isOneToOne: false
            referencedRelation: 'feed_collections'
            referencedColumns: ['user_id']
          },
          {
            foreignKeyName: 'public_follows_from_id_fkey'
            columns: ['from_id']
            isOneToOne: false
            referencedRelation: 'feed_comments'
            referencedColumns: ['user_id']
          },
          {
            foreignKeyName: 'public_follows_from_id_fkey'
            columns: ['from_id']
            isOneToOne: false
            referencedRelation: 'feed_moments'
            referencedColumns: ['user_id']
          },
          {
            foreignKeyName: 'public_follows_from_id_fkey'
            columns: ['from_id']
            isOneToOne: false
            referencedRelation: 'feed_notifications'
            referencedColumns: ['user_id']
          },
          {
            foreignKeyName: 'public_follows_from_id_fkey'
            columns: ['from_id']
            isOneToOne: false
            referencedRelation: 'profile_collection_items'
            referencedColumns: ['user_id']
          },
          {
            foreignKeyName: 'public_follows_from_id_fkey'
            columns: ['from_id']
            isOneToOne: false
            referencedRelation: 'profile_moments'
            referencedColumns: ['user_id']
          },
          {
            foreignKeyName: 'public_follows_from_id_fkey'
            columns: ['from_id']
            isOneToOne: false
            referencedRelation: 'profiles'
            referencedColumns: ['user_id']
          },
          {
            foreignKeyName: 'public_follows_to_id_fkey'
            columns: ['to_id']
            isOneToOne: false
            referencedRelation: 'feed_collection_items'
            referencedColumns: ['user_id']
          },
          {
            foreignKeyName: 'public_follows_to_id_fkey'
            columns: ['to_id']
            isOneToOne: false
            referencedRelation: 'feed_collections'
            referencedColumns: ['user_id']
          },
          {
            foreignKeyName: 'public_follows_to_id_fkey'
            columns: ['to_id']
            isOneToOne: false
            referencedRelation: 'feed_comments'
            referencedColumns: ['user_id']
          },
          {
            foreignKeyName: 'public_follows_to_id_fkey'
            columns: ['to_id']
            isOneToOne: false
            referencedRelation: 'feed_moments'
            referencedColumns: ['user_id']
          },
          {
            foreignKeyName: 'public_follows_to_id_fkey'
            columns: ['to_id']
            isOneToOne: false
            referencedRelation: 'feed_notifications'
            referencedColumns: ['user_id']
          },
          {
            foreignKeyName: 'public_follows_to_id_fkey'
            columns: ['to_id']
            isOneToOne: false
            referencedRelation: 'profile_collection_items'
            referencedColumns: ['user_id']
          },
          {
            foreignKeyName: 'public_follows_to_id_fkey'
            columns: ['to_id']
            isOneToOne: false
            referencedRelation: 'profile_moments'
            referencedColumns: ['user_id']
          },
          {
            foreignKeyName: 'public_follows_to_id_fkey'
            columns: ['to_id']
            isOneToOne: false
            referencedRelation: 'profiles'
            referencedColumns: ['user_id']
          }
        ]
      }
      hides: {
        Row: {
          created_at: string
          id: number
          ref_id: string
          type: string
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: number
          ref_id: string
          type: string
          user_id?: string
        }
        Update: {
          created_at?: string
          id?: number
          ref_id?: string
          type?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: 'public_hides_user_id_fkey'
            columns: ['user_id']
            isOneToOne: false
            referencedRelation: 'feed_collection_items'
            referencedColumns: ['user_id']
          },
          {
            foreignKeyName: 'public_hides_user_id_fkey'
            columns: ['user_id']
            isOneToOne: false
            referencedRelation: 'feed_collections'
            referencedColumns: ['user_id']
          },
          {
            foreignKeyName: 'public_hides_user_id_fkey'
            columns: ['user_id']
            isOneToOne: false
            referencedRelation: 'feed_comments'
            referencedColumns: ['user_id']
          },
          {
            foreignKeyName: 'public_hides_user_id_fkey'
            columns: ['user_id']
            isOneToOne: false
            referencedRelation: 'feed_moments'
            referencedColumns: ['user_id']
          },
          {
            foreignKeyName: 'public_hides_user_id_fkey'
            columns: ['user_id']
            isOneToOne: false
            referencedRelation: 'feed_notifications'
            referencedColumns: ['user_id']
          },
          {
            foreignKeyName: 'public_hides_user_id_fkey'
            columns: ['user_id']
            isOneToOne: false
            referencedRelation: 'profile_collection_items'
            referencedColumns: ['user_id']
          },
          {
            foreignKeyName: 'public_hides_user_id_fkey'
            columns: ['user_id']
            isOneToOne: false
            referencedRelation: 'profile_moments'
            referencedColumns: ['user_id']
          },
          {
            foreignKeyName: 'public_hides_user_id_fkey'
            columns: ['user_id']
            isOneToOne: false
            referencedRelation: 'profiles'
            referencedColumns: ['user_id']
          }
        ]
      }
      moments: {
        Row: {
          created_at: string
          description: string
          fts: unknown | null
          m_id: string
          owner_id: string
          title: string
        }
        Insert: {
          created_at?: string
          description?: string
          fts?: unknown | null
          m_id?: string
          owner_id?: string
          title: string
        }
        Update: {
          created_at?: string
          description?: string
          fts?: unknown | null
          m_id?: string
          owner_id?: string
          title?: string
        }
        Relationships: [
          {
            foreignKeyName: 'public_moments_owner_id_fkey'
            columns: ['owner_id']
            isOneToOne: false
            referencedRelation: 'feed_collection_items'
            referencedColumns: ['user_id']
          },
          {
            foreignKeyName: 'public_moments_owner_id_fkey'
            columns: ['owner_id']
            isOneToOne: false
            referencedRelation: 'feed_collections'
            referencedColumns: ['user_id']
          },
          {
            foreignKeyName: 'public_moments_owner_id_fkey'
            columns: ['owner_id']
            isOneToOne: false
            referencedRelation: 'feed_comments'
            referencedColumns: ['user_id']
          },
          {
            foreignKeyName: 'public_moments_owner_id_fkey'
            columns: ['owner_id']
            isOneToOne: false
            referencedRelation: 'feed_moments'
            referencedColumns: ['user_id']
          },
          {
            foreignKeyName: 'public_moments_owner_id_fkey'
            columns: ['owner_id']
            isOneToOne: false
            referencedRelation: 'feed_notifications'
            referencedColumns: ['user_id']
          },
          {
            foreignKeyName: 'public_moments_owner_id_fkey'
            columns: ['owner_id']
            isOneToOne: false
            referencedRelation: 'profile_collection_items'
            referencedColumns: ['user_id']
          },
          {
            foreignKeyName: 'public_moments_owner_id_fkey'
            columns: ['owner_id']
            isOneToOne: false
            referencedRelation: 'profile_moments'
            referencedColumns: ['user_id']
          },
          {
            foreignKeyName: 'public_moments_owner_id_fkey'
            columns: ['owner_id']
            isOneToOne: false
            referencedRelation: 'profiles'
            referencedColumns: ['user_id']
          }
        ]
      }
      notification_settings: {
        Row: {
          c_i_comments: boolean
          c_i_ratings: boolean
          created_at: string
          follows: boolean
          m_comments: boolean
          m_ratings: boolean
          push_tokens: string[]
          user_id: string
        }
        Insert: {
          c_i_comments?: boolean
          c_i_ratings?: boolean
          created_at?: string
          follows?: boolean
          m_comments?: boolean
          m_ratings?: boolean
          push_tokens?: string[]
          user_id?: string
        }
        Update: {
          c_i_comments?: boolean
          c_i_ratings?: boolean
          created_at?: string
          follows?: boolean
          m_comments?: boolean
          m_ratings?: boolean
          push_tokens?: string[]
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: 'public_notification_settings_user_id_fkey'
            columns: ['user_id']
            isOneToOne: true
            referencedRelation: 'feed_collection_items'
            referencedColumns: ['user_id']
          },
          {
            foreignKeyName: 'public_notification_settings_user_id_fkey'
            columns: ['user_id']
            isOneToOne: true
            referencedRelation: 'feed_collections'
            referencedColumns: ['user_id']
          },
          {
            foreignKeyName: 'public_notification_settings_user_id_fkey'
            columns: ['user_id']
            isOneToOne: true
            referencedRelation: 'feed_comments'
            referencedColumns: ['user_id']
          },
          {
            foreignKeyName: 'public_notification_settings_user_id_fkey'
            columns: ['user_id']
            isOneToOne: true
            referencedRelation: 'feed_moments'
            referencedColumns: ['user_id']
          },
          {
            foreignKeyName: 'public_notification_settings_user_id_fkey'
            columns: ['user_id']
            isOneToOne: true
            referencedRelation: 'feed_notifications'
            referencedColumns: ['user_id']
          },
          {
            foreignKeyName: 'public_notification_settings_user_id_fkey'
            columns: ['user_id']
            isOneToOne: true
            referencedRelation: 'profile_collection_items'
            referencedColumns: ['user_id']
          },
          {
            foreignKeyName: 'public_notification_settings_user_id_fkey'
            columns: ['user_id']
            isOneToOne: true
            referencedRelation: 'profile_moments'
            referencedColumns: ['user_id']
          },
          {
            foreignKeyName: 'public_notification_settings_user_id_fkey'
            columns: ['user_id']
            isOneToOne: true
            referencedRelation: 'profiles'
            referencedColumns: ['user_id']
          }
        ]
      }
      notifications: {
        Row: {
          content_id: string
          created_at: string
          from_id: string
          id: number
          to_id: string
          type: string
          uniq_id: number
        }
        Insert: {
          content_id: string
          created_at?: string
          from_id: string
          id?: number
          to_id: string
          type: string
          uniq_id: number
        }
        Update: {
          content_id?: string
          created_at?: string
          from_id?: string
          id?: number
          to_id?: string
          type?: string
          uniq_id?: number
        }
        Relationships: [
          {
            foreignKeyName: 'public_notifications_from_id_fkey'
            columns: ['from_id']
            isOneToOne: false
            referencedRelation: 'feed_collection_items'
            referencedColumns: ['user_id']
          },
          {
            foreignKeyName: 'public_notifications_from_id_fkey'
            columns: ['from_id']
            isOneToOne: false
            referencedRelation: 'feed_collections'
            referencedColumns: ['user_id']
          },
          {
            foreignKeyName: 'public_notifications_from_id_fkey'
            columns: ['from_id']
            isOneToOne: false
            referencedRelation: 'feed_comments'
            referencedColumns: ['user_id']
          },
          {
            foreignKeyName: 'public_notifications_from_id_fkey'
            columns: ['from_id']
            isOneToOne: false
            referencedRelation: 'feed_moments'
            referencedColumns: ['user_id']
          },
          {
            foreignKeyName: 'public_notifications_from_id_fkey'
            columns: ['from_id']
            isOneToOne: false
            referencedRelation: 'feed_notifications'
            referencedColumns: ['user_id']
          },
          {
            foreignKeyName: 'public_notifications_from_id_fkey'
            columns: ['from_id']
            isOneToOne: false
            referencedRelation: 'profile_collection_items'
            referencedColumns: ['user_id']
          },
          {
            foreignKeyName: 'public_notifications_from_id_fkey'
            columns: ['from_id']
            isOneToOne: false
            referencedRelation: 'profile_moments'
            referencedColumns: ['user_id']
          },
          {
            foreignKeyName: 'public_notifications_from_id_fkey'
            columns: ['from_id']
            isOneToOne: false
            referencedRelation: 'profiles'
            referencedColumns: ['user_id']
          },
          {
            foreignKeyName: 'public_notifications_to_id_fkey'
            columns: ['to_id']
            isOneToOne: false
            referencedRelation: 'feed_collection_items'
            referencedColumns: ['user_id']
          },
          {
            foreignKeyName: 'public_notifications_to_id_fkey'
            columns: ['to_id']
            isOneToOne: false
            referencedRelation: 'feed_collections'
            referencedColumns: ['user_id']
          },
          {
            foreignKeyName: 'public_notifications_to_id_fkey'
            columns: ['to_id']
            isOneToOne: false
            referencedRelation: 'feed_comments'
            referencedColumns: ['user_id']
          },
          {
            foreignKeyName: 'public_notifications_to_id_fkey'
            columns: ['to_id']
            isOneToOne: false
            referencedRelation: 'feed_moments'
            referencedColumns: ['user_id']
          },
          {
            foreignKeyName: 'public_notifications_to_id_fkey'
            columns: ['to_id']
            isOneToOne: false
            referencedRelation: 'feed_notifications'
            referencedColumns: ['user_id']
          },
          {
            foreignKeyName: 'public_notifications_to_id_fkey'
            columns: ['to_id']
            isOneToOne: false
            referencedRelation: 'profile_collection_items'
            referencedColumns: ['user_id']
          },
          {
            foreignKeyName: 'public_notifications_to_id_fkey'
            columns: ['to_id']
            isOneToOne: false
            referencedRelation: 'profile_moments'
            referencedColumns: ['user_id']
          },
          {
            foreignKeyName: 'public_notifications_to_id_fkey'
            columns: ['to_id']
            isOneToOne: false
            referencedRelation: 'profiles'
            referencedColumns: ['user_id']
          }
        ]
      }
      profiles: {
        Row: {
          avatar: string
          cover: string
          created_at: string
          description: string
          user_id: string
          username: string
        }
        Insert: {
          avatar?: string
          cover?: string
          created_at?: string
          description?: string
          user_id: string
          username: string
        }
        Update: {
          avatar?: string
          cover?: string
          created_at?: string
          description?: string
          user_id?: string
          username?: string
        }
        Relationships: [
          {
            foreignKeyName: 'profiles_user_id_fkey'
            columns: ['user_id']
            isOneToOne: true
            referencedRelation: 'users'
            referencedColumns: ['id']
          }
        ]
      }
      ratings: {
        Row: {
          c_i_ref: string | null
          created_at: string
          id: number
          m_ref: string | null
          rating: number
          user_ref: string
        }
        Insert: {
          c_i_ref?: string | null
          created_at?: string
          id?: number
          m_ref?: string | null
          rating: number
          user_ref?: string
        }
        Update: {
          c_i_ref?: string | null
          created_at?: string
          id?: number
          m_ref?: string | null
          rating?: number
          user_ref?: string
        }
        Relationships: [
          {
            foreignKeyName: 'public_ratings_c_i_ref_fkey'
            columns: ['c_i_ref']
            isOneToOne: false
            referencedRelation: 'collection_items'
            referencedColumns: ['c_i_id']
          },
          {
            foreignKeyName: 'public_ratings_c_i_ref_fkey'
            columns: ['c_i_ref']
            isOneToOne: false
            referencedRelation: 'feed_collection_items'
            referencedColumns: ['c_i_id']
          },
          {
            foreignKeyName: 'public_ratings_c_i_ref_fkey'
            columns: ['c_i_ref']
            isOneToOne: false
            referencedRelation: 'profile_collection_items'
            referencedColumns: ['c_i_id']
          },
          {
            foreignKeyName: 'public_ratings_m_ref_fkey'
            columns: ['m_ref']
            isOneToOne: false
            referencedRelation: 'feed_moments'
            referencedColumns: ['m_id']
          },
          {
            foreignKeyName: 'public_ratings_m_ref_fkey'
            columns: ['m_ref']
            isOneToOne: false
            referencedRelation: 'moments'
            referencedColumns: ['m_id']
          },
          {
            foreignKeyName: 'public_ratings_m_ref_fkey'
            columns: ['m_ref']
            isOneToOne: false
            referencedRelation: 'profile_moments'
            referencedColumns: ['m_id']
          },
          {
            foreignKeyName: 'public_ratings_user_ref_fkey'
            columns: ['user_ref']
            isOneToOne: false
            referencedRelation: 'feed_collection_items'
            referencedColumns: ['user_id']
          },
          {
            foreignKeyName: 'public_ratings_user_ref_fkey'
            columns: ['user_ref']
            isOneToOne: false
            referencedRelation: 'feed_collections'
            referencedColumns: ['user_id']
          },
          {
            foreignKeyName: 'public_ratings_user_ref_fkey'
            columns: ['user_ref']
            isOneToOne: false
            referencedRelation: 'feed_comments'
            referencedColumns: ['user_id']
          },
          {
            foreignKeyName: 'public_ratings_user_ref_fkey'
            columns: ['user_ref']
            isOneToOne: false
            referencedRelation: 'feed_moments'
            referencedColumns: ['user_id']
          },
          {
            foreignKeyName: 'public_ratings_user_ref_fkey'
            columns: ['user_ref']
            isOneToOne: false
            referencedRelation: 'feed_notifications'
            referencedColumns: ['user_id']
          },
          {
            foreignKeyName: 'public_ratings_user_ref_fkey'
            columns: ['user_ref']
            isOneToOne: false
            referencedRelation: 'profile_collection_items'
            referencedColumns: ['user_id']
          },
          {
            foreignKeyName: 'public_ratings_user_ref_fkey'
            columns: ['user_ref']
            isOneToOne: false
            referencedRelation: 'profile_moments'
            referencedColumns: ['user_id']
          },
          {
            foreignKeyName: 'public_ratings_user_ref_fkey'
            columns: ['user_ref']
            isOneToOne: false
            referencedRelation: 'profiles'
            referencedColumns: ['user_id']
          }
        ]
      }
      reports: {
        Row: {
          created_at: string
          id: number
          ref_id: string
          report: string
          type: string
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: number
          ref_id: string
          report: string
          type: string
          user_id?: string
        }
        Update: {
          created_at?: string
          id?: number
          ref_id?: string
          report?: string
          type?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: 'public_report_user_id_fkey'
            columns: ['user_id']
            isOneToOne: false
            referencedRelation: 'feed_collection_items'
            referencedColumns: ['user_id']
          },
          {
            foreignKeyName: 'public_report_user_id_fkey'
            columns: ['user_id']
            isOneToOne: false
            referencedRelation: 'feed_collections'
            referencedColumns: ['user_id']
          },
          {
            foreignKeyName: 'public_report_user_id_fkey'
            columns: ['user_id']
            isOneToOne: false
            referencedRelation: 'feed_comments'
            referencedColumns: ['user_id']
          },
          {
            foreignKeyName: 'public_report_user_id_fkey'
            columns: ['user_id']
            isOneToOne: false
            referencedRelation: 'feed_moments'
            referencedColumns: ['user_id']
          },
          {
            foreignKeyName: 'public_report_user_id_fkey'
            columns: ['user_id']
            isOneToOne: false
            referencedRelation: 'feed_notifications'
            referencedColumns: ['user_id']
          },
          {
            foreignKeyName: 'public_report_user_id_fkey'
            columns: ['user_id']
            isOneToOne: false
            referencedRelation: 'profile_collection_items'
            referencedColumns: ['user_id']
          },
          {
            foreignKeyName: 'public_report_user_id_fkey'
            columns: ['user_id']
            isOneToOne: false
            referencedRelation: 'profile_moments'
            referencedColumns: ['user_id']
          },
          {
            foreignKeyName: 'public_report_user_id_fkey'
            columns: ['user_id']
            isOneToOne: false
            referencedRelation: 'profiles'
            referencedColumns: ['user_id']
          }
        ]
      }
      supports: {
        Row: {
          created_at: string
          id: number
          message: string
          type: string
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: number
          message: string
          type: string
          user_id?: string
        }
        Update: {
          created_at?: string
          id?: number
          message?: string
          type?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: 'public_support_user_id_fkey'
            columns: ['user_id']
            isOneToOne: false
            referencedRelation: 'feed_collection_items'
            referencedColumns: ['user_id']
          },
          {
            foreignKeyName: 'public_support_user_id_fkey'
            columns: ['user_id']
            isOneToOne: false
            referencedRelation: 'feed_collections'
            referencedColumns: ['user_id']
          },
          {
            foreignKeyName: 'public_support_user_id_fkey'
            columns: ['user_id']
            isOneToOne: false
            referencedRelation: 'feed_comments'
            referencedColumns: ['user_id']
          },
          {
            foreignKeyName: 'public_support_user_id_fkey'
            columns: ['user_id']
            isOneToOne: false
            referencedRelation: 'feed_moments'
            referencedColumns: ['user_id']
          },
          {
            foreignKeyName: 'public_support_user_id_fkey'
            columns: ['user_id']
            isOneToOne: false
            referencedRelation: 'feed_notifications'
            referencedColumns: ['user_id']
          },
          {
            foreignKeyName: 'public_support_user_id_fkey'
            columns: ['user_id']
            isOneToOne: false
            referencedRelation: 'profile_collection_items'
            referencedColumns: ['user_id']
          },
          {
            foreignKeyName: 'public_support_user_id_fkey'
            columns: ['user_id']
            isOneToOne: false
            referencedRelation: 'profile_moments'
            referencedColumns: ['user_id']
          },
          {
            foreignKeyName: 'public_support_user_id_fkey'
            columns: ['user_id']
            isOneToOne: false
            referencedRelation: 'profiles'
            referencedColumns: ['user_id']
          }
        ]
      }
    }
    Views: {
      feed_collection_items: {
        Row: {
          avatar: string | null
          c_i_id: string | null
          comments_count: number | null
          created_at: string | null
          description: string | null
          fts: unknown | null
          parent_id: string | null
          ratings_avg: number | null
          ratings_count: number | null
          title: string | null
          user_id: string | null
          user_rating: number | null
          username: string | null
        }
        Relationships: [
          {
            foreignKeyName: 'profiles_user_id_fkey'
            columns: ['user_id']
            isOneToOne: true
            referencedRelation: 'users'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'public_collection_items_parent_id_fkey'
            columns: ['parent_id']
            isOneToOne: false
            referencedRelation: 'collections'
            referencedColumns: ['c_id']
          },
          {
            foreignKeyName: 'public_collection_items_parent_id_fkey'
            columns: ['parent_id']
            isOneToOne: false
            referencedRelation: 'feed_collections'
            referencedColumns: ['c_id']
          }
        ]
      }
      feed_collections: {
        Row: {
          avatar: string | null
          c_id: string | null
          category: string | null
          comments_count: number | null
          created_at: string | null
          description: string | null
          fts: unknown | null
          private_edit: boolean | null
          private_view: boolean | null
          ratings_count: number | null
          title: string | null
          user_id: string | null
          username: string | null
        }
        Relationships: [
          {
            foreignKeyName: 'profiles_user_id_fkey'
            columns: ['user_id']
            isOneToOne: true
            referencedRelation: 'users'
            referencedColumns: ['id']
          }
        ]
      }
      feed_comments: {
        Row: {
          avatar: string | null
          c_i_ref: string | null
          comment: string | null
          created_at: string | null
          id: number | null
          m_ref: string | null
          user_id: string | null
          username: string | null
        }
        Relationships: [
          {
            foreignKeyName: 'profiles_user_id_fkey'
            columns: ['user_id']
            isOneToOne: true
            referencedRelation: 'users'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'public_comments_c_i_ref_fkey'
            columns: ['c_i_ref']
            isOneToOne: false
            referencedRelation: 'collection_items'
            referencedColumns: ['c_i_id']
          },
          {
            foreignKeyName: 'public_comments_c_i_ref_fkey'
            columns: ['c_i_ref']
            isOneToOne: false
            referencedRelation: 'feed_collection_items'
            referencedColumns: ['c_i_id']
          },
          {
            foreignKeyName: 'public_comments_c_i_ref_fkey'
            columns: ['c_i_ref']
            isOneToOne: false
            referencedRelation: 'profile_collection_items'
            referencedColumns: ['c_i_id']
          },
          {
            foreignKeyName: 'public_comments_m_ref_fkey'
            columns: ['m_ref']
            isOneToOne: false
            referencedRelation: 'moments'
            referencedColumns: ['m_id']
          },
          {
            foreignKeyName: 'public_comments_m_ref_fkey'
            columns: ['m_ref']
            isOneToOne: false
            referencedRelation: 'feed_moments'
            referencedColumns: ['m_id']
          },
          {
            foreignKeyName: 'public_comments_m_ref_fkey'
            columns: ['m_ref']
            isOneToOne: false
            referencedRelation: 'profile_moments'
            referencedColumns: ['m_id']
          }
        ]
      }
      feed_moments: {
        Row: {
          avatar: string | null
          comments_count: number | null
          created_at: string | null
          description: string | null
          fts: unknown | null
          m_id: string | null
          ratings_avg: number | null
          ratings_count: number | null
          title: string | null
          user_id: string | null
          user_rating: number | null
          username: string | null
        }
        Relationships: [
          {
            foreignKeyName: 'profiles_user_id_fkey'
            columns: ['user_id']
            isOneToOne: true
            referencedRelation: 'users'
            referencedColumns: ['id']
          }
        ]
      }
      feed_notifications: {
        Row: {
          avatar: string | null
          content_id: string | null
          created_at: string | null
          from_id: string | null
          id: number | null
          to_id: string | null
          type: string | null
          user_id: string | null
          username: string | null
        }
        Relationships: [
          {
            foreignKeyName: 'profiles_user_id_fkey'
            columns: ['user_id']
            isOneToOne: true
            referencedRelation: 'users'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'public_notifications_from_id_fkey'
            columns: ['from_id']
            isOneToOne: false
            referencedRelation: 'profiles'
            referencedColumns: ['user_id']
          },
          {
            foreignKeyName: 'public_notifications_from_id_fkey'
            columns: ['from_id']
            isOneToOne: false
            referencedRelation: 'feed_collection_items'
            referencedColumns: ['user_id']
          },
          {
            foreignKeyName: 'public_notifications_from_id_fkey'
            columns: ['from_id']
            isOneToOne: false
            referencedRelation: 'feed_collections'
            referencedColumns: ['user_id']
          },
          {
            foreignKeyName: 'public_notifications_from_id_fkey'
            columns: ['from_id']
            isOneToOne: false
            referencedRelation: 'feed_comments'
            referencedColumns: ['user_id']
          },
          {
            foreignKeyName: 'public_notifications_from_id_fkey'
            columns: ['from_id']
            isOneToOne: false
            referencedRelation: 'feed_moments'
            referencedColumns: ['user_id']
          },
          {
            foreignKeyName: 'public_notifications_from_id_fkey'
            columns: ['from_id']
            isOneToOne: false
            referencedRelation: 'feed_notifications'
            referencedColumns: ['user_id']
          },
          {
            foreignKeyName: 'public_notifications_from_id_fkey'
            columns: ['from_id']
            isOneToOne: false
            referencedRelation: 'profile_collection_items'
            referencedColumns: ['user_id']
          },
          {
            foreignKeyName: 'public_notifications_from_id_fkey'
            columns: ['from_id']
            isOneToOne: false
            referencedRelation: 'profile_moments'
            referencedColumns: ['user_id']
          },
          {
            foreignKeyName: 'public_notifications_to_id_fkey'
            columns: ['to_id']
            isOneToOne: false
            referencedRelation: 'profiles'
            referencedColumns: ['user_id']
          },
          {
            foreignKeyName: 'public_notifications_to_id_fkey'
            columns: ['to_id']
            isOneToOne: false
            referencedRelation: 'feed_collection_items'
            referencedColumns: ['user_id']
          },
          {
            foreignKeyName: 'public_notifications_to_id_fkey'
            columns: ['to_id']
            isOneToOne: false
            referencedRelation: 'feed_collections'
            referencedColumns: ['user_id']
          },
          {
            foreignKeyName: 'public_notifications_to_id_fkey'
            columns: ['to_id']
            isOneToOne: false
            referencedRelation: 'feed_comments'
            referencedColumns: ['user_id']
          },
          {
            foreignKeyName: 'public_notifications_to_id_fkey'
            columns: ['to_id']
            isOneToOne: false
            referencedRelation: 'feed_moments'
            referencedColumns: ['user_id']
          },
          {
            foreignKeyName: 'public_notifications_to_id_fkey'
            columns: ['to_id']
            isOneToOne: false
            referencedRelation: 'feed_notifications'
            referencedColumns: ['user_id']
          },
          {
            foreignKeyName: 'public_notifications_to_id_fkey'
            columns: ['to_id']
            isOneToOne: false
            referencedRelation: 'profile_collection_items'
            referencedColumns: ['user_id']
          },
          {
            foreignKeyName: 'public_notifications_to_id_fkey'
            columns: ['to_id']
            isOneToOne: false
            referencedRelation: 'profile_moments'
            referencedColumns: ['user_id']
          }
        ]
      }
      profile_collection_items: {
        Row: {
          avatar: string | null
          c_i_id: string | null
          comments_count: number | null
          created_at: string | null
          description: string | null
          parent_id: string | null
          ratings_avg: number | null
          ratings_count: number | null
          title: string | null
          user_id: string | null
          user_rating: number | null
          username: string | null
        }
        Relationships: [
          {
            foreignKeyName: 'profiles_user_id_fkey'
            columns: ['user_id']
            isOneToOne: true
            referencedRelation: 'users'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'public_collection_items_parent_id_fkey'
            columns: ['parent_id']
            isOneToOne: false
            referencedRelation: 'collections'
            referencedColumns: ['c_id']
          },
          {
            foreignKeyName: 'public_collection_items_parent_id_fkey'
            columns: ['parent_id']
            isOneToOne: false
            referencedRelation: 'feed_collections'
            referencedColumns: ['c_id']
          }
        ]
      }
      profile_moments: {
        Row: {
          avatar: string | null
          comments_count: number | null
          created_at: string | null
          description: string | null
          m_id: string | null
          ratings_avg: number | null
          ratings_count: number | null
          title: string | null
          user_id: string | null
          user_rating: number | null
          username: string | null
        }
        Relationships: [
          {
            foreignKeyName: 'profiles_user_id_fkey'
            columns: ['user_id']
            isOneToOne: true
            referencedRelation: 'users'
            referencedColumns: ['id']
          }
        ]
      }
    }
    Functions: {
      add_push_token: {
        Args: {
          push_token: string
        }
        Returns: undefined
      }
      add_secret: {
        Args: {
          secret_: string
          name_: string
        }
        Returns: undefined
      }
      create_collection: {
        Args: {
          c_id: string
          title: string
          description: string
          category: string
          private_edit: boolean
          private_view: boolean
          c_i_ids: string[]
          c_i_titles: string[]
          c_i_description: string[]
        }
        Returns: undefined
      }
      create_comment: {
        Args: {
          new_comment: string
          c_i_id?: string
          m_id?: string
        }
        Returns: {
          id: number
          m_ref: string
          c_i_ref: string
          comment: string
          created_at: string
          user_id: string
          username: string
          avatar: string
        }[]
      }
      create_follow: {
        Args: {
          to_id: string
        }
        Returns: undefined
      }
      create_moment: {
        Args: {
          m_id: string
          title: string
          description: string
        }
        Returns: undefined
      }
      create_rating: {
        Args: {
          rating: number
          c_i_ref?: string
          m_ref?: string
        }
        Returns: undefined
      }
      delete_follow: {
        Args: {
          to_id: string
        }
        Returns: undefined
      }
      delete_rating: {
        Args: {
          c_i_ref?: string
          m_ref?: string
        }
        Returns: undefined
      }
      get_notifications: {
        Args: Record<PropertyKey, never>
        Returns: {
          to_id: string
          type: string
          content_id: string
          created_at: string
          user_id: string
          username: string
          avatar: string
          dups: number
        }[]
      }
      get_user_stats: {
        Args: {
          uid: string
        }
        Returns: Record<string, unknown>
      }
      remove_push_token: {
        Args: {
          push_token: string
        }
        Returns: undefined
      }
      search_collection_items: {
        Args: {
          page_: number
          time_: string
          search: string
        }
        Returns: {
          c_i_id: string
          title: string
          description: string
          created_at: string
          parent_id: string
          user_id: string
          username: string
          avatar: string
          ratings_avg: number
          ratings_count: number
          user_rating: number
          comments_count: number
          score: number
        }[]
      }
      search_collections: {
        Args: {
          page_: number
          time_: string
          search: string
        }
        Returns: {
          c_id: string
          title: string
          description: string
          created_at: string
          category: string
          private_view: boolean
          private_edit: boolean
          ratings_count: number
          comments_count: number
          user_id: string
          username: string
          avatar: string
          score: number
        }[]
      }
      search_moments: {
        Args: {
          page_: number
          time_: string
          search: string
        }
        Returns: {
          m_id: string
          title: string
          description: string
          created_at: string
          user_id: string
          username: string
          avatar: string
          ratings_avg: number
          ratings_count: number
          user_rating: number
          comments_count: number
          score: number
        }[]
      }
      update_rating: {
        Args: {
          rating: number
          c_i_ref?: string
          m_ref?: string
        }
        Returns: undefined
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
  storage: {
    Tables: {
      buckets: {
        Row: {
          allowed_mime_types: string[] | null
          avif_autodetection: boolean | null
          created_at: string | null
          file_size_limit: number | null
          id: string
          name: string
          owner: string | null
          owner_id: string | null
          public: boolean | null
          updated_at: string | null
        }
        Insert: {
          allowed_mime_types?: string[] | null
          avif_autodetection?: boolean | null
          created_at?: string | null
          file_size_limit?: number | null
          id: string
          name: string
          owner?: string | null
          owner_id?: string | null
          public?: boolean | null
          updated_at?: string | null
        }
        Update: {
          allowed_mime_types?: string[] | null
          avif_autodetection?: boolean | null
          created_at?: string | null
          file_size_limit?: number | null
          id?: string
          name?: string
          owner?: string | null
          owner_id?: string | null
          public?: boolean | null
          updated_at?: string | null
        }
        Relationships: []
      }
      migrations: {
        Row: {
          executed_at: string | null
          hash: string
          id: number
          name: string
        }
        Insert: {
          executed_at?: string | null
          hash: string
          id: number
          name: string
        }
        Update: {
          executed_at?: string | null
          hash?: string
          id?: number
          name?: string
        }
        Relationships: []
      }
      objects: {
        Row: {
          bucket_id: string | null
          created_at: string | null
          id: string
          last_accessed_at: string | null
          metadata: Json | null
          name: string | null
          owner: string | null
          owner_id: string | null
          path_tokens: string[] | null
          updated_at: string | null
          version: string | null
        }
        Insert: {
          bucket_id?: string | null
          created_at?: string | null
          id?: string
          last_accessed_at?: string | null
          metadata?: Json | null
          name?: string | null
          owner?: string | null
          owner_id?: string | null
          path_tokens?: string[] | null
          updated_at?: string | null
          version?: string | null
        }
        Update: {
          bucket_id?: string | null
          created_at?: string | null
          id?: string
          last_accessed_at?: string | null
          metadata?: Json | null
          name?: string | null
          owner?: string | null
          owner_id?: string | null
          path_tokens?: string[] | null
          updated_at?: string | null
          version?: string | null
        }
        Relationships: [
          {
            foreignKeyName: 'objects_bucketId_fkey'
            columns: ['bucket_id']
            isOneToOne: false
            referencedRelation: 'buckets'
            referencedColumns: ['id']
          }
        ]
      }
      s3_multipart_uploads: {
        Row: {
          bucket_id: string
          created_at: string
          id: string
          in_progress_size: number
          key: string
          owner_id: string | null
          upload_signature: string
          version: string
        }
        Insert: {
          bucket_id: string
          created_at?: string
          id: string
          in_progress_size?: number
          key: string
          owner_id?: string | null
          upload_signature: string
          version: string
        }
        Update: {
          bucket_id?: string
          created_at?: string
          id?: string
          in_progress_size?: number
          key?: string
          owner_id?: string | null
          upload_signature?: string
          version?: string
        }
        Relationships: [
          {
            foreignKeyName: 's3_multipart_uploads_bucket_id_fkey'
            columns: ['bucket_id']
            isOneToOne: false
            referencedRelation: 'buckets'
            referencedColumns: ['id']
          }
        ]
      }
      s3_multipart_uploads_parts: {
        Row: {
          bucket_id: string
          created_at: string
          etag: string
          id: string
          key: string
          owner_id: string | null
          part_number: number
          size: number
          upload_id: string
          version: string
        }
        Insert: {
          bucket_id: string
          created_at?: string
          etag: string
          id?: string
          key: string
          owner_id?: string | null
          part_number: number
          size?: number
          upload_id: string
          version: string
        }
        Update: {
          bucket_id?: string
          created_at?: string
          etag?: string
          id?: string
          key?: string
          owner_id?: string | null
          part_number?: number
          size?: number
          upload_id?: string
          version?: string
        }
        Relationships: [
          {
            foreignKeyName: 's3_multipart_uploads_parts_bucket_id_fkey'
            columns: ['bucket_id']
            isOneToOne: false
            referencedRelation: 'buckets'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 's3_multipart_uploads_parts_upload_id_fkey'
            columns: ['upload_id']
            isOneToOne: false
            referencedRelation: 's3_multipart_uploads'
            referencedColumns: ['id']
          }
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      can_insert_object: {
        Args: {
          bucketid: string
          name: string
          owner: string
          metadata: Json
        }
        Returns: undefined
      }
      extension: {
        Args: {
          name: string
        }
        Returns: string
      }
      filename: {
        Args: {
          name: string
        }
        Returns: string
      }
      foldername: {
        Args: {
          name: string
        }
        Returns: string[]
      }
      get_size_by_bucket: {
        Args: Record<PropertyKey, never>
        Returns: {
          size: number
          bucket_id: string
        }[]
      }
      list_multipart_uploads_with_delimiter: {
        Args: {
          bucket_id: string
          prefix_param: string
          delimiter_param: string
          max_keys?: number
          next_key_token?: string
          next_upload_token?: string
        }
        Returns: {
          key: string
          id: string
          created_at: string
        }[]
      }
      list_objects_with_delimiter: {
        Args: {
          bucket_id: string
          prefix_param: string
          delimiter_param: string
          max_keys?: number
          start_after?: string
          next_token?: string
        }
        Returns: {
          name: string
          id: string
          metadata: Json
          updated_at: string
        }[]
      }
      search: {
        Args: {
          prefix: string
          bucketname: string
          limits?: number
          levels?: number
          offsets?: number
          search?: string
          sortcolumn?: string
          sortorder?: string
        }
        Returns: {
          name: string
          id: string
          updated_at: string
          created_at: string
          last_accessed_at: string
          metadata: Json
        }[]
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, 'public'>]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema['Tables'] & PublicSchema['Views'])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions['schema']]['Tables'] &
        Database[PublicTableNameOrOptions['schema']]['Views'])
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions['schema']]['Tables'] &
      Database[PublicTableNameOrOptions['schema']]['Views'])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema['Tables'] &
      PublicSchema['Views'])
  ? (PublicSchema['Tables'] &
      PublicSchema['Views'])[PublicTableNameOrOptions] extends {
      Row: infer R
    }
    ? R
    : never
  : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema['Tables']
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions['schema']]['Tables']
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions['schema']]['Tables'][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema['Tables']
  ? PublicSchema['Tables'][PublicTableNameOrOptions] extends {
      Insert: infer I
    }
    ? I
    : never
  : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema['Tables']
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions['schema']]['Tables']
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions['schema']]['Tables'][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema['Tables']
  ? PublicSchema['Tables'][PublicTableNameOrOptions] extends {
      Update: infer U
    }
    ? U
    : never
  : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema['Enums']
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions['schema']]['Enums']
    : never = never
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions['schema']]['Enums'][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema['Enums']
  ? PublicSchema['Enums'][PublicEnumNameOrOptions]
  : never
