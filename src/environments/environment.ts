export const environment = {
  production: true,
  ip: "http://localhost:3000",
  secretKey: "F4D3E4CB521DA3D85E7D787C2D1F6",
  configS3: {
      accessKeyId: 'CRFBBW2Z3WSJTICUSNWV',
      secretAccessKey: 'K0qpeGZ2PIfMPgYX57zAyf9J6lxSPHPvMJA7akwdZac',
      endpoint: 'https://sgp1.digitaloceanspaces.com',
      region: 'sgp1'
  },
  storageName: 'storerhub-storage',
  storageSubName: 'QA',
  appConfigPath: '/assets/config/app.config.json',
  mqtt: {
      server: 'mqtt.smartwip.io',
      path: '/mqtt',
      port: 9001,
      protocol: 'wss',
      username: 'smartwip',
      password: 'a1e8e5abf97448b08a6ea780b3f77422'
  },
  faceBookConfig: {
      appId: '650853282463426',
      secretId: 'a97e8d161a20d0678fe0daafa9a09aae'
  },
  apiKey: "AIzaSyAu6ZiuXJNJS_pEIhgHHhu5f4KGPGIiiRU"
};