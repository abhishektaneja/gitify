import {Reason, SubjectType} from '../../types/github';

// prettier-ignore
const DESCRIPTIONS = {
    ASSIGN: 'You were assigned to the issue.',
    AUTHOR: 'You created the thread.',
    COMMENT: 'You commented on the thread.',
    INVITATION: 'You accepted an invitation to contribute to the repository.',
    MANUAL: 'You subscribed to the thread (via an issue or pull request).',
    MENTION: 'You were specifically @mentioned in the content.',
    REVIEW_REQUESTED: "You, or a team you're a member of, were requested to review a pull request.",
    SECURITY_ALERT: 'GitHub discovered a security vulnerability in your repository.',
    STATE_CHANGE: 'You changed the thread state (for example, closing an issue or merging a pull request).',
    SUBSCRIBED: "You're watching the repository.",
    TEAM_MENTION: 'You were on a team that was mentioned.',
    CI_ACTIVITY: 'A GitHub Actions workflow run was triggered for your repository',
    UNKNOWN: 'The reason for this notification is not supported by the app.',
};

export function formatReason(
    reason: Reason, context: string,
): { type: string; description: string } {
    // prettier-ignore
    let result = {type: 'Unknown', description: DESCRIPTIONS['UNKNOWN']};
    switch (reason) {
        case 'assign':
            result = {type: 'Assign', description: DESCRIPTIONS['ASSIGN']};
            break
        case 'author':
            result = {type: 'Author', description: DESCRIPTIONS['AUTHOR']};
            break;
        case 'comment':
            result = {type: 'Comment', description: DESCRIPTIONS['COMMENT']};
            break;
        case 'invitation':
            result = {type: 'Invitation', description: DESCRIPTIONS['INVITATION']};
            break;
        case 'manual':
            result = {type: 'Manual', description: DESCRIPTIONS['MANUAL']};
            break;
        case 'mention':
            result = {type: 'Mention', description: DESCRIPTIONS['MENTION']};
            break;
        case 'review_requested':
            result = {type: 'Review Requested', description: DESCRIPTIONS['REVIEW_REQUESTED']};
            break;
        case 'security_alert':
            result = {type: 'Security Alert', description: DESCRIPTIONS['SECURITY_ALERT']};
            break;
        case 'state_change':
            result = {type: 'State Change', description: DESCRIPTIONS['STATE_CHANGE']};
            break;
        case 'subscribed':
            result = {type: 'Subscribed', description: DESCRIPTIONS['SUBSCRIBED']};
            break;
        case 'team_mention':
            result = {type: 'Team Mention', description: DESCRIPTIONS['TEAM_MENTION']};
            break;
        case 'ci_activity':
            result = {type: 'Workflow Run', description: DESCRIPTIONS['CI_ACTIVITY']};
            break;
        default:
            result = {type: 'Unknown', description: DESCRIPTIONS['UNKNOWN']};
    }
    if (context !== "") {
        result.type = `${context} - ${result.type}`
    }
    return result;
}

export function getNotificationIconColor(type: SubjectType): string {
    return 'black';
}


export function getNotificationTypeIcon(type: string): string {
    switch (type) {
        case 'Issue':
            return 'issue-opened';
        case 'PullRequest':
            return 'git-pull-request';
        case 'PullRequestMerged':
            return 'git-merge';
        case 'Commit':
            return 'git-commit';
        case 'Release':
            return 'tag';
        case 'RepositoryVulnerabilityAlert':
            return 'alert';
        case 'CheckSuite':
            return 'sync';
        default:
            return 'question';
    }
}
