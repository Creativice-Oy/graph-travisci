import { RelationshipClass, StepSpec } from '@jupiterone/integration-sdk-core';
import { IntegrationConfig } from '../../../../src/config';

export const accountSpec: StepSpec<IntegrationConfig>[] = [
  {
    /**
     * ENDPOINT: https://<portal>.travis-ci.com/user
     * PATTERN: Singleton
     */
    id: 'fetch-account',
    name: 'Fetch Account Details',
    entities: [
      {
        resourceName: 'Account',
        _type: 'travisci_account',
        _class: ['Account'],
        schema: {
          properties: {
            id: { type: 'string' },
            email: { type: 'string' },
            hostname: { type: 'string' },
            name: { type: 'string' },
          },
          required: ['id', 'email', 'hostname', 'name'],
        },
      },
      {
        resourceName: 'User',
        _type: 'travisci_user',
        _class: ['User'],
        schema: {
          properties: {
            id: { type: 'string' },
            username: { type: 'string' },
            email: { type: 'string' },
            active: { type: 'boolean' },
            name: { type: 'string' },
          },
          required: ['id', 'username', 'email', 'active', 'name'],
        },
      },
    ],
    relationships: [
      {
        _type: 'travisci_account_is_user',
        sourceType: 'travisci_account',
        _class: RelationshipClass.IS,
        targetType: 'travisci_user',
      },
    ],
    dependsOn: [],
    implemented: true,
  },
];
