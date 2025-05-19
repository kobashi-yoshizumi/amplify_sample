import { GraphQLAuthMode } from './amplifyAuthModes';

const amplifyConfig = {
  Auth: {
    Cognito: {
      // ✅ 必須: Cognito のリージョン
      region: "ap-northeast-1",

      // ✅ 必須: Cognito ユーザープールの情報
      userPoolId: "ap-northeast-1_406Pxjrwx",
      userPoolClientId: "3pnu1kinmuqr7hdl2g0p99tica",
    },
  },

  API: {
    GraphQL: {
      endpoint: "https://pzjdggifqfetjp3vr6awpcqtcq.appsync-api.ap-northeast-1.amazonaws.com/graphql",
      region: "ap-northeast-1",
      defaultAuthMode: GraphQLAuthMode.AMAZON_COGNITO_USER_POOLS, // Cognito User Pool を使用
    },
  },

};

export default amplifyConfig;
