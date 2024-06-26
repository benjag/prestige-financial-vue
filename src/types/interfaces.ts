export interface MetaData {
  '1. Information': string,
  '2. Symbol': string,
  '3. Last Refreshed': string,
  '4. Time Zone': string,
}

export interface MonthlyTimeSeriesEntry {
  '1. open': string,
  '2. high': string,
  '3. low': string,
  '4. close': string,
  '5. volume': string,
}

export type MonthlyTimeSeries = Record<string, MonthlyTimeSeriesEntry>

export interface StockData {
  'Meta Data': MetaData,
  'Monthly Time Series': MonthlyTimeSeries,
}