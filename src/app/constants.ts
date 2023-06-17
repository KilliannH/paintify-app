import jwt_decode from 'jwt-decode';

export default {
    appName: 'Paintify',
    jwtTokenName: 'paintify_token',
    getDecodedAccessToken: (token: string): any => {
        try {
          return jwt_decode(token);
        } catch(Error) {
          return null;
        }
      }
}