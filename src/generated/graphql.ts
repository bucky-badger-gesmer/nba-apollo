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

export type Franchise = {
  __typename?: 'Franchise';
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

export type FranchiseHistory = {
  __typename?: 'FranchiseHistory';
  defunctFranchises?: Maybe<Array<Maybe<Franchise>>>;
  franchises?: Maybe<Array<Maybe<Franchise>>>;
};

export type Nba = {
  __typename?: 'NBA';
  franchiseHistory?: Maybe<FranchiseHistory>;
  players?: Maybe<Array<Maybe<Player>>>;
};

export type Player = {
  __typename?: 'Player';
  displayFirstLast?: Maybe<Scalars['String']>;
  displayLastCommaFirst?: Maybe<Scalars['String']>;
  fromYear?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  playerCode?: Maybe<Scalars['String']>;
  playerSlug?: Maybe<Scalars['String']>;
  toYear?: Maybe<Scalars['String']>;
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
  Franchise: ResolverTypeWrapper<Franchise>;
  FranchiseHistory: ResolverTypeWrapper<FranchiseHistory>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  NBA: ResolverTypeWrapper<Nba>;
  Player: ResolverTypeWrapper<Player>;
  Query: ResolverTypeWrapper<{}>;
  String: ResolverTypeWrapper<Scalars['String']>;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Boolean: Scalars['Boolean'];
  Float: Scalars['Float'];
  Franchise: Franchise;
  FranchiseHistory: FranchiseHistory;
  ID: Scalars['ID'];
  Int: Scalars['Int'];
  NBA: Nba;
  Player: Player;
  Query: {};
  String: Scalars['String'];
}>;

export type FranchiseResolvers<ContextType = any, ParentType extends ResolversParentTypes['Franchise'] = ResolversParentTypes['Franchise']> = ResolversObject<{
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

export type FranchiseHistoryResolvers<ContextType = any, ParentType extends ResolversParentTypes['FranchiseHistory'] = ResolversParentTypes['FranchiseHistory']> = ResolversObject<{
  defunctFranchises?: Resolver<Maybe<Array<Maybe<ResolversTypes['Franchise']>>>, ParentType, ContextType>;
  franchises?: Resolver<Maybe<Array<Maybe<ResolversTypes['Franchise']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type NbaResolvers<ContextType = any, ParentType extends ResolversParentTypes['NBA'] = ResolversParentTypes['NBA']> = ResolversObject<{
  franchiseHistory?: Resolver<Maybe<ResolversTypes['FranchiseHistory']>, ParentType, ContextType>;
  players?: Resolver<Maybe<Array<Maybe<ResolversTypes['Player']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PlayerResolvers<ContextType = any, ParentType extends ResolversParentTypes['Player'] = ResolversParentTypes['Player']> = ResolversObject<{
  displayFirstLast?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  displayLastCommaFirst?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  fromYear?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  playerCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  playerSlug?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  toYear?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  _?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  nba?: Resolver<Maybe<ResolversTypes['NBA']>, ParentType, ContextType>;
}>;

export type Resolvers<ContextType = any> = ResolversObject<{
  Franchise?: FranchiseResolvers<ContextType>;
  FranchiseHistory?: FranchiseHistoryResolvers<ContextType>;
  NBA?: NbaResolvers<ContextType>;
  Player?: PlayerResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
}>;

