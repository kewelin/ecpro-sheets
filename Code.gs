/**
 * ECPRO 電商博士 — Google Sheets 自訂函式
 * 在試算表直接查台灣網站的開店平台、廣告投放、技術與流量。資料來源 ecpro.tw。
 *
 * 安裝：開 Google 試算表 → 擴充功能 → Apps Script → 貼上本檔 → 儲存。
 * 之後在儲存格輸入 =ECPRO_PLATFORM("pinkoi.com") 即可。
 */

var ECPRO_BASE = 'https://ecpro.pages.dev/api/v1';

function ecpro_(path) {
  var res = UrlFetchApp.fetch(ECPRO_BASE + path, { muteHttpExceptions: true, headers: { accept: 'application/json' } });
  return JSON.parse(res.getContentText());
}

/**
 * 偵測網站的開店平台。
 * @param {string} domain 網域，例如 "pinkoi.com"
 * @return 開店平台名稱
 * @customfunction
 */
function ECPRO_PLATFORM(domain) {
  if (!domain) return '';
  var d = ecpro_('/detect?url=' + encodeURIComponent(domain));
  return d.ok ? d.platform : '查詢失敗';
}

/**
 * 偵測網站在哪些平台投廣告（廣告像素）。
 * @param {string} domain 網域
 * @return 投放平台，以、分隔
 * @customfunction
 */
function ECPRO_ADS(domain) {
  if (!domain) return '';
  var d = ecpro_('/detect?url=' + encodeURIComponent(domain));
  return d.ok ? (d.ads || []).join('、') : '查詢失敗';
}

/**
 * 偵測到的技術數量。
 * @param {string} domain 網域
 * @return 技術數
 * @customfunction
 */
function ECPRO_TECHCOUNT(domain) {
  if (!domain) return '';
  var d = ecpro_('/detect?url=' + encodeURIComponent(domain));
  return d.ok ? d.techCount : '';
}

/**
 * 資料庫中的台灣月造訪估算。
 * @param {string} domain 網域
 * @return 月造訪（估算）
 * @customfunction
 */
function ECPRO_TRAFFIC(domain) {
  if (!domain) return '';
  var d = ecpro_('/site?domain=' + encodeURIComponent(domain));
  return (d.ok && d.traffic) ? d.traffic.monthly_visits : '';
}

/**
 * 營運公司統編（若資料庫有）。
 * @param {string} domain 網域
 * @return 統一編號
 * @customfunction
 */
function ECPRO_TAXID(domain) {
  if (!domain) return '';
  var d = ecpro_('/site?domain=' + encodeURIComponent(domain));
  return (d.ok && d.company) ? d.company.tax_id : '';
}

/**
 * 一次回傳多欄：平台、投放平台、技術數（橫向 3 欄）。
 * @param {string} domain 網域
 * @return 三欄陣列
 * @customfunction
 */
function ECPRO_LOOKUP(domain) {
  if (!domain) return [['', '', '']];
  var d = ecpro_('/detect?url=' + encodeURIComponent(domain));
  if (!d.ok) return [['查詢失敗', '', '']];
  return [[d.platform, (d.ads || []).join('、'), d.techCount]];
}
