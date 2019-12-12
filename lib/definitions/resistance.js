var metric
  , imperial;

metric = {
  'Ohm': {
    name: {
      singular: 'Ω'
      , plural: 'Ohms'
    }
    , to_anchor: 1
  }
  , 'kOhm': {
    name: {
      singular: 'kΩ'
      , plural: 'Kiloohms'
    }
    , to_anchor: 1000
  }
  , 'MOhm': {
    name: {
      singular: 'MΩ'
      , plural: 'Megaohms'
    }
    , to_anchor: 1000000
  }
};

module.exports = {
  metric: metric
  , imperial: {}
  , _anchors: {
    metric: {
      unit: 'Ohm'
      , ratio: 1
    }
  }
};
