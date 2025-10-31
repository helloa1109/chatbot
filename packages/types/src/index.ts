export interface User {
    id: string;
    name: string;
    email: string;
  }
  
  export interface ApiResponse<T> {
    data: T;
    message?: string;
    success: boolean;
  }
  
  export type Theme = 'light' | 'dark' | 'system';
  
  export type Size = 'sm' | 'md' | 'lg' | 'xl';