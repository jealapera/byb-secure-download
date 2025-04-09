import { generateDownloadToken, verifyToken } from './tokenService';

describe('Token Service', () => {
  it('generates and verifies token with correct payload', () => {
    const token = generateDownloadToken(1, 1);
    const payload = verifyToken(token) as any;

    expect(payload.userId).toBe(1);
    expect(payload.productId).toBe(1);
  });
});
