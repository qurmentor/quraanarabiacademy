// Quraan Arabi Academy — Zero-Dependency Public Supabase Client
// Works everywhere: https:// (GitHub Pages / Custom Domain), http://localhost, AND file:// (local testing).
// Uses ONLY the public publishable key; all writes go through validated SECURITY DEFINER RPCs
// and a write-only private Storage dropbox (placement-media). Public visitors cannot read any row.
(function () {
  var SUPABASE_URL = 'https://tqycfoohyzsrbsvnqrxv.supabase.co';
  var SUPABASE_PUBLISHABLE_KEY = 'sb_publishable_mefnOJtWXeWkUSiuXObJJA_9qJAD__y';

  function baseHeaders(extra) {
    var headers = {
      'apikey': SUPABASE_PUBLISHABLE_KEY,
      'Authorization': 'Bearer ' + SUPABASE_PUBLISHABLE_KEY
    };
    if (extra) {
      Object.keys(extra).forEach(function (k) {
        if (extra[k] !== undefined && extra[k] !== null) {
          headers[k] = extra[k];
        }
      });
    }
    return headers;
  }

  function encodeStoragePath(path) {
    return String(path || '')
      .split('/')
      .map(function (seg) { return encodeURIComponent(seg); })
      .join('/');
  }

  async function parseResponseBody(res) {
    var text = await res.text();
    if (!text) return null;
    try {
      return JSON.parse(text);
    } catch (_) {
      return text;
    }
  }

  var client = {
    url: SUPABASE_URL,

    rpc: async function (fnName, params) {
      try {
        var res = await fetch(SUPABASE_URL + '/rest/v1/rpc/' + encodeURIComponent(fnName), {
          method: 'POST',
          headers: baseHeaders({ 'Content-Type': 'application/json' }),
          body: JSON.stringify(params || {})
        });
        var body = await parseResponseBody(res);
        if (!res.ok) {
          var msg = (body && (body.message || body.error || body.hint)) || ('HTTP ' + res.status);
          return { data: null, error: { message: String(msg), status: res.status, details: body } };
        }
        return { data: body, error: null };
      } catch (err) {
        return { data: null, error: { message: err && err.message ? err.message : 'Network error' } };
      }
    },

    storage: {
      from: function (bucket) {
        return {
          upload: async function (path, file, options) {
            try {
              var opts = options || {};
              var contentType = (opts.contentType) || (file && file.type) || 'application/octet-stream';
              var endpoint = SUPABASE_URL + '/storage/v1/object/' + encodeURIComponent(bucket) + '/' + encodeStoragePath(path);
              var res = await fetch(endpoint, {
                method: 'POST',
                headers: baseHeaders({
                  'Content-Type': contentType,
                  'x-upsert': opts.upsert ? 'true' : 'false'
                }),
                body: file
              });
              var body = await parseResponseBody(res);
              if (!res.ok) {
                var msg = (body && (body.message || body.error)) || ('Upload failed (HTTP ' + res.status + ')');
                return { data: null, error: { message: String(msg), status: res.status, details: body } };
              }
              return { data: body, error: null };
            } catch (err) {
              return { data: null, error: { message: err && err.message ? err.message : 'Upload network error' } };
            }
          }
        };
      }
    }
  };

  window._QAA_SUPABASE = client;
  try {
    window.dispatchEvent(new CustomEvent('qaa-supabase-ready'));
  } catch (_) {}
  console.log('✅ Supabase ready — Quraan Arabi Academy');
})();
