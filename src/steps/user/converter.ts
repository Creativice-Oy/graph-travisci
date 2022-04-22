import {
  createIntegrationEntity,
  Entity,
} from '@jupiterone/integration-sdk-core';
import { Entities } from '../constants';
import { TravisCIUser } from '../../types';

export function getUserKey(id: number): string {
  return `travisci_user:${id.toString()}`;
}

export function createUserEntity(user: TravisCIUser): Entity {
  return createIntegrationEntity({
    entityData: {
      source: user,
      assign: {
        _key: getUserKey(user.id),
        _type: Entities.USER._type,
        _class: Entities.USER._class,
        id: user.id.toString(),
        username: user.login,
        email: user.email,
        active: true,
        name: user.name,
      },
    },
  });
}
