export interface headers {
  [key: string]: string;
}

export interface response {
  status: string;
  headers: headers;
}

export interface v1_users_mobileapi_userinfo extends response {
  data: {
    UserID: string;
    UserName: string;
    RobuxBalance: number;
    ThumbnailUrl: string;
    IsAnyBuildersClub: boolean;
    IsPremium: boolean;
  };
}

export interface v1_users_get_user_info_id extends response {
  data: {
    description: string;
    created: Date;
    isBanned: boolean;
    externalAppDisplayName: string;
    id: string;
    name: string;
    displayName: string;
  };
}

export interface v1_users_username_history extends response {
  data: {
    prevousPageCursor: null;
    nextPageCursor: null;
    data: Array<{ name: string }>;
  };
}

export interface v1_thumbnails_users_avatar {
  data: {
    targetId: number;
    state: string;
    imageUrl: string;
  };
}

export interface v1_thumbnails_user_avatars extends response {
  data: {
    data: Array<v1_thumbnails_users_avatar>;
  };
}

export interface v1_groups_info extends response {
  data: {
    id: number;
    name: string;
    description: string;
    owner: {
      buildersClubMembershipType: string;
      userId: number;
      username: string;
      displayName: string;
    };
    shout: {
      body: string;
      poster: {
        buildersClubMembershipType: string;
        userId: number;
        username: string;
        displayName: string;
      };
      created: Date;
      updated: Date;
    };
    memberCount: number;
    isBuildersClubOnly: boolean;
    publicEntryAllowed: boolean;
    isLocked: true;
  };
}

export interface v1_groups_roleset {
  id: string;
  name: string;
  rank: number;
  memberCount: number;
  description?: string;
}

export interface v1_groups_rolesets extends response {
  data: { groupId: string; roles: Array<v1_groups_roleset> };
}

export interface v2_groups_rank {
  group: {
    id: number;
    name: string;
    memberCount: number;
  };
  role: {
    id: number;
    name: string;
    rank: number;
  };
}
export interface v2_groups_ranks extends response {
  data: {
    data: Array<v2_groups_rank>;
  };
}
