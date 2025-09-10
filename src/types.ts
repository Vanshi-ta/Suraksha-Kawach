export enum UserRole {
  STUDENT = 'Student',
  TEACHER = 'Teacher',
  ADMIN = 'Administrator',
}

export interface User {
  name: string;
  role: UserRole;
  schoolId?: string;
}
