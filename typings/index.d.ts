import EventEmitter = require("events");

export enum AvatarType {
  "avatarThumbnail" = "thumbnail",
  "avatarHeadshot" = "headshot",
  "avatarBust" = "bust",
}

export interface AvatarObject {
  thumbnail: string | null;
  bust: string | null;
  headshot: string | null;
}

export interface UserConstructor {
  _cookie?: string;
  userId: number;
  username: string;
  displayName: string;
  hasPremium: boolean;
  banned: boolean;
  description: string;
}

export class User {
  private _cookie: string | null;
  private _previousNames: string[] | null;
  private _avatar: {
    headshot: string | null;
    avatarBust: string | null;
    avatarThumbnail: string | null;
  };
  public readonly userId: string | number;
  public readonly username: string;
  public readonly displayName: string | null;
  public readonly hasPremium: boolean;
  public readonly banned: boolean;
  public readonly description: string;
  public reloadAvatar(): Promise<void>;
  public cookieValid(): boolean;
  public limitedAccess(): boolean;
  public avatarUrl(type: AvatarType): string;
  public getPreviousNames(): Promise<string[] | null>;
  public changeUsername(newUsername: string): string;
  public changeDescription(newDescription: string): string;
}

export class Client extends EventEmitter {
  public readonly cookie: string | null;
  public readonly token: string | null;
  public readonly user: User | null;
  public defaultGroup: number;
  public getToken(): void;
  public login(): string;
}

export interface Header {
  key: string;
  value: string;
}

export interface RequestOptions {
  url: string;
  headers?: Header[];
  cookie?: string;
  token?: string;
  body?: any;
  silenceErr: boolean;
}
