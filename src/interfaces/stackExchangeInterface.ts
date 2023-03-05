export interface Owner {
  account_id: number;
  reputation: number;
  user_id: number;
  user_type: string;
  profile_image: string;
  display_name: string;
  link: string;
}

export interface SearchItem {
  tags: string[];
  owner: Owner,
  is_answered: boolean;
  view_count: number;
  closed_date: number;
  answer_count: number;
  score: number;
  last_activity_date: number;
  creation_date: number;
  last_edit_date: number;
  question_id: number;
  content_license: string;
  link: string;
  closed_reason: string;
  title: string;
}

export interface SearchResult {
  items: SearchItem[];
  has_more?: boolean;
  backoff?: number;
  quota_max?: number;
  quota_remaining?: number;
}

export interface SearchParams {
  page: number;
  pagesize: number;
  order: string;
  sort: string;
  intitle: string;
  site: string;
}

export interface UserItem {
  badge_counts: {
    bronze: number;
    silver: number;
    gold: number;
  },
  account_id: number;
  is_employee: boolean;
  last_access_date: number;
  last_modified_date?: number;
  accept_rate?: number;
  reputation_change_year: number;
  reputation_change_quarter: number;
  reputation_change_month: number;
  reputation_change_week: number;
  reputation_change_day: number;
  reputation: number;
  creation_date: number;
  user_type: string;
  user_id: number;
  link: string;
  profile_image: string;
  display_name: string;
  website_url?: string;
}

export interface UserResult {
  items: UserItem[];
  has_more?: boolean;
  backoff?: number;
  quota_max?: number;
  quota_remaining?: number;
}

export interface BadgeItem {
  badgeNumber: number;
  type: "gold" | "silver" | "bronze";
}

export interface UserParams {
  order: string;
  sort: string;
  site: string;
}
