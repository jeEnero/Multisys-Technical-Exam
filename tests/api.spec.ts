import { test, expect } from '@playwright/test';
import { UsersApiService } from '../pages/ApiPage';

test.describe('API Endpoint Validation Test', () => {

  test('GET Request - Success and Validate Schema/Array', async ({ request }) => {
    const api = new UsersApiService(request);
    const response = await api.getUsers();
    

    expect(response.status()).toBe(200);

    const body = await response.json();
    

    expect(Array.isArray(body)).toBeTruthy();
    expect(body.length).toBe(10); 

  
    const firstUser = body[0];
    expect(firstUser).toHaveProperty('id', 1);
    expect(firstUser).toHaveProperty('name', 'Leanne Graham');
    expect(firstUser).toHaveProperty('email', 'Sincere@april.biz');
    

    expect(firstUser.address).toHaveProperty('city', 'Gwenborough');
    expect(firstUser.address.geo).toHaveProperty('lat', '-37.3159');
    
  
    expect(firstUser.company).toHaveProperty('name', 'Romaguera-Crona');
  });

  test('GET Request - Single Resource', async ({ request }) => {
    const api = new UsersApiService(request);
    const userId = 2; 
    const response = await api.getUserById(userId);
    
    expect(response.status()).toBe(200);

    const user = await response.json();
    
    expect(user.id).toBe(userId);
    expect(user.name).toBe('Ervin Howell');
    expect(user.username).toBe('Antonette');
    expect(user.address.street).toBe('Victor Plains');
  });

  test('POST Request - Data Creation', async ({ request }) => {
    const api = new UsersApiService(request);
    const newUserData = {
      name: 'Jerome Enero',
      username: 'jenero',
      email: 'jerome.enero@test.com'
    };

    const response = await api.createUser(newUserData);

   
    expect(response.status()).toBe(201);

    const createdUser = await response.json();


    expect(createdUser).toHaveProperty('id');
    expect(createdUser.name).toBe(newUserData.name);
    expect(createdUser.username).toBe(newUserData.username);
    expect(createdUser.email).toBe(newUserData.email);
  });

});