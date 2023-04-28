/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class PlayerControllerService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * @throws ApiError
     */
    public commonAllPlayers({
        leagueId,
        season,
        isOnlyCurrentSeason,
    }: {
        leagueId: string,
        season?: string,
        isOnlyCurrentSeason?: string,
    }): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/commonallplayers',
            query: {
                'LeagueID': leagueId,
                'Season': season,
                'IsOnlyCurrentSeason': isOnlyCurrentSeason,
            },
        });
    }

}
