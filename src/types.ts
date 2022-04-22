export type TravisCIRepository = {
  id: number;
  name: string;
  private?: boolean;
};

export type TravisCIUser = {
  id: number;
  login: string;
  name: string;
  github_id?: number;
  email: string;
};
