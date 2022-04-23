export const environment = {
  production: true,
  ip: "https://api.storerhub.com",
  secretKey: "F4D3E4CB521DA3D85E7D787C2D1F6",
  configS3: {
      accessKeyId: 'CRFBBW2Z3WSJTICUSNWV',
      secretAccessKey: 'K0qpeGZ2PIfMPgYX57zAyf9J6lxSPHPvMJA7akwdZac',
      endpoint: 'https://sgp1.digitaloceanspaces.com',
      region: 'sgp1'
  },
  storageName: 'storerhub-storage',
  storageSubName: 'PROD',
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
      appId: '422457958714122',
      secretId: '3fc5e68e6b72606c74e2dca0557bb1c5'
  },
  apiKey: "AIzaSyCpVXrtgilZ7fw7TvAddX6KTm6M-Jvn0lw"
};