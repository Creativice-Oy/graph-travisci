// export type TravisCIBranch = {
//   name: string;
//   repository: TravisCIRepository;
//   default_branch?: boolean;
//   exists_on_github?: boolean;
// }

// export type TravisCIOwner = {
//   id: number;
//   login: string;
//   name: string;
//   github_id?: number;
//   vcs_id?: any;
//   vcs_type: any;
//   avatar_url?: string;
//   education?: boolean;
//   allow_migration?: any;
//   allowance?: any;
//   ro_mode: any;
// }

export type TravisCIRepository = {
  id: number;
  name: string;
  // slug: string;
  // description?: string;
  // github_id?: number;
  // vcs_id?: any;
  // vcs_type?: any;
  // github_language?: string;
  // active?: boolean;
  private?: boolean;
  // owner?: TravisCIOwner;
  // owner_name?: any;
  // vcs_name?: any;
  // default_branch?: TravisCIBranch;
  // starred?: boolean;
  // managed_by_installation?: boolean;
  // active_on_org?: any;
  // migration_status?: any;
  // history_migration_status?: any;
  // shared?: any;
  // config_validation?: any;
};

export type TravisCIUser = {
  id: number;
  login: string;
  name: string;
  github_id?: number;
  // vcs_id?: any;
  // vcs_type: any;
  // avatar_url?: string;
  // education?: boolean;
  // allow_migration?: any;
  // allowance?: any;
  // ro_mode: any;
  email: any;
  // is_syncing?: boolean;
  // synced_at?: string;
  // recently_signed_up?: any;
  // secure_user_hash?: any;
  // confirmed_at?: any;
};
