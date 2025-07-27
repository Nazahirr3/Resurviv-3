// prestigeSystem.js

// Stores all prestige points for players (simple version)
const prestigePoints = {}; // { playerId: prestigeValue }

// Stores which players you've voted for today
const votedPlayers = new Set();

// How many votes you have left per day
let votesLeftToday = 3;

export function getPrestige(playerId) {
    return prestigePoints[playerId] || 0;
}

export function canVoteFor(playerId) {
    return votesLeftToday > 0 && !votedPlayers.has(playerId);
}

export function endorsePlayer(playerId) {
    if (!canVoteFor(playerId)) return false;
    prestigePoints[playerId] = (prestigePoints[playerId] || 0) + 1;
    votedPlayers.add(playerId);
    votesLeftToday--;
    return true;
}

export function reportPlayer(playerId) {
    if (!canVoteFor(playerId)) return false;
    prestigePoints[playerId] = (prestigePoints[playerId] || 0) - 1;
    votedPlayers.add(playerId);
    votesLeftToday--;
    return true;
}

export function getVotesLeft() {
    return votesLeftToday;
}
