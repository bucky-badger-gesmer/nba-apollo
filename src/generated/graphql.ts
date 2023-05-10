import { GraphQLResolveInfo } from 'graphql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = T | undefined;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Nba = {
  __typename?: 'NBA';
  franchiseHistory?: Maybe<NbaFranchiseHistory>;
  playerIndex?: Maybe<Array<Maybe<NbaPlayerIndex>>>;
  /** @deprecated use playerIndex */
  players?: Maybe<Array<Maybe<NbaPlayer>>>;
  randomIndex?: Maybe<Scalars['Int']>;
};

export type NbaFranchise = {
  __typename?: 'NbaFranchise';
  conferenceTitles?: Maybe<Scalars['Int']>;
  divisionTitles?: Maybe<Scalars['Int']>;
  endYear?: Maybe<Scalars['String']>;
  games?: Maybe<Scalars['Int']>;
  leagueId?: Maybe<Scalars['String']>;
  leagueTitles?: Maybe<Scalars['Int']>;
  losses?: Maybe<Scalars['Int']>;
  playoffAppearances?: Maybe<Scalars['Int']>;
  startYear?: Maybe<Scalars['String']>;
  teamCity?: Maybe<Scalars['String']>;
  teamId?: Maybe<Scalars['ID']>;
  teamName?: Maybe<Scalars['String']>;
  winPct?: Maybe<Scalars['Float']>;
  wins?: Maybe<Scalars['Int']>;
  years?: Maybe<Scalars['Int']>;
};

export type NbaFranchiseHistory = {
  __typename?: 'NbaFranchiseHistory';
  defunctFranchises?: Maybe<Array<Maybe<NbaFranchise>>>;
  franchises?: Maybe<Array<Maybe<NbaFranchise>>>;
};

export type NbaPlayer = {
  __typename?: 'NbaPlayer';
  displayFirstLast?: Maybe<Scalars['String']>;
  displayLastCommaFirst?: Maybe<Scalars['String']>;
  fromYear?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  playerCode?: Maybe<Scalars['String']>;
  playerSlug?: Maybe<Scalars['String']>;
  toYear?: Maybe<Scalars['String']>;
};

export type NbaPlayerIndex = {
  __typename?: 'NbaPlayerIndex';
  active?: Maybe<Scalars['Boolean']>;
  career?: Maybe<NbaPlayerIndexCareer>;
  college?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  draft?: Maybe<NbaPlayerIndexDraft>;
  firstName?: Maybe<Scalars['String']>;
  headlineStats?: Maybe<NbaPlayerIndexHeadlineStats>;
  height?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  jerseyNumber?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  playerSlug?: Maybe<Scalars['String']>;
  position?: Maybe<Scalars['String']>;
  team?: Maybe<NbaPlayerIndexTeamInfo>;
  weight?: Maybe<Scalars['String']>;
};

export type NbaPlayerIndexCareer = {
  __typename?: 'NbaPlayerIndexCareer';
  fromYear?: Maybe<Scalars['String']>;
  toYear?: Maybe<Scalars['String']>;
};

export type NbaPlayerIndexDraft = {
  __typename?: 'NbaPlayerIndexDraft';
  pick?: Maybe<Scalars['Int']>;
  round?: Maybe<Scalars['Int']>;
  year?: Maybe<Scalars['Int']>;
};

export type NbaPlayerIndexHeadlineStats = {
  __typename?: 'NbaPlayerIndexHeadlineStats';
  assists?: Maybe<Scalars['Float']>;
  points?: Maybe<Scalars['Float']>;
  rebounds?: Maybe<Scalars['Float']>;
  timeFrame?: Maybe<Scalars['String']>;
};

export type NbaPlayerIndexTeamInfo = {
  __typename?: 'NbaPlayerIndexTeamInfo';
  abbreviation?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  _?: Maybe<Scalars['String']>;
  nba?: Maybe<Nba>;
};

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;

export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  Float: ResolverTypeWrapper<Scalars['Float']>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  NBA: ResolverTypeWrapper<Nba>;
  NbaFranchise: ResolverTypeWrapper<NbaFranchise>;
  NbaFranchiseHistory: ResolverTypeWrapper<NbaFranchiseHistory>;
  NbaPlayer: ResolverTypeWrapper<NbaPlayer>;
  NbaPlayerIndex: ResolverTypeWrapper<NbaPlayerIndex>;
  NbaPlayerIndexCareer: ResolverTypeWrapper<NbaPlayerIndexCareer>;
  NbaPlayerIndexDraft: ResolverTypeWrapper<NbaPlayerIndexDraft>;
  NbaPlayerIndexHeadlineStats: ResolverTypeWrapper<NbaPlayerIndexHeadlineStats>;
  NbaPlayerIndexTeamInfo: ResolverTypeWrapper<NbaPlayerIndexTeamInfo>;
  Query: ResolverTypeWrapper<{}>;
  String: ResolverTypeWrapper<Scalars['String']>;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Boolean: Scalars['Boolean'];
  Float: Scalars['Float'];
  ID: Scalars['ID'];
  Int: Scalars['Int'];
  NBA: Nba;
  NbaFranchise: NbaFranchise;
  NbaFranchiseHistory: NbaFranchiseHistory;
  NbaPlayer: NbaPlayer;
  NbaPlayerIndex: NbaPlayerIndex;
  NbaPlayerIndexCareer: NbaPlayerIndexCareer;
  NbaPlayerIndexDraft: NbaPlayerIndexDraft;
  NbaPlayerIndexHeadlineStats: NbaPlayerIndexHeadlineStats;
  NbaPlayerIndexTeamInfo: NbaPlayerIndexTeamInfo;
  Query: {};
  String: Scalars['String'];
}>;

