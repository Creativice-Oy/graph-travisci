import {
  createDirectRelationship,
  Entity,
  IntegrationStep,
  IntegrationStepExecutionContext,
  RelationshipClass,
} from '@jupiterone/integration-sdk-core';

import { createAPIClient } from '../../client';
import { IntegrationConfig } from '../../config';
import {
  ACCOUNT_ENTITY_KEY,
  Steps,
  Entities,
  Relationships,
} from '../constants';
import { getUserKey } from '../user/converter';
import { createCodeRepoEntity } from './converter';

export async function buildUserAndCodeReposRelationship({
  instance,
  jobState,
}: IntegrationStepExecutionContext<IntegrationConfig>) {
  const apiClient = createAPIClient(instance.config);
  const accountEntity = (await jobState.getData(ACCOUNT_ENTITY_KEY)) as Entity;
  const userEntity = (await jobState.findEntity(
    getUserKey(Number(accountEntity.id)),
  )) as Entity;

  await apiClient.fetchCodeRepos(async (repository) => {
    const codeRepoEntity = createCodeRepoEntity(repository);

    await jobState.addEntity(codeRepoEntity);

    await jobState.addRelationship(
      createDirectRelationship({
        _class: RelationshipClass.CREATED,
        from: userEntity,
        to: codeRepoEntity,
      }),
    );
  });
}

export const codeRepoSteps: IntegrationStep<IntegrationConfig>[] = [
  {
    id: Steps.BUILD_USER_AND_CODEREPOS_RELATIONSHIPS,
    name: 'Build User And CodeRepos Relationship',
    entities: [Entities.CODEREPO],
    relationships: [Relationships.USER_CREATED_CODEREPO],
    dependsOn: [Steps.ACCOUNT],
    executionHandler: buildUserAndCodeReposRelationship,
  },
];
