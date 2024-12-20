import { Address, Company } from '@prisma/client';

export type TCompanyInput = Omit<
  Company & Address,
  | 'id'
  | 'createdAt'
  | 'updatedAt'
  | 'userId'
  | 'candidateId'
  | 'companyId'
  | 'experienceId'
  | 'jobId'
>;

export type TCompanyFilters = {
  companyName: string;
  address: string;
};
