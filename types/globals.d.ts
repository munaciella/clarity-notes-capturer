import { User } from './types';

declare global {
  interface CustomJwtSessionClaims extends User {
    // Add a custom property to differentiate from User
    customProperty?: string
  }}
