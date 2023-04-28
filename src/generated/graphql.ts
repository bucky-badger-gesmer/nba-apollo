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

/** Available fields returned per player when commonAllPlayers is called */
export type CommonPlayer = {
  __typename?: 'CommonPlayer';
  displayFirstLast?: Maybe<Scalars['String']>;
  displayLastCommaFirst?: Maybe<Scalars['String']>;
  fromYear?: Maybe<Scalars['String']>;
  gamesPlayedFlag?: Maybe<Scalars['String']>;
  otherLeagueExperienceCh?: Maybe<Scalars['String']>;
  playerCode?: Maybe<Scalars['String']>;
  playerId?: Maybe<Scalars['String']>;
  playerSlug?: Maybe<Scalars['String']>;
  rosterStatus?: Maybe<Scalars['String']>;
  teamAbbreviation?: Maybe<Scalars['String']>;
  teamCity?: Maybe<Scalars['String']>;
  teamCode?: Maybe<Scalars['String']>;
  teamId?: Maybe<Scalars['String']>;
  teamName?: Maybe<Scalars['String']>;
  teamSlug?: Maybe<Scalars['String']>;
  toYear?: Maybe<Scalars['String']>;
};

export type CommonTeam = {
  __typename?: 'CommonTeam';
  abbreviation?: Maybe<Scalars['String']>;
  location?: Maybe<Scalars['String']>;
  simpleName?: Maybe<Scalars['String']>;
  teamId?: Maybe<Scalars['String']>;
  teamName?: Maybe<Scalars['String']>;
};

export type Player = {
  __typename?: 'Player';
  commonAllPlayers?: Maybe<Array<Maybe<CommonPlayer>>>;
};

export type Query = {
  __typename?: 'Query';
  _?: Maybe<Scalars['String']>;
  player?: Maybe<Player>;
  team?: Maybe<Team>;
};

export type Team = {
  __typename?: 'Team';
  commonAllTeams?: Maybe<Array<Maybe<CommonTeam>>>;
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
  CommonPlayer: ResolverTypeWrapper<CommonPlayer>;
  CommonTeam: ResolverTypeWrapper<CommonTeam>;
  Player: ResolverTypeWrapper<Player>;
  Query: ResolverTypeWrapper<{}>;
  String: ResolverTypeWrapper<Scalars['String']>;
  Team: ResolverTypeWrapper<Team>;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Boolean: Scalars['Boolean'];
  CommonPlayer: CommonPlayer;
  CommonTeam: CommonTeam;
  Player: Player;
  Query: {};
  String: Scalars['String'];
  Team: Team;
}>;

export type CommonPlayerResolvers<ContextType = any, ParentType extends ResolversParentTypes['CommonPlayer'] = ResolversParentTypes['CommonPlayer']> = ResolversObject<{
  displayFirstLast?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  displayLastCommaFirst?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  fromYear?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  gamesPlayedFlag?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  otherLeagueExperienceCh?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  playerCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  playerId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  playerSlug?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  rosterStatus?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  teamAbbreviation?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  teamCity?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  teamCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  teamId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  teamName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  teamSlug?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  toYear?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CommonTeamResolvers<ContextType = any, ParentType extends ResolversParentTypes['CommonTeam'] = ResolversParentTypes['CommonTeam']> = ResolversObject<{
  abbreviation?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  location?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  simpleName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  teamId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  teamName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PlayerResolvers<ContextType = any, ParentType extends ResolversParentTypes['Player'] = ResolversParentTypes['Player']> = ResolversObject<{
  commonAllPlayers?: Resolver<Maybe<Array<Maybe<ResolversTypes['CommonPlayer']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  _?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  player?: Resolver<Maybe<ResolversTypes['Player']>, ParentType, ContextType>;
  team?: Resolver<Maybe<ResolversTypes['Team']>, ParentType, ContextType>;
}>;

export type TeamResolvers<ContextType = any, ParentType extends ResolversParentTypes['Team'] = ResolversParentTypes['Team']> = ResolversObject<{
  commonAllTeams?: Resolver<Maybe<Array<Maybe<ResolversTypes['CommonTeam']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Resolvers<ContextType = any> = ResolversObject<{
  CommonPlayer?: CommonPlayerResolvers<ContextType>;
  CommonTeam?: CommonTeamResolvers<ContextType>;
  Player?: PlayerResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Team?: TeamResolvers<ContextType>;
}>;

