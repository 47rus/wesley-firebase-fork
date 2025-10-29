export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "12.2.12 (cd3cf9e)"
  }
  public: {
    Tables: {
      events: {
        Row: {
          afbouw_uren: number | null
          duration_display: number | null
          event_category: string | null
          eventmanager: boolean | null
          eventmanager_plus: boolean | null
          group_size_display_max: number | null
          group_size_display_min: number | null
          id: number
          junior_eventmanager: boolean | null
          km_price: number | null
          landing_page: string | null
          opbouw_uren: number | null
          package_badge: string | null
          package_feature_1_gamesets: string | null
          package_feature_2_support: string | null
          package_feature_3_standings: string | null
          package_feature_4_awards: string | null
          package_feature_5_promotion: string | null
          package_feature_6_sign_ups: string | null
          package_feature_7_extra: string | null
          package_price: number | null
          pakket_naam: string | null
          pakket_price_tax: number | null
        }
        Insert: {
          afbouw_uren?: number | null
          duration_display?: number | null
          event_category?: string | null
          eventmanager?: boolean | null
          eventmanager_plus?: boolean | null
          group_size_display_max?: number | null
          group_size_display_min?: number | null
          id?: never
          junior_eventmanager?: boolean | null
          km_price?: number | null
          landing_page?: string | null
          opbouw_uren?: number | null
          package_badge?: string | null
          package_feature_1_gamesets?: string | null
          package_feature_2_support?: string | null
          package_feature_3_standings?: string | null
          package_feature_4_awards?: string | null
          package_feature_5_promotion?: string | null
          package_feature_6_sign_ups?: string | null
          package_feature_7_extra?: string | null
          package_price?: number | null
          pakket_naam?: string | null
          pakket_price_tax?: number | null
        }
        Update: {
          afbouw_uren?: number | null
          duration_display?: number | null
          event_category?: string | null
          eventmanager?: boolean | null
          eventmanager_plus?: boolean | null
          group_size_display_max?: number | null
          group_size_display_min?: number | null
          id?: never
          junior_eventmanager?: boolean | null
          km_price?: number | null
          landing_page?: string | null
          opbouw_uren?: number | null
          package_badge?: string | null
          package_feature_1_gamesets?: string | null
          package_feature_2_support?: string | null
          package_feature_3_standings?: string | null
          package_feature_4_awards?: string | null
          package_feature_5_promotion?: string | null
          package_feature_6_sign_ups?: string | null
          package_feature_7_extra?: string | null
          package_price?: number | null
          pakket_naam?: string | null
          pakket_price_tax?: number | null
        }
        Relationships: []
      }
      logos: {
        Row: {
          background_type: string
          created_at: string
          description: string | null
          file_path: string
          id: string
          is_primary: boolean | null
          logo_type: string
          name: string
          updated_at: string
        }
        Insert: {
          background_type?: string
          created_at?: string
          description?: string | null
          file_path: string
          id?: string
          is_primary?: boolean | null
          logo_type: string
          name: string
          updated_at?: string
        }
        Update: {
          background_type?: string
          created_at?: string
          description?: string | null
          file_path?: string
          id?: string
          is_primary?: boolean | null
          logo_type?: string
          name?: string
          updated_at?: string
        }
        Relationships: []
      }
      seo: {
        Row: {
          event_category: string | null
          event_emoji: string | null
          faq_1_antwoord: string | null
          faq_1_vraag: string | null
          faq_2_antwoord: string | null
          faq_2_vraag: string | null
          faq_3_antwoord: string | null
          faq_3_vraag: string | null
          faq_4_antwoord: string | null
          faq_4_vraag: string | null
          faq_5_antwoord: string | null
          faq_5_vraag: string | null
          gerelateerd_1_naam: string | null
          gerelateerd_2_naam: string | null
          gerelateerd_3_naam: string | null
          h1_content: string | null
          h1_image_alt: string | null
          h1_image_naam: string | null
          h1_title: string | null
          hero_description: string | null
          hero_subtitle: string | null
          hero_title: string | null
          hero_video: string | null
          id: number
          image_1: string | null
          image_2: string | null
          image_3: string | null
          image_4: string | null
          image_5: string | null
          landing_page: string | null
          rating_bedrijven: string | null
          rating_non_profit: string | null
          rating_scholen: string | null
          rating_sportclubs: string | null
          seo_content_1_text: string | null
          seo_content_1_title: string | null
          seo_content_2_text: string | null
          seo_content_2_title: string | null
          seo_content_3_text: string | null
          seo_content_3_title: string | null
          seo_content_4_text: string | null
          seo_content_4_title: string | null
          seo_content_5_text: string | null
          seo_content_5_title: string | null
          seo_description: string | null
          seo_title: string | null
          sort_order: number | null
          url_slug: string | null
          wat_is_beschrijving: string | null
          wat_is_image: string | null
          wat_is_image_alt: string | null
          wat_is_title: string | null
        }
        Insert: {
          event_category?: string | null
          event_emoji?: string | null
          faq_1_antwoord?: string | null
          faq_1_vraag?: string | null
          faq_2_antwoord?: string | null
          faq_2_vraag?: string | null
          faq_3_antwoord?: string | null
          faq_3_vraag?: string | null
          faq_4_antwoord?: string | null
          faq_4_vraag?: string | null
          faq_5_antwoord?: string | null
          faq_5_vraag?: string | null
          gerelateerd_1_naam?: string | null
          gerelateerd_2_naam?: string | null
          gerelateerd_3_naam?: string | null
          h1_content?: string | null
          h1_image_alt?: string | null
          h1_image_naam?: string | null
          h1_title?: string | null
          hero_description?: string | null
          hero_subtitle?: string | null
          hero_title?: string | null
          hero_video?: string | null
          id?: never
          image_1?: string | null
          image_2?: string | null
          image_3?: string | null
          image_4?: string | null
          image_5?: string | null
          landing_page?: string | null
          rating_bedrijven?: string | null
          rating_non_profit?: string | null
          rating_scholen?: string | null
          rating_sportclubs?: string | null
          seo_content_1_text?: string | null
          seo_content_1_title?: string | null
          seo_content_2_text?: string | null
          seo_content_2_title?: string | null
          seo_content_3_text?: string | null
          seo_content_3_title?: string | null
          seo_content_4_text?: string | null
          seo_content_4_title?: string | null
          seo_content_5_text?: string | null
          seo_content_5_title?: string | null
          seo_description?: string | null
          seo_title?: string | null
          sort_order?: number | null
          url_slug?: string | null
          wat_is_beschrijving?: string | null
          wat_is_image?: string | null
          wat_is_image_alt?: string | null
          wat_is_title?: string | null
        }
        Update: {
          event_category?: string | null
          event_emoji?: string | null
          faq_1_antwoord?: string | null
          faq_1_vraag?: string | null
          faq_2_antwoord?: string | null
          faq_2_vraag?: string | null
          faq_3_antwoord?: string | null
          faq_3_vraag?: string | null
          faq_4_antwoord?: string | null
          faq_4_vraag?: string | null
          faq_5_antwoord?: string | null
          faq_5_vraag?: string | null
          gerelateerd_1_naam?: string | null
          gerelateerd_2_naam?: string | null
          gerelateerd_3_naam?: string | null
          h1_content?: string | null
          h1_image_alt?: string | null
          h1_image_naam?: string | null
          h1_title?: string | null
          hero_description?: string | null
          hero_subtitle?: string | null
          hero_title?: string | null
          hero_video?: string | null
          id?: never
          image_1?: string | null
          image_2?: string | null
          image_3?: string | null
          image_4?: string | null
          image_5?: string | null
          landing_page?: string | null
          rating_bedrijven?: string | null
          rating_non_profit?: string | null
          rating_scholen?: string | null
          rating_sportclubs?: string | null
          seo_content_1_text?: string | null
          seo_content_1_title?: string | null
          seo_content_2_text?: string | null
          seo_content_2_title?: string | null
          seo_content_3_text?: string | null
          seo_content_3_title?: string | null
          seo_content_4_text?: string | null
          seo_content_4_title?: string | null
          seo_content_5_text?: string | null
          seo_content_5_title?: string | null
          seo_description?: string | null
          seo_title?: string | null
          sort_order?: number | null
          url_slug?: string | null
          wat_is_beschrijving?: string | null
          wat_is_image?: string | null
          wat_is_image_alt?: string | null
          wat_is_title?: string | null
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

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
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
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
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
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
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
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
