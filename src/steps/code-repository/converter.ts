import {
  createIntegrationEntity,
  Entity,
} from '@jupiterone/integration-sdk-core';

import { Entities } from '../constants';
import { TravisCIRepository } from '../../types';

export function getCodeRepoKey(id: number): string {
  return `travisci_coderepo:${id.toString()}`;
}

export function createCodeRepoEntity(coderepo: TravisCIRepository): Entity {
  return createIntegrationEntity({
    entityData: {
      source: coderepo,
      assign: {
        _key: getCodeRepoKey(coderepo.id),
        _type: Entities.CODEREPO._type,
        _class: Entities.CODEREPO._class,
        id: coderepo.id.toString(),
        public: !coderepo.private,
      },
    },
  });
}
