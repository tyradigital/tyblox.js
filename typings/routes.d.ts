export interface v1_users_mobileapi_userinfo {
  UserID: string;
  UserName: string;
  RobuxBalance: number;
  ThumbnailUrl: string;
  IsAnyBuildersClub: boolean;
  IsPremium: boolean;
}

export interface v1_users_get_user_info_id {
  description: string;
  created: Date;
  isBanned: boolean;
  externalAppDisplayName: string;
  id: string;
  name: string;
  displayName: string;
}

export interface v1_users_username_history {
  prevousPageCursor: null;
  nextPageCursor: null;
  data: Array<{ name: string }>;
}

export interface v1_thumbnails_users_avatar {
  targetId: number;
  state: string;
  imageUrl: string;
}

export interface v1_thumbnails_user_avatars {
  data: Array<v1_thumbnails_users_avatar>;
}
