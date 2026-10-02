import { APIRequestContext } from '@playwright/test';

export class UsersApiService {
  private baseURL = 'https://jsonplaceholder.typicode.com';

  constructor(private request: APIRequestContext) {}

  async getUsers() {
    return await this.request.get(`${this.baseURL}/users`);
  }

  async getUserById(id: number) {
    return await this.request.get(`${this.baseURL}/users/${id}`);
  }

  async createUser(userData: { name: string; username: string; email: string }) {
    return await this.request.post(`${this.baseURL}/users`, {
      data: userData,
    });
  }
}