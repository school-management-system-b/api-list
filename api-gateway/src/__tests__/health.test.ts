import request from 'supertest';
import app from '../app';

describe('API Gateway Health Check', () => {
  it('should return 200 status', async () => {
    const response = await request(app).get('/health');
    expect(response.status).toBe(200);
  });

  it('should return UP status', async () => {
    const response = await request(app).get('/health');
    expect(response.body).toHaveProperty('status', 'UP');
  });

  it('should include service name', async () => {
    const response = await request(app).get('/health');
    expect(response.body).toHaveProperty('service');
  });

  it('should include timestamp', async () => {
    const response = await request(app).get('/health');
    expect(response.body).toHaveProperty('timestamp');
    expect(new Date(response.body.timestamp)).toBeInstanceOf(Date);
  });
});
