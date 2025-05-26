export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      nfts: {
        Row: {
          beneficiary_project: string
          contract_address: string | null
          created_at: string
          description: string | null
          id: string
          is_minted: boolean
          media_type: string | null
          media_url: string | null
          metadata_hash: string | null
          minted_copies: number
          name: string
          price: number
          rarity: string
          token_id: string | null
          total_copies: number
          updated_at: string
          user_id: string
        }
        Insert: {
          beneficiary_project: string
          contract_address?: string | null
          created_at?: string
          description?: string | null
          id?: string
          is_minted?: boolean
          media_type?: string | null
          media_url?: string | null
          metadata_hash?: string | null
          minted_copies?: number
          name: string
          price: number
          rarity: string
          token_id?: string | null
          total_copies: number
          updated_at?: string
          user_id: string
        }
        Update: {
          beneficiary_project?: string
          contract_address?: string | null
          created_at?: string
          description?: string | null
          id?: string
          is_minted?: boolean
          media_type?: string | null
          media_url?: string | null
          metadata_hash?: string | null
          minted_copies?: number
          name?: string
          price?: number
          rarity?: string
          token_id?: string | null
          total_copies?: number
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "fk_nfts_user_id"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      purchases: {
        Row: {
          amount_paid: number
          buyer_wallet: string
          created_at: string
          id: string
          nft_id: string
          timestamp: string
          tx_hash: string | null
        }
        Insert: {
          amount_paid: number
          buyer_wallet: string
          created_at?: string
          id?: string
          nft_id: string
          timestamp?: string
          tx_hash?: string | null
        }
        Update: {
          amount_paid?: number
          buyer_wallet?: string
          created_at?: string
          id?: string
          nft_id?: string
          timestamp?: string
          tx_hash?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "purchases_nft_id_fkey"
            columns: ["nft_id"]
            isOneToOne: false
            referencedRelation: "nfts"
            referencedColumns: ["id"]
          },
        ]
      }
      user_contracts: {
        Row: {
          contract_address: string
          contract_type: string
          created_at: string
          deployment_status: string
          id: string
          updated_at: string
          user_id: string
        }
        Insert: {
          contract_address: string
          contract_type?: string
          created_at?: string
          deployment_status?: string
          id?: string
          updated_at?: string
          user_id: string
        }
        Update: {
          contract_address?: string
          contract_type?: string
          created_at?: string
          deployment_status?: string
          id?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "user_contracts_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      users: {
        Row: {
          category: string
          country: string
          created_at: string
          email: string
          id: string
          name: string
          sport: string
          updated_at: string
          user_type: string
          wallet_address: string
        }
        Insert: {
          category: string
          country: string
          created_at?: string
          email: string
          id?: string
          name: string
          sport: string
          updated_at?: string
          user_type: string
          wallet_address: string
        }
        Update: {
          category?: string
          country?: string
          created_at?: string
          email?: string
          id?: string
          name?: string
          sport?: string
          updated_at?: string
          user_type?: string
          wallet_address?: string
        }
        Relationships: []
      }
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

type DefaultSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
