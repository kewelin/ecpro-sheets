**[中文](#中文) | [English](#english)**

## 中文

# ECPRO Google Sheets 外掛

在 Google 試算表直接查台灣網站情報。資料來源 [ECPRO 電商博士](https://ecpro.tw)。

## 安裝（2 分鐘）

1. 開一個 Google 試算表 → 上方選單「擴充功能 → Apps Script」。
2. 把 `Code.gs` 全部內容貼進去，覆蓋預設內容，按儲存。
3. 回到試算表，在儲存格輸入函式即可。

## 函式

| 函式 | 說明 |
|---|---|
| `=ECPRO_PLATFORM("pinkoi.com")` | 開店平台 |
| `=ECPRO_ADS("pinkoi.com")` | 在哪些平台投廣告 |
| `=ECPRO_TECHCOUNT("pinkoi.com")` | 技術數量 |
| `=ECPRO_TRAFFIC("pinkoi.com")` | 台灣月造訪估算 |
| `=ECPRO_TAXID("pinkoi.com")` | 營運公司統編 |
| `=ECPRO_LOOKUP("pinkoi.com")` | 一次回平台／投放／技術數三欄 |

把網域放 A 欄，B 欄拉 `=ECPRO_PLATFORM(A2)` 就能批次查整份名單。

> 首次使用會跳授權（允許指令碼連外）。查詢有快取，大量查詢請適度分批。

## English

# ECPRO Google Sheets Add-on

Look up intelligence on Taiwanese websites directly in Google Sheets. Data source: [ECPRO 電商博士](https://ecpro.tw).

## Installation (2 minutes)

1. Open a Google Sheet → top menu "Extensions → Apps Script".
2. Paste the entire contents of `Code.gs` in, overwriting the default content, and click Save.
3. Return to the spreadsheet and enter a function in a cell.

## Functions

| Function | Description |
|---|---|
| `=ECPRO_PLATFORM("pinkoi.com")` | E-commerce platform |
| `=ECPRO_ADS("pinkoi.com")` | Which platforms it advertises on |
| `=ECPRO_TECHCOUNT("pinkoi.com")` | Number of technologies |
| `=ECPRO_TRAFFIC("pinkoi.com")` | Estimated monthly visits from Taiwan |
| `=ECPRO_TAXID("pinkoi.com")` | Operating company tax ID |
| `=ECPRO_LOOKUP("pinkoi.com")` | Returns platform / ad placement / technology count in three columns at once |

Put the domains in column A and drag `=ECPRO_PLATFORM(A2)` down column B to batch-query an entire list.

> On first use, an authorization prompt appears (allowing the script to connect externally). Queries are cached; for large volumes of queries, please batch them appropriately.
