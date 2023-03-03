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
}
