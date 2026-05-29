// auth module
export function verifyToken(token: string): boolean {
  return token.length > 0;
}
