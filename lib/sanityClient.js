import sanityClient from '@sanity/client'

export const client = sanityClient({
  projectId: '98tiuus0',
  dataset: 'production',
  apiVersion: '2021-03-25',
  token:
    'skpCtLYnFVBFOBr96J4MBMLTTscZBPWczKptMZyztoI66GYa3cHB91qV6lpwZOK61R3laSPlAXzwTA11fWIUQixq1RUgvAPhNJg5GBaGitLa30dYFmrPN4dd7uxEdxZYNvMF2IqUG9UUoTxVy6qrs6CoWgywlsAv60eFtINQDJ2FG1qoWDWU',
  useCdn: false,
})