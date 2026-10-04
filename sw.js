// アプリとしてインストールできるようにするための最小限のサービスワーカー。
// データや画面はキャッシュせず、毎回インターネットから最新を読み込む（更新がすぐ反映されるように）。
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', () => {});
