export default {
  // Application ===================================================================================
  host: 'localhost',
  port: 3030,
  public: '../public',
  paginate: {
    default: 10,
    max: 50
  },
  // Authentication ================================================================================
  authentication: {
    secret: '5cd5b228a097bc05204eb066ced5c7f4a0835f4f6eb41837c77391c31ec2af097fc82ef54bf905d41d00cad6999cc95e09b244c5270838b056969ff76d125156b7d44259d050cf67e90fcdabc8ffa792f7b305d4d813ba87d4bd38b4615d1d479739d83a11fca8f7d4c461f4edb4d0bfc8e39adc8120625e81c1c5dbdda05085f2c7d01f8f58aa7a563857f8be79146faa0c55cca3e2d20d1c32e2a82b8ed66b3858a981551f0c4919da39106a52151a05d56759b82afa609e4e0d8674bf55dd56df1c878fbc4d16f862b09b03077db3eb9c8223c93d005755750a9ca666c47d83b74ee6c6d129f3a795fd2e1d908fe14438c4816729540f959760efc1e4ec3d',
    strategies: [
      'jwt',
      'local'
    ],
    path: '/authentication',
    service: 'users',
    jwt: {
      header: {
        type: 'access'
      },
      audience: 'https://www.foo.bar',
      subject: 'anonymous',
      issuer: 'feathers',
      algorithm: 'HS256',
      expiresIn: '1d'
    },
    local: {
      entity: 'user',
      usernameField: 'email',
      passwordField: 'password'
    },
    google: {
      clientID: 'your google client id',
      clientSecret: 'your google client secret',
      successRedirect: '/',
      scope: [
        'profile openid email'
      ]
    },
    facebook: {
      clientID: 'your facebook client id',
      clientSecret: 'your facebook client secret',
      successRedirect: '/',
      scope: [
        'id',
        'displayName',
        'first_name',
        'last_name',
        'email',
        'gender',
        'profileUrl',
        'birthday',
        'picture',
        'permissions'
      ]
    },
    cookie: {
      enabled: true,
      name: 'feathers-jwt',
      httpOnly: false,
      secure: false
    }
  },
  // Database ======================================================================================
  rethinkdb: {
    db: 'foo_bar',
    servers: [
      {
        host: 'localhost',
        port: 28015
      }
    ]
  }
}