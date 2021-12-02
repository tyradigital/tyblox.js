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
