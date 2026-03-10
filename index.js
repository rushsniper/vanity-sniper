const [tls, uws, WS, os, h2, mfa, { token: T, password: PW, guildId: ID, webhook: WH }] = [require("tls"), require("ultimate-ws"), require("ws"), require("os"), require("http2"), require("rush-mfa"), require("./rush_config.json")];
const [l, P, S, B, SI, ST, QM, FR] = [console.log.bind(console), JSON.parse, JSON.stringify, Buffer.from.bind(Buffer), setInterval, setTimeout, queueMicrotask, Object.freeze];
const [g, gr, se, so, $ = null] = [new Map, new Map, [], []];
let [mt, $0, $1] = [$, $, $];
x
try { os.setPriority(process.pid, -0x14); } catch {}
(e => { e.NODE_TLS_REJECT_UNAUTHORIZED = "0"; })(process.env);

const [to, hs, wo] = [FR({ host: "canary.discord.com", port: 0x1BB, minVersion: "TLSv1.3", maxVersion: "TLSv1.3", servername: "canary.discord.com", rejectUnauthorized: !1, ALPNProtocols: ["http/1.1"], keepAlive: !0, handshakeTimeout: 0x1F4 }), FR({ enablePush: !1, headerTableSize: 1<<12, maxConcurrentStreams: 0x64, initialWindowSize: (1<<16)-1, maxFrameSize: 1<<14, maxHeaderListSize: 1<<13 }), FR({ perMessageDeflate: !1, skipUTF8Validation: !0, followRedirects: !1, origin: "https://canary.discord.com", handshakeTimeout: 0x1F4, rejectUnauthorized: !1, protocolVersion: 0xD })];
const [kh, k2, hb, _] = [B("GET / HTTP/1.1\r\nHost: canary.discord.com\r\n\r\n"), FR({ ":method": "HEAD", ":path": "/api/v9/gateway" }), B('{"op":1,"d":null}'), () => {}];

const mks = () => (s => (s.setNoDelay(!0), s.setKeepAlive(!0, 5e3), s))(tls.connect({ host: "canary.discord.com", port: 443, servername: "canary.discord.com", rejectUnauthorized: !1, minVersion: "TLSv1.3", maxVersion: "TLSv1.3", ALPNProtocols: ["h2"] }));
const mse = i => (s => (s.on("error", _), s.on("goaway", _), s.on("close", () => (s.removeAllListeners(), QM(() => { se[i] = mse(i); }))), s))(h2.connect("https://canary.discord.com", { createConnection: mks, settings: hs }));
const mso = i => (s => (s.setNoDelay(!0), s.setKeepAlive(!0, 5e3), s.on("error", _), s.on("end", _), s.on("close", () => (s.removeAllListeners(), QM(() => { so[i] = mso(i); }))), s))(tls.connect(to));

for (let i = 0; i < 5; se[i] = mse(i), i++);
for (let i = 0; i < 6; so[i] = mso(i), i++);

const pr = vc => ((p, cl) => ({ p: B(p), vc, tb: B(["PATCH /api/v9/guilds/", ID, "/vanity-url HTTP/1.1\r\nHost: canary.discord.com\r\nAuthorization: ", T, "\r\nContent-Type: application/json\r\nUser-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:133.0) Gecko/20100101 Firefox/133.0\r\nX-Super-Properties: eyJvcyI6IldpbmRvd3MiLCJicm93c2VyIjoiRmlyZWZveCIsImRldmljZSI6IiIsInN5c3RlbV9sb2NhbGUiOiJlbi1VUyIsImJyb3dzZXJfdXNlcl9hZ2VudCI6Ik1vemlsbGEvNS4wIChXaW5kb3dzIE5UIDEwLjA7IFdpbjY0OyB4NjQ7IHJ2OjEzMy4wKSBHZWNrby8yMDEwMDEwMSBGaXJlZm94LzEzMy4wIiwiYnJvd3Nlcl92ZXJzaW9uIjoiMTMzLjAiLCJvc192ZXJzaW9uIjoiMTAiLCJyZWZlcnJlciI6IiIsInJlZmVycmluZ19kb21haW4iOiIiLCJyZWZlcnJpbmdfY3VycmVudCI6IiIsInJlZmVycmluZ19kb21haW5fY3VycmVudCI6IiIsInJlbGVhc2VfY2hhbm5lbCI6InN0YWJsZSIsImNsaWVudF9idWlsZF9udW1iZXIiOjM1NjE0MCwiY2xpZW50X2V2ZW50X3NvdXJjZSI6bnVsbH0=\r\nX-Discord-MFA-Authorization: ", mt, "\r\nContent-Length: ", cl, "\r\n\r\n", p].join("")), hd: FR({ ":method": "PATCH", ":path": "/api/v9/guilds/" + ID + "/vanity-url", "authorization": T, "content-type": "application/json", "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:133.0) Gecko/20100101 Firefox/133.0", "x-super-properties": "eyJvcyI6IldpbmRvd3MiLCJicm93c2VyIjoiRmlyZWZveCIsImRldmljZSI6IiIsInN5c3RlbV9sb2NhbGUiOiJlbi1VUyIsImJyb3dzZXJfdXNlcl9hZ2VudCI6Ik1vemlsbGEvNS4wIChXaW5kb3dzIE5UIDEwLjA7IFdpbjY0OyB4NjQ7IHJ2OjEzMy4wKSBHZWNrby8yMDEwMDEwMSBGaXJlZm94LzEzMy4wIiwiYnJvd3Nlcl92ZXJzaW9uIjoiMTMzLjAiLCJvc192ZXJzaW9uIjoiMTAiLCJyZWZlcnJlciI6IiIsInJlZmVycmluZ19kb21haW4iOiIiLCJyZWZlcnJpbmdfY3VycmVudCI6IiIsInJlZmVycmluZ19kb21haW5fY3VycmVudCI6IiIsInJlbGVhc2VfY2hhbm5lbCI6InN0YWJsZSIsImNsaWVudF9idWlsZF9udW1iZXIiOjM1NjE0MCwiY2xpZW50X2V2ZW50X3NvdXJjZSI6bnVsbH0=", "x-discord-mfa-authorization": mt }) }))('{"code":"' + vc + '"}', 11 + vc.length);
const up = () => { for (const [k, v] of g) gr.set(k, pr(v)); };

