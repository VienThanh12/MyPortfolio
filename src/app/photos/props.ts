export interface IPhoto {
  id: string;
  slug: string;
  alternative_slugs: AlternativeSlugs;
  created_at: string;
  updated_at: string;
  promoted_at: null;
  width: number;
  height: number;
  color: string;
  blur_hash: string;
  description: null;
  alt_description: string;
  breadcrumbs: any[];
  urls: Urls;
  links: IPhotoLinks;
  likes: number;
  liked_by_user: boolean;
  current_user_collections: any[];
  sponsorship: null;
  topic_submissions: TopicSubmissions;
  asset_type: AssetType;
  user: User;
}

export interface AlternativeSlugs {
  en: string;
  es: string;
  ja: string;
  fr: string;
  it: string;
  ko: string;
  de: string;
  pt: string;
}

export enum AssetType {
  Photo = 'photo',
}

export interface IPhotoLinks {
  self: string;
  html: string;
  download: string;
  download_location: string;
}

export interface TopicSubmissions {}

export interface Urls {
  raw: string;
  full: string;
  regular: string;
  small: string;
  thumb: string;
  small_s3: string;
}

export interface User {
  id: ID;
  updated_at: string;
  username: Username;
  name: Name;
  first_name: FirstName;
  last_name: LastName;
  twitter_username: Username;
  portfolio_url: null;
  bio: Bio;
  location: null;
  links: UserLinks;
  profile_image: ProfileImage;
  instagram_username: Username;
  total_collections: number;
  total_likes: number;
  total_photos: number;
  total_promoted_photos: number;
  total_illustrations: number;
  total_promoted_illustrations: number;
  accepted_tos: boolean;
  for_hire: boolean;
  social: Social;
}

export enum Bio {
  HiItSMeJim = "hi, it's me Jim",
}

export enum FirstName {
  Jim = 'Jim',
}

export enum ID {
  NA01ZnyySVM = 'nA01ZnyySVM',
}

export enum Username {
  Jimcbl = 'jimcbl',
}

export enum LastName {
  Tran = 'Tran',
}

export interface UserLinks {
  self: string;
  html: string;
  photos: string;
  likes: string;
  portfolio: string;
  following: string;
  followers: string;
}

export enum Name {
  JimTran = 'Jim Tran',
}

export interface ProfileImage {
  small: string;
  medium: string;
  large: string;
}

export interface Social {
  instagram_username: Username;
  portfolio_url: null;
  twitter_username: Username;
  paypal_email: null;
}

