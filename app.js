const apisecret = process.env.DPP_API_SECRET || 'xxxxxxxx'
const apikey = process.env.DPP_API_KEY || 'xxxxxxxx'

const url = 'https://streams.dapowerplay.com?apikey=' + apikey + '&apisecret=' + apisecret

const stream = require('socket.io-client')(url)

stream.on('connect', () => {
    console.log('connected')

    stream.emit('streams', (err, streams) => {
        //console.log(streams)
    })

    stream.emit('subscribe', [
        {product: 'trades', exchange: 'bitstamp', base: 'BTC', quote: 'USD'},
        {product: 'orderbooks_lv1', exchange: 'bitstamp', base: 'BTC', quote: 'USD'},
        {product: 'candles', exchange: 'bitstamp', base: 'BTC', quote: 'USD'},
        {product: 'news'}
    ], (err,res) => {
        console.log(err, res)
    })
})

stream.on('trades', (trade) => {
    // all trades that you subscribed for will be received here
    console.log(trade)
})

stream.on('orderbooks_lv1', (orderbook) => {
    // all orderbooks that you subscribed for will be received here
    console.log(orderbook)
})

stream.on('candles', (candle) => {
    // all candles that you subscribed for will be received here
    console.log(candle)
})

stream.on('news', (news) => {
    // all news that you subscribed for will be received here
    console.log(news)
})

stream.on('connect_error', (err) => {
    console.log(err)
})

stream.on('error', (err) => {
    console.log(err)
})