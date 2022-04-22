import { RelationshipClass, StepSpec } from '@jupiterone/integration-sdk-core';
import { IntegrationConfig } from '../../../../src/config';

export const codeRepoSpec: StepSpec<IntegrationConfig>[] = [
  {
    /**
     * ENDPOINT: https://<portal>.travis-ci.com/repo
     * PATTERN: Build Relationships
     */
    id: 'build-user-and-code-repos-relationships',
    name: 'Build User And CodeRepos Relationship',
    entities: [
      {
        resourceName: 'CodeRepo',
        _type: 'travisci_coderepo',
        _class: ['CodeRepo'],
      },
    ],
    relationships: [
      {
        _type: 'travisci_user_created_coderepo',
        sourceType: 'travisci_user',
        _class: RelationshipClass.CREATED,
        targetType: 'travisci_coderepo',
      },
    ],
    dependsOn: ['fetch-account'],
    implemented: true,
  },
];
