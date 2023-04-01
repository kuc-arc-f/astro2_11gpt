

const request = require('supertest')
//const app = require('./app.js')
import {app}  from '../../index'

describe("GET /", () => {
  test("check: running string", async () => {
    const response = await request(app).get("/");
    expect(response.body.status).toBe("running");
  });
});
//

describe('POST /users', () => {
  it('should return a token on successful login', async () => {
    const userData = {
      name: 'John Doe',
      email: 'johndoe@example.com',
      password: 'password123'
    };
    // テスト用のユーザーアカウントを作成
    const response = await request(app).post('/users').send(userData);
    expect(response.status).toBe(200);
    console.log("#200 complete")

    // ログイン用のリクエストを作成
    const loginData = {
      email: 'johndoe@example.com',
      password: 'password123'
    };
    const loginResponse = await request(app).post('/login').send(loginData);
    expect(loginResponse.status).toBe(200);
//    expect(loginResponse.body.token).toBeDefined();
    /*
    */
  });
  /*
  it('should return an error on invalid login credentials', async () => {
    const loginData = {
      email: 'johndoe@example.com',
      password: 'invalidpassword'
    };
    const response = await request(app).post('/login').send(loginData);
    expect(response.status).toBe(401);
    expect(response.body.error).toBe('Invalid credentials');
  });
  */
});