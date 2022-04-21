import {
  RelationshipClass,
  StepEntityMetadata,
  StepRelationshipMetadata,
} from '@jupiterone/integration-sdk-core';

export const ACCOUNT_ENTITY_KEY = 'entity:account';

export const Steps = {
  ACCOUNT: 'fetch-account',
  BUILD_USER_AND_CODEREPOS_RELATIONSHIPS:
    'build-user-and-code-repos-relationships',
};

export const Entities: Record<
  'ACCOUNT' | 'USER' | 'CODEREPO',
  StepEntityMetadata
> = {
  ACCOUNT: {
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
  USER: {
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
  CODEREPO: {
    resourceName: 'CodeRepo',
    _type: 'travisci_coderepo',
    _class: ['CodeRepo'],
    schema: {
      properties: {
        id: { type: 'string' },
        public: { type: 'boolean' },
      },
      required: ['id', 'public'],
    },
  },
};

export const Relationships: Record<
  'ACCOUNT_IS_USER' | 'USER_CREATED_CODE_REPO',
  StepRelationshipMetadata
> = {
  ACCOUNT_IS_USER: {
    _type: 'travisci_account_is_user',
    sourceType: Entities.ACCOUNT._type,
    _class: RelationshipClass.IS,
    targetType: Entities.USER._type,
  },
  USER_CREATED_CODE_REPO: {
    _type: 'travisci_user_create_code_repo',
    sourceType: Entities.USER._type,
    _class: RelationshipClass.CREATED,
    targetType: Entities.CODEREPO._type,
  },
};
