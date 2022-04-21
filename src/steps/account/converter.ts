import {
  createIntegrationEntity,
  Entity,
} from '@jupiterone/integration-sdk-core';

import { Entities } from '../constants';

export function getAccountKey(id: number): string {
  return `travisci_account:${id.toString()}`;
}

export function createAccountEntity(account: {
  id: number;
  email: string;
  hostname: string;
  name: string;
}): Entity {
  return createIntegrationEntity({
    entityData: {
      source: account,
      assign: {
        _key: getAccountKey(account.id),
        _type: Entities.ACCOUNT._type,
        _class: Entities.ACCOUNT._class,
        id: account.id.toString(),
        email: account.email,
        hostname: account.hostname,
        name: account.name,
      },
    },
  });
}