export type NbaResolvers<ContextType = any, ParentType extends ResolversParentTypes['NBA'] = ResolversParentTypes['NBA']> = ResolversObject<{
  franchiseHistory?: Resolver<Maybe<ResolversTypes['NbaFranchiseHistory']>, ParentType, ContextType>;
  playerIndex?: Resolver<Maybe<Array<Maybe<ResolversTypes['NbaPlayerIndex']>>>, ParentType, ContextType>;
  players?: Resolver<Maybe<Array<Maybe<ResolversTypes['NbaPlayer']>>>, ParentType, ContextType>;
  randomIndex?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type NbaFranchiseResolvers<ContextType = any, ParentType extends ResolversParentTypes['NbaFranchise'] = ResolversParentTypes['NbaFranchise']> = ResolversObject<{
  conferenceTitles?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  divisionTitles?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  endYear?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  games?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  leagueId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  leagueTitles?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  losses?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  playoffAppearances?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  startYear?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  teamCity?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  teamId?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  teamName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  winPct?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  wins?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  years?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type NbaFranchiseHistoryResolvers<ContextType = any, ParentType extends ResolversParentTypes['NbaFranchiseHistory'] = ResolversParentTypes['NbaFranchiseHistory']> = ResolversObject<{
  defunctFranchises?: Resolver<Maybe<Array<Maybe<ResolversTypes['NbaFranchise']>>>, ParentType, ContextType>;
  franchises?: Resolver<Maybe<Array<Maybe<ResolversTypes['NbaFranchise']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type NbaPlayerResolvers<ContextType = any, ParentType extends ResolversParentTypes['NbaPlayer'] = ResolversParentTypes['NbaPlayer']> = ResolversObject<{
  displayFirstLast?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  displayLastCommaFirst?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  fromYear?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  playerCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  playerSlug?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  toYear?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type NbaPlayerIndexResolvers<ContextType = any, ParentType extends ResolversParentTypes['NbaPlayerIndex'] = ResolversParentTypes['NbaPlayerIndex']> = ResolversObject<{
  active?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  career?: Resolver<Maybe<ResolversTypes['NbaPlayerIndexCareer']>, ParentType, ContextType>;
  college?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  country?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  draft?: Resolver<Maybe<ResolversTypes['NbaPlayerIndexDraft']>, ParentType, ContextType>;
  firstName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  headlineStats?: Resolver<Maybe<ResolversTypes['NbaPlayerIndexHeadlineStats']>, ParentType, ContextType>;
  height?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  jerseyNumber?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  lastName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  playerSlug?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  position?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  team?: Resolver<Maybe<ResolversTypes['NbaPlayerIndexTeamInfo']>, ParentType, ContextType>;
  weight?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type NbaPlayerIndexCareerResolvers<ContextType = any, ParentType extends ResolversParentTypes['NbaPlayerIndexCareer'] = ResolversParentTypes['NbaPlayerIndexCareer']> = ResolversObject<{
  fromYear?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  toYear?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type NbaPlayerIndexDraftResolvers<ContextType = any, ParentType extends ResolversParentTypes['NbaPlayerIndexDraft'] = ResolversParentTypes['NbaPlayerIndexDraft']> = ResolversObject<{
  pick?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  round?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  year?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type NbaPlayerIndexHeadlineStatsResolvers<ContextType = any, ParentType extends ResolversParentTypes['NbaPlayerIndexHeadlineStats'] = ResolversParentTypes['NbaPlayerIndexHeadlineStats']> = ResolversObject<{
  assists?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  points?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  rebounds?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  timeFrame?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type NbaPlayerIndexTeamInfoResolvers<ContextType = any, ParentType extends ResolversParentTypes['NbaPlayerIndexTeamInfo'] = ResolversParentTypes['NbaPlayerIndexTeamInfo']> = ResolversObject<{
  abbreviation?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  city?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  slug?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  _?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  nba?: Resolver<Maybe<ResolversTypes['NBA']>, ParentType, ContextType>;
}>;

export type Resolvers<ContextType = any> = ResolversObject<{
  NBA?: NbaResolvers<ContextType>;
  NbaFranchise?: NbaFranchiseResolvers<ContextType>;
  NbaFranchiseHistory?: NbaFranchiseHistoryResolvers<ContextType>;
  NbaPlayer?: NbaPlayerResolvers<ContextType>;
  NbaPlayerIndex?: NbaPlayerIndexResolvers<ContextType>;
  NbaPlayerIndexCareer?: NbaPlayerIndexCareerResolvers<ContextType>;
  NbaPlayerIndexDraft?: NbaPlayerIndexDraftResolvers<ContextType>;
  NbaPlayerIndexHeadlineStats?: NbaPlayerIndexHeadlineStatsResolvers<ContextType>;
  NbaPlayerIndexTeamInfo?: NbaPlayerIndexTeamInfoResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
}>;

