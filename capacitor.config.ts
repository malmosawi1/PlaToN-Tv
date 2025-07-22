
import { CapacitorConfig } from '@capacitor/core';

const config: CapacitorConfig = {
  appId: 'app.lovable.c21cce1255614be9be0228c8fd6ea787',
  appName: 'MyTV+ - Live TV Streaming',
  webDir: 'dist',
  server: {
    url: 'https://c21cce12-5561-4be9-be02-28c8fd6ea787.lovableproject.com?forceHideBadge=true',
    cleartext: true
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 2000,
      backgroundColor: '#0f172a',
      showSpinner: true,
      androidSpinnerStyle: 'large',
      iosSpinnerStyle: 'small',
    },
  },
};

export default config;