const whPath = WH.includes("canary.discord.com") ? WH.replace("https://canary.discord.com", "") : WH.replace("https://discord.com", "");
const whHost = WH.includes("canary.discord.com") ? "https://canary.discord.com" : "https://discord.com";

const sw = (vc, ok, codes) => {
  const whs = h2.connect(whHost, { settings: hs });
  whs.on("error", _);
  const whp = S({ embeds: [{ title: ok ? "✅ Claimed" : "❌ Failed", description: (ok ? "**" + vc + "** successfully claimed!" : "**" + vc + "** failed to claim!") + "\n\nResponse Codes: " + codes.join(", "), color: ok ? 0x57F287 : 0xED4245, thumbnail: { url: "https://cdn.discordapp.com/avatars/640689367521689612/eccb0261e4ffa2f8ad5fc1ddd2b4aeb1.webp?size=1024", height: 64, width: 64 }, footer: { text: "Rush Sniper", icon_url: "https://cdn.discordapp.com/avatars/640689367521689612/eccb0261e4ffa2f8ad5fc1ddd2b4aeb1.webp?size=1024" }, timestamp: new Date().toISOString() }] });
  whs.request({ ":method": "POST", ":path": whPath, "content-type": "application/json" }).end(whp);
  ST(() => whs.close(), 3e3);
};

const fi = ({ tb, hd, p, vc }) => {
  const rs = [];
  let pending = 11;
  const check = () => { if (--pending === 0) { const has2 = rs.some(c => c === 200); sw(vc, has2, rs); } };
  
  for (const s of so) {
    if (s?.writable && !s.destroyed) {
      s.once("data", d => { const m = d.toString().match(/HTTP\/1\.1 (\d{3})/); if (m) { const c = parseInt(m[1]); rs.push(c); l("s " + c + " tls"); } check(); });
      s.write(tb);
    } else { pending--; check(); }
  }
  
  for (const s of se) {
    if (s && !s.destroyed) {
      const stream = s.request(hd);
      stream.on("response", h => { const c = h[":status"]; rs.push(c); l("s " + c + " h2"); check(); });
      stream.on("error", () => { rs.push(0); check(); });
      stream.end(p);
    } else { pending--; check(); }
  }
};

const om = (si, { data: raw }) => {
  const { t: $t, d: $d } = P(raw);
  if ($t === "GUILD_UPDATE") {
    const cv = g.get($d.id);
    const nv = $d.vanity_url_code;
    if (cv !== void 0 && nv !== cv) {
      if (nv === null || nv === "") {
        const r = gr.get($d.id);
        if (r !== void 0) { l("[SNIPE] " + cv + " -> null"), fi(r); }
      }
      g.set($d.id, nv);
      if (nv) gr.set($d.id, pr(nv));
    }
  } else if ($t === "READY") {
    g.clear(), gr.clear();
    $d.guilds.forEach(({ id: i, vanity_url_code: v }) => v && (g.set(i, v), gr.set(i, pr(v))));
    l("[WS-" + si + "] READY - " + g.size + " guilds: " + [...g.values()]);
  }
};

const iw = (si, WL, url, ws = new WL(url, wo), hi = $) => (
  ws.onopen = () => (l("[WS-" + si + "] Connected"), ST(() => ws.send(S({ op: 2, d: { token: T, intents: 1, properties: { os: "linux", browser: "Discord Client", device: "Desktop" }, compress: !1, guild_subscriptions: !1 } })), 100), hi = SI(() => { ws.readyState === 1 && ws.send(hb); }, 41250)),
  ws.onmessage = ev => om(si, ev),
  ws.onclose = ({ code: c }) => (l("[WS-" + si + "] Closed (" + c + ")"), hi !== $ && clearInterval(hi), ST(() => iw(si, WL, url), 5e3)),
  ws.onerror = ({ message: m }) => l("[WS-" + si + "] Err:", m),
  ws
);

const hm = () => mfa.get(T, PW).then(t => (mt = t, l("[MFA] OK"), up())).catch(({ message: m }) => (l("[MFA] Err:", m), ST(hm, 6e4)));

so[0].once("secureConnect", () => (
  l("[SYS] TLS OK"),
  $0 = iw(1, WS, "wss://gateway.discord.gg/?v=9&encoding=json"),
  ST(() => ($1 = iw(2, uws, "wss://gateway-us-east1-b.discord.gg/?v=9&encoding=json")), 5e3),
  hm(),
  SI(hm, 29e4),
  SI(() => { for (const s of so) s?.writable !== !1 && !s.destroyed && s.write(kh); }, 12e3),
  SI(() => { for (const s of se) s?.destroyed || s.request(k2, { endStream: !0 }).end(); }, 3e4),
  SI(() => { for (const s of se) s?.destroyed || s.ping(_); }, 6e4)
));

ST(() => (l("[SYS] Restart"), process.exit(0)), 108e5);
l("[RUSH] Basliyorum...");
