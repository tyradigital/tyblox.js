import EventEmitter = require("events");
import { body } from "./body";
import { response } from "./response";

export enum AvatarType {
  avatarThumbnail = "thumbnail",
  avatarHeadshot = "headshot",
  avatarBust = "bust",
}

export type ThumbnailAvatarSize =
  | "30x30"
  | "48x48"
  | "60x60"
  | "75x75"
  | "100x100"
  | "110x110"
  | "140x140"
  | "150x150"
  | "180x180"
  | "250x250"
  | "352x352"
  | "420x420"
  | "720x720";

export type BustAvatarSize =
  | "48x48"
  | "50x50"
  | "60x60"
  | "75x75"
  | "100x100"
  | "150x150"
  | "180x180"
  | "352x352"
  | "420x420";

export type HeadshotAvatarSize =
  | "48x48"
  | "50x50"
  | "60x60"
  | "75x75"
  | "100x100"
  | "110x110"
  | "150x150"
  | "180x180"
  | "352x352"
  | "420x420"
  | "720x720";

export type AvatarFormat = "Png" | "Jpeg";

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

export type Awaitable<T> = T | PromiseLike<T>;

export interface RobloxClientEvents {
  ready: [client: Client]
}

export class Client extends EventEmitter {
  public readonly cookie: string | null;
  public readonly token: string | null;
  public readonly user: User | null;
  public defaultGroup: number;

  public on<K extends keyof RobloxClientEvents>(
    event: K,
    listener: (...args: RobloxClientEvents[K]) => Awaitable<void>,
  ): this;

  public once<K extends keyof RobloxClientEvents>(
    event: K,
    listener: (...args: RobloxClientEvents[K]) => Awaitable<void>,
  ): this;

  public emit<K extends keyof RobloxClientEvents>(event: K, ...args: RobloxClientEvents[K]): boolean;

  public off<K extends keyof RobloxClientEvents>(
    event: K,
    listener: (...args: RobloxClientEvents[K]) => Awaitable<void>,
  ): this;

  public getToken(cookie?: string): string;
  public login(cookie: string): Promise<boolean>;
}

export interface Header {
  key: string;
  value: string;
}

export interface RequestOptions<T extends body> {
  url: string;
  headers?: Header[];
  cookie?: string;
  token?: string;
  body?: T;
  silenceErr: boolean;
}

export interface request {
  /**
   * Do a `GET` request to an API, usually roblox.
   * @example
   * request.get(...options);
   *
   * // or
   *
   * internal.reqest.get(...options);
   */
  get<T extends body, U extends response>(
    options: RequestOptions<T>
  ): Promise<U>;

  /**
   * Do a `POST` request to an API, usually roblox.
   * @example
   * request.post(...options);
   *
   * // or
   *
   * internal.request.post(...options);
   */
  post<T extends body, U extends response>(
    options: RequestOptions<T>
  ): Promise<U>;

  /**
   * Do a `PATCH` request to an API, usually roblox.
   * @example
   * request.patch(...options);
   *
   * // or
   *
   * internal.request.patch(...options);
   */
  patch<T extends body, U extends response>(
    options: RequestOptions<T>
  ): Promise<U>;
}
